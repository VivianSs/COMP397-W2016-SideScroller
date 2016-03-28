module objects {
    // PLAYER CLASS ++++++++++++++++++++++++++++++++
    export class Player extends createjs.Bitmap {
        // private instance variables
        private _leftBounds: number;
        private _rightBounds: number;
       
        // public instance variables
        public width: number;
        public height: number;

        constructor() {
            super(assets.getResult("plane"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._leftBounds = this.width * 0.5;
            this._rightBounds = config.Screen.WIDTH - (this.width * 0.5);

            this.y = 430;
        }

        // private methods +++++++++++++++++++++++++++
        private _checkBounds(): void {
            if (this.x < this._leftBounds) {
                this.x = this._leftBounds;
            }

            if (this.x > this._rightBounds) {
                this.x = this._rightBounds;
            }
        }

        // public methods+++++++++++++++++++++++++++++
        public update(): void {
            this.x = stage.mouseX;

            this._checkBounds();
        }
    }
}