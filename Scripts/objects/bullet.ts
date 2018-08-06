module objects {
    export class Bullet extends objects.GameObject {
        // member variables
        private _verticalSpeed:number;
        private _horizontalSpeed:number;

        // constructors
        constructor() {
            super("bullet");

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            // check the bottom boundary
            // if(this.y >= (config.Screen.HEIGHT + this.height)) {
            //     this.Reset();
            // }
            if(this.x > (config.Screen.WIDTH - this.halfWidth)) {
                this.x = config.Screen.WIDTH - this.halfWidth;
                this.Start();
            }
            

        }

         // public methods
         public Start():void {
            
            //this.x = 15;
            this.Reset();
        }

        public Update():void {
            this.x += this._horizontalSpeed;
           // this.y += this._verticalSpeed;
           this.regX = this.halfWidth;
            this.regY = this.halfHeight;
           // this.y = managers.Game.Stage.mouseY;
            
            this._checkBounds();
        }

        public Reset():void {
           // this._verticalSpeed = Math.floor(Math.random() * 5) + 5;
            this._horizontalSpeed = 10;
            if(objects.Doodle.x == undefined){
                this.y = config.Screen.HALF_HEIGHT;
                this.x = 15;
            }
            else
            {
            this.y = objects.Doodle.y;
            this.x = objects.Doodle.x + this.halfWidth;
            }
        }
    }
}