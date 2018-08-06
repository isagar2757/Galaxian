module managers {
    export class Game {
        public static AssetManager:createjs.LoadQueue;
        public static CurrentScene:objects.Scene;
        public static CurrentState:config.Scene;
        public static Stage:createjs.Stage;
        public static scoreBoard: managers.ScoreBoard;
        public static keyboardManager: managers.Keyboard;
    }
}