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
var objects;
(function (objects) {
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        // constructors
        function Bullet() {
            var _this = _super.call(this, "bullet") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Bullet.prototype._checkBounds = function () {
            // check the bottom boundary
            // if(this.y >= (config.Screen.HEIGHT + this.height)) {
            //     this.Reset();
            // }
            if (this.x > (config.Screen.WIDTH - this.halfWidth)) {
                this.x = config.Screen.WIDTH - this.halfWidth;
                this.Start();
            }
        };
        // public methods
        Bullet.prototype.Start = function () {
            //this.x = 15;
            this.Reset();
        };
        Bullet.prototype.Update = function () {
            this.x += this._horizontalSpeed;
            // this.y += this._verticalSpeed;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            // this.y = managers.Game.Stage.mouseY;
            this._checkBounds();
        };
        Bullet.prototype.Reset = function () {
            // this._verticalSpeed = Math.floor(Math.random() * 5) + 5;
            this._horizontalSpeed = 10;
            if (objects.Doodle.x == undefined) {
                this.y = config.Screen.HALF_HEIGHT;
                this.x = 15;
            }
            else {
                this.y = objects.Doodle.y;
                this.x = objects.Doodle.x + this.halfWidth;
            }
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map