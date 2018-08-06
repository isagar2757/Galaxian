var managers;
(function (managers) {
    var ScoreBoard = /** @class */ (function () {
        // constructors
        function ScoreBoard() {
            this.Start();
        }
        Object.defineProperty(ScoreBoard.prototype, "LivesLabel", {
            // public properties
            /**
             * This returns a reference to the LivesLabel object
             *
             * @readonly
             * @type {objects.Label}
             */
            get: function () {
                return this._livesLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "ScoreLabel", {
            /**
             * This returns a reference to the ScoreLabel object
             *
             * @readonly
             * @type {objects.Label}
             * @memberof ScoreBoard
             */
            get: function () {
                return this._scoreLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScoreLabel", {
            /**
             * This returns a reference to the HighScoreLabel object
             *
             * @readonly
             * @type {objects.Label}
             */
            get: function () {
                return this._highScoreLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Lives", {
            get: function () {
                return this._lives;
            },
            set: function (newValue) {
                this._lives = newValue;
                if (this._lives <= 0) {
                    managers.Game.CurrentState = config.Scene.END;
                }
                else {
                    this.LivesLabel.text = "Lives: " + this._lives;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScore", {
            get: function () {
                return this._highScore;
            },
            set: function (newValue) {
                this._highScore = newValue;
                this.HighScoreLabel.text = "High Score: " + this._highScore;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Score", {
            get: function () {
                return this._score;
            },
            set: function (newValue) {
                this._score = newValue;
                this.ScoreLabel.text = "Score: " + this._score;
                if (this._score > this.HighScore) {
                    this.HighScore = this._score;
                }
                if (this._score >= 100) {
                    managers.Game.CurrentState = config.Scene.BOSS1;
                }
                if (this._score >= 200) {
                    managers.Game.CurrentState = config.Scene.LEVEL2;
                }
                if (this._score >= 300) {
                    managers.Game.CurrentState = config.Scene.BOSS2;
                }
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        // public methods
        ScoreBoard.prototype.Start = function () {
            this._livesLabel = new objects.Label("Lives: 99", "30px", "Consolas", "#E07AA2", 20, 20, false);
            this._scoreLabel = new objects.Label("Score: 99999", "30px", "Consolas", "#E07AA2", 600, 20, false);
            this._highScoreLabel = new objects.Label("High Score: 999999", "60px", "Consolas", "#E07AA2", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT - 150, true);
            this.HighScore = 0;
            this.Reset();
        };
        ScoreBoard.prototype.Reset = function () {
            this.Lives = 5;
            this.Score = 0;
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map