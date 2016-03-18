module objects {
    // GameObjetcs class +++++++++++++++++++++++++++++++++++
    export class GameObjetcs extends createjs.Bitmap{
        //private instance variables
        protected _speed:createjs.Point;
        
        // constructor ++++++++++++++++++++++++++++++++++++++++++++
        constructor(bitmapString: string){
            super(assets.getResult(bitmapString));
            
              this._speed = new createjs.Point(0,0);// ocean speed
              
        }
        
        // private methods+++++++++++++++++++++++++++++++++++++++++
        protected _checkBounds(value: number):void {
            var resetValue: number = 0;
            //check if y value has met the reset criteria
            if(this.y >= value){
                this._reset(resetValue);
            }
        }
        
        // reset the Objects offscreen
        protected _reset(value: number): void {
            this.y = value;
        }
        
        public update(): void{
            var boundVaule: number = 0;
            //scroll the ocean 5 px per frame
            this.y += this._speed.y;
            this._checkBounds(boundVaule);
        }
    }
}