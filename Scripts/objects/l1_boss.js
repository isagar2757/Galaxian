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
    var L1_boss = /** @class */ (function (_super) {
        __extends(L1_boss, _super);
        // constructors
        function L1_boss() {
            var _this = _super.call(this, "level1") || this;
            _this.Start();
            return _this;
        }
        // private methods
        L1_boss.prototype._checkBounds = function () {
            // check the bottom boundary
            if (this.y >= (config.Screen.HEIGHT + this.height)) {
                this.Reset();
            }
            // if(this.x <= (0)) {
            //      this.Start();
            //      }
        };
        // public methods
        L1_boss.prototype.Start = function () {
            this.x = config.Screen.WIDTH - this.width;
            this.Reset();
        };
        L1_boss.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        L1_boss.prototype.Reset = function () {
            this._verticalSpeed = 0.4;
            this._horizontalSpeed = 0.08;
            this.y = Math.floor(Math.random() * (config.Screen.HEIGHT - this.height));
            // this.x -= this.width;
        };
        return L1_boss;
    }(objects.GameObject));
    objects.L1_boss = L1_boss;
})(objects || (objects = {}));
//# sourceMappingURL=l1_boss.js.map