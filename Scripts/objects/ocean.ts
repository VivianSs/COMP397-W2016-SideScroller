module objects {
    // OCEAN class +++++++++++++++++++++++++++++++++++
    export class Ocean extends objects.GameObjetcs{
        //private instance variables
       
        
        // constructor ++++++++++++++++++++++++++++++++++++++++++++
        constructor(){
            super(("ocean"));
            
              this._speed.y = 5;// ocean speed
              this._reset(-960);
        }
        
        // private methods+++++++++++++++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            //check to see if the top of the ocean 
            // has met the top of the scene
           
            if(this.y >= value){
                this._reset(-960);
            }
        }
        
        // reset the ocean offscreen
        protected _reset(value:number): void {
            this.y =value;
        }
        
        public update(): void{
          
            //scroll the ocean 5 px per frame
            this.y += this._speed.y;
            this._checkBounds(0);
        }
    }
}