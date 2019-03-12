// ==========================================
// World container
//
// This class contains the elements that make up the game world.
// Other modules retrieve information from the world or alter it
// using this class.
// ==========================================

// Constructor( sx, sy, sz )
//
// Creates a new world container with the specified world size.
// Up and down should always be aligned with the Z-direction.
//
// sx - World size in the X-direction.
// sy - World size in the Y-direction.
// sz - World size in the Z-direction.

function World( sx, sy, sz )
{
	// Initialise world array
	this.blocks = new Array( sx );
	this.blocks_lm = new Array( sx );
	for ( var x = 0; x < sx; x++ )
	{
		this.blocks[x] = new Array( sy );
		this.blocks_lm[x] = new Array( sy );
		for ( var y = 0; y < sy; y++ )
		{
			this.blocks[x][y] = new Array( sz );
			this.blocks_lm[x][y] = new Array( sz );
		}
	}
	this.sx = sx;
	this.sy = sy;
	this.sz = sz;

    this.interesting_blocks = 0;
}


World.prototype.withinBoundary = function(x, y, z) {
    return x >= 0 && x < this.sx && y >= 0 && y < this.sy && z >= 0 && z < this.sz;
}

// createFlatWorld()
//
// Sets up the world so that the bottom half is filled with dirt
// and the top half with air.

World.prototype.createFlatWorld = function( height )
{
	this.spawnPoint = new Vector( 0.5, 0.5, height );

	for ( var x = 0; x < this.sx; x++ )
		for ( var y = 0; y < this.sy; y++ )
			for ( var z = 0; z < this.sz; z++ ) {
                if (z < height) {
                    this.setBlock(x, y, z, BLOCK.GRASS_DIRT);
                } else {
                    this.setBlock(x, y, z, BLOCK.AIR);
                }
            }

    this.ground_height = height;
}


// check if a block is a ground block
World.prototype.groundBlock = function(block) {
    return block.z < this.ground_height;
}


World.prototype.createSchematic = function (path, is_url, callback) {
    var world = this;
    var set_schematic = function (array) {
        var Z = array.shape[0];
        var X = array.shape[1];
        var Y = array.shape[2];
        var D = array.shape[3];
        if (D != 2) {
            throw "Array last dimension error!";
        }
        // put the schematic starting at (this.sx / 2 - X / 2, this.sy / 2 - Y / 2, this.ground_height)
        var x_offset = Math.floor(world.sx / 2 - X / 2);
        var y_offset = Math.floor(world.sy / 2 - Y / 2);
        var z_offset = world.ground_height;
        for (var x = 0; x < X; x ++)
            for (var y = 0; y < Y; y ++)
                for (var z = 0; z < Z; z ++) {
                    var idx = (z * (X * Y) + x * Y + y) * D;
                    if (world.blocks[x + x_offset][y + y_offset][z + z_offset].id != 0) {
                        world.interesting_blocks -= 1;
                    }
                    world.blocks[x + x_offset][y + y_offset][z + z_offset] =
                        BLOCK.fromId(array.data[idx]);
                    if (array.data[idx] != 0) {
                        world.interesting_blocks += 1;
                    }
                }
        // callback after loading finishes
        if (callback != null) {
            callback();
        }
    };

    var npy_loader = NumpyLoader();
    if (is_url) {
        npy_loader.ajax(path, set_schematic);
    } else {
        npy_loader.open(path, set_schematic);
    }

    // (x,y,z) in WebCraft -> (z,x,y) in NPY -> (y,z,x) standard
}

// createFromString( str )
//
// Creates a world from a string representation.
// This is the opposite of toNetworkString().
//
// NOTE: The world must have already been created
// with the appropriate size!

World.prototype.createFromString = function( str )
{
	var i = 0;

	for ( var x = 0; x < this.sx; x++ ) {
		for ( var y = 0; y < this.sy; y++ ) {
			for ( var z = 0; z < this.sz; z++ ) {
				this.blocks[x][y][z] = BLOCK.fromId( str.charCodeAt( i ) - 97 );
				i = i + 1;
			}
		}
	}
}

// getBlock( x, y, z )
//
// Get the type of the block at the specified position.
// Mostly for neatness, since accessing the array
// directly is easier and faster.

World.prototype.getBlock = function( x, y, z )
{
	if ( x < 0 || y < 0 || z < 0 || x > this.sx - 1 || y > this.sy - 1 || z > this.sz - 1 ) return BLOCK.AIR;
	return this.blocks[x][y][z];
}

// setBlock( x, y, z )

World.prototype.setBlock = function( x, y, z, type ) {
    if (!this.withinBoundary(x, y, z))
        return false;
	this.blocks[x][y][z] = type;
    this.blocks_lm[x][y][z] = 1;
	if ( this.renderer != null ) this.renderer.onBlockChanged( x, y, z );
    return true;
}

World.prototype.setBlockLM = function( x, y, z, lm) {
    if (!this.withinBoundary(x, y, z))
        return false;
    this.blocks_lm[x][y][z] = lm;
	if ( this.renderer != null ) this.renderer.onBlockChanged( x, y, z );
    return true;
}

// toNetworkString()
//
// Returns a string representation of this world.

World.prototype.toNetworkString = function()
{
	var blockArray = [];

	for ( var x = 0; x < this.sx; x++ )
		for ( var y = 0; y < this.sy; y++ )
			for ( var z = 0; z < this.sz; z++ )
				blockArray.push( String.fromCharCode( 97 + this.blocks[x][y][z].id ) );

	return blockArray.join( "" );
}

// Export to node.js
if ( typeof( exports ) != "undefined" )
{
	// loadFromFile( filename )
	//
	// Load a world from a file previously saved with saveToFile().
	// The world must have already been allocated with the
	// appropriate dimensions.

	World.prototype.loadFromFile = function( filename )
	{
		var fs = require( "fs" );
		try {
			fs.lstatSync( filename );
			var data = fs.readFileSync( filename, "utf8" ).split( "," );
			this.createFromString( data[3] );
			this.spawnPoint = new Vector( parseInt( data[0] ), parseInt( data[1] ), parseInt( data[2] ) );
			return true;
		} catch ( e ) {
			return false;
		}
	}

	// saveToFile( filename )
	//
	// Saves a world and the spawn point to a file.
	// The world can be loaded from it afterwards with loadFromFile().

	World.prototype.saveToFile = function( filename )
	{
		var data = this.spawnPoint.x + "," + this.spawnPoint.y + "," + this.spawnPoint.z + "," + this.toNetworkString();
		require( "fs" ).writeFileSync( filename, data );
	}

	exports.World = World;
}
