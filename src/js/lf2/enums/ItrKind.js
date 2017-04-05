"use strict";
var lf2 = (function (lf2) {
    /**
     * Itr Kind
     *
     * @class lf2.ItrKind
     */
    lf2.ItrKind = {
        NORMAL_HIT: 0,
        CATCH: 1,
        PICK_WEAPON: 2,
        CATCH_BDY: 3,
        FALLING: 4,
        WEAPON_STRENGTH: 5,
        SUPER_PUNCH: 6,
        PICK_WEAPON_2: 7,
        HEAL_BALL: 8,
        REFLECTIVE_SHIELD: 9,
        SONATA_OF_DEATH_1: 10,
        SONATA_OF_DEATH_2: 11,
        THREE_D_OBJECTS: 14,
        WHIRLWIND_WIND: 15,
        WHIRLWIND_ICE: 16,
    };

    Object.freeze(lf2.ItrKind);

    return lf2;
})(lf2 || {});