// ==========================================
// Block types
//
// This file contains all available block types and their properties.
// ==========================================

// Direction enumeration
var DIRECTION = {};
DIRECTION.UP = 1;
DIRECTION.DOWN = 2;
DIRECTION.LEFT = 3;
DIRECTION.RIGHT = 4;
DIRECTION.FORWARD = 5;
DIRECTION.BACK = 6;

var TRANS_TEX = [4/16, 11/16];

BLOCK = {};

// Each block has the following properties:
// id,
// spawnable (always true for creative mode),
// transparent,
// selflit (always false for annotation purpose),
// gravity (always false for annotation purpose),
// fluid,
// texture

BLOCK.AIR = {
	id: 0,
	transparent: true,
    fluid: false
};

BLOCK.STONE = {
    id: 1,
	transparent: false,
    fluid: false,
    texture: function(world, lightmap, lit, x, y, z, dir) {
        return [1/16, 0/16];
    }
};

BLOCK.GRASS_DIRT = {
	id: 2,
	transparent: false,
    fluid: false,
	texture: function(world, lightmap, lit, x, y, z, dir){
		if ( dir == DIRECTION.UP && lit )
			return [12/16, 12/16];
		else if ( dir == DIRECTION.DOWN || !lit )
			return [2/16, 0/16];
		else
			return [3/16, 0/16];
	}
};

BLOCK.DIRT = {
    id: 3,
	transparent: false,
    fluid: false,
    texture: function(world, lightmap, lit, x, y, z, dir) {
        return [2/16, 0/16];
    }
};

BLOCK.COBBLESTONE = {
	id: 4,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [0/16, 1/16];
    }
};

BLOCK.PLANK = {
	id: 5,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
		return [4/16, 0/16];
	}
};

BLOCK.OAK_SAPLING = {
    id: 6,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
		    return TRANS_TEX;
        } else {
            return [15/16, 0/16];
        }
	}
};

BLOCK.BEDROCK = {
	id: 7,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [1/16, 1/16];
    }
};

BLOCK.FLOWING_WATER = {
    id: 8,
	transparent: false,
	fluid: true,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [13/16, 12/16];
    }
};

BLOCK.STILL_WATER = {
    id: 9,
	transparent: false,
	fluid: true,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [13/16, 12/16];
    }
};

BLOCK.FLOWING_LAVA = {
    id: 10,
	transparent: true,
	fluid: true,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [13/16, 14/16]; }
};

BLOCK.STILL_LAVA = {
    id: 11,
	transparent: true,
	fluid: true,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [13/16, 14/16]; }
}

BLOCK.SAND = {
	id: 12,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [2/16, 1/16]; }
};

BLOCK.GRAVEL = {
	id: 13,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [3/16, 1/16]; }
};

BLOCK.GOLD_ORE = {
    id: 14,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [0/16, 2/16]; }
};

BLOCK.IRON_ORE = {
    id: 15,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [1/16, 2/16]; }
};

BLOCK.COAL_ORE = {
    id: 16,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [2/16, 2/16]; }
};

BLOCK.WOOD = {
	id: 17,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir )
	{
		if ( dir == DIRECTION.UP || dir == DIRECTION.DOWN )
			return [5/16, 1/16];
		else
			return [4/16, 1/16];
	}
};

BLOCK.LEAVES = {
    id: 18,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [12/16, 14/16]; }
};

BLOCK.SPONGE = {
	id: 19,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [0/16, 3/16]; }
};

BLOCK.GLASS = {
	id: 20,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [1/16, 3/16]; }
};

BLOCK.LAPIS_LAZULI_ORE = {
    id: 21,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [0/16, 10/16]; }
};

BLOCK.LAPIS_LAZULI = {
    id: 22,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [0/16, 9/16]; }
};

BLOCK.DISPENSER = {
    id: 23,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return [14/16, 3/16];
        } else if (dir == DIRECTION.FORWARD) {
            return [14/16, 2/16];
        } else {
            return [13/16, 2/16];
        }
    }
};

