module objects {
    export class L3_boss extends objects.GameObject {
        // member variables
        private _verticalSpeed:number;
        private _horizontalSpeed:number;

        // constructors
        constructor() {
            super("level3");

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            // check the bottom boundary
           
            if(this.y >= (config.Screen.HEIGHT + this.height)) {
                this.Reset();
            }
            // if(this.x <= (0)) {
            //      this.Start();
            //      }
            

        }

         // public methods
         public Start():void {
            
            this.x = config.Screen.WIDTH - this.width;
            this.Reset();
        }

        public Update():void {
           
            this.x -= this._horizontalSpeed;
            this.y += this._verticalSpeed;
            
            this._checkBounds();
        }

        public Reset():void {
            this._verticalSpeed = 0.4;
            this._horizontalSpeed = 0.08;
            this.y = Math.floor(Math.random() * (config.Screen.HEIGHT - this.height)) ;
           // this.x -= this.width;
        }
    }
}