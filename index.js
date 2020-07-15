var WINDOW_WIDTH;
var WINDOW_HEIGHT;
var BOTTOM_WIDTH;
var BOTTOM_HEIGHT;
var DISPLAY_WIDTH;
var DISPLAY_HEIGHT;

var top_view;
var display_pane;
var bottom_pane;
var bottom_pane_border;

var initY;
var dragging = false;
var differenceY;

function initialize() {
    top_view = $('.top-view');
    display_pane = $('.display-pane');
    bottom_pane = $('.bottom-pane');
    bottom_pane_border = $('.bottom-pane-border');
    WINDOW_WIDTH = $(document).width();
    WINDOW_WIDTH = $(document).height();
    BOTTOM_WIDTH = bottom_pane.width();
    BOTTOM_HEIGHT = bottom_pane.height();
    DISPLAY_WIDTH = $(document).width();
    DISPLAY_HEIGHT = $(document).height();
    top_view.css('max-height', ($(document).height() - 213) + 'px');

    top_view.css('height', (DISPLAY_HEIGHT - BOTTOM_HEIGHT - 3) + 'px');
    display_pane.css('height', (WINDOW_HEIGHT - BOTTOM_HEIGHT - 3) + 'px');

    bottom_pane_border.mousedown(function (event) {
        initY = event.pageY;
        dragging = true;
    });
    $(document).mouseup(function (event) {
        dragging = false;
    });
    $(document).mousemove(function (event) {
        if (dragging) {
            differenceY = initY - event.pageY;
            var max = bottom_pane.css('max-height').substr(0, bottom_pane.css('max-height').indexOf('px'));
            if (((max > bottom_pane.height()) && (differenceY > 0)) || (differenceY < 0)) {
                bottom_pane.css('height', bottom_pane.height() + differenceY / 2 + 'px');
                top_view.css('height', top_view.height() - differenceY / 2 + 'px');
                initY = event.pageY;
            }
        }
    });
}

$(document).ready(() => {
    initialize();
});