document.addEventListener('DOMContentLoaded', function () {
    const prince = document.querySelector('.character');
    let bottom = 0;
    let gravity = 0.9;
    let isJumping = false;
    let isGoingleft = false;
    let left = 0;
    let leftInterval; // Declare the interval variable
    let isGoingright = false;
    let rightInterval;
    let right = 0;

    function jump() {
        
        if (isJumping) return;
        prince.classList.remove('slide')
        prince.classList.add('character')
      
        isJumping = true;

        let intervalUp = setInterval(function () {
            bottom += 30;
            bottom = bottom * gravity;
            console.log(bottom);
            prince.style.bottom = bottom + 'px';

            if (bottom > 250) {
                clearInterval(intervalUp);
                let intervalDown = setInterval(function () {
                    bottom -= 5;
                    prince.style.bottom = bottom + 'px';
                    if (bottom < 0) {
                        clearInterval(intervalDown);
                        isJumping = false;
                    }
                }, 30);
            }
        }, 30);
    }

    // Call jump immediately
    jump();

    function slideleft() {
        prince.classList.add('slide')
        prince.classList.remove('character')
        if (isGoingright) {
            clearInterval(rightInterval);
            isGoingright = false;
        }
        if (isGoingleft) return;
        isGoingleft = true;
        leftInterval = setInterval(function () {
            left -= 5;
            prince.style.left = left + 'px';
            console.log('left');
        }, 20);
    }

    function slideright() {
        prince.classList.add('slide')
        prince.classList.remove('character')
        if (isGoingleft) {
            clearInterval(leftInterval);
            isGoingleft = false;
        }
        if (isGoingright) return;
        isGoingright = true;
        rightInterval = setInterval(function () {
            left += 5; // Modify the 'left' property for sliding right
            prince.style.left = left + 'px'; // Use 'left' property for sliding right
            console.log('right');
        }, 20);
    }

    function control(e) {
        if (e.keyCode === 38) {
            jump();
        } else if (e.keyCode === 37) {
            slideleft();
        } else if (e.keyCode === 39) {
            slideright();
        }
    }
    document.addEventListener('keydown', control);
});
