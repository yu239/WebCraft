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

var TRANS_TEX = [4, 11];

BLOCK = {};

// Each block has the following properties:
// id,
// spawnable (always true for creative mode),
// transparent,
// selflit (always false for annotation purpose),
// gravity (always false for annotation purpose),
// fluid (always false for annotation purpose),
// texture

BLOCK.AIR = {
	id: 0
};

BLOCK.STONE = {
    id: 1,
    texture: function(world, lightmap, lit, x, y, z, dir) {
        return [1, 0];
    }
};

BLOCK.GRASS_DIRT = {
	id: 2,
	texture: function(world, lightmap, lit, x, y, z, dir){
		if ( dir == DIRECTION.UP && lit )
			return [12, 12];
		else if ( dir == DIRECTION.DOWN || !lit )
			return [2, 0];
		else
			return [3, 0];
	}
};

BLOCK.DIRT = {
    id: 3,
    texture: function(world, lightmap, lit, x, y, z, dir) {
        return [2, 0];
    }
};

BLOCK.COBBLESTONE = {
	id: 4,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [0, 1];
    }
};

BLOCK.PLANK = {
	id: 5,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
		return [4, 0];
	}
};

BLOCK.OAK_SAPLING = {
    id: 6,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
		    return TRANS_TEX;
        } else {
            return [15, 0];
        }
	}
};

BLOCK.BEDROCK = {
	id: 7,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [1, 1];
    }
};

BLOCK.FLOWING_WATER = {
    id: 8,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [13, 12];
    }
};

BLOCK.STILL_WATER = {
    id: 9,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [13, 12];
    }
};

BLOCK.FLOWING_LAVA = {
    id: 10,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [13, 14]; }
};

BLOCK.STILL_LAVA = {
    id: 11,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [13, 14]; }
}

BLOCK.SAND = {
	id: 12,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [2, 1]; }
};

BLOCK.GRAVEL = {
	id: 13,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [3, 1]; }
};

BLOCK.GOLD_ORE = {
    id: 14,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [0, 2]; }
};

BLOCK.IRON_ORE = {
    id: 15,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [1, 2]; }
};

BLOCK.COAL_ORE = {
    id: 16,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [2, 2]; }
};

BLOCK.WOOD = {
	id: 17,
	texture: function( world, lightmap, lit, x, y, z, dir )
	{
		if ( dir == DIRECTION.UP || dir == DIRECTION.DOWN )
			return [5, 1];
		else
			return [4, 1];
	}
};

BLOCK.LEAVES = {
    id: 18,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [12, 14]; }
};

BLOCK.SPONGE = {
	id: 19,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [0, 3]; }
};

BLOCK.GLASS = {
	id: 20,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [1, 3]; }
};

BLOCK.LAPIS_LAZULI_ORE = {
    id: 21,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [0, 10]; }
};

BLOCK.LAPIS_LAZULI = {
    id: 22,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [0, 9]; }
};

BLOCK.DISPENSER = {
    id: 23,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return [14, 3];
        } else if (dir == DIRECTION.FORWARD) {
            return [14, 2];
        } else {
            return [13, 2];
        }
    }
};

BLOCK.SANDSTONE = {
    id: 24,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [0, 12]; }
};

BLOCK.NOTE_BLOCK = {
    id: 25,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [10, 4]; }
};

BLOCK.BED = {
    id: 26,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return [7, 8];
        } else if (dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else if (dir == DIRECTION.BACKWARD) {
            return [8, 9];
        } else {
            return [5, 9];
        }
    }
};

BLOCK.STICKY_PISTON = {
    id: 29,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return [10, 6];
        } else if (dir == DIRECTION.DOWN) {
            return [13, 6];
        } else {
            return [12, 6];
        }
    }
};

BLOCK.COBWEB = {
    id: 30,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [11, 0];
    }
};

BLOCK.GRASS = {
    id: 31,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [11, 5];
        }
    }
};

