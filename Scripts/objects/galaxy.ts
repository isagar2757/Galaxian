module objects {
    export class Galaxy extends createjs.Bitmap {
        // member variables
        private _verticalSpeed:number;

        // constructors
        constructor() {
            super(managers.Game.AssetManager.getResult("ocean"));

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            // check the top boundary
            if(this.x >= 0) {
                this.Reset();
            }

        }

         // public methods
         public Start():void {
             this._verticalSpeed = 5; // the ocean will move down 5ppf

            this.Reset();
        }

        public Update():void {
            this.x += this._verticalSpeed;
            
            this._checkBounds();
        }

        public Reset():void {
            this.x = -1000;
        }
    }
}