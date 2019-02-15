// ==========================================
// Player
//
// This class contains the code that manages the local player.
// ==========================================

// Mouse event enumeration
MOUSE = {};
MOUSE.DOWN = 1;
MOUSE.UP = 2;
MOUSE.MOVE = 3;

// Constructor()
//
// Creates a new local player manager.

function Player()
{
}

// setWorld( world )
//
// Assign the local player to a world.

Player.prototype.setWorld = function( world )
{
	this.world = world;
	this.world.localPlayer = this;
	this.pos = world.spawnPoint;
	this.velocity = new Vector( 0, 0, 0 );
	this.angles = [ 0, Math.PI / 4, 0 ];
	this.yawStart = this.targetYaw = this.angles[1];
	this.pitchStart = this.targetPitch = this.angles[0];
    this.pointerLocked = false;
    this.inventory_open = false;
	this.falling = false;
	this.keys = {};
	this.buildMaterial = BLOCK.GRASS_DIRT;
	this.eventHandlers = {};
    this.actions = []; // action history since beginning
}

// setClient( client )
//
// Assign the local player to a socket client.

Player.prototype.setClient = function( client )
{
	this.client = client;
}

// setInputCanvas( id )
//
// Set the canvas the renderer uses for some input operations.

Player.prototype.setInputCanvas = function( id )
{
	var canvas = this.canvas = document.getElementById( id );
    var player = this;

    // Below we set up the pointer lock for this canvas
    // Reference:
    //   https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API
    canvas.requestPointerLock = canvas.requestPointerLock ||
        canvas.mozRequestPointerLock;
    document.exitPointerLock = document.exitPointerLock ||
        document.mozExitPointerLock;

    // once clicking on the canvas, pointer lock is enabled
    canvas.onclick = function() {
        canvas.requestPointerLock();
    };

    // Hook for updating viewing angles
    var updateAngles = function (e) {
	    player.targetPitch = player.pitchStart - e.movementY / 600;
	    player.targetYaw = player.yawStart + e.movementX / 600;
        player.yawStart = player.targetYaw;
        player.pitchStart = player.targetPitch;
	    canvas.style.cursor = "move";
    };

    // Listen to the pointer lock change
    var pointerLockChange = function () {
        if (document.pointerLockElement === canvas ||
            document.mozPointerLockElement === canvas) {
            player.pointerLocked = true;
            document.addEventListener("mousemove", updateAngles, false);
        } else {
            player.pointerLocked = false;
            document.removeEventListener("mousemove", updateAngles, false);
        }
    };
    document.addEventListener('pointerlockchange', pointerLockChange, false);
    document.addEventListener('mozpointerlockchange', pointerLockChange, false);

	var t = this;
	document.onkeydown = function( e ) {
        if ( e.target.tagName != "INPUT" ) {
            t.onKeyEvent( e.keyCode, true );
            return false;
        }
    }
	document.onkeyup = function( e ) {
        if ( e.target.tagName != "INPUT" ) {
            t.onKeyEvent( e.keyCode, false );
            return false;
        }
    }
	canvas.onmousedown = function( e ) {
        t.onMouseEvent( e.clientX, e.clientY, MOUSE.DOWN, e.which == 3 );
        return false;
    }
	canvas.onmouseup = function( e ) {
        t.onMouseEvent( e.clientX, e.clientY, MOUSE.UP, e.which == 3 );
        return false;
    }
	canvas.onmousemove = function( e ) {
        t.onMouseEvent( e.clientX, e.clientY, MOUSE.MOVE, e.which == 3 );
        return false;
    }
}

// setMaterialSelector( id )
//
// Sets the table with the material selectors.

Player.prototype.setMaterialSelector = function( id )
{
    var player = this;
    var table = document.getElementById(id);
    var row_len = 13;  // the entire inventory is a 13x13 table

    var count = 0;
	for ( var mat in BLOCK ) {
		if (mat != "AIR" && typeof(BLOCK[mat]) == "object") {
            var c = count % row_len;
            var r = Math.floor(count / row_len);
            if (c == 0) {
                var row = table.insertRow(r);
            }

			var selector = row.insertCell(c);
			selector.style.backgroundPosition = (-c * 48) + "px " + (-r * 48) + "px";
            selector.title = mat;

			var pl = this;
			selector.material = BLOCK[mat];
			selector.onclick = function() {
				this.style.opacity = "1.0";

				pl.prevSelector.style.opacity = null;
				pl.prevSelector = this;
				pl.buildMaterial = this.material;

                // once clicked, the inventory will close
                player.inventory_open = false;
                player.eventHandlers.closeInventory();
			}

			if (mat == "GRASS_DIRT") {
				this.prevSelector = selector;
				selector.style.opacity = "1.0";
			}

            count += 1;
		}
	}
}

