var t;

//'use strict';

var SECOND = 1000,
    MINUTE = SECOND * 60,

    timer = function () {

        'use strict';

        /**
         * variables
         */
        var self = {},
            running,
            parent,
            next,
            interval;

        /**
         * get current timestamp
         * @return {number} timestamp
         */
        var now = function () {
            return (new Date()).getTime();
        };

        /**
         * execute next step
         * @return {boolean}
         */
        var isNext = function () {
            //console.log(next, now(), next - now())
            var is = (next || now()) <= now();
            if (is)
                next = now() + interval;
            return is;
        };


        /**
         * get one dot node
         * @param  {numeric} id
         * @return {jquery}
         */
        var dot = function (id) {
            return $('<div>')
                    .attr('id', id);
        };

        /**
         * append timer to node
         * @param  {number} time in milliseconds
         * @param  {jquery} node
         * @return {object} timer
         */
        self.init = function (time, node) {
            parent = node || $('body');
            time = time || MINUTE;
            interval = SECOND;
            var nodes = [];

            //viewport
            var rows = $(window).height() / 95;
            var cols = $(window).width() / 95;
            var count = Math.round(rows * cols);

            //get interval to remove last
            //dot when countdown ends
            interval = time / count;

            //add nodes
            for (var i = count; i >= 0; i--) {
                nodes.push(dot(i));
            }
            parent.append(nodes);
            return this;
        };

        /**
         * @return {Boolean}
         */
        self.isRunning = function () {
            return running;
        };

        /**
         * @return timer
         */
        self.start = function () {
            running = true;
            return this;
        };

        /**
         * @return timer
         */
        self.pause = function () {
            running = false;
            return this;
        };

        /**
         * @return timer
         */
        self.reset = function () {
            return self.init(parent);
        };


        /**
         * task runner
         */
        var intervalId = setInterval(function () {

            if (self.isRunning() && isNext()) {
                //remove node
                var divs = $('body').find('div'),
                    node = $(divs[divs.length - 1]);
                if (divs.length !== 0)
                    node.fadeOut(400, function () { node.remove(); });
                else {
                    clearInterval(intervalId);
                }
            }
        }, SECOND / 10);


        return self;
    };

//onready
$(window).load(function () {

    'use strict';

    console.log($('body').height());
    t = timer().init(10 * SECOND).start();
    //t.pause();
});