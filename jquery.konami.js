/*!
 * Konami v1.0.1
 * https://github.com/antoinefriteau/konami
 * MIT licensed
 *
 * Copyright (c) 2013 Antoine FRITEAU, antoinfriteau.fr
 */

(function( $ ) {
    "use strict";

    $.fn.konami = function( options ) {

        var opts, konamiCode, keys;

        var opts = $.extend({}, $.fn.konami.defaults, options); // extends options

        return this.each(function() {

            konamiCode  = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
            keys        = [];

            $( window ).keyup(function( evt ) {

                keys.push( evt.keyCode ? evt.keyCode : evt.which );

                if( keys.toString().indexOf( konamiCode ) >= 0 ) {
                    opts.reveal();
                    keys = [];
                }

            });

        });

    };

    $.fn.konami.defaults = {
        reveal: null
    };

}(jQuery))