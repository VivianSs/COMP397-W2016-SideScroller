// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _ocean: objects.Ocean;
        private _island: objects.Island;
        private _clouds: objects.Cloud[];
        private _cloudCount: number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        private _liveLabel: objects.Label;
        private _scoreLabel: objects.Label;


        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }
        
        // private methods++++++++++++++++++++++++

        /**
        * @method _updateScore
        * @reture void
        */
        private _updateScore(): void {
            this._liveLabel.text = "Lives: " + liveValue;
            this._scoreLabel.text = "Score: " + scoreValue;
        }


        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
           


            //set cloud count
            this._cloudCount = 3;
            liveValue = 5;
            scoreValue = 0;

            //instantiate cloud array
            this._clouds = new Array<objects.Cloud>();

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
            for (var cloud: number = 0; cloud < this._cloudCount; cloud++) {
                this._clouds[cloud] = new objects.Cloud();
                this.addChild(this._clouds[cloud]);
            }

            // addded liveLabel to the scene
            this._liveLabel = new objects.Label(
                "Lives: " + liveValue,
                "40px Consolas", "#ffff00",
                10, 10, false);
            this.addChild(this._liveLabel);

            // addded scoreLabel to the scene
            this._scoreLabel = new objects.Label("Score: " + scoreValue,
                "40px Consolas", "#ffff00",
                390, 10, false);
            this.addChild(this._scoreLabel);

            // adder collision manager to the scene
            this._collision = new managers.Collision(this._player);

            // add this scene to the global stage container
            stage.addChild(this);
        }


        // PLAY Scene updates here
        public update(): void {
            this._ocean.update();
            this._island.update();

            this._player.update();

            this._clouds.forEach(cloud => {
                cloud.update();
                this._collision.check(cloud);
            });

            this._collision.check(this._island);

            this._updateScore();
        }



        //EVENT HANDLERS ++++++++++++++++++++

    }
}