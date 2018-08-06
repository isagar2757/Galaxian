var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Boss1 = /** @class */ (function (_super) {
        __extends(Boss1, _super);
        // constructors
        function Boss1() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Boss1.prototype._buildFireBall = function () {
            for (var count = 0; count < this._fireBallNum; count++) {
                this._fireBall.push(new objects.FireBall());
                //this._clouds[count] = new objects.Cloud();
            }
        };
        Boss1.prototype._buildBullets = function () {
            for (var count = 0; count < this._fireBallNum; count++) {
                this._bullets.push(new objects.Bullet());
                //this._clouds[count] = new objects.Cloud();
            }
        };
        // public methods
        Boss1.prototype.Start = function () {
            // this.backgroungSound = createjs.Sound.play("background");
            //this.backgroungSound.volume = 0.2;
            this._doodle = new objects.Doodle();
            this._galaxy = new objects.Galaxy();
            this._boss = new objects.L1_boss();
            this._fireBallNum = 3;
            // create an empty Array List-like object of clouds
            this._fireBall = new Array();
            this._bullets = new Array();
            this._buildFireBall();
            this._buildBullets();
            this.Main();
        };
        Boss1.prototype.Update = function () {
            var _this = this;
            this._doodle.Update();
            this._galaxy.Update();
            managers.Collision.check(this._doodle, this._boss);
            this._fireBall.forEach(function (cloud) {
                cloud.Update();
                managers.Collision.check(_this._doodle, cloud);
            });
            this._bullets.forEach(function (bullet) {
                bullet.Update();
                managers.Collision.check(bullet, _this._boss);
                if (_this._boss.isColliding) {
                    //this.removeChild(this._island);
                    // this._boss.y = 0;
                    _this._boss.Reset();
                    _this.removeChild(bullet);
                }
                _this._boss.Update();
                //this.addChild(this._island);
                _this.addChild(bullet);
            });
        };
        Boss1.prototype.Reset = function () {
        };
        Boss1.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Boss1.prototype.Main = function () {
            console.log("Started - Boss SCENE");
            // add the Galaxy object to the scene
            this.addChild(this._galaxy);
            // add the Monster object to the scene
            this.addChild(this._boss);
            // add the Doodle object to the scene
            this.addChild(this._doodle);
            // add the FireBall(s) to the scene
            for (var _i = 0, _a = this._fireBall; _i < _a.length; _i++) {
                var cloud = _a[_i];
                this.addChild(cloud);
            }
            for (var _b = 0, _c = this._bullets; _b < _c.length; _b++) {
                var bullet = _c[_b];
                this.addChild(bullet);
            }
            this.addChild(managers.Game.scoreBoard.LivesLabel);
            this.addChild(managers.Game.scoreBoard.ScoreLabel);
        };
        return Boss1;
    }(objects.Scene));
    scenes.Boss1 = Boss1;
})(scenes || (scenes = {}));
//# sourceMappingURL=boss1.js.map