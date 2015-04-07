(function (win, $) {
    $.extend({
        go: function (config) {
            var keys = [];
            $('body').on('keypress', function (evt) {
                keys.push(String.fromCharCode(evt.keyCode));
                for (var key in config) {
                    if (key === keys.slice(key.length * -1).join('')) {
                        keys.length = 0;
                        config[key]();
                    }
                }
            });
        }
    });
})(window, jQuery);