BLOCK.DEAD_BUSH = {
    id: 32,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [7, 3];
        }
    }
};

BLOCK.PISTON = {
    id: 33,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return [11, 6];
        } else if (dir == DIRECTION.DOWN) {
            return [13, 6];
        } else {
            return [12, 6];
        }
    }
};

BLOCK.WOOL = {
    id: 35,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [1, 8];
    }
};

BLOCK.DANDELION = {
    id: 36,
    texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [13, 0];
        }
    }
};

BLOCK.POPPY = {
    id: 37,
    texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [12, 0];
        }
    }
};

BLOCK.TULIP = {
    id: 38,
    texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [12, 0];
        }
    }
};

BLOCK.BROWN_MUSHROOM = {
    id: 39,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [13, 1];
        }
    }
};

BLOCK.RED_MUSHROOM = {
    id: 40,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [12, 1];
        }
    }
};

BLOCK.GOLD = {
	id: 41,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [7, 1]; }
};

BLOCK.IRON = {
	id: 42,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [6, 1]; }
};

BLOCK.DOUBLE_SLAB = {
    id: 43,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [5, 0];
    }
};

BLOCK.SLAB = {
    id: 44,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return TRANS_TEX;
        } else if (dir == DIRECTION.DOWN) {
            return [6, 0];
        } else {
            return [7, 12];
        }
    }
};

BLOCK.BRICK = {
	id: 45,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [7, 0]; }
};

BLOCK.TNT = {
	id: 46,
	texture: function( world, lightmap, lit, x, y, z, dir )
	{
		if ( dir == DIRECTION.UP || dir == DIRECTION.DOWN )
			return [10, 0];
		else
			return [8, 0];
	}
};

BLOCK.BOOKSHELF = {
	id: 47,
	texture: function( world, lightmap, lit, x, y, z, dir )
	{
		if ( dir == DIRECTION.UP || dir == DIRECTION.DOWN )
			return [4, 0];
		else
			return [3, 2];
	}
};

BLOCK.MOSS_STONE = {
    id: 48,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [4, 2]; }
};

BLOCK.OBSIDIAN = {
	id: 49,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [5, 2]; }
};

BLOCK.TORCH = {
    id: 50,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [0, 5];
        }
    }
};

BLOCK.WOOD_STAIRS = {
    id: 53,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
		return [4, 0];
	}
};

BLOCK.CHEST = {
    id: 54,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return [9, 1];
        } else if (dir == DIRECTION.FORWARD) {
            return [11, 1];
        } else {
            return [10, 1];
        }
    }
};

BLOCK.DIAMOND_ORE = {
    id: 56,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [2, 3]; }
};

BLOCK.DIAMOND = {
	id: 57,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [8, 1]; }
};

BLOCK.CRAFTING_TABLE = {
    id: 58,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return [11, 2];
        } else {
            return [11, 3];
        }
    }
};

BLOCK.WHEAT = {
    id: 59,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [15, 5];
        }
    }
};

BLOCK.FARMLAND = {
    id: 60,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [7, 5]; }
};

BLOCK.FURNACE = {
    id: 61,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return [14, 3];
        } else if (dir == DIRECTION.FORWARD) {
            return [12, 2];
        } else {
            return [13, 2];
        }
    }
};

BLOCK.BURNING_FURNACE = {
    id: 62,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return [14, 3];
        } else if (dir == DIRECTION.FORWARD) {
            return [13, 3];
        } else {
            return [13, 2];
        }
    }
};

BLOCK.STANDING_SIGN = {
    id: 63,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [8, 11];
        }
    }
};

BLOCK.WOOD_DOOR = {
    id: 64,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [1, 5];
        }
    }
};

BLOCK.LADDER = {
    id: 65,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [3, 5];
        }
    }
};

BLOCK.COBBLESTONE_STAIRS = {
    id: 67,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [0, 1];
    }
};

BLOCK.STONE_PLATE = {
    id: 70,
    texture: function(world, lightmap, lit, x, y, z, dir) {
        return [1, 0];
    }
};

