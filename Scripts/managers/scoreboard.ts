module managers {
    export class ScoreBoard {
        // private member variables
        private _lives:number;
        private _score:number;
        private _highScore:number;
        private _livesLabel:objects.Label;
        private _scoreLabel:objects.Label;
        private _highScoreLabel:objects.Label;

        // public properties

        /**
         * This returns a reference to the LivesLabel object
         *
         * @readonly
         * @type {objects.Label}
         */
        get LivesLabel():objects.Label {
            return this._livesLabel;
        }

        /**
         * This returns a reference to the ScoreLabel object
         *
         * @readonly
         * @type {objects.Label}
         * @memberof ScoreBoard
         */
        get ScoreLabel():objects.Label {
            return this._scoreLabel;
        }

        /**
         * This returns a reference to the HighScoreLabel object
         *
         * @readonly
         * @type {objects.Label}
         */
        get HighScoreLabel():objects.Label {
            return this._highScoreLabel;
        }


        get Lives():number {
            return this._lives;
        }

        set Lives(newValue:number) {
            this._lives = newValue;
            if(this._lives <= 0) {
                managers.Game.CurrentState = config.Scene.END;
            }
            else {
                this.LivesLabel.text = "Lives: " + this._lives;
            }
        }

        get HighScore():number {
            return this._highScore;
        }

        set HighScore(newValue:number) {
            this._highScore = newValue;
            this.HighScoreLabel.text = "High Score: " + this._highScore;
        }

        get Score():number {
            return this._score;
        }

        set Score(newValue:number) {
            this._score = newValue;
            this.ScoreLabel.text = "Score: " + this._score;
            if(this._score > this.HighScore) {
                this.HighScore = this._score;
            }
            if(this._score >= 500) {
                managers.Game.CurrentState = config.Scene.BOSS1;
            }
            if(this._score >= 1000) {
                managers.Game.CurrentState = config.Scene.LEVEL2;
            }
            if(this._score >= 1500) {
                managers.Game.CurrentState = config.Scene.BOSS2;
            }
            if(this._score >= 2000) {
                managers.Game.CurrentState = config.Scene.LEVEL3;
            }
            if(this._score >= 3000) {
                managers.Game.CurrentState = config.Scene.BOSS3;
            }
        }

        
        // constructors
        constructor() {
            this.Start();
        }

        // private methods

        // public methods
        public Start() {
            this._livesLabel = new objects.Label("Lives: 99", "30px", "Consolas", "#E07AA2", 20, 20, false);
            this._scoreLabel = new objects.Label("Score: 99999", "30px", "Consolas", "#E07AA2", 600, 20, false);
            this._highScoreLabel = new objects.Label("High Score: 999999", "60px", "Consolas", "#E07AA2", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT-150, true);
            
            this.HighScore = 0;
            this.Reset();
        }

        public Reset() {
            this.Lives = 5;
            this.Score = 0;
        }
    }
}