import {reset, setUpModeButtons, setUpSquares} from './colors.js';

(function (window, document) {

    init();
    function init() {
        setUpModeButtons();
        setUpSquares();
        reset();
    }

})(window, document);