BLOCK.SANDSTONE = {
    id: 24,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [0/16, 12/16]; }
};

BLOCK.NOTE_BLOCK = {
    id: 25,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [10/16, 4/16]; }
};

BLOCK.BED = {
    id: 26,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return [7/16, 8/16];
        } else if (dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else if (dir == DIRECTION.BACKWARD) {
            return [8/16, 9/16];
        } else {
            return [5/16, 9/16];
        }
    }
};

BLOCK.POWERED_RAIL = {
    id: 27,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN) {
            return [3/16, 11/16];
        } else {
            return TRANS_TEX;
        }
    }
};

BLOCK.DETECTOR_RAIL = {
    id: 28,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN) {
            return [3/16, 12/16];
        } else {
            return TRANS_TEX;
        }
    }
};

BLOCK.STICKY_PISTON = {
    id: 29,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return [11/16, 6/16];
        } else if (dir == DIRECTION.DOWN) {
            return [13/16, 6/16];
        } else {
            return [12/16, 6/16];
        }
    }
};

BLOCK.COBWEB = {
    id: 30,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [11/16, 0/16];
    }
};

BLOCK.GRASS = {
    id: 31,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [11/16, 5/16];
        }
    }
};

BLOCK.DEAD_BUSH = {
    id: 32,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [7/16, 3/16];
        }
    }
};

BLOCK.PISTON = {
    id: 33,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return [11/16, 6/16];
        } else if (dir == DIRECTION.DOWN) {
            return [13/16, 6/16];
        } else {
            return [12/16, 6/16];
        }
    }
};

BLOCK.WOOL = {
    id: 35,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [1/16, 8/16];
    }
};

BLOCK.DANDELION = {
    id: 36,
    transparent: true,
    texture: function( world, lightmap, lit, x, y, z, dir ) { return [13/16, 0/16]; }
};

BLOCK.POPPY = {
    id: 37,
    transparent: true,
    texture: function( world, lightmap, lit, x, y, z, dir ) { return [12/16, 0/16]; }
};

BLOCK.TULIP = {
    id: 38,
    transparent: true,
    texture: function( world, lightmap, lit, x, y, z, dir ) { return [12/16, 0/16]; }
};

BLOCK.BROWN_MUSHROOM = {
    id: 39,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [13/16, 1/16];
        }
    }
};

BLOCK.RED_MUSHROOM = {
    id: 40,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [12/16, 1/16];
        }
    }
};

BLOCK.GOLD = {
	id: 41,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [7/16, 1/16]; }
};

BLOCK.IRON = {
	id: 42,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [6/16, 1/16]; }
};

BLOCK.DOUBLE_SLAB = {
    id: 43,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [5/16, 0/16];
    }
};

BLOCK.SLAB = {
    id: 44,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return TRANS_TEX;
        } else if (dir == DIRECTION.DOWN) {
            return [6/16, 0/16];
        } else {
            return [7/16, 12/16];
        }
    }
};

BLOCK.BRICK = {
	id: 45,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [7/16, 0/16]; }
};

BLOCK.TNT = {
	id: 46,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir )
	{
		if ( dir == DIRECTION.UP || dir == DIRECTION.DOWN )
			return [10/16, 0/16];
		else
			return [8/16, 0/16];
	}
};

BLOCK.BOOKSHELF = {
	id: 47,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir )
	{
		if ( dir == DIRECTION.UP || dir == DIRECTION.DOWN )
			return [4/16, 0/16];
		else
			return [3/16, 2/16];
	}
};

BLOCK.MOSS_STONE = {
    id: 48,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [4/16, 2/16]; }
};

BLOCK.OBSIDIAN = {
	id: 49,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [5/16, 2/16]; }
};

BLOCK.TORCH = {
    id: 50,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [0/16, 5/16];
        }
    }
};

