/*! Konami v1.0.1 | (c) 2013 Antoine FRITEAU | antoinfriteau.fr/licenses
*/

(function( $ ) {
    "use strict";

    $.fn.konami = function( options ) {

        var opts, konamiCode, controllerCode;

        var opts = $.extend({}, $.fn.konami.defaults, options); // extends options

        return this.each(function() {

            konamiCode      = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
            controllerCode  = [];

            $( window ).keyup(function( evt ) {

                controllerCode.push( evt.keyCode ? evt.keyCode : evt.which );

                if( controllerCode.toString().indexOf( konamiCode ) >= 0 ) {
                    opts.reveal();
                    controllerCode = [];
                }

            });

        });

    };

    $.fn.konami.defaults = {
        reveal: null
    };

}(jQuery))