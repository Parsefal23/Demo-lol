
            let currentSlide = 0;
            const slides = document.querySelectorAll('.carousel-inner img');
            const totalSlides = slides.length;
            
            function showSlide(n) {
                slides.forEach(slide => slide.style.display = 'none');
                slides[n].style.display = 'block';
            }
            
            document.querySelector('.carousel-next').onclick = () => {
                currentSlide = (currentSlide + 1) % totalSlides;
                showSlide(currentSlide);
                 updateIndicators();
            };
            
            document.querySelector('.carousel-prev').onclick = () => {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                showSlide(currentSlide);
                                updateIndicators();
                            };
                            
                            function updateIndicators() {
                                document.querySelectorAll('.indicator').forEach((indicator, index) => {
                                    indicator.classList.toggle('active', index === currentSlide);
                                });
                            }
                            
                            document.querySelectorAll('.indicator').forEach(indicator => {
                                indicator.onclick = () => {
                                    currentSlide = parseInt(indicator.dataset.slide);
                                    showSlide(currentSlide);
                                    updateIndicators();
                                };
                            });
                            
                            updateIndicators();

            showSlide(0);