BLOCK.WOOD_STAIRS = {
    id: 53,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
		return [4/16, 0/16];
	}
};

BLOCK.CHEST = {
    id: 54,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return [9/16, 1/16];
        } else if (dir == DIRECTION.FORWARD) {
            return [11/16, 1/16];
        } else {
            return [10/16, 1/16];
        }
    }
};

BLOCK.DIAMOND_ORE = {
    id: 56,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [2/16, 3/16]; }
};

BLOCK.DIAMOND = {
	id: 57,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [8/16, 1/16]; }
};

BLOCK.CRAFTING_TABLE = {
    id: 58,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return [11/16, 2/16];
        } else {
            return [11/16, 3/16];
        }
    }
};

BLOCK.WHEAT = {
    id: 59,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [15/16, 5/16];
        }
    }
};

BLOCK.FARMLAND = {
    id: 60,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [7/16, 5/16]; }
};

BLOCK.FURNACE = {
    id: 61,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return [14/16, 3/16];
        } else if (dir == DIRECTION.FORWARD) {
            return [12/16, 2/16];
        } else {
            return [13/16, 2/16];
        }
    }
};

BLOCK.BURNING_FURNACE = {
    id: 62,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return [14/16, 3/16];
        } else if (dir == DIRECTION.FORWARD) {
            return [13/16, 3/16];
        } else {
            return [13/16, 2/16];
        }
    }
};

BLOCK.STANDING_SIGN = {
    id: 63,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [8/16, 11/16];
        }
    }
};

BLOCK.WOOD_DOOR = {
    id: 64,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [1/16, 5/16];
        }
    }
};

BLOCK.LADDER = {
    id: 65,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [3/16, 5/16];
        }
    }
};

BLOCK.RAIL = {
    id: 66,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN) {
            return [0/16, 8/16];
        } else {
            return TRANS_TEX;
        }
    }
};

BLOCK.COBBLESTONE_STAIRS = {
    id: 67,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [0/16, 1/16];
    }
};

BLOCK.STONE_PLATE = {
    id: 70,
	transparent: false,
    fluid: false,
    texture: function(world, lightmap, lit, x, y, z, dir) {
        return [1/16, 0/16];
    }
};

BLOCK.IRON_DOOR = {
    id: 71,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [2/16, 5/16];
        }
    }
};

BLOCK.WOOD_PLATE = {
    id: 72,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
		return [4/16, 0/16];
	}
};

BLOCK.REDSTONE_ORE = {
    id: 73,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
		return [3/16, 3/16];
	}
};

BLOCK.GLOWING_REDSTONE_ORE = {
    id: 74,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
		return [3/16, 3/16];
	}
}

BLOCK.REDSTONE_TORCH_ON = {
    id: 75,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [3/16, 6/16];
        }
	}
};

BLOCK.REDSTONE_TORCH_OFF = {
    id: 76,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [3/16, 7/16];
        }
	}
};

BLOCK.SNOW = {
    id: 78,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN) {
            return [2/16, 4/16];
        } else {
            return TRANS_TEX;
        }
	}
};

BLOCK.ICE = {
    id: 79,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [3/16, 4/16];
	}
};

BLOCK.SNOW_BLOCK = {
    id: 80,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [2/16, 4/16];
	}
};

BLOCK.CACTUS = {
    id: 81,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return [5/16, 4/16];
        } else {
            return [6/16, 4/16];
        }
	}
};

BLOCK.CLAY = {
    id: 82,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [8/16, 4/16];
    }
};

BLOCK.SUGAR_CANES = {
    id: 83,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [9/16, 4/16];
        }
    }
};

BLOCK.JUKEBOX = {
    id: 84,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return [11/16, 4/16];
        } else {
            return [10/16, 4/16];
        }
    }
};

BLOCK.OAK_FENCE = {
    id: 85,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [8/16, 13/16];
        }
    }
};

