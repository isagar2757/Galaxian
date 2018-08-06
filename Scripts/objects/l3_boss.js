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
    var L3_boss = /** @class */ (function (_super) {
        __extends(L3_boss, _super);
        // constructors
        function L3_boss() {
            var _this = _super.call(this, "level3") || this;
            _this.Start();
            return _this;
        }
        // private methods
        L3_boss.prototype._checkBounds = function () {
            // check the bottom boundary
            if (this.y >= (config.Screen.HEIGHT + this.height)) {
                this.Reset();
            }
            // if(this.x <= (0)) {
            //      this.Start();
            //      }
        };
        // public methods
        L3_boss.prototype.Start = function () {
            this.x = config.Screen.WIDTH - this.width;
            this.Reset();
        };
        L3_boss.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        L3_boss.prototype.Reset = function () {
            this._verticalSpeed = 0.4;
            this._horizontalSpeed = 0.08;
            this.y = Math.floor(Math.random() * (config.Screen.HEIGHT - this.height));
            // this.x -= this.width;
        };
        return L3_boss;
    }(objects.GameObject));
    objects.L3_boss = L3_boss;
})(objects || (objects = {}));
//# sourceMappingURL=l3_boss.js.map