module objects {
    // OCEAN class +++++++++++++++++++++++++++++++++++
    export class Island extends objects.GameObjetcs {
        //private instance variables


        // constructor ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super(("island"));

            this._speed.y = 5;// island speed
            this._reset(this._topBounds);
        }

        // private methods+++++++++++++++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            //check to see if the top of the island 
            // has outside the viewport

            if (this.y >= value) {
                this._reset(this._topBounds);
            }
        }

        // reset the ocean offscreen
        protected _reset(value: number): void {
            var leftBounds: number;
            var rightBounds: number;

            this.y = value;
            this.x = Math.floor(Math.random() * this._rightBounds) + this._leftBounds;
        }

        public update(): void {

            //scroll the ocean 5 px per frame
            this.y += this._speed.y;
            this._checkBounds(this._bottomBounds);
        }
    }
}