BLOCK.PUMPKIN = {
    id: 86,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return [6/16, 6/16];
        } else {
            return [6/16, 7/16];
        }
    }
};

BLOCK.NETHERRACK = {
    id: 87,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [7/16, 6/16];
    }
};

BLOCK.SOUL_SAND = {
    id: 88,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [8/16, 6/16];
    }
};

BLOCK.GLOWSTONE = {
    id: 89,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [9/16, 6/16];
    }
};

BLOCK.LIT_PUMPKIN = {
    id: 91,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.FORWARD) {
            return [8/16, 7/16];
        } else if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return [6/16, 6/16];
        } else {
            return [6/16, 7/16];
        }
    }
};

BLOCK.UNPOWERED_REPEATER = {
    id: 93,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN) {
            return [3/16, 8/16];
        } else {
            return TRANS_TEX;
        }
    }
};

BLOCK.POWERED_REPEATER = {
    id: 94,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN) {
            return [3/16, 9/16];
        } else {
            return TRANS_TEX;
        }
    }
};

BLOCK.STAINED_GLASS = {
    id: 95,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [3/16, 4/16];
    }
};

BLOCK.TRAPDOOR = {
    id: 96,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN) {
            return [4/16, 5/16];
        } else {
            return TRANS_TEX;
        }
    }
};

BLOCK.MONSTER_EGG = {
    id: 97,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [5/16, 6/16];
    }
};

BLOCK.STONE_BRICK = {
    id: 98,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [6/16, 3/16];
    }
};

BLOCK.BROWN_MUSHROOM_BLOCK = {
    id: 99,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [14/16, 7/16];
    }
};

BLOCK.RED_MUSHROOM_BLOCK = {
    id: 100,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [13/16, 7/16];
    }
};

BLOCK.IRON_BARS = {
    id: 101,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [5/16, 5/16];
        }
    }
};

BLOCK.GLASS_PANE = {
    id: 102,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [1/16, 3/16]; }
};

BLOCK.MELON = {
    id: 103,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return [9/16, 8/16];
        } else {
            return [8/16, 8/16];
        }
    }
};

BLOCK.PUMPKIN_STEM = {
    id: 104,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [15/16, 6/16];
        }
    }
};

BLOCK.MELON_STEM = {
    id: 105,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [15/16, 6/16];
        }
    }
};

BLOCK.VINES = {
    id: 106,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [11/16, 14/16];
    }
};

BLOCK.FENCE_GATE = {
    id: 107,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN || dir == DIRECTION.UP) {
            return TRANS_TEX;
        } else {
            return [7/16, 13/16];
        }
    }
};

BLOCK.BRICK_STAIRS = {
    id: 108,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [7/16, 0/16]; }
};

BLOCK.STONE_STAIRS = {
    id: 109,
	transparent: false,
    fluid: false,
    texture: function(world, lightmap, lit, x, y, z, dir) {
        return [1/16, 0/16];
    }
};

BLOCK.MYCELIUM = {
    id: 110,
	transparent: false,
    fluid: false,
    texture: function(world, lightmap, lit, x, y, z, dir) {
        if (dir == DIRECTION.UP) {
            return [14/16, 4/16];
        } else if (dir == DIRECTION.DOWN) {
            return [2/16, 0/16];
        } else {
            return [13/16, 4/16];
        }
    }
};

BLOCK.NETHER_BRICK = {
    id: 112,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [7/16, 6/16];
    }
};

BLOCK.NETHER_BRICK_FENCE = {
    id: 113,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [8/16, 13/16];
        }
    }
};

BLOCK.NETHER_STAIRS = {
    id: 114,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [7/16, 6/16];
    }
};

BLOCK.NETHER_WART = {
    id: 115,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [4/16, 14/16];
        }
    }
};

BLOCK.ENCHANTING_TABLE = {
    id: 116,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return [6/16, 10/16];
        } else if (dir == DIRECTION.DOWN) {
            return [7/16, 11/16];
        } else {
            return [6/16, 11/16];
        }
    }
};

