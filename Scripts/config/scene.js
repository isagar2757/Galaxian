var config;
(function (config) {
    var Scene;
    (function (Scene) {
        Scene[Scene["START"] = 0] = "START";
        Scene[Scene["INSTRUCTION"] = 1] = "INSTRUCTION";
        Scene[Scene["PLAY"] = 2] = "PLAY";
        Scene[Scene["BOSS1"] = 3] = "BOSS1";
        Scene[Scene["LEVEL2"] = 4] = "LEVEL2";
        Scene[Scene["BOSS2"] = 5] = "BOSS2";
        Scene[Scene["LEVEL3"] = 6] = "LEVEL3";
        Scene[Scene["BOSS3"] = 7] = "BOSS3";
        Scene[Scene["END"] = 8] = "END";
    })(Scene = config.Scene || (config.Scene = {}));
})(config || (config = {}));
//# sourceMappingURL=scene.js.map