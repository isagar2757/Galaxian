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
    var Win = /** @class */ (function (_super) {
        __extends(Win, _super);
        // constructors
        function Win() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Win.prototype.Start = function () {
            this._galaxy = new objects.Galaxy();
            this._endLabel = new objects.Label("You Win!", "60px", "boston", "#FFE000", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this._backButton = new objects.Button("BackButton", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT + 100, true);
            this.Main();
        };
        Win.prototype.Update = function () {
            this._galaxy.Update();
        };
        Win.prototype.Reset = function () {
        };
        Win.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Win.prototype.Main = function () {
            console.log("Started - END SCENE");
            this.addChild(this._galaxy);
            this.addChild(this._endLabel);
            this.addChild(this._backButton);
            this.addChild(managers.Game.scoreBoard.HighScoreLabel);
            this._backButton.on("click", function () {
                managers.Game.scoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        };
        return Win;
    }(objects.Scene));
    scenes.Win = Win;
})(scenes || (scenes = {}));
//# sourceMappingURL=win.js.map