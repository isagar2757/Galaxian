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
    var Doodle = /** @class */ (function (_super) {
        __extends(Doodle, _super);
        // member variables
        // constructors
        function Doodle() {
            var _this = _super.call(this, "plane") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Doodle.prototype._checkBounds = function () {
            // check the right boundary
            if (this.x > (config.Screen.WIDTH - this.halfWidth)) {
                this.x = config.Screen.WIDTH - this.halfWidth;
                Doodle.x = this.x;
            }
            // check the left boundary
            if (this.x < this.halfWidth) {
                this.x = this.halfWidth;
                Doodle.x = this.x;
            }
            if (this.y > (config.Screen.HEIGHT - this.halfHeight)) {
                this.y = config.Screen.HEIGHT - this.halfHeight;
                Doodle.y = this.y;
            }
            if (this.y < this.halfHeight) {
                this.y = this.halfHeight;
                Doodle.y = this.y;
            }
        };
        // public methods
        Doodle.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.y = 430;
        };
        Doodle.prototype.Update = function () {
            //this.y = managers.Game.Stage.mouseY;
            this.Move();
            this._checkBounds();
        };
        Doodle.prototype.Reset = function () {
        };
        Doodle.prototype.Move = function () {
            // mouse controls
            // this.x = objects.Game.stage.mouseX;
            // keyboard controls
            if (managers.Game.keyboardManager.moveLeft) {
                this.x -= 5;
            }
            if (managers.Game.keyboardManager.moveRight) {
                this.x += 5;
            }
            if (managers.Game.keyboardManager.moveForward) {
                this.y -= 5;
            }
            if (managers.Game.keyboardManager.moveBackward) {
                this.y += 5;
            }
            this.x = this.x;
            this.y = this.y;
            Doodle.y = this.y;
            Doodle.x = this.x;
        };
        return Doodle;
    }(objects.GameObject));
    objects.Doodle = Doodle;
})(objects || (objects = {}));
//# sourceMappingURL=doodle.js.map