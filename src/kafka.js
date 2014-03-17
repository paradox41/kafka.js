/* global define: true */
/* jshint loopfunc: true */
(function(document) {
    'use strict';

    var quotes = [
        'You are now a giant insect.',
        'You have been charged with a crime, the details of which you are not allowed to know.',
        'No',
        'Maybe',
        'Are you sure?',
        'Yes'
    ];

    // Get a random integer between min and max
    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function Kafka() {
        this.anchors = document.querySelectorAll('a');

        this.shuffle(this.anchors);
    }

    // Fisher-Yates shuffle courtesy of http://bost.ocks.org/mike/shuffle/
    Kafka.prototype.shuffle = function(array) {
        var m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m].href;
            array[m].href = array[i].href;
            array[i].href = t;
        }

        return array;
    };

    // CommonJS module
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = Kafka;
        }
        exports.Kafka = Kafka;
    }

    // Register as a named AMD module
    if (typeof define === 'function' && define.amd) {
        define('Kafka', [], function() {
            return Kafka;
        });
    }

    return new Kafka();
})(document);
