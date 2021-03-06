module scenes {
    export class Boss1 extends objects.Scene {
        
        // member variables
        private _doodle:objects.Doodle;
        private _galaxy:objects.Galaxy;
        private _monster:objects.Monster;
        private _boss:objects.L1_boss;
       
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
           // this.backgroungSound = createjs.Sound.play("background");
            //this.backgroungSound.volume = 0.2;
            this._doodle = new objects.Doodle();
            this._galaxy = new objects.Galaxy();
            this._boss = new objects.L1_boss();
           
            this._fireBallNum = 3;
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
         
           
            managers.Collision.check(this._doodle, this._boss);

            this._fireBall.forEach(cloud => {
                cloud.Update();
                managers.Collision.check(this._doodle, cloud);
            });

           

            this._bullets.forEach(bullet => {
                
                bullet.Update();
                managers.Collision.check(bullet,this._boss);
                if(this._boss.isColliding){
                        
                                //this.removeChild(this._island);
                              // this._boss.y = 0;
                              this._boss.Reset();
                              bullet.Start();
                            // this.removeChild(bullet);
                            }
                            this._boss.Update();
                            //this.addChild(this._island);
                           // this.addChild(bullet);
            });

            

           
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log("Started - Boss SCENE");
           
            // add the Galaxy object to the scene
            this.addChild(this._galaxy);

            // add the Monster object to the scene
            this.addChild(this._boss);

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
            this.addChild(managers.Game.scoreBoard.LevelLabel);
           
        }

       

    }
    
}