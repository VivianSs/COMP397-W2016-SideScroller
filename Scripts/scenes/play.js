var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // private methods++++++++++++++++++++++++
        /**
        * @method _updateScore
        * @reture void
        */
        Play.prototype._updateScore = function () {
            this._liveLabel.text = "Lives: " + liveValue;
            this._scoreLabel.text = "Score: " + scoreValue;
        };
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            //set cloud count
            this._cloudCount = 3;
            liveValue = 5;
            scoreValue = 0;
            //instantiate cloud array
            this._clouds = new Array();
            //added ocean to the scene
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);
            //added island to the scene
            this._island = new objects.Island();
            this.addChild(this._island);
            //added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            //added cloud to the scene
            for (var cloud = 0; cloud < this._cloudCount; cloud++) {
                this._clouds[cloud] = new objects.Cloud();
                this.addChild(this._clouds[cloud]);
            }
            // addded liveLabel to the scene
            this._liveLabel = new objects.Label("Lives: " + liveValue, "40px Consolas", "#ffff00", 10, 10, false);
            this.addChild(this._liveLabel);
            // addded scoreLabel to the scene
            this._scoreLabel = new objects.Label("Score: " + scoreValue, "40px Consolas", "#ffff00", 390, 10, false);
            this.addChild(this._scoreLabel);
            // adder collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            var _this = this;
            this._ocean.update();
            this._island.update();
            this._player.update();
            this._clouds.forEach(function (cloud) {
                cloud.update();
                _this._collision.check(cloud);
            });
            this._collision.check(this._island);
            this._updateScore();
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map