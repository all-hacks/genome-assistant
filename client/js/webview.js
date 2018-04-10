let connection = null;

const registerTechvWebSdk = function() {
    return new TechvWebSdk({
        channelUrl: channelUrl,
        bot: bot,
        user: user
    });
};

const registerTypeHandler = function() {
    $('.b-card, .b-row').on('click', function() {
        const card = $(this);
        const id = card.attr('id');

        connection.sendPostbackMessage(`choice?${id}`);
    });
};

(function() {
    connection = registerTechvWebSdk();
    registerTypeHandler();
})();