BLOCK.IRON_DOOR = {
    id: 71,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [2, 5];
        }
    }
};

BLOCK.WOOD_PLATE = {
    id: 72,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
		return [4, 0];
	}
};

BLOCK.REDSTONE_ORE = {
    id: 73,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
		return [3, 3];
	}
};

BLOCK.GLOWING_REDSTONE_ORE = {
    id: 74,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
		return [3, 3];
	}
}

BLOCK.REDSTONE_TORCH_ON = {
    id: 75,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [3, 6];
        }
	}
};

BLOCK.REDSTONE_TORCH_OFF = {
    id: 76,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [3, 7];
        }
	}
};

BLOCK.ICE = {
    id: 79,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [3, 4];
	}
};

BLOCK.SNOW_BLOCK = {
    id: 80,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [2, 4];
	}
};

BLOCK.CACTUS = {
    id: 81,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return [5, 4];
        } else {
            return [6, 4];
        }
	}
};

BLOCK.CLAY = {
    id: 82,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [8, 4];
    }
};

BLOCK.SUGAR_CANES = {
    id: 83,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [9, 4];
        }
    }
};

BLOCK.JUKEBOX = {
    id: 84,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return [11, 4];
        } else {
            return [10, 4];
        }
    }
};

BLOCK.OAK_FENCE = {
    id: 85,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [8, 13];
        }
    }
};

BLOCK.PUMPKIN = {
    id: 86,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return [6, 6];
        } else {
            return [6, 7];
        }
    }
};

BLOCK.NETHERRACK = {
    id: 87,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [7, 6];
    }
};

BLOCK.SOUL_SAND = {
    id: 88,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [8, 6];
    }
};

BLOCK.GLOWSTONE = {
    id: 89,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [9, 6];
    }
};

BLOCK.LIT_PUMPKIN = {
    id: 91,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.FORWARD) {
            return [8, 7];
        } else if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return [6, 6];
        } else {
            return [6, 7];
        }
    }
};

BLOCK.STAINED_GLASS = {
    id: 95,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [3, 4];
    }
};

BLOCK.MONSTER_EGG = {
    id: 97,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [5, 6];
    }
};

BLOCK.STONE_BRICK = {
    id: 98,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [6, 3];
    }
};

BLOCK.BROWN_MUSHROOM_BLOCK = {
    id: 99,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [14, 7];
    }
};

BLOCK.RED_MUSHROOM_BLOCK = {
    id: 100,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [13, 7];
    }
};

BLOCK.IRON_BARS = {
    id: 101,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [5, 5];
        }
    }
};

BLOCK.GLASS_PANE = {
    id: 102,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [1, 3]; }
};

BLOCK.MELON = {
    id: 103,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return [9, 8];
        } else {
            return [8, 8];
        }
    }
};

BLOCK.PUMPKIN_STEM = {
    id: 104,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [15, 6];
        }
    }
};

BLOCK.MELON_STEM = {
    id: 105,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [15, 6];
        }
    }
};

BLOCK.VINES = {
    id: 106,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [11, 14];
    }
};

BLOCK.FENCE_GATE = {
    id: 107,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN || dir == DIRECTION.UP) {
            return TRANS_TEX;
        } else {
            return [7, 13];
        }
    }
};

BLOCK.BRICK_STAIRS = {
    id: 108,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [7, 0]; }
};

BLOCK.STONE_STAIRS = {
    id: 109,
    texture: function(world, lightmap, lit, x, y, z, dir) {
        return [1, 0];
    }
};

BLOCK.MYCELIUM = {
    id: 110,
    texture: function(world, lightmap, lit, x, y, z, dir) {
        if (dir == DIRECTION.UP) {
            return [14, 4];
        } else if (dir == DIRECTION.DOWN) {
            return [2, 0];
        } else {
            return [13, 4];
        }
    }
};

