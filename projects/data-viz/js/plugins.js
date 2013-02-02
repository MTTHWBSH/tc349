// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// Place any jQuery/helper plugins in here.

(function($) {
    $.fn.SmoothAnchors = function() {

        function scrollBodyTo(destination, hash) {

            // Change the hash first, then do the scrolling. This retains the standard functionality of the back/forward buttons.
            var scrollmem = $(document).scrollTop();
            window.location.hash = hash;
            $(document).scrollTop(scrollmem);
            $("html,body").animate({
                scrollTop: destination
            }, 400);

        }

        if (typeof $().on == "function") {
            $(document).on('click', 'a[href^="#"]', function() {

                var href = $(this).attr("href");

                if ($(href).length == 0) {

                    var nameSelector = "[name=" + href.replace("#", "") + "]";

                    if (href == "#") {
                        scrollBodyTo(0, href);
                    }
                    else if ($(nameSelector).length != 0) {
                        scrollBodyTo($(nameSelector).offset().top, href);
                    }
                    else {
                        // fine, we'll just follow the original link. gosh.
                        window.location = href;
                    }
                }
                else {
                    scrollBodyTo($(href).offset().top, href);
                }
                return false;
            });
        }
        else {
            $('a[href^="#"]').click(function() {
                var href = $(this).attr("href");

                if ($(href).length == 0) {

                    var nameSelector = "[name=" + href.replace("#", "") + "]";

                    if (href == "#") {
                        scrollBodyTo(0, href);
                    }
                    else if ($(nameSelector).length != 0) {
                        scrollBodyTo($(nameSelector).offset().top, href);
                    }
                    else {
                        // fine, we'll just follow the original link. gosh.
                        window.location = href;
                    }
                }
                else {
                    scrollBodyTo($(href).offset().top, href);
                }
                return false;
            });
        }
    };
})(jQuery);

$(document).ready(function() {
    $().SmoothAnchors();
});
