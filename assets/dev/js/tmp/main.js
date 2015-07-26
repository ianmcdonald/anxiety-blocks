var anxietyblocks = (function() {
    return {
        
        player: function(block) {
            var elem = document.getElementById(block),
                elPl = elem.querySelector('audio');

            function playControl() {
                if (!elPl.paused) {
                    elPl.pause();
                    elem.className = 'block';
                } else {
                    elPl.play();
                    elem.className = 'block playing';
                }        
            }
            elem.addEventListener('click', playControl);
            if (elPl.ended) {
                elem.className = 'block';
            }
        },

        sizer: function() {
            function setSize() {
                var blocks = document.querySelectorAll('.block'),
                    width  = blocks[0].offsetWidth;
                if (window.innerWidth > 549) {
                    for (var i = 0; i < blocks.length; i++) {
                        blocks[i].style.height = width + 'px';
                    }
                }
            }
            document.addEventListener('DOMContentLoaded', setSize);
            window.addEventListener('resize', setSize);
        }
    };

    
})();


anxietyblocks.player('ab1');
anxietyblocks.player('ab2');
anxietyblocks.player('ab3');
anxietyblocks.sizer();
