module managers {
    export class Collision {
        
        public static check(object1:objects.GameObject, object2:objects.GameObject) {
            let P1:math.Vec2 = new math.Vec2(object1.x, object1.y);
            let P2:math.Vec2 = new math.Vec2(object2.x, object2.y);
            let buletSound:createjs.AbstractSoundInstance;
            if(math.Vec2.Distance(P1, P2) < (object1.halfHeight + object2.halfHeight)) {
                if(!object2.isColliding) {
                    object2.isColliding = true;
                    switch(object2.name) {
                        case "island":
                        createjs.Sound.play("collisionEnemy");
                        break;

                        case "cloud":
                        createjs.Sound.play("collisionRock");
                        managers.Game.scoreBoard.Lives -= 1;
                        break;

                        case "bullet":
                        buletSound = createjs.Sound.play("bulletSound");
                        buletSound.volume = 0.1;
                        managers.Game.scoreBoard.Score += 100;
                        break;

                        case "level1":
                        buletSound = createjs.Sound.play("bulletSound");
                        buletSound.volume = 0.1;
                        managers.Game.scoreBoard.Score += 100;
                       // objects.L1_boss.Reset();
                        break;

                        case "level2":
                        buletSound = createjs.Sound.play("bulletSound");
                        buletSound.volume = 0.1;
                        managers.Game.scoreBoard.Score += 100;
                       // objects.L1_boss.Reset();
                        break;
                        case "level3":
                        buletSound = createjs.Sound.play("bulletSound");
                        buletSound.volume = 0.1;
                        managers.Game.scoreBoard.Score += 100;
                       // objects.L1_boss.Reset();
                        break;
                    }
                }
            }
            else {
                object2.isColliding = false;
            }
        }
    }
}