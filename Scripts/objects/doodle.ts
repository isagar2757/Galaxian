module objects {
    export class Doodle extends objects.GameObject {
        static y: number;
        static x: number;
        // member variables

        // constructors
        constructor() {
            super("plane");

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            // check the right boundary
            if(this.x > (config.Screen.WIDTH - this.halfWidth)) {
                this.x = config.Screen.WIDTH - this.halfWidth;
                Doodle.x = this.x;
            }

            // check the left boundary
            if(this.x < this.halfWidth) {
                this.x = this.halfWidth;
                Doodle.x = this.x;
            }

            if(this.y > (config.Screen.HEIGHT - this.halfHeight))
            {
                this.y = config.Screen.HEIGHT - this.halfHeight;
                Doodle.y = this.y;
            }

            if(this.y < this.halfHeight) {
                this.y = this.halfHeight;
                Doodle.y = this.y;
            }

        }

         // public methods
         public Start():void {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.y = 430;

            
        }

        public Update():void {

            
            //this.y = managers.Game.Stage.mouseY;
            this.Move();
            this._checkBounds();
        }

        public Reset():void {

        }

        public Move():void {
            // mouse controls
            // this.x = objects.Game.stage.mouseX;
       
            // keyboard controls
            if(managers.Game.keyboardManager.moveLeft) {
              this.x -= 5;
            }
       
            if(managers.Game.keyboardManager.moveRight) {
              this.x += 5;
            }

            if(managers.Game.keyboardManager.moveForward) {
                this.y -= 5;
              }
         
              if(managers.Game.keyboardManager.moveBackward) {
                this.y += 5;
              }
       
            this.x = this.x;
            this.y = this.y;
             Doodle.y = this.y;
             Doodle.x = this.x;
           }
    }
}