BLOCK.BREWING_STAND = {
    id: 117,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return TRANS_TEX;
        } else if (dir == DIRECTION.DOWN) {
            return [12/16, 9/16];
        } else {
            return [13/16, 9/16];
        }
    }
};

BLOCK.CAULDRON = {
    id: 118,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return [10/16, 8/16];
        } else if (dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [10/16, 9/16];
        }
    }
};

BLOCK.END_PORTAL_FRAME = {
    id: 120,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return [14/16, 9/16];
        } else if (dir == DIRECTION.DOWN) {
            return [15/16, 10/16];
        } else {
            return [15/16, 9/16];
        }
    }
};

BLOCK.END_STONE = {
    id: 121,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [15/16, 10/16];
    }
};

BLOCK.DOUBLE_SLAB2 = {
    id: 125,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [5/16, 0/16];
    }
};

BLOCK.WOOD_SLAB = {
    id: 126,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return TRANS_TEX;
        } else if (dir == DIRECTION.DOWN) {
            return [4/16, 0/16];
        } else {
            return [8/16, 12/16];
        }
    }
};

BLOCK.SANDSTONE_STAIRS = {
    id: 128,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [0/16, 12/16]; }
};

BLOCK.EMERALD_ORE = {
    id: 129,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [9/16, 11/16];
    }
};

BLOCK.EMERALD = {
    id: 133,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [9/16, 12/16];
    }
};

BLOCK.SPRUCE_STAIRS = {
    id: 134,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
		return [4/16, 0/16];
	}
};

BLOCK.BIRCH_STAIRS = {
    id: 135,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
		return [4/16, 0/16];
	}
};

BLOCK.JUNGLE_STAIRS = {
    id: 136,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
		return [4/16, 0/16];
	}
};

BLOCK.COBBLESTONE_WALL = {
    id: 139,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [0/16, 1/16];
    }
};

BLOCK.CARROTS = {
    id: 141,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [11/16, 5/16];
        }
    }
};

BLOCK.POTATOS = {
    id: 142,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [11/16, 5/16];
        }
    }
};

BLOCK.TRAPPED_CHEST = {
    id: 146,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return [9/16, 1/16];
        } else if (dir == DIRECTION.FORWARD) {
            return [11/16, 1/16];
        } else {
            return [10/16, 1/16];
        }
    }
};

BLOCK.REDSTONE = {
    id: 152,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [9/16, 13/16];
    }
};

BLOCK.QUARTZ = {
    id: 155,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [3/16, 13/16];
    }
};

BLOCK.QUARTZ_STAIRS = {
    id: 156,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [3/16, 13/16];
    }
};

BLOCK.ACTIVATOR_RAIL = {
    id: 157,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN) {
            return [0/16, 8/16];
        } else {
            return TRANS_TEX;
        }
    }
};

BLOCK.DROPPER = {
    id: 158,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN || dir == DIRECTION.UP) {
            return [14/16, 3/16];
        } else if (dir == DIRECTION.FORWARD) {
            return [14/16, 2/16];
        } else {
            return [13/16, 2/16];
        }
    }
};

BLOCK.HARDENED_CLAY = {
    id: 159,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [15/16, 1/16];
    }
};

BLOCK.STAINED_GLASS_PANE = {
    id: 160,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [1/16, 3/16]; }
};

BLOCK.LEAVES2 = {
    id: 161,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [5/16, 3/16]; }
};

BLOCK.WOOD2 = {
    id: 162,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
		if ( dir == DIRECTION.UP || dir == DIRECTION.DOWN )
			return [5/16, 1/16];
		else
			return [4/16, 1/16];
	}
};

BLOCK.ACACIA_STAIRS = {
    id: 163,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [4/16, 7/16];
    }
};

BLOCK.DARK_OAK_STAIRS = {
    id: 164,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [4/16, 7/16];
    }
};

