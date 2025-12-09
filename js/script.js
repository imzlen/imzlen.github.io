        // Inisialisasi Lucide Icons
        lucide.createIcons();

        // Animasi Typing Loop
        const textElement = document.getElementById('zlen-typing');
        const phrases = ["Videographer", "Photographer", "Editor", "IT"];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 150;

        function type() {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                textElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 75; 
            } else {
                textElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 150; 
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                typingSpeed = 1500;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingSpeed = 250; 
            }

            setTimeout(type, typingSpeed);
        }
        document.addEventListener('DOMContentLoaded', type);

        
       
  
    document.addEventListener('DOMContentLoaded', () => {
        const slidesContainer = document.getElementById('slides-container-responsive');
        const prevButton = document.getElementById('prev-button-responsive');
        const nextButton = document.getElementById('next-button-responsive');
        const slides = slidesContainer.children;
        const totalSlides = slides.length; 
        let currentSlide = 0;

        function getItemsPerView() {
            // Cek apakah lebar layar >= 768px (Desktop/Tablet)
            return window.innerWidth >= 768 ? 3 : 1;
        }

        function updateSliderPosition() {
            const itemsPerView = getItemsPerView();
            const slideWidthPercentage = 100 / itemsPerView;
            const maxSlideIndex = totalSlides - itemsPerView;
            
            // Pastikan posisi saat ini tidak melebihi batas
            if (currentSlide > maxSlideIndex) {
                 currentSlide = (maxSlideIndex > 0) ? maxSlideIndex : 0;
            }

            // Pergeseran tetap menggunakan 100% dibagi itemsPerView, 
            // tetapi currentSlide akan meloncat 3.
            slidesContainer.style.transform = `translateX(-${currentSlide * slideWidthPercentage}%)`;
        }

        prevButton.addEventListener('click', () => {
            const itemsPerView = getItemsPerView();
            const maxSlideIndex = totalSlides - itemsPerView;

            // Jika Desktop, kurangi 3 slide. Jika Mobile, kurangi 1 slide.
            const step = itemsPerView; 
            
            currentSlide = currentSlide - step;
            if (currentSlide < 0) {
                 // Kembali ke grup terakhir yang terlihat
                 currentSlide = (maxSlideIndex > 0) ? maxSlideIndex : 0;
            }
            updateSliderPosition();
        });

        nextButton.addEventListener('click', () => {
            const itemsPerView = getItemsPerView();
            const maxSlideIndex = totalSlides - itemsPerView;

            // Jika Desktop, tambah 3 slide. Jika Mobile, tambah 1 slide.
            const step = itemsPerView;

            currentSlide = currentSlide + step;
            if (currentSlide > maxSlideIndex) {
                 // Kembali ke slide pertama
                 currentSlide = 0;
            }
            updateSliderPosition();
        });

        // Event handler resize tetap sama
        window.addEventListener('resize', () => {
             currentSlide = 0;
             updateSliderPosition();
        });

        updateSliderPosition();
    });





        // Detail Post Modal Logic (Tetap dipertahankan untuk kebutuhan halaman portfolio)
        const modal = document.getElementById('detail-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalDesc = document.getElementById('modal-description');
        const modalType = document.getElementById('modal-type');

        function showDetail(title, description, type) {
            modalTitle.textContent = title;
            modalDesc.textContent = description;
            modalType.textContent = 'Client : ' + type;

            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.add('opacity-100');
                modal.querySelector('.glass-card').classList.add('scale-100');
                modal.querySelector('.glass-card').classList.remove('scale-95');
            }, 50);
        }

        function closeModal() {
            modal.classList.remove('opacity-100');
            modal.querySelector('.glass-card').classList.remove('scale-100');
            modal.querySelector('.glass-card').classList.add('scale-95');

            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }
        
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target.id === 'detail-modal') {
                    closeModal();
                }
            });
        }
        window.showDetail = showDetail;
        window.closeModal = closeModal;

        // Back to Top Button Logic
        const backToTopBtn = document.getElementById('back-to-top');

        window.onscroll = function() { scrollFunction(); };

        function scrollFunction() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                backToTopBtn.classList.add('opacity-100');
            } else {
                backToTopBtn.classList.remove('opacity-100');
            }
        }

        if (backToTopBtn) {
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        
        // Scroll Reveal Animation (Intersection Observer)
        function initScrollReveal() {
            const revealElements = document.querySelectorAll('[data-scroll-reveal]');
            
            revealElements.forEach(el => el.classList.remove('revealed'));


            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        
                        const delayAttr = entry.target.getAttribute('data-scroll-reveal');
                        const delay = delayAttr && delayAttr.includes('delay-') 
                            ? parseInt(delayAttr.split('-')[1]) * 100 
                            : 0; 

                        setTimeout(() => {
                            entry.target.classList.add('revealed');
                            observer.unobserve(entry.target); 
                        }, delay);
                    }
                });
            }, {
                rootMargin: '0px',
                threshold: 0.1 
            });

            revealElements.forEach(element => {
                if (element.getBoundingClientRect().top < window.innerHeight) {
                    element.classList.add('revealed');
                } else {
                    observer.observe(element);
                }
            });
        }

        document.addEventListener('DOMContentLoaded', initScrollReveal);

        
        


    