const registerWebControl = function(container) {
    return new TechvWebControl({
        container: container,
        isAudioMuted: false,
        connector: {
            channelUrl: channelUrl,
            bot: bot,
            user: user
        }
    });
};

const registerAvatar = function () {
    SDK.applicationId = "7161364628220568843";
    var sdk = new SDKConnection();
    var web = new WebAvatar();
    web.connection = sdk;
    web.avatar = "13974718";
    web.voice = "cmu-slt";
    web.voiceMod = "default";
    web.nativeVoice = true;
    web.nativeVoiceName = "Google UK English Male";
    web.width = "330";
    web.height = "300";
    web.createBox();
    web.addMessage("", "", "", "");
    web.processMessages();
};

(function() {
    registerWebControl('#app');
    registerAvatar();
})();