BLOCK.IRON_TRAPDOOR = {
    id: 167,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN) {
            return [4/16, 5/16];
        } else {
            return TRANS_TEX;
        }
    }
};

BLOCK.PRISMARINE = {
    id: 168,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [7/16, 14/16];
    }
};

BLOCK.SEA_LANTERN = {
    id: 169,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [7/16, 4/16];
    }
};

BLOCK.CARPET = {
    id: 171,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN) {
            return [12/16, 7/16];
        } else {
            return TRANS_TEX;
        }
    }
};

BLOCK.HARDENED_CLAY2 = {
    id: 172,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [15/16, 1/16];
    }
};

BLOCK.COAL = {
    id: 173,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [5/16, 2/16];
    }
};

BLOCK.ICE2 = {
    id: 174,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [3/16, 4/16];
	}
};

BLOCK.FLOWER = {
    id:175,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN || dir == DIRECTION.UP) {
            return TRANS_TEX;
        } else {
            return [12/16, 0/16];
        }
	}
};

BLOCK.RED_SANDSTONE = {
    id: 179,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [0/16, 12/16]; }
};

BLOCK.RED_SANDSTONE_STAIRS = {
    id: 180,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [0/16, 12/16]; }
};

BLOCK.DOUBLE_RED_SANDSTONE_SLAB = {
    id: 181,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [0/16, 12/16]; }
};

BLOCK.RED_SANDSTONE_SLAB = {
    id: 182,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return TRANS_TEX;
        } else if (dir == DIRECTION.DOWN) {
            return [0/16, 12/16];
        } else {
            return [0/16, 15/16];
        }
    }
};

BLOCK.FENCE_GATE2 = {
    id: 183,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN || dir == DIRECTION.UP) {
            return TRANS_TEX;
        } else {
            return [7/16, 13/16];
        }
    }
};

BLOCK.FENCE_GATE3 = {
    id: 184,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN || dir == DIRECTION.UP) {
            return TRANS_TEX;
        } else {
            return [7/16, 13/16];
        }
    }
};

BLOCK.FENCE_GATE4 = {
    id: 185,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN || dir == DIRECTION.UP) {
            return TRANS_TEX;
        } else {
            return [7/16, 13/16];
        }
    }
};

BLOCK.FENCE_GATE5 = {
    id: 186,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN || dir == DIRECTION.UP) {
            return TRANS_TEX;
        } else {
            return [7/16, 13/16];
        }
    }
};

BLOCK.FENCE_GATE6 = {
    id: 187,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN || dir == DIRECTION.UP) {
            return TRANS_TEX;
        } else {
            return [7/16, 13/16];
        }
    }
};

BLOCK.FENCE2 = {
    id: 188,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [8/16, 13/16];
        }
    }
};

BLOCK.FENCE3 = {
    id: 189,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [8/16, 13/16];
        }
    }
};

BLOCK.FENCE4 = {
    id: 190,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [8/16, 13/16];
        }
    }
};

BLOCK.FENCE5 = {
    id: 191,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [8/16, 13/16];
        }
    }
};

BLOCK.FENCE6 = {
    id: 192,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [8/16, 13/16];
        }
    }
};

BLOCK.SPRUCE_DOOR = {
    id: 193,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [1/16, 5/16];
        }
    }
};

BLOCK.BIRCH_DOOR = {
    id: 194,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [1/16, 5/16];
        }
    }
};

BLOCK.JUNGLE_DOOR = {
    id: 195,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [1/16, 5/16];
        }
    }
};

BLOCK.ACACIA_DOOR = {
    id: 196,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [1/16, 5/16];
        }
    }
};

BLOCK.DARK_OAK_DOOR = {
    id: 197,
	transparent: true,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [1/16, 5/16];
        }
    }
};

BLOCK.END_STONE_BRICK = {
    id: 206,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [15/16, 10/16];
    }
};

