module scenes {
    export class Start extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _instructionButton: objects.Button;
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
            this._welcomeLabel = new objects.Label("Galaxian", "80px", "boston", "#FFE000", config.Screen.HALF_WIDTH-25, config.Screen.HALF_HEIGHT-20, true);
            this._startButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH+100, config.Screen.HALF_HEIGHT+120, true);
            this._instructionButton = new objects.Button("NextButton", config.Screen.HALF_WIDTH-100, config.Screen.HALF_HEIGHT+120, true);

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
            console.log("Started - START SCENE");
            this.addChild(this._galaxy);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._instructionButton);
            

            this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);

            this._instructionButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.INSTRUCTION;
            }, this);
        }
    }
}