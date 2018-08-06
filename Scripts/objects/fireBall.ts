module objects {
    export class FireBall extends objects.GameObject {
        // member variables
        private _verticalSpeed:number;
        private _horizontalSpeed:number;

        // constructors
        constructor() {
            super("cloud");

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            // check the bottom boundary
            // if(this.y >= (config.Screen.HEIGHT + this.height)) {
            //     this.Reset();
            // }
            if(this.x <= (0)) {
                 this.Start();
                 }
            

        }

         // public methods
         public Start():void {
            
this.x = config.Screen.WIDTH;
            this.Reset();
        }

        public Update():void {
            this.x -= this._horizontalSpeed;
           // this.y += this._verticalSpeed;
            
            this._checkBounds();
        }

        public Reset():void {
           // this._verticalSpeed = Math.floor(Math.random() * 5) + 5;
            this._horizontalSpeed = Math.floor(Math.random() * 5) + 2;
            this.y = Math.floor(Math.random() * (config.Screen.HEIGHT - this.height)) + this.halfHeight;
           // this.x -= this.width;
        }
    }
}