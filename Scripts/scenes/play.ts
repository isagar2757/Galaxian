module scenes {
    export class Play extends objects.Scene {
        
        // member variables
        private _doodle:objects.Doodle;
        private _galaxy:objects.Galaxy;
        private _monster:objects.Monster;
       
        private _fireBallNum:number;
        private _fireBall:objects.FireBall[];
       
        private _bullets:objects.Bullet[];
        public backgroungSound:createjs.AbstractSoundInstance;
      

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods
        private _buildFireBall():void {
            for (let count = 0; count < this._fireBallNum; count++) {
                this._fireBall.push(new objects.FireBall());
                //this._clouds[count] = new objects.Cloud();
                
            }
        }

        private _buildBullets():void {
            for (let count = 0; count < this._fireBallNum; count++) {
                this._bullets.push(new objects.Bullet());
                //this._clouds[count] = new objects.Cloud();
                
            }
        }


      
        // public methods
        public Start():void {
            this.backgroungSound = createjs.Sound.play("background");
            this.backgroungSound.volume = 0.2;
            this._doodle = new objects.Doodle();
            this._galaxy = new objects.Galaxy();
            this._monster = new objects.Monster();
           
            this._fireBallNum = 5;
            // create an empty Array List-like object of clouds
            this._fireBall = new Array<objects.FireBall>();
            this._bullets = new Array<objects.Bullet>();
            this._buildFireBall();
            this._buildBullets();
           
            this.Main();
        }

        public Update():void {
            this._doodle.Update();
            this._galaxy.Update();
         
           
            managers.Collision.check(this._doodle, this._monster);

            this._fireBall.forEach(cloud => {
                cloud.Update();
                managers.Collision.check(this._doodle, cloud);
            });

           

            this._bullets.forEach(bullet => {
                
                bullet.Update();
                managers.Collision.check(this._monster, bullet);
                if(bullet.isColliding){
                        
                                //this.removeChild(this._island);
                               this._monster.x = 0;
                                this.removeChild(bullet);
                            }
                            this._monster.Update();
                            //this.addChild(this._island);
                            this.addChild(bullet);
            });

            

           
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log("Started - PLAY SCENE");
           
            // add the Galaxy object to the scene
            this.addChild(this._galaxy);

            // add the Monster object to the scene
            this.addChild(this._monster);

            // add the Doodle object to the scene
            this.addChild(this._doodle);

            // add the FireBall(s) to the scene
            for (const cloud of this._fireBall) {
                this.addChild(cloud);
            }

            for (const bullet of this._bullets) {
                this.addChild(bullet);
            }
            this.addChild(managers.Game.scoreBoard.LivesLabel);
            this.addChild(managers.Game.scoreBoard.ScoreLabel);
           
        }

       

    }
    
}