BLOCK.ICE3 = {
    id: 212,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [3/16, 4/16];
	}
};

BLOCK.CONCRETE = {
	id: 251,
	transparent: false,
	fluid: false,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [1/16, 0/16]; }
};

//////////////////////////////////

// fromId( id )
//
// Returns a block structure for the given id.

BLOCK.fromId = function( id )
{
	for ( var mat in BLOCK )
		if ( typeof( BLOCK[mat] ) == "object" && BLOCK[mat].id == id )
			return BLOCK[mat];
	return null;
}

// pushVertices( vertices, world, lightmap, x, y, z )
//
// Pushes the vertices necessary for rendering a
// specific block into the array.

BLOCK.pushVertices = function( vertices, world, lightmap, x, y, z )
{
	var blocks = world.blocks;
	var blockLit = z >= lightmap[x][y];
	var block = blocks[x][y][z];
	var bH = block.fluid && ( z == world.sz - 1 || !blocks[x][y][z+1].fluid ) ? 0.9 : 1.0;

	// Top
	if ( z == world.sz - 1 || world.blocks[x][y][z+1].transparent || block.fluid )
	{
		var c = block.texture( world, lightmap, blockLit, x, y, z, DIRECTION.UP );
        c = [c[0], c[1], c[0] + 1/16, c[1] + 1/16];

		var lightMultiplier = z >= lightmap[x][y] ? 1.0 : 0.6;
		if ( block.selflit ) lightMultiplier = 1.0;

		pushQuad(
			vertices,
			[ x, y, z + bH, c[0], c[1], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x + 1.0, y, z + bH, c[2], c[1], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x + 1.0, y + 1.0, z + bH, c[2], c[3], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x, y + 1.0, z + bH, c[0], c[3], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ]
		);
	}

	// Bottom
	if ( z == 0 || world.blocks[x][y][z-1].transparent )
	{
		var c = block.texture( world, lightmap, blockLit, x, y, z, DIRECTION.DOWN );

		var lightMultiplier = block.selflit ? 1.0 : 0.6;

		pushQuad(
			vertices,
			[ x, y + 1.0, z, c[0], c[3], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x + 1.0, y + 1.0, z, c[2], c[3], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x + 1.0, y, z, c[2], c[1], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x, y, z, c[0], c[1], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ]
		);
	}

	// Front
	if ( y == 0 || world.blocks[x][y-1][z].transparent )
	{
		var c = block.texture( world, lightmap, blockLit, x, y, z, DIRECTION.FORWARD );

		var lightMultiplier = ( y == 0 || z >= lightmap[x][y-1] ) ? 1.0 : 0.6;
		if ( block.selflit ) lightMultiplier = 1.0;

		pushQuad(
			vertices,
			[ x, y, z, c[0], c[3], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x + 1.0, y, z, c[2], c[3], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x + 1.0, y, z + bH, c[2], c[1], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x, y, z + bH, c[0], c[1], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ]
		);
	}

	// Back
	if ( y == world.sy - 1 || world.blocks[x][y+1][z].transparent )
	{
		var c = block.texture( world, lightmap, blockLit, x, y, z, DIRECTION.BACK );

		var lightMultiplier = block.selflit ? 1.0 : 0.6;

		pushQuad(
			vertices,
			[ x, y + 1.0, z + bH, c[2], c[1], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x + 1.0, y + 1.0, z + bH, c[0], c[1], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x + 1.0, y + 1.0, z, c[0], c[3], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x, y + 1.0, z, c[2], c[3], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ]
		);
	}

	// Left
	if ( x == 0 || world.blocks[x-1][y][z].transparent )
	{
		var c = block.texture( world, lightmap, blockLit, x, y, z, DIRECTION.LEFT );

		var lightMultiplier = block.selflit ? 1.0 : 0.6;

		pushQuad(
			vertices,
			[ x, y, z + bH, c[2], c[1], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x, y + 1.0, z + bH, c[0], c[1], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x, y + 1.0, z, c[0], c[3], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x, y, z, c[2], c[3], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ]
		);
	}

	// Right
	if ( x == world.sx - 1 || world.blocks[x+1][y][z].transparent )
	{
		var c = block.texture( world, lightmap, blockLit, x, y, z, DIRECTION.RIGHT );

		var lightMultiplier = ( x == world.sx - 1 || z >= lightmap[x+1][y] ) ? 1.0 : 0.6;
		if ( block.selflit ) lightMultiplier = 1.0;

		pushQuad(
			vertices,
			[ x + 1.0, y, z, c[0], c[3], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x + 1.0, y + 1.0, z, c[2], c[3], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x + 1.0, y + 1.0, z + bH, c[2], c[1], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x + 1.0, y, z + bH, c[0], c[1], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ]
		);
	}
}

