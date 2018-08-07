//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function () {
    // Game Variables
    var canvas;
    var stage;
    var AssetManager;
    var CurrentScene;
    var CurrentState;
    var ScoreBoard;
    var keyboardManager;
    // let Manifest = [
    //     {id: "StartButton", src:"/Assets/images/playBtn.png"},
    //     {id: "NextButton", src:"/Assets/images/instructionBtn.png"},
    //     {id: "BackButton", src:"/Assets/images/replayBtn.png"},
    //     {id: "plane", src:"/Assets/images/doodle.png"},
    //     {id: "island", src:"/Assets/images/monster.png"},
    //     {id: "coin", src:"/Assets/images/replayBtn.png"},
    //     {id: "ocean", src:"/Assets/images/dark.png"},
    //     {id: "cloud", src:"/Assets/images/fireball.png"},
    //     {id: "bullet", src:"/Assets/images/bullet.png"},
    //     {id: "yay", src:"/Assets/audio/ouch.mp3"},
    //     {id: "thunder", src:"/Assets/audio/collision.mp3"},
    //     {id: "background", src:"/Assets/audio/background.mp3"},
    //     {id: "explosion", src:"/Assets/audio/hit.mp3"}
    // ]
    var Manifest = [
        { id: "StartButton", src: "/Assets/images/playBtn.png" },
        { id: "NextButton", src: "/Assets/images/instructionBtn.png" },
        { id: "BackButton", src: "/Assets/images/replayBtn.png" },
        { id: "plane", src: "/Assets/images/player.png" },
        { id: "island", src: "/Assets/images/monster.png" },
        { id: "ocean", src: "/Assets/images/background.png" },
        { id: "cloud", src: "/Assets/images/rock.png" },
        { id: "bullet", src: "/Assets/images/bullet.png" },
        { id: "level1", src: "/Assets/images/boss1.png" },
        { id: "level2", src: "/Assets/images/boss2.png" },
        { id: "level3", src: "/Assets/images/boss3.png" },
        { id: "timer", src: "/Assets/images/coin.png" },
        { id: "collisionRock", src: "/Assets/audio/collision_rock.mp3" },
        { id: "collisionEnemy", src: "/Assets/audio/collision_enemy.mp3" },
        { id: "background", src: "/Assets/audio/background.mp3" },
        { id: "bulletSound", src: "/Assets/audio/bullet.mp3" }
    ];
    function Init() {
        console.log("%c Assets Loading...", "font-weight:bold; font-size:20px; color: green;");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager; // set as single instance of the LoadQueue object
        AssetManager.installPlugin(createjs.Sound); // enables sound file preloading
        AssetManager.on("complete", Start);
        AssetManager.loadManifest(Manifest);
    }
    function Start() {
        console.log("%c Game Initializing...", "font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.Stage = stage;
        stage.enableMouseOver(20); // enables mouse over events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);
        CurrentState = config.Scene.START;
        managers.Game.CurrentState = CurrentState;
        ScoreBoard = new managers.ScoreBoard;
        managers.Game.scoreBoard = ScoreBoard;
        keyboardManager = new managers.Keyboard();
        managers.Game.keyboardManager = keyboardManager;
        // This is where all the magic happens
        Main();
    }
    function Update() {
        if (CurrentState != managers.Game.CurrentState) {
            CurrentState = managers.Game.CurrentState;
            Main();
        }
        CurrentScene.Update();
        stage.update();
    }
    function Main() {
        console.log("%c Scene Switching...", "font-style:italic; font-size:16px; color:blue;");
        if (CurrentScene) {
            CurrentScene.Destroy();
            stage.removeChild(CurrentScene);
        }
        switch (CurrentState) {
            case config.Scene.START:
                CurrentScene = new scenes.Start();
                break;
            case config.Scene.PLAY:
                CurrentScene = new scenes.Play();
                break;
            case config.Scene.INSTRUCTION:
                CurrentScene = new scenes.Instruction();
                break;
            case config.Scene.BOSS1:
                CurrentScene = new scenes.Boss1();
                break;
            case config.Scene.LEVEL2:
                CurrentScene = new scenes.Level2();
                break;
            case config.Scene.BOSS2:
                CurrentScene = new scenes.Boss2();
                break;
            case config.Scene.LEVEL3:
                CurrentScene = new scenes.Level3();
                break;
            case config.Scene.BOSS3:
                CurrentScene = new scenes.Boss3();
                break;
            case config.Scene.END:
                CurrentScene = new scenes.End();
                break;
            case config.Scene.WIN:
                CurrentScene = new scenes.Win();
                break;
        }
        managers.Game.CurrentScene = CurrentScene;
        stage.addChild(CurrentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map