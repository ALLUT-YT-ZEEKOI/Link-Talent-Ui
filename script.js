// find job js
       const wrapper = document.getElementById('latestCardsWrapper');
        const cards = wrapper.querySelectorAll('.featured-card');
        const leftBtn = document.getElementById('latestScrollLeft');
        const rightBtn = document.getElementById('latestScrollRight');
        let currentIndex = 0;
        
        function updateCarousel() {
            const cardWidth = cards[0].offsetWidth + 20; // 20px gap
            wrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            
          
            leftBtn.disabled = currentIndex === 0;
            rightBtn.disabled = currentIndex >= cards.length - 3; 
        }
        
        leftBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
        
        rightBtn.addEventListener('click', () => {
            if (currentIndex < cards.length - 3) { 
                currentIndex++;
                updateCarousel();
            }
        });
        
       
        window.addEventListener('resize', updateCarousel);
        
       
        updateCarousel();