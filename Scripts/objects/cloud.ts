module objects {
    // CLOUD class +++++++++++++++++++++++++++++++++++
    export class Cloud extends objects.GameObjetcs {
        //private instance variables


        // constructor ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super(("cloud"));
            this._reset(this._topBounds);
            this.name = "cloud";
        }

        // private methods+++++++++++++++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            //check to see if the top of the cloud 
            // has outside the viewport

            if (this.y >= value) {
                this._reset(this._topBounds);
            }
        }

        // reset the cloud offscreen
        protected _reset(value: number): void {
            this._speed.y = Math.floor(Math.random() * 5) + 5;
            this._speed.x = Math.floor(Math.random() * 4) - 2;
           
            this.y = value;
            this.x = Math.floor(Math.random() * this._rightBounds) + this._leftBounds;
        }

        public update(): void {

            //scroll the cloud down the sceen
            this.y += this._speed.y;
            this.x += this._speed.x;
            this._checkBounds(this._bottomBounds);
        }
    }
}