module managers {
    // COLLISION MANAGER CLASS
    export class Collision {
        // private instance variables
        private _player: objects.Player;
        constructor(player: objects.Player) {
            this._player = player;
        }

        public distance(startPoint: createjs.Point, endPoint: createjs.Point): number {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2))
        }

        public check(object: objects.GameObjetcs) {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();
            var playerHalfHeight:number = this._player.height * 0.5;
            var objectHalfHeight:number = object.height * 0.5;
            var minDistance:number = playerHalfHeight + objectHalfHeight;
            
            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY+ object.y;
            
           
           // check if the distance between the player and th eother object is less 
           // than the minimum distance
            if (this.distance(startPoint, endPoint) < minDistance){
               //check if it's an island hit
               if(object.name === "island"){
                   console.log("island hit!");
               }
               
               //check if it's a cloud hit
               if(object.name === "cloud"){
                   console.log("cloud hit");
               }
            }
       
    }
}
}