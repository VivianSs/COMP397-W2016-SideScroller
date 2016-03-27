var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // OCEAN class +++++++++++++++++++++++++++++++++++
    var Ocean = (function (_super) {
        __extends(Ocean, _super);
        //private instance variables
        // constructor ++++++++++++++++++++++++++++++++++++++++++++
        function Ocean() {
            _super.call(this, ("ocean"));
            this._speed.y = 5; // ocean speed
            this._reset(-960);
        }
        // private methods+++++++++++++++++++++++++++++++++++++++++
        Ocean.prototype._checkBounds = function (value) {
            //check to see if the top of the ocean 
            // has met the top of the scene
            if (this.y >= value) {
                this._reset(-960);
            }
        };
        // reset the ocean offscreen
        Ocean.prototype._reset = function (value) {
            this.y = value;
        };
        Ocean.prototype.update = function () {
            //scroll the ocean 5 px per frame
            this.y += this._speed.y;
            this._checkBounds(0);
        };
        return Ocean;
    })(objects.GameObjetcs);
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map