module scenes {
    export class Win extends objects.Scene {
        // member variables
        private _endLabel: objects.Label;
        private _backButton: objects.Button;
        private _galaxy: objects.Galaxy;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this._galaxy = new objects.Galaxy();
            this._endLabel = new objects.Label("You Win!", "60px", "boston", "#FFE000", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this._backButton = new objects.Button("BackButton", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT+100, true);

            this.Main();
        }

        public Update():void {
            this._galaxy.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log("Started - END SCENE");
            this.addChild(this._galaxy);
            this.addChild(this._endLabel);
            this.addChild(this._backButton);

            this.addChild(managers.Game.scoreBoard.HighScoreLabel);

            this._backButton.on("click", function(){
                managers.Game.scoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        }
    }
}