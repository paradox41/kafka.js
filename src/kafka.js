(function(document) {
    'use strict';

    function Kafka() {
        this.anchors = document.getElementsByTagName('a');

        this.shuffle(this.anchors);
    }

    // Fisher-Yates shuffle courtesy of http://bost.ocks.org/mike/shuffle/
    Kafka.prototype.shuffle = function(array, callback) {
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

    return new Kafka();
})(document);
