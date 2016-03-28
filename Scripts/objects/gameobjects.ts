module objects {
    // GameObjetcs super class +++++++++++++++++++++++++++++++++++
    export class GameObjetcs extends createjs.Bitmap {
        //private instance variables
        protected _speed: createjs.Point;
        protected _leftBounds: number;
        protected _rightBounds: number;
        protected _bottomBounds: number;
        protected _topBounds: number;

        // public instance variables
        public name: string;
        public width: number;
        public height: number;
        public centerX: number;
        public centerY: number;

        // constructor ++++++++++++++++++++++++++++++++++++++++++++
        constructor(bitmapString: string) {
            super(assets.getResult(bitmapString));

            this._speed = new createjs.Point(0, 0);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.centerX = this.width * 0.5;
            this.centerY = this.height * 0.5;
            this._topBounds = -this.height
            this._bottomBounds = config.Screen.HEIGHT + this.height;
            this._leftBounds = 0;
            this._rightBounds = config.Screen.WIDTH - this.width;
        }

        // private methods+++++++++++++++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            var resetValue: number = 0;
            //check if y value has met the reset criteria
            if (this.y >= value) {
                this._reset(resetValue);
            }
        }

        // reset the Objects offscreen
        protected _reset(value: number): void {
            this.y = value;
        }

        public update(): void {
            var boundVaule: number = 0;
            //scroll the ocean 5 px per frame
            this.y += this._speed.y;
            this._checkBounds(boundVaule);
        }
    }
}