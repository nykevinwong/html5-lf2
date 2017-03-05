"use strict";
var lf2 = (function (lf2) {
    const Utils = lf2.Utils;
    const Body = lf2.Body;
    const Interaction = lf2.Interaction;
    const GameObject = lf2.GameObject;
    const GameObjectPool = lf2.GameObjectPool;
    /**
     * Character
     *
     * @type {Character}
     * @class lf2.Character
     * @implements Framework.AttachableInterface
     */
    lf2.Character = class extends GameObject {
        /**
         *
         * @param charId ID of character
         */
        constructor(charId) {
            this.obj = GameObjectPool.get(charId);
            this._currentFrameIndex = 0;
        }


        load() {

        }

        initialize() {
            this._currentFrameIndex = 0;
        }

        update() {

        }

        draw(ctx) {
            throw new METHOD_NOT_IMPLEMENT;
        }

        get isObjectChanged() {
            //TODO: need implement
            return true;
        }

    };


    return lf2;
})(lf2 || {});