// pushPickingVertices( vertices, x, y, z )
//
// Pushes vertices with the data needed for picking.

BLOCK.pushPickingVertices = function( vertices, x, y, z )
{
	var color = { r: x/255, g: y/255, b: z/255 };

	// Top
	pushQuad(
		vertices,
		[ x, y, z + 1, 0, 0, color.r, color.g, color.b, 1/255 ],
		[ x + 1, y, z + 1, 1, 0, color.r, color.g, color.b, 1/255 ],
		[ x + 1, y + 1, z + 1, 1, 1, color.r, color.g, color.b, 1/255 ],
		[ x, y + 1, z + 1, 0, 0, color.r, color.g, color.b, 1/255 ]
	);

	// Bottom
	pushQuad(
		vertices,
		[ x, y + 1, z, 0, 0, color.r, color.g, color.b, 2/255 ],
		[ x + 1, y + 1, z, 1, 0, color.r, color.g, color.b, 2/255 ],
		[ x + 1, y, z, 1, 1, color.r, color.g, color.b, 2/255 ],
		[ x, y, z, 0, 0, color.r, color.g, color.b, 2/255 ]
	);

	// Front
	pushQuad(
		vertices,
		[ x, y, z, 0, 0, color.r, color.g, color.b, 3/255 ],
		[ x + 1, y, z, 1, 0, color.r, color.g, color.b, 3/255 ],
		[ x + 1, y, z + 1, 1, 1, color.r, color.g, color.b, 3/255 ],
		[ x, y, z + 1, 0, 0, color.r, color.g, color.b, 3/255 ]
	);

	// Back
	pushQuad(
		vertices,
		[ x, y + 1, z + 1, 0, 0, color.r, color.g, color.b, 4/255 ],
		[ x + 1, y + 1, z + 1, 1, 0, color.r, color.g, color.b, 4/255 ],
		[ x + 1, y + 1, z, 1, 1, color.r, color.g, color.b, 4/255 ],
		[ x, y + 1, z, 0, 0, color.r, color.g, color.b, 4/255 ]
	);

	// Left
	pushQuad(
		vertices,
		[ x, y, z + 1, 0, 0, color.r, color.g, color.b, 5/255 ],
		[ x, y + 1, z + 1, 1, 0, color.r, color.g, color.b, 5/255 ],
		[ x, y + 1, z, 1, 1, color.r, color.g, color.b, 5/255 ],
		[ x, y, z, 0, 0, color.r, color.g, color.b, 5/255 ]
	);

	// Right
	pushQuad(
		vertices,
		[ x + 1, y, z, 0, 0, color.r, color.g, color.b, 6/255 ],
		[ x + 1, y + 1, z, 1, 0, color.r, color.g, color.b, 6/255 ],
		[ x + 1, y + 1, z + 1, 1, 1, color.r, color.g, color.b, 6/255 ],
		[ x + 1, y, z + 1, 0, 0, color.r, color.g, color.b, 6/255 ]
	);
}

// Export to node.js
if ( typeof( exports ) != "undefined" )
{
	exports.BLOCK = BLOCK;
}
