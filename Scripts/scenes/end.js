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
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        // constructors
        function End() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        End.prototype.Start = function () {
            this._galaxy = new objects.Galaxy();
            this._endLabel = new objects.Label("Game Over!", "60px", "boston", "#FFE000", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this._backButton = new objects.Button("BackButton", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT + 100, true);
            this.Main();
        };
        End.prototype.Update = function () {
            this._galaxy.Update();
        };
        End.prototype.Reset = function () {
        };
        End.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        End.prototype.Main = function () {
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
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map