BLOCK.NETHER_BRICK = {
    id: 112,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [7, 6];
    }
};

BLOCK.NETHER_BRICK_FENCE = {
    id: 113,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [8, 13];
        }
    }
};

BLOCK.NETHER_STAIRS = {
    id: 114,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [7, 6];
    }
};

BLOCK.NETHER_WART = {
    id: 115,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [4, 14];
        }
    }
};

BLOCK.ENCHANTING_TABLE = {
    id: 116,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return [6, 10];
        } else if (dir == DIRECTION.DOWN) {
            return [7, 11];
        } else {
            return [6, 11];
        }
    }
};

BLOCK.BREWING_STAND = {
    id: 117,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return TRANS_TEX;
        } else if (dir == DIRECTION.DOWN) {
            return [12, 9];
        } else {
            return [13, 9];
        }
    }
};

BLOCK.CAULDRON = {
    id: 118,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return [10, 8];
        } else if (dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [10, 9];
        }
    }
};

BLOCK.END_PORTAL_FRAME = {
    id: 120,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return [14, 9];
        } else if (dir == DIRECTION.DOWN) {
            return [15, 10];
        } else {
            return [15, 9];
        }
    }
};

BLOCK.END_STONE = {
    id: 121,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [15, 10];
    }
};

BLOCK.DOUBLE_SLAB2 = {
    id: 125,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [5, 0];
    }
};

BLOCK.WOOD_SLAB = {
    id: 126,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return TRANS_TEX;
        } else if (dir == DIRECTION.DOWN) {
            return [4, 0];
        } else {
            return [8, 12];
        }
    }
};

BLOCK.SANDSTONE_STAIRS = {
    id: 128,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [0, 12]; }
};

BLOCK.EMERALD_ORE = {
    id: 129,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [9, 11];
    }
};

BLOCK.EMERALD = {
    id: 133,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [9, 12];
    }
};

BLOCK.SPRUCE_STAIRS = {
    id: 134,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
		return [4, 7];
	}
};

BLOCK.BIRCH_STAIRS = {
    id: 135,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
		return [4, 7];
	}
};

BLOCK.JUNGLE_STAIRS = {
    id: 136,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
		return [4, 7];
	}
};

BLOCK.COBBLESTONE_WALL = {
    id: 139,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [0, 1];
    }
};

BLOCK.CARROTS = {
    id: 141,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [11, 5];
        }
    }
};

BLOCK.POTATOS = {
    id: 142,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [11, 5];
        }
    }
};

BLOCK.TRAPPED_CHEST = {
    id: 146,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return [9, 1];
        } else if (dir == DIRECTION.FORWARD) {
            return [11, 1];
        } else {
            return [10, 1];
        }
    }
};

BLOCK.REDSTONE = {
    id: 152,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [9, 13];
    }
};

BLOCK.QUARTZ = {
    id: 155,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [3, 13];
    }
};

BLOCK.QUARTZ_STAIRS = {
    id: 156,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [3, 13];
    }
};

BLOCK.DROPPER = {
    id: 158,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN || dir == DIRECTION.UP) {
            return [14, 3];
        } else if (dir == DIRECTION.FORWARD) {
            return [14, 2];
        } else {
            return [13, 2];
        }
    }
};

BLOCK.HARDENED_CLAY = {
    id: 159,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [15, 1];
    }
};

BLOCK.STAINED_GLASS_PANE = {
    id: 160,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [1, 3]; }
};

BLOCK.LEAVES2 = {
    id: 161,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [5, 3]; }
};

BLOCK.WOOD2 = {
    id: 162,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
		if ( dir == DIRECTION.UP || dir == DIRECTION.DOWN )
			return [5, 1];
		else
			return [4, 1];
	}
};

BLOCK.ACACIA_STAIRS = {
    id: 163,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [4, 7];
    }
};

BLOCK.DARK_OAK_STAIRS = {
    id: 164,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [4, 7];
    }
};

BLOCK.PRISMARINE = {
    id: 168,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [7, 14];
    }
};

