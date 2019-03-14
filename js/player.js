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

Player.prototype.setWorld = function( world, mode)
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
    this.action_locked = false;
	this.keys = {};
	this.buildMaterial = BLOCK.GRASS_DIRT;
	this.eventHandlers = {};
    this.actions = []; // action history since beginning
    this.label_action_idx = [];
    this.labels = [];
    this.mode = mode;
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
        canvas.focus();
        canvas.requestPointerLock();
    };

    // Hook for updating viewing angles
    var updateAngles = function (e) {
	    player.targetPitch = player.pitchStart - e.movementY / 1200;
	    player.targetYaw = player.yawStart + e.movementX / 1200;
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

    if (key == "i" && this.keys[key] != down) {
        for (var x = 0; x < this.world.sx; x ++)
            for (var y = 0; y < this.world.sy; y ++)
                for (var z = 0; z < this.world.sz; z ++)
                    if (this.world.init_blocks[x][y][z].id > 0 && this.world.blocks[x][y][z].id == 0)
                        this.world.blocks_lm[x][y][z] = 0.7;

        var tmp_blocks = this.world.blocks;
        this.world.blocks = this.world.init_blocks;
        this.world.init_blocks = tmp_blocks;

        if (down) {
            this.action_locked = true;
        } else {
            this.action_locked = false;
        }

        this.world.renderer.refresh();
    }

	if (!down && key == "t" && this.eventHandlers["openChat"]) {
        this.eventHandlers.openChat();
    }
	if (!down && key == "r") {
        this.undoAction();
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

	this.keys[key] = down;
	this.keys[keyCode] = down;
}

Player.prototype.actionsToString = function () {
    var ret = "";
    for (var i = 0; i < this.actions.length; i ++) {
        var block = this.actions[i][0];
        var id = this.actions[i][1];
        var change = "(" + block[0] + " " + block[1] + " " + block[2] + "): " + id[0] + "->" + id[1] + ", ";
        var color;
        if (this.label_action_idx.length > 0
            && this.label_action_idx[this.label_action_idx.length- 1] > i) {
            color = "#888";
        } else {
            color = "#fff";
        }
        change = "<span style=\"color: " + color + "\">" + change + "</span>";
        ret += change;
    }
    return ret;
}

// onMouseEvent( x, y, type, rmb )
//
// Hook for mouse input.
Player.prototype.onMouseEvent = function( x, y, type, rmb )
{
	if ( type == MOUSE.UP && this.pointerLocked ) {
		this.doBlockActionXY( this.canvas.width / 2, this.canvas.height / 2, !rmb );
		this.canvas.style.cursor = "default";
        // update the action history
        if (this.eventHandlers["playerActions"]) {
            this.eventHandlers.playerActions(this.actionsToString());
        }
	}
}


Player.prototype.actionExists = function(x, y, z, prev_id, cur_id) {
    for (var i = 0; i < this.actions.length; i ++) {
        var a = this.actions[i];
        if (a[0][0] == x && a[0][1] == y && a[0][2] == z
            && a[1][0] == prev_id && a[1][1] == cur_id)
            return true;
    }
    return false;
}


Player.prototype.recordLabel = function(label) {
    if (this.actions.length == 0)
        return;

    if (this.label_action_idx.length == 0 ||
        this.label_action_idx[this.label_action_idx.length - 1] != this.actions.length) {

        if (this.label_action_idx.length > 0) {
            var count = this.actions.length - this.label_action_idx[this.label_action_idx.length - 1];
        } else {
            var count = this.actions.length;
        }
        this.labels.push(label + " (" + count + ")");
        this.label_action_idx.push(this.actions.length);
    }

    if (this.eventHandlers["playerLabels"]) {
        this.eventHandlers.playerLabels(this.labels);
    }
}


// doBlockActionXY( x, y )
//
// Called to perform an action based on the player's block selection and input.

Player.prototype.doBlockActionXY = function( x, y, destroy ) {
    var radius = 10;
	var bPos = new Vector( Math.floor( this.pos.x ), Math.floor( this.pos.y ), Math.floor( this.pos.z ) );
	var block = this.canvas.renderer.pickAt( new Vector( bPos.x - radius, bPos.y - radius, bPos.z - radius ),
                                             new Vector( bPos.x + radius, bPos.y + radius, bPos.z + radius ), x, y );
    this.doBlockAction(block, destroy, this.buildMaterial.id, false);
}


Player.prototype.doBlockAction = function( block, destroy, material_id, revert) {
    if (this.action_locked)
        return;

	if ( block != false ) {
		var obj = this.client ? this.client : this.world;
        var bx = block.x;
        var by = block.y;
        var bz = block.z;
		if (destroy) {
            if (!(this.mode == "annotation" && this.world.groundBlock(block))) {
                if (!(revert ||
                      (this.mode == "annotation"
                       && this.actionExists(bx, by, bz, this.world.blocks[bx][by][bz].id, BLOCK.AIR.id)))) {
                    this.actions.push([[bx, by, bz], [this.world.blocks[bx][by][bz].id, BLOCK.AIR.id]]);
                }
//                if (this.mode != "annotation")
                obj.setBlock(bx, by, bz, BLOCK.AIR);
//                else
                //                    obj.setBlockLM(bx, by, bz, 0.3);
                if (!this.world.groundBlock(block)) {
                    this.world.interesting_blocks -= 1;
                }
            } // else do nothing
        } else if (this.mode != "annotation" || revert) {
            bx += block.n.x;
            by += block.n.y;
            bz += block.n.z;
			if (obj.setBlock(bx, by, bz, BLOCK.fromId(material_id)) && !revert) {
                this.actions.push([[bx, by, bz], [BLOCK.AIR.id, material_id]]);
            }
            this.world.interesting_blocks += 1;
        }
	}

    if (this.eventHandlers["blockChange"]) {
        this.eventHandlers.blockChange(this.world.interesting_blocks);
    }
}

// undoAction()
// undo a previous action on top of the actions stack
// Note: there is no redo option currently. So this function is irreversible!

Player.prototype.undoAction = function() {
    if (this.actions.length == 0)
        return false;

    if (this.label_action_idx.length > 0
        && this.actions.length == this.label_action_idx[this.label_action_idx.length - 1]) {
        this.label_action_idx.pop();
        this.labels.pop();
    }

    var a = this.actions.pop();
    var n = {x: 0, y: 0, z: 0};
    var block = {x: a[0][0], y: a[0][1], z: a[0][2], n:n};
    var prev_id = a[1][0];
    this.doBlockAction(block, (prev_id == 0), prev_id, true);
    // update the action history
    if (this.eventHandlers["playerActions"]) {
        this.eventHandlers.playerActions(this.actionsToString());
    }
    if (this.eventHandlers["playerLabels"]) {
        this.eventHandlers.playerLabels(this.labels);
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
