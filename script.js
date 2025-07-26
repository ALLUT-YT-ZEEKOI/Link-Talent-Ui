
$(document).ready(function () {
    const $wrapper = $('.job-card-scroll');
    const $cards = $wrapper.children('.col-lg-4'); 
    const $leftBtn = $('#latestScrollLeft');
    const $rightBtn = $('#latestScrollRight');
    let currentIndex = 0;

    function updateCarousel() {
        const cardWidth = $cards.first().outerWidth(true); 
        $wrapper.animate({ scrollLeft: currentIndex * cardWidth }, 300);

        $leftBtn.prop('disabled', currentIndex === 0);
        $rightBtn.prop('disabled', currentIndex >= $cards.length - 3);
    }

    $leftBtn.on('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    $rightBtn.on('click', function () {
        if (currentIndex < $cards.length - 3) {
            currentIndex++;
            updateCarousel();
        }
    });

    $(window).on('resize', updateCarousel);
    updateCarousel();
});