BLOCK.SEA_LANTERN = {
    id: 169,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [7, 4];
    }
};

BLOCK.HARDENED_CLAY2 = {
    id: 172,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [15, 1];
    }
};

BLOCK.COAL = {
    id: 173,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [5, 2];
    }
};

BLOCK.ICE2 = {
    id: 174,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [3, 4];
	}
};

BLOCK.FLOWER = {
    id:175,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN || dir == DIRECTION.UP) {
            return TRANS_TEX;
        } else {
            return [12, 0];
        }
	}
};

BLOCK.RED_SANDSTONE = {
    id: 179,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [0, 12]; }
};

BLOCK.RED_SANDSTONE_STAIRS = {
    id: 180,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [0, 12]; }
};

BLOCK.DOUBLE_RED_SANDSTONE_SLAB = {
    id: 181,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [0, 12]; }
};

BLOCK.RED_SANDSTONE_SLAB = {
    id: 182,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP) {
            return TRANS_TEX;
        } else if (dir == DIRECTION.DOWN) {
            return [0, 12];
        } else {
            return [0, 15];
        }
    }
};

BLOCK.FENCE_GATE2 = {
    id: 183,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN || dir == DIRECTION.UP) {
            return TRANS_TEX;
        } else {
            return [7, 13];
        }
    }
};

BLOCK.FENCE_GATE3 = {
    id: 184,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN || dir == DIRECTION.UP) {
            return TRANS_TEX;
        } else {
            return [7, 13];
        }
    }
};

BLOCK.FENCE_GATE4 = {
    id: 185,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN || dir == DIRECTION.UP) {
            return TRANS_TEX;
        } else {
            return [7, 13];
        }
    }
};

BLOCK.FENCE_GATE5 = {
    id: 186,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN || dir == DIRECTION.UP) {
            return TRANS_TEX;
        } else {
            return [7, 13];
        }
    }
};

BLOCK.FENCE_GATE6 = {
    id: 187,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.DOWN || dir == DIRECTION.UP) {
            return TRANS_TEX;
        } else {
            return [7, 13];
        }
    }
};

BLOCK.FENCE2 = {
    id: 188,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [8, 13];
        }
    }
};

BLOCK.FENCE3 = {
    id: 189,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [8, 13];
        }
    }
};

BLOCK.FENCE4 = {
    id: 190,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [8, 13];
        }
    }
};

BLOCK.FENCE5 = {
    id: 191,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [8, 13];
        }
    }
};

BLOCK.FENCE6 = {
    id: 192,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [8, 13];
        }
    }
};

BLOCK.SPRUCE_DOOR = {
    id: 193,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [1, 5];
        }
    }
};

BLOCK.BIRCH_DOOR = {
    id: 194,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [1, 5];
        }
    }
};

BLOCK.JUNGLE_DOOR = {
    id: 195,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [1, 5];
        }
    }
};

BLOCK.ACACIA_DOOR = {
    id: 196,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [1, 5];
        }
    }
};

BLOCK.DARK_OAK_DOOR = {
    id: 197,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        if (dir == DIRECTION.UP || dir == DIRECTION.DOWN) {
            return TRANS_TEX;
        } else {
            return [1, 5];
        }
    }
};

BLOCK.END_STONE_BRICK = {
    id: 206,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [15, 10];
    }
};

BLOCK.ICE3 = {
    id: 212,
	texture: function( world, lightmap, lit, x, y, z, dir ) {
        return [3, 4];
	}
};

