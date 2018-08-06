var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.check = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            if (math.Vec2.Distance(P1, P2) < (object1.halfHeight + object2.halfHeight)) {
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    switch (object2.name) {
                        case "island":
                            createjs.Sound.play("collisionEnemy");
                            break;
                        case "cloud":
                            createjs.Sound.play("collisionRock");
                            managers.Game.scoreBoard.Lives -= 1;
                            break;
                        case "bullet":
                            createjs.Sound.play("bulletSound");
                            managers.Game.scoreBoard.Score += 100;
                            break;
                        case "level1":
                            createjs.Sound.play("bulletSound");
                            managers.Game.scoreBoard.Score += 100;
                            // objects.L1_boss.Reset();
                            break;
                    }
                }
            }
            else {
                object2.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map