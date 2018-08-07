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
    var Instruction = /** @class */ (function (_super) {
        __extends(Instruction, _super);
        // constructors
        function Instruction() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Instruction.prototype.Start = function () {
            this._galaxy = new objects.Galaxy();
            this.line1 = new objects.Label("Skip the stones And Kill the Enemies", "40px", "boston", "#FFE000", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT - 200, true);
            this.line2 = new objects.Label("Move Your Plane using Arrow Keys", "40px", "boston", "#FFE000", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT - 100, true);
            this.line3 = new objects.Label("You have 5 Lives", "40px", "boston", "#FFE000", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this._startButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH, 400, true);
            this.Main();
        };
        Instruction.prototype.Update = function () {
            this._galaxy.Update();
        };
        Instruction.prototype.Reset = function () {
        };
        Instruction.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Instruction.prototype.Main = function () {
            console.log("Instruction - INST SCENE");
            this.addChild(this._galaxy);
            this.addChild(this.line1);
            this.addChild(this.line2);
            this.addChild(this.line3);
            this.addChild(this._startButton);
            this._startButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        };
        return Instruction;
    }(objects.Scene));
    scenes.Instruction = Instruction;
})(scenes || (scenes = {}));
//# sourceMappingURL=instruction.js.map