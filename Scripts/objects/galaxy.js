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
    var Galaxy = /** @class */ (function (_super) {
        __extends(Galaxy, _super);
        // constructors
        function Galaxy() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("ocean")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Galaxy.prototype._checkBounds = function () {
            // check the top boundary
            if (this.x >= 0) {
                this.Reset();
            }
        };
        // public methods
        Galaxy.prototype.Start = function () {
            this._verticalSpeed = 5; // the ocean will move down 5ppf
            this.Reset();
        };
        Galaxy.prototype.Update = function () {
            this.x += this._verticalSpeed;
            this._checkBounds();
        };
        Galaxy.prototype.Reset = function () {
            this.x = -1000;
        };
        return Galaxy;
    }(createjs.Bitmap));
    objects.Galaxy = Galaxy;
})(objects || (objects = {}));
//# sourceMappingURL=galaxy.js.map