// on( event, callback )
//
// Hook a player event.

Player.prototype.on = function( event, callback )
{
	this.eventHandlers[event] = callback;
}

// onKeyEvent( keyCode, down )
//
// Hook for keyboard input.

Player.prototype.onKeyEvent = function( keyCode, down )
{
	var key = String.fromCharCode( keyCode ).toLowerCase();
	this.keys[key] = down;
	this.keys[keyCode] = down;

	if (!down && key == "t" && this.eventHandlers["openChat"]) {
        this.eventHandlers.openChat();
    }
    if (!down && key == "e") {
        if (!this.inventory_open && this.eventHandlers["openInventory"]) {
            this.inventory_open = true;
            this.eventHandlers.openInventory();
        } else if (this.inventory_open && this.eventHandlers["closeInventory"]) {
            this.inventory_open = false;
            this.eventHandlers.closeInventory();
        }
    }
}

Player.prototype.actionsToString = function () {
    var ret = "";
    for (var i = 0; i < this.actions.length; i ++) {
        var block = this.actions[i][0];
        var id = this.actions[i][1];
        var change = "[(" + block[0] + " " + block[1] + " " + block[2] + "): " + id + "]";
        ret += change + ", ";
    }
    return ret;
}

// onMouseEvent( x, y, type, rmb )
//
// Hook for mouse input.
Player.prototype.onMouseEvent = function( x, y, type, rmb )
{
	if ( type == MOUSE.UP && this.pointerLocked ) {
		this.doBlockAction( this.canvas.width / 2, this.canvas.height / 2, !rmb );
		this.canvas.style.cursor = "default";
        // update the action history
        if (this.eventHandlers["playerActions"]) {
            this.eventHandlers.playerActions(this.actionsToString());
        }
	}
}


// doBlockAction( x, y )
//
// Called to perform an action based on the player's block selection and input.

Player.prototype.doBlockAction = function( x, y, destroy )
{
    var radius = 6;
	var bPos = new Vector( Math.floor( this.pos.x ), Math.floor( this.pos.y ), Math.floor( this.pos.z ) );
	var block = this.canvas.renderer.pickAt( new Vector( bPos.x - radius, bPos.y - radius, bPos.z - radius ),
                                             new Vector( bPos.x + radius, bPos.y + radius, bPos.z + radius ), x, y );

	if ( block != false ) {
		var obj = this.client ? this.client : this.world;

		if (destroy) {
			obj.setBlock( block.x, block.y, block.z, BLOCK.AIR );
            this.actions.push([[block.x, block.y, block.z], BLOCK.AIR.id]);
        }
		else {
			obj.setBlock( block.x + block.n.x, block.y + block.n.y, block.z + block.n.z, this.buildMaterial );
            this.actions.push([[block.x + block.n.x, block.y + block.n.y, block.z + block.n.z],
                              this.buildMaterial.id]);
        }
	}
}

// getEyePos()
//
// Returns the position of the eyes of the player for rendering.

Player.prototype.getEyePos = function()
{
	return this.pos.add( new Vector( 0.0, 0.0, 1.7 ) );
}

// update()
//
// Updates this local player (gravity, movement)

Player.prototype.update = function()
{
	var world = this.world;
	var velocity = this.velocity;
	var pos = this.pos;
	var bPos = new Vector( Math.floor( pos.x ), Math.floor( pos.y ), Math.floor( pos.z ) );

	if ( this.lastUpdate != null )
	{
		var delta = ( new Date().getTime() - this.lastUpdate ) / 1000;

		// View
		this.angles[0] += ( this.targetPitch - this.angles[0] ) * 30 * delta;
		this.angles[1] += ( this.targetYaw - this.angles[1] ) * 30 * delta;
		if ( this.angles[0] < -Math.PI/2 ) this.angles[0] = -Math.PI/2;
		if ( this.angles[0] > Math.PI/2 ) this.angles[0] = Math.PI/2;

		// Gravity
		if ( this.falling )
			velocity.z += -0.5;

        velocity.z = 0
		// Jumping
		if ( this.keys[" "] && !this.falling )
			velocity.z = 8;
        if ( this.keys["q"] && !this.falling )
            velocity.z = -8;

		// Walking
		var walkVelocity = new Vector( 0, 0, 0 );
		if ( !this.falling )
		{
			if ( this.keys["w"] ) {
				walkVelocity.x += Math.cos( Math.PI / 2 - this.angles[1] );
				walkVelocity.y += Math.sin( Math.PI / 2 - this.angles[1] );
			}
			if ( this.keys["s"] ) {
				walkVelocity.x += Math.cos( Math.PI + Math.PI / 2 - this.angles[1] );
				walkVelocity.y += Math.sin( Math.PI + Math.PI / 2 - this.angles[1] );
			}
			if ( this.keys["a"] ) {
				walkVelocity.x += Math.cos( Math.PI / 2 + Math.PI / 2 - this.angles[1] );
				walkVelocity.y += Math.sin( Math.PI / 2 + Math.PI / 2 - this.angles[1] );
			}
			if ( this.keys["d"] ) {
				walkVelocity.x += Math.cos( -Math.PI / 2 + Math.PI / 2 - this.angles[1] );
				walkVelocity.y += Math.sin( -Math.PI / 2 + Math.PI / 2 - this.angles[1] );
			}
		}
		if ( walkVelocity.length() > 0 ) {
				walkVelocity = walkVelocity.normal();
				velocity.x = walkVelocity.x * 8;
				velocity.y = walkVelocity.y * 8;
		} else {
			velocity.x /= this.falling ? 1.01 : 1.5;
			velocity.y /= this.falling ? 1.01 : 1.5;
		}

		// Resolve collision
		this.pos = this.resolveCollision( pos, bPos, velocity.mul( delta ) );
	}

	this.lastUpdate = new Date().getTime();
}

