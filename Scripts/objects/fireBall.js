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
    var FireBall = /** @class */ (function (_super) {
        __extends(FireBall, _super);
        // constructors
        function FireBall() {
            var _this = _super.call(this, "cloud") || this;
            _this.Start();
            return _this;
        }
        // private methods
        FireBall.prototype._checkBounds = function () {
            // check the bottom boundary
            // if(this.y >= (config.Screen.HEIGHT + this.height)) {
            //     this.Reset();
            // }
            if (this.x <= (0)) {
                this.Start();
            }
        };
        // public methods
        FireBall.prototype.Start = function () {
            this.x = config.Screen.WIDTH;
            this.Reset();
        };
        FireBall.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            // this.y += this._verticalSpeed;
            this._checkBounds();
        };
        FireBall.prototype.Reset = function () {
            // this._verticalSpeed = Math.floor(Math.random() * 5) + 5;
            this._horizontalSpeed = Math.floor(Math.random() * 5) + 2;
            this.y = Math.floor(Math.random() * (config.Screen.HEIGHT - this.height)) + this.halfHeight;
            // this.x -= this.width;
        };
        return FireBall;
    }(objects.GameObject));
    objects.FireBall = FireBall;
})(objects || (objects = {}));
//# sourceMappingURL=fireBall.js.map