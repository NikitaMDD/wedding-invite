document.addEventListener('DOMContentLoaded', () => {
    const weddingDate = new Date('2026-07-18T00:00:00+03:00');
    const daysEl = document.getElementById('days');
    const monthsEl = document.getElementById('months');
    const yearsEl = document.getElementById('years');

    const mapUrl = 'https://yandex.ru/maps/-/CPr8jD4T';
    const mapLink = document.getElementById('mapLink');

    const wishlistUrl = 'https://followish.io/mywishlist/mhqo5owyx7omiz';
    const wishlistLink = document.getElementById('wishlistBtn');

    const guestName = document.getElementById('guestsName');
    const params = new URLSearchParams(window.location.search);
    const guestKey = params.get("guest") || "default";

    /**
     *
     * Вероника и Станислав
     * Мария и Дмитрий
     * Ирина Витальевна и Николай Васильевич
     * Нина Янисовна и Сергей Алексеевич
     * Григорий Сергеевич
     * Наталья и Роман
     * Наталья и Денис
     * Юлия и Сергей
     * Елена и Александр
     * Ирина и Сергей
     *
     **/

    const guests = {
        parents: { title: "Дорогие Мама и Папа!",},
        mariaAndDmitry: { title: "Дорогие Мария и Дмитрий!",},
        irinaAndNikolay: { title: "Дорогие Ирина Витальевна и Николай Васильевич!",},
        ninaAndSergey: { title: "Дорогие Нина Янисовна и Сергей Алексеевич!",},
        grigoriy: { title: "Дорогой Григорий Сергеевич!",},
        nataliaAndRoman: { title: "Дорогие Наталья и Роман!",},
        nataliaAndDenis: { title: "Дорогие Наталья и Денис!",},
        juliaAndSergey: { title: "Дорогие Юлия и Сергей!",},
        elenaAndAlexandr: { title: "Дорогие Мама и Папа!",},
        irinaAndSergey: { title: "Дорогие Ирина и Сергей!",},
        default: { title: "Дорогие гости!", }
    };

    const data = guests[guestKey] || guests.default;

    guestName.textContent = data.title;

    mapLink.addEventListener('click', (e) => {
        window.location.replace(mapUrl);
    })

    wishlistLink.addEventListener('click', (e) => {
        window.location.replace(wishlistUrl);
    })

    const GALLERY_DATA = {
        'dress-code__circle--white-women': [
            { src: 'assets/img/women-yellow.jpg', title: 'Желтый', desc: 'Классика для нежного образа' },
            { src: 'assets/img/women-yellow-2.jpg', title: 'Желтый', desc: 'Классика для нежного образа' },
            { src: 'assets/img/women-yellow-3.jpg', title: 'Желтый', desc: 'Классика для нежного образа' },
            { src: 'assets/img/women-yellow-4.jpg', title: 'Желтый', desc: 'Классика для нежного образа' },
        ],
        'dress-code__circle--light-blue-women': [
            { src: 'assets/img/women-blue.jpg', title: 'Голубой', desc: 'Нежность утреннего неба' },
            { src: 'assets/img/women-blue-1.jpg', title: 'Голубой', desc: 'Пастельный акцент' },
            { src: 'assets/img/women-blue-2.jpg', title: 'Голубой', desc: 'Пастельный акцент' },
            { src: 'assets/img/women-blue-3.jpg', title: 'Голубой', desc: 'Пастельный акцент' },
            { src: 'assets/img/women-blue-4.jpg', title: 'Голубой', desc: 'Пастельный акцент' },
        ],
        'dress-code__circle--brown-women': [
            { src: 'assets/img/women-brown.jpg', title: 'Коричневый', desc: 'Тёплый землистый тон' },
            { src: 'assets/img/women-brown-1.jpg', title: 'Коричневый', desc: 'Тёплый землистый тон' },
            { src: 'assets/img/women-brown-2.jpg', title: 'Коричневый', desc: 'Тёплый землистый тон' },
            { src: 'assets/img/women-brown-3.jpg', title: 'Коричневый', desc: 'Тёплый землистый тон' },
            { src: 'assets/img/women-brown-4.jpg', title: 'Коричневый', desc: 'Тёплый землистый тон' },
        ],
        'dress-code__circle--green-women': [
            { src: 'assets/img/women-green.jpg', title: 'Зелёный', desc: 'Оливковая элегантность' },
            { src: 'assets/img/women-green-1.jpg', title: 'Зелёный', desc: 'Оливковая элегантность' },
            { src: 'assets/img/women-green-2.jpg', title: 'Зелёный', desc: 'Оливковая элегантность' },
            { src: 'assets/img/women-green-3.jpg', title: 'Зелёный', desc: 'Оливковая элегантность' },
            { src: 'assets/img/women-green-4.jpg', title: 'Зелёный', desc: 'Оливковая элегантность' },
        ],
        'dress-code__circle--pink-women': [
            { src: 'assets/img/women-pink.jpg', title: 'Розовый', desc: 'Пудровый романтик' },
            { src: 'assets/img/women-pink-2.jpg', title: 'Розовый', desc: 'Нежный румянец' },
            { src: 'assets/img/women-pink-3.jpg', title: 'Розовый', desc: 'Нежный румянец' },
            { src: 'assets/img/women-pink-4.jpg', title: 'Розовый', desc: 'Нежный румянец' },
            { src: 'assets/img/women-pink-5.jpg', title: 'Розовый', desc: 'Нежный румянец' },
        ],

        'dress-code__circle--dark-white-men': [
            { src: 'assets/img/men-white.jpg', title: 'Бежевый', desc: 'Светлый классический костюм' },
            { src: 'assets/img/men-white-1.jpg', title: 'Бежевый', desc: 'Светлый классический костюм' },
            { src: 'assets/img/men-white-2.jpg', title: 'Бежевый', desc: 'Светлый классический костюм' },
            { src: 'assets/img/men-white-3.jpg', title: 'Бежевый', desc: 'Светлый классический костюм' },
            { src: 'assets/img/men-white-4.jpg', title: 'Бежевый', desc: 'Светлый классический костюм' }
        ],
        'dress-code__circle--blue-men': [
            { src: 'assets/img/men-blue.jpg', title: 'Голубой', desc: 'Свежий оттенок для лета' },
            { src: 'assets/img/men-blue-1.jpg', title: 'Голубой', desc: 'Свежий оттенок для лета' },
            { src: 'assets/img/men-blue-2.jpg', title: 'Голубой', desc: 'Деним-стиль' },
            { src: 'assets/img/men-blue-3.jpg', title: 'Голубой', desc: 'Деним-стиль' },
            { src: 'assets/img/men-blue-4.jpg', title: 'Голубой', desc: 'Деним-стиль' },
        ],
        'dress-code__circle--grey-men': [
            { src: 'assets/img/men-grey.jpg', title: 'Серый', desc: 'Строгий графит' },
            { src: 'assets/img/men-grey-1.jpg', title: 'Серый', desc: 'Строгий графит' },
            { src: 'assets/img/men-grey-2.jpg', title: 'Серый', desc: 'Строгий графит' },
            { src: 'assets/img/men-grey-3.jpg', title: 'Серый', desc: 'Строгий графит' },
            { src: 'assets/img/men-grey-4.jpg', title: 'Серый', desc: 'Строгий графит' },
        ],
        'dress-code__circle--green-men': [
            { src: 'assets/img/men-green.jpg', title: 'Зелёный', desc: 'Хвойный глубокий тон' },
            { src: 'assets/img/men-green-1.jpg', title: 'Зелёный', desc: 'Хвойный глубокий тон' },
            { src: 'assets/img/men-green-2.jpg', title: 'Зелёный', desc: 'Хвойный глубокий тон' },
            { src: 'assets/img/men-green-3.jpg', title: 'Зелёный', desc: 'Хвойный глубокий тон' },
            { src: 'assets/img/men-green-4.jpg', title: 'Зелёный', desc: 'Хвойный глубокий тон' },
        ],
        'dress-code__circle--dark-blue-men': [
            { src: 'assets/img/men-darkblue.jpg', title: 'Тёмно-синий', desc: 'Благородный навигатор' },
            { src: 'assets/img/men-darkblue-1.jpg', title: 'Тёмно-синий', desc: 'Благородный навигатор' },
            { src: 'assets/img/men-darkblue-2.jpg', title: 'Тёмно-синий', desc: 'Благородный навигатор' },
        ]
    };

    function updateTimer() {
        const now = new Date();
        if (now >= weddingDate) {
            daysEl.textContent = '00';
            monthsEl.textContent = '00';
            yearsEl.textContent = '0000';
            return;
        }
        let years = weddingDate.getFullYear() - now.getFullYear();
        let months = weddingDate.getMonth() - now.getMonth();
        let days = weddingDate.getDate() - now.getDate();
        if (days < 0) {
            months--;
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += prevMonth.getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }
        daysEl.textContent = String(days).padStart(2, '0');
        monthsEl.textContent = String(months).padStart(2, '0');
        yearsEl.textContent = String(years).padStart(4, '0');
    }

    function openColorGallery(colorClass) {
        const photos = GALLERY_DATA[colorClass];
        if (!photos || photos.length === 0) return;

        const galleryElements = photos.map(photo => ({
            href: photo.src,
            type: 'image',
            title: photo.title || '',
            desc: photo.desc || ''
        }));

        if (lightboxInstance) {
            lightboxInstance.setElements(galleryElements);
            lightboxInstance.open();
        }
    }

    updateTimer();
    setInterval(updateTimer, 60 * 60 * 1000);

    gsap.registerPlugin(ScrollTrigger);

    let lightboxInstance = null;
    if (typeof GLightbox !== 'undefined') {
        lightboxInstance = GLightbox({
            selector: '.glightbox',
            touchNavigation: true,
            loop: false,
            closeEffect: 'fade',
            zoomable: true,
            draggable: true,
            descPosition: 'bottom',
            cssEfects: { fade: { in: 'fadeIn', out: 'fadeOut' } }
        });
    }

    gsap.fromTo('.container__title .animate-from-left',
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.3 }
    );
    gsap.fromTo('.container__title .animate-from-right',
        { x: 80, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.5 }
    );
    gsap.fromTo('.container__title .animate-fade',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, delay: 0.4 }
    );

    ScrollTrigger.batch('.for-guests .animate-from-left, .for-guests .animate-from-right, .for-guests .animate-from-bottom', {
        onEnter: batch => gsap.to(batch, {
            opacity: 1, x: 0, duration: 1, ease: 'power3.out', stagger: 0.2
        }),
        start: 'top 85%', once: true
    });

    ScrollTrigger.batch('.location .animate-from-top, .location .animate-from-bottom, .location .animate-fade', {
        onEnter: batch => gsap.to(batch, {
            opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', stagger: 0.15
        }),
        start: 'top 80%', once: true
    });

    ScrollTrigger.batch('.dress-code .group-img-women, .dress-code .group-img-men', {
        onEnter: batch => gsap.to(batch, {
            opacity: 1, x: 0, duration: 1, ease: 'power3.out', stagger: 0.2
        }),
        start: 'top 85%', once: true
    });

    ScrollTrigger.batch('.dress-code__container.animate-from-left, .dress-code__container.animate-from-right', {
        onEnter: batch => {
            batch.forEach(container => {
                const circles = container.querySelectorAll('.dress-code__circle');
                const startX = container.classList.contains('animate-from-left') ? -30 : 30;

                gsap.from(circles, {
                    opacity: 0,
                    x: startX,
                    duration: 0.8,
                    stagger: 0.08,
                    ease: 'power3.out'
                });
            });
        },
        start: 'top 90%',
        once: true
    });

    ScrollTrigger.create({
        trigger: '.dress-code .text-title.animate-from-bottom',
        start: 'top 85%',
        once: true,
        onEnter: () => gsap.to('.dress-code .text-title.animate-from-bottom', {
            opacity: 1, y: 0, duration: 0.9, ease: 'power2.out'
        })
    });

    ScrollTrigger.batch('.wishes .animate-from-top, .wishes .animate-from-bottom, .wishes .animate-fade', {
        onEnter: batch => gsap.to(batch, {
            opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out', stagger: 0.2
        }),
        start: 'top 80%', once: true
    });

    gsap.utils.toArray('.flowers-block img').forEach((img, i) => {
        gsap.fromTo(img,
            { y: i % 2 === 0 ? -30 : 30, opacity: 0.8 },
            {
                y: i % 2 === 0 ? 30 : -30,
                opacity: 1,
                scrollTrigger: {
                    trigger: img.closest('.flowers-block'),
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.5
                },
                ease: 'none'
            }
        );
    });

    gsap.fromTo('.text-title__timings',
        { y: -30, opacity: 0 },
        {
            y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: '.text-title__timings', start: 'top 85%', once: true }
        }
    );

    gsap.fromTo('.line',
        { scaleY: 0, transformOrigin: 'top center' },
        {
            scaleY: 1, duration: 1.2, ease: 'power2.inOut',
            scrollTrigger: { trigger: '.line', start: 'top 80%', once: true }
        }
    );

    gsap.utils.toArray('.timings__item').forEach((item, index) => {
        const time = item.querySelector('.animate-time');
        const circle = item.querySelector('.animate-circle');
        const eventTitle = item.querySelector('.animate-event-title');
        const eventDesc = item.querySelector('.animate-event-desc');

        ScrollTrigger.create({
            trigger: item, start: 'top 85%', once: true,
            onEnter: () => {
                const tl = gsap.timeline();
                tl.fromTo(time, { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }, index * 0.3)
                    .fromTo(circle, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' }, '<')
                    .fromTo(eventTitle, { x: 20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }, '<+0.1')
                    .fromTo(eventDesc, { x: 20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }, '<+0.05');
            }
        });
    });

    if (window.innerWidth >= 1024) {
        const particlesContainer = document.querySelector('.particles-container');
        if (particlesContainer) {
            for (let i = 0; i < 25; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.width = `${2 + Math.random() * 4}px`;
                particle.style.height = particle.style.width;
                particlesContainer.appendChild(particle);

                gsap.fromTo(particle,
                    { opacity: 0, y: 0, x: 0 },
                    {
                        opacity: 0.6, y: -100, x: Math.random() > 0.5 ? 30 : -30,
                        duration: 15 + Math.random() * 20, delay: Math.random() * 3,
                        repeat: -1, ease: 'none',
                        onUpdate: function() {
                            particle.style.opacity = 0.3 + Math.sin(this.progress() * Math.PI) * 0.4;
                        }
                    }
                );
            }
        }
    }

    document.querySelectorAll('.dress-code__circle').forEach(circle => {
        const colorClass = Array.from(circle.classList).find(cls =>
            cls.startsWith('dress-code__circle--') &&
            !cls.includes('dress-code__container')
        );

        if (colorClass && GALLERY_DATA[colorClass]) {
            circle.style.cursor = 'pointer';

            circle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                openColorGallery(colorClass);
            });

            circle.addEventListener('mouseenter', () => {
                circle.style.transform = 'scale(1.15)';
                circle.style.transition = 'transform 0.2s ease';
            });
            circle.addEventListener('mouseleave', () => {
                circle.style.transform = 'scale(1)';
            });
        }
    });

    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });
});