// resolveCollision( pos, bPos, velocity )
//
// Resolves collisions between the player and blocks on XY level for the next movement step.

Player.prototype.resolveCollision = function( pos, bPos, velocity )
{
	var world = this.world;
	var playerRect = { x: pos.x + velocity.x, y: pos.y + velocity.y, size: 0.25 };

	// Collect XY collision sides
	var collisionCandidates = [];

	for ( var x = bPos.x - 1; x <= bPos.x + 1; x++ )
	{
		for ( var y = bPos.y - 1; y <= bPos.y + 1; y++ )
		{
			for ( var z = bPos.z; z <= bPos.z + 1; z++ )
			{
				if ( world.getBlock( x, y, z ) != BLOCK.AIR )
				{
					if ( world.getBlock( x - 1, y, z ) == BLOCK.AIR ) collisionCandidates.push( { x: x, dir: -1, y1: y, y2: y + 1 } );
					if ( world.getBlock( x + 1, y, z ) == BLOCK.AIR ) collisionCandidates.push( { x: x + 1, dir: 1, y1: y, y2: y + 1 } );
					if ( world.getBlock( x, y - 1, z ) == BLOCK.AIR ) collisionCandidates.push( { y: y, dir: -1, x1: x, x2: x + 1 } );
					if ( world.getBlock( x, y + 1, z ) == BLOCK.AIR ) collisionCandidates.push( { y: y + 1, dir: 1, x1: x, x2: x + 1 } );
				}
			}
		}
	}

	// Solve XY collisions
	for( var i in collisionCandidates )
	{
		var side = collisionCandidates[i];

		if ( lineRectCollide( side, playerRect ) )
		{
			if ( side.x != null && velocity.x * side.dir < 0 ) {
				pos.x = side.x + playerRect.size / 2 * ( velocity.x > 0 ? -1 : 1 );
				velocity.x = 0;
			} else if ( side.y != null && velocity.y * side.dir < 0 ) {
				pos.y = side.y + playerRect.size / 2 * ( velocity.y > 0 ? -1 : 1 );
				velocity.y = 0;
			}
		}
	}

	var playerFace = { x1: pos.x + velocity.x - 0.125, y1: pos.y + velocity.y - 0.125, x2: pos.x + velocity.x + 0.125, y2: pos.y + velocity.y + 0.125 };
	var newBZLower = Math.floor( pos.z + velocity.z );
	var newBZUpper = Math.floor( pos.z + 1.7 + velocity.z * 1.1 );

	// Collect Z collision sides
	collisionCandidates = [];

	for ( var x = bPos.x - 1; x <= bPos.x + 1; x++ )
	{
		for ( var y = bPos.y - 1; y <= bPos.y + 1; y++ )
		{
			if ( world.getBlock( x, y, newBZLower ) != BLOCK.AIR )
				collisionCandidates.push( { z: newBZLower + 1, dir: 1, x1: x, y1: y, x2: x + 1, y2: y + 1 } );
			if ( world.getBlock( x, y, newBZUpper ) != BLOCK.AIR )
				collisionCandidates.push( { z: newBZUpper, dir: -1, x1: x, y1: y, x2: x + 1, y2: y + 1 } );
		}
	}

	// Solve Z collisions
//	this.falling = true;
	for ( var i in collisionCandidates )
	{
		var face = collisionCandidates[i];

		if ( rectRectCollide( face, playerFace ) && velocity.z * face.dir < 0 )
		{
			if ( velocity.z < 0 ) {
				this.falling = false;
				pos.z = face.z;
				velocity.z = 0;
				this.velocity.z = 0;
			} else {
				pos.z = face.z - 1.8;
				velocity.z = 0;
				this.velocity.z = 0;
			}

			break;
		}
	}

	// Return solution
	return pos.add( velocity );
}