BLOCK.CONCRETE = {
	id: 251,
	texture: function( world, lightmap, lit, x, y, z, dir ) { return [6, 0]; }
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
//	if ( z == world.sz - 1 || world.blocks[x][y][z+1].transparent || block.fluid )
	{
		var c = block.texture( world, lightmap, blockLit, x, y, z, DIRECTION.UP );
        c = [c[0]/16, c[1]/16, (c[0] + 1)/16, (c[1] + 1)/16];

		var lightMultiplier = z >= lightmap[x][y] ? 1.0 : 0.6;
//		if ( block.selflit ) lightMultiplier = 1.0;

		pushQuad(
			vertices,
			[ x, y, z + bH, c[0], c[1], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x + 1.0, y, z + bH, c[2], c[1], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x + 1.0, y + 1.0, z + bH, c[2], c[3], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x, y + 1.0, z + bH, c[0], c[3], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ]
		);
	}

	// Bottom
//	if ( z == 0 || world.blocks[x][y][z-1].transparent )
	{
		var c = block.texture( world, lightmap, blockLit, x, y, z, DIRECTION.DOWN );
        c = [c[0]/16, c[1]/16, (c[0] + 1)/16, (c[1] + 1)/16];

        //		var lightMultiplier = block.selflit ? 1.0 : 0.6;
        var lightMultiplier = 0.6;

		pushQuad(
			vertices,
			[ x, y + 1.0, z, c[0], c[3], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x + 1.0, y + 1.0, z, c[2], c[3], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x + 1.0, y, z, c[2], c[1], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x, y, z, c[0], c[1], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ]
		);
	}

	// Front
//	if ( y == 0 || world.blocks[x][y-1][z].transparent )
	{
		var c = block.texture( world, lightmap, blockLit, x, y, z, DIRECTION.FORWARD );
        c = [c[0]/16, c[1]/16, (c[0] + 1)/16, (c[1] + 1)/16];

		var lightMultiplier = ( y == 0 || z >= lightmap[x][y-1] ) ? 1.0 : 0.6;
//		if ( block.selflit ) lightMultiplier = 1.0;

		pushQuad(
			vertices,
			[ x, y, z, c[0], c[3], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x + 1.0, y, z, c[2], c[3], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x + 1.0, y, z + bH, c[2], c[1], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x, y, z + bH, c[0], c[1], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ]
		);
	}

	// Back
//	if ( y == world.sy - 1 || world.blocks[x][y+1][z].transparent )
	{
		var c = block.texture( world, lightmap, blockLit, x, y, z, DIRECTION.BACK );
        c = [c[0]/16, c[1]/16, (c[0] + 1)/16, (c[1] + 1)/16];

        //		var lightMultiplier = block.selflit ? 1.0 : 0.6;
        var lightMultiplier = 0.6;

		pushQuad(
			vertices,
			[ x, y + 1.0, z + bH, c[2], c[1], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x + 1.0, y + 1.0, z + bH, c[0], c[1], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x + 1.0, y + 1.0, z, c[0], c[3], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x, y + 1.0, z, c[2], c[3], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ]
		);
	}

	// Left
//	if ( x == 0 || world.blocks[x-1][y][z].transparent )
	{
		var c = block.texture( world, lightmap, blockLit, x, y, z, DIRECTION.LEFT );
        c = [c[0]/16, c[1]/16, (c[0] + 1)/16, (c[1] + 1)/16];

        //		var lightMultiplier = block.selflit ? 1.0 : 0.6;
        var lightMultiplier = 0.6;

		pushQuad(
			vertices,
			[ x, y, z + bH, c[2], c[1], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x, y + 1.0, z + bH, c[0], c[1], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x, y + 1.0, z, c[0], c[3], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ],
			[ x, y, z, c[2], c[3], lightMultiplier, lightMultiplier, lightMultiplier, 1.0 ]
		);
	}

	// Right
//	if ( x == world.sx - 1 || world.blocks[x+1][y][z].transparent )
	{
		var c = block.texture( world, lightmap, blockLit, x, y, z, DIRECTION.RIGHT );
        c = [c[0]/16, c[1]/16, (c[0] + 1)/16, (c[1] + 1)/16];

		var lightMultiplier = ( x == world.sx - 1 || z >= lightmap[x+1][y] ) ? 1.0 : 0.6;
//		if ( block.selflit ) lightMultiplier = 1.0;

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
