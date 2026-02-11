// Translation system
const translations = {
    en: {
        lang: { en: 'EN', ko: '한국어' },
        nav: {
            home: 'Home',
            ourStory: 'Our Story',
            events: 'Events',
            travel: 'Travel',
            photos: 'Photos',
            rsvp: 'RSVP'
        },
        hero: {
            date: 'December 12, 2026',
            location: 'Seoul, South Korea',
            rsvp: 'RSVP',
            viewEvents: 'View Events'
        },
        welcome: {
            title: "We're Getting Married!",
            text1: "We are so excited to celebrate this special day with our family and friends. We can't wait to share this moment with you and create beautiful memories together.",
            text2: 'Please join us on December 12, 2026 in Seoul, South Korea for our wedding celebration.'
        },
        saveDate: {
            title: 'Save the Date',
            month: 'December',
            location: 'Shilla Hotel, Seoul',
            viewDetails: 'View Event Details'
        },
        quickLinks: {
            ourStory: { title: 'Our Story', desc: 'Learn about our journey together' },
            events: { title: 'Events', desc: 'View the wedding schedule' },
            travel: { title: 'Travel', desc: 'Accommodations & directions' },
            photos: { title: 'Photos', desc: 'Share your memories' },
            rsvp: { title: 'RSVP', desc: "Let us know you're coming" }
        },
        story: {
            pageTitle: 'Our Story',
            pageSubtitle: 'The journey that brought us together',
            intro: 'Our journey together began with a chance meeting that felt like destiny. From our first conversation, we knew there was something special between us.',
            timeline: {
                '2018': {
                    title: 'How We Met',
                    text: "We first crossed paths at a coffee shop in downtown Seoul. Tyler was studying for his exams, and Clara was working on a design project. A simple \"excuse me\" turned into a conversation that lasted hours. We talked about everything - our dreams, our passions, and our favorite places in the city."
                },
                '2019': {
                    title: 'First Date',
                    text: 'Our first official date was at Namsan Tower, watching the sunset over Seoul. We knew then that this was the beginning of something beautiful. We spent the evening talking and laughing, and by the end of the night, we both knew we had found something special.'
                },
                '2021': {
                    title: 'Moving In Together',
                    text: 'After two years of dating, we decided to take the next step and move in together. It was a big decision, but it felt completely natural. We learned how to navigate life as a team, supporting each other through work challenges, family events, and everyday adventures.'
                },
                '2024': {
                    title: 'The Proposal',
                    text: 'On a beautiful spring day, Tyler proposed at the same spot where we had our first date - Namsan Tower. Surrounded by cherry blossoms and the city we both love, he got down on one knee and asked the question that would change our lives forever. Of course, Clara said yes!'
                },
                '2026': {
                    title: 'Our Wedding Day',
                    text: "Now, we're excited to celebrate our love with all of you. Our wedding day will be a reflection of our journey together - filled with love, laughter, and the people who mean the most to us. We can't wait to start this new chapter of our lives surrounded by family and friends."
                }
            },
            closing: "We're so grateful for all the love and support we've received along the way. Your presence at our wedding would mean the world to us as we begin this new chapter together.",
            signature: 'With all our love,<br><strong>Clara & Tyler</strong>'
        },
        events: {
            pageTitle: 'Wedding Events',
            pageSubtitle: 'Join us for a weekend of celebration',
            month: {
                december: 'December'
            },
            ceremony: {
                badge: 'Ceremony',
                title: 'Wedding Ceremony',
                attire: 'Formal Attire',
                description: 'Join us as we exchange vows and begin our journey together as husband and wife. The ceremony will be held in the beautiful Yeong Bin Gwan hall, followed by a traditional Korean wedding celebration.'
            },
            reception: {
                badge: 'Reception',
                title: 'Wedding Reception',
                attire: 'Cocktail / Semi-formal',
                description: 'Dinner, dancing, and celebration with our closest family and friends. The reception will feature a delicious dinner, live music, and plenty of dancing. We can\'t wait to celebrate with all of you!'
            },
            brunch: {
                badge: 'Brunch',
                title: 'Farewell Brunch',
                description: 'Join us for a casual brunch before we say our goodbyes. This is a relaxed gathering for those who want to spend a bit more time together before heading home.'
            },
            rsvpNow: 'RSVP Now'
        },
        travel: {
            pageTitle: 'Travel & Accommodations',
            pageSubtitle: 'Everything you need to know to join us',
            venue: {
                title: '📍 Venue Location',
                directions: 'Get Directions'
            },
            hotel: {
                title: '🏨 Hotel Accommodations',
                text: 'We have reserved a block of rooms at the Shilla Hotel for our wedding guests. Please mention "Clara & Tyler Wedding" when booking to receive the special group rate.',
                deadlineLabel: 'Reservation Deadline:',
                deadline: 'November 12, 2026',
                rateLabel: 'Group Rate:',
                rate: 'Available upon request',
                book: 'Book Your Room'
            },
            airport: {
                title: '✈️ Getting to Seoul',
                byAirLabel: 'By Air:',
                byAir: 'Seoul is easily accessible via Incheon International Airport (ICN), which is approximately 1 hour from the hotel by car or airport express train (AREX).',
                fromAirportLabel: 'From Airport to Hotel:',
                option1: 'Airport Express Train (AREX) to Seoul Station, then transfer to Line 3',
                option2: 'Airport Limousine Bus to Shilla Hotel',
                option3: 'Taxi or private car service (approximately 60-90 minutes)'
            },
            transport: {
                title: '🚇 Public Transportation',
                text: 'The hotel is conveniently located near Dongguk University Station (Line 3), Exit 5. Shuttle buses are provided from the hotel at Exit 5 for wedding guests.',
                subwayLabel: 'Subway:',
                subway: 'Line 3 (Orange Line) - Dongguk University Station',
                busLabel: 'Bus:',
                bus: 'Multiple bus routes serve the area'
            },
            parking: {
                title: '🅿️ Parking',
                text1: 'There is limited parking available at the hotel. We recommend using public transportation for convenience.',
                text2: 'If you need to park, please use the Valet Parking Service (additional fee applies). Please contact the hotel in advance to reserve parking.'
            },
            local: {
                title: '🌍 Local Information',
                languageLabel: 'Language:',
                language: 'Korean (English is widely spoken in hotels and tourist areas)',
                currencyLabel: 'Currency:',
                currency: 'Korean Won (KRW)',
                timezoneLabel: 'Time Zone:',
                timezone: 'KST (Korea Standard Time, UTC+9)',
                weatherLabel: 'Weather:',
                weather: 'December in Seoul is typically cold with temperatures ranging from -5°C to 5°C (23°F to 41°F). Please dress warmly!'
            }
        },
        photos: {
            pageTitle: 'Photos',
            pageSubtitle: 'Share your memories with us',
            intro: 'We\'d love to see your photos from our wedding! Share your favorite moments using the hashtag #ClaraAndTyler2026 on social media, or upload them directly to our photo gallery.',
            upload: {
                title: 'Upload Your Photos',
                text: 'Have photos from the wedding? Share them with us!',
                choose: 'Choose Photos',
                submit: 'Upload'
            },
            social: {
                title: 'Follow Our Hashtag',
                text: 'Check out photos shared by our guests on social media:'
            }
        },
        rsvp: {
            pageTitle: 'RSVP',
            pageSubtitle: 'Please let us know if you\'ll be able to join us',
            intro: 'We can\'t wait to celebrate with you! Please fill out the form below to let us know if you\'ll be able to join us for our special day.',
            deadlineLabel: 'RSVP Deadline:',
            deadline: 'November 1, 2026',
            note: 'If you have any questions or need to make changes to your RSVP, please contact us at hello@clara-tyler.com'
        },
        footer: {
            withLove: 'With love,'
        }
    },
    ko: {
        lang: { en: 'EN', ko: '한국어' },
        nav: {
            home: '홈',
            ourStory: '우리의 이야기',
            events: '행사',
            travel: '여행',
            photos: '사진',
            rsvp: '참석 의사'
        },
        hero: {
            date: '2026년 12월 12일',
            location: '서울, 대한민국',
            rsvp: '참석 의사',
            viewEvents: '행사 보기'
        },
        welcome: {
            title: '결혼합니다!',
            text1: '가족과 친구들과 함께 이 특별한 날을 축하하게 되어 정말 기쁩니다. 여러분과 함께 이 순간을 나누고 아름다운 추억을 만들 수 있기를 기대합니다.',
            text2: '2026년 12월 12일 대한민국 서울에서 열리는 결혼식에 참석해 주시기 바랍니다.'
        },
        saveDate: {
            title: '날짜를 저장하세요',
            month: '12월',
            location: '서울 신라호텔',
            viewDetails: '행사 세부사항 보기'
        },
        quickLinks: {
            ourStory: { title: '우리의 이야기', desc: '함께한 여정에 대해 알아보기' },
            events: { title: '행사', desc: '결혼식 일정 보기' },
            travel: { title: '여행', desc: '숙박 및 교통편' },
            photos: { title: '사진', desc: '추억 공유하기' },
            rsvp: { title: '참석 의사', desc: '참석 여부 알려주기' }
        },
        story: {
            pageTitle: '우리의 이야기',
            pageSubtitle: '우리를 함께하게 만든 여정',
            intro: '우리의 여정은 운명처럼 느껴진 우연한 만남으로 시작되었습니다. 첫 대화부터 우리 사이에 특별한 무언가가 있다는 것을 알았습니다.',
            timeline: {
                '2018': {
                    title: '만남',
                    text: '서울 시내의 한 카페에서 처음 만났습니다. 타일러는 시험 공부를 하고 있었고, 클라라는 디자인 프로젝트를 하고 있었습니다. 간단한 "실례합니다"가 몇 시간 동안 이어지는 대화로 이어졌습니다. 우리는 모든 것에 대해 이야기했습니다 - 우리의 꿈, 열정, 그리고 도시에서 가장 좋아하는 장소들에 대해.'
                },
                '2019': {
                    title: '첫 데이트',
                    text: '우리의 첫 공식 데이트는 남산타워에서 서울의 일몰을 보며 했습니다. 그때 우리는 이것이 아름다운 무언가의 시작이라는 것을 알았습니다. 저녁 내내 이야기하고 웃었고, 밤이 끝날 무렵 우리 둘 다 특별한 것을 찾았다는 것을 알았습니다.'
                },
                '2021': {
                    title: '동거 시작',
                    text: '2년간의 교제 후, 우리는 다음 단계로 나아가 함께 살기로 결정했습니다. 큰 결정이었지만 완전히 자연스럽게 느껴졌습니다. 우리는 팀으로서 삶을 살아가는 방법을 배웠고, 직장의 도전, 가족 행사, 일상의 모험을 통해 서로를 지원했습니다.'
                },
                '2024': {
                    title: '프로포즈',
                    text: '아름다운 봄날, 타일러는 우리가 첫 데이트를 했던 바로 그 장소인 남산타워에서 프로포즈했습니다. 우리 둘 다 사랑하는 도시와 벚꽃으로 둘러싸인 가운데, 그는 한 무릎을 꿇고 우리의 인생을 영원히 바꿀 질문을 했습니다. 물론 클라라는 예라고 답했습니다!'
                },
                '2026': {
                    title: '우리의 결혼식',
                    text: '이제 우리는 여러분 모두와 함께 우리의 사랑을 축하하게 되어 기쁩니다. 우리의 결혼식은 함께한 여정의 반영이 될 것입니다 - 사랑, 웃음, 그리고 우리에게 가장 소중한 사람들로 가득 차 있을 것입니다. 가족과 친구들로 둘러싸인 새로운 인생의 장을 시작하기를 기대합니다.'
                }
            },
            closing: '우리는 그동안 받은 모든 사랑과 지지에 정말 감사합니다. 우리가 함께 새로운 장을 시작할 때 결혼식에 참석해 주시는 것은 우리에게 세상에서 가장 큰 의미가 될 것입니다.',
            signature: '모든 사랑을 담아,<br><strong>클라라 & 타일러</strong>'
        },
        events: {
            pageTitle: '결혼식 행사',
            pageSubtitle: '주말 축하 행사에 참석해 주세요',
            month: {
                december: '12월'
            },
            ceremony: {
                badge: '식',
                title: '결혼식',
                attire: '정장',
                description: '우리가 서약을 교환하고 남편과 아내로서 함께하는 여정을 시작하는 자리에 참석해 주세요. 아름다운 영빈관에서 열리는 결혼식 후 전통적인 한국 결혼식 축하 행사가 이어집니다.'
            },
            reception: {
                badge: '리셉션',
                title: '결혼식 리셉션',
                attire: '칵테일 / 세미정장',
                description: '가장 가까운 가족과 친구들과 함께하는 저녁 식사, 댄스, 그리고 축하 행사입니다. 리셉션에는 맛있는 저녁 식사, 라이브 음악, 그리고 많은 춤이 포함됩니다. 여러분 모두와 함께 축하하기를 기대합니다!'
            },
            brunch: {
                badge: '브런치',
                title: '작별 브런치',
                description: '작별 인사를 나누기 전에 함께 캐주얼한 브런치를 즐겨요. 집으로 돌아가기 전에 조금 더 시간을 함께 보내고 싶은 분들을 위한 편안한 모임입니다.'
            },
            rsvpNow: '지금 참석 의사 표시'
        },
        travel: {
            pageTitle: '여행 및 숙박',
            pageSubtitle: '참석에 필요한 모든 정보',
            venue: {
                title: '📍 장소',
                directions: '길찾기'
            },
            hotel: {
                title: '🏨 호텔 숙박',
                text: '결혼식 손님들을 위해 신라호텔에 객실 블록을 예약했습니다. 특별 그룹 요금을 받으려면 예약 시 "클라라 & 타일러 결혼식"을 언급해 주세요.',
                deadlineLabel: '예약 마감일:',
                deadline: '2026년 11월 12일',
                rateLabel: '그룹 요금:',
                rate: '문의 시 제공',
                book: '객실 예약'
            },
            airport: {
                title: '✈️ 서울로 오는 방법',
                byAirLabel: '항공편:',
                byAir: '서울은 인천국제공항(ICN)을 통해 쉽게 접근할 수 있으며, 호텔까지 차로 또는 공항철도(AREX)로 약 1시간 소요됩니다.',
                fromAirportLabel: '공항에서 호텔까지:',
                option1: '공항철도(AREX)로 서울역까지 이동 후 3호선으로 환승',
                option2: '공항 리무진 버스로 신라호텔까지',
                option3: '택시 또는 전용 차량 서비스(약 60-90분 소요)'
            },
            transport: {
                title: '🚇 대중교통',
                text: '호텔은 동대입구역(3호선) 5번 출구 근처에 편리하게 위치해 있습니다. 결혼식 손님들을 위해 5번 출구에서 호텔 셔틀 버스가 제공됩니다.',
                subwayLabel: '지하철:',
                subway: '3호선(주황색) - 동대입구역',
                busLabel: '버스:',
                bus: '여러 버스 노선이 이 지역을 운행합니다'
            },
            parking: {
                title: '🅿️ 주차',
                text1: '호텔에는 제한된 주차 공간이 있습니다. 편의를 위해 대중교통 이용을 권장합니다.',
                text2: '주차가 필요한 경우 발렛 주차 서비스를 이용하세요(추가 요금 적용). 주차 예약을 위해 사전에 호텔에 연락해 주세요.'
            },
            local: {
                title: '🌍 현지 정보',
                languageLabel: '언어:',
                language: '한국어(호텔 및 관광 지역에서는 영어가 널리 사용됩니다)',
                currencyLabel: '통화:',
                currency: '대한민국 원(KRW)',
                timezoneLabel: '시간대:',
                timezone: 'KST(한국 표준시, UTC+9)',
                weatherLabel: '날씨:',
                weather: '서울의 12월은 일반적으로 기온이 -5°C에서 5°C(23°F에서 41°F) 사이로 춥습니다. 따뜻하게 입으세요!'
            }
        },
        photos: {
            pageTitle: '사진',
            pageSubtitle: '추억을 공유해 주세요',
            intro: '결혼식 사진을 보고 싶습니다! 소셜 미디어에서 해시태그 #ClaraAndTyler2026를 사용하여 좋아하는 순간을 공유하거나 사진 갤러리에 직접 업로드해 주세요.',
            upload: {
                title: '사진 업로드',
                text: '결혼식 사진이 있으신가요? 우리와 공유해 주세요!',
                choose: '사진 선택',
                submit: '업로드'
            },
            social: {
                title: '해시태그 팔로우',
                text: '손님들이 소셜 미디어에서 공유한 사진을 확인하세요:'
            }
        },
        rsvp: {
            pageTitle: '참석 의사',
            pageSubtitle: '참석 가능 여부를 알려주세요',
            intro: '여러분과 함께 축하하기를 기대합니다! 아래 양식을 작성하여 특별한 날에 참석할 수 있는지 알려주세요.',
            deadlineLabel: '참석 의사 마감일:',
            deadline: '2026년 11월 1일',
            note: '질문이 있거나 참석 의사를 변경해야 하는 경우 hello@clara-tyler.com으로 연락해 주세요'
        },
        footer: {
            withLove: '사랑을 담아,'
        }
    }
};

// Get current language from localStorage or default to 'en'
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'en';
}

// Set language in localStorage
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
}

// Get nested translation value
function getTranslation(key, lang) {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
        value = value?.[k];
    }
    return value || key;
}

// Translate all elements with data-i18n attribute
function translatePage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key, lang);
        
        // Handle HTML content (like signature with <br> and <strong>)
        if (translation.includes('<br>') || translation.includes('<strong>')) {
            element.innerHTML = translation;
        } else {
            element.textContent = translation;
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Switch language
function switchLanguage() {
    const currentLang = getCurrentLanguage();
    const newLang = currentLang === 'en' ? 'ko' : 'en';
    setLanguage(newLang);
    translatePage(newLang);
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Update active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinksArray = Array.from(document.querySelectorAll('.nav-links a'));
    
    navLinksArray.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks && mobileMenuToggle && 
            !navLinks.contains(e.target) && 
            !mobileMenuToggle.contains(e.target) &&
            navLinks.classList.contains('mobile-open')) {
            navLinks.classList.remove('mobile-open');
            mobileMenuToggle.classList.remove('active');
        }
    });

    // RSVP Form handling
    const rsvpForm = document.getElementById('rsvp-form');
    const formStatus = document.getElementById('form-status');
    const attendingSelect = document.getElementById('attending');
    const guestsGroup = document.getElementById('guests-group');
    const guestsInput = document.getElementById('guests');
    
    // Show/hide guests field based on attendance
    if (attendingSelect && guestsGroup) {
        attendingSelect.addEventListener('change', () => {
            if (attendingSelect.value === 'yes') {
                guestsGroup.style.display = 'block';
                if (guestsInput) {
                    guestsInput.required = true;
                }
            } else {
                guestsGroup.style.display = 'none';
                if (guestsInput) {
                    guestsInput.required = false;
                    guestsInput.value = '';
                }
            }
        });
        
        // Set initial state
        if (attendingSelect.value !== 'yes') {
            guestsGroup.style.display = 'none';
            if (guestsInput) {
                guestsInput.required = false;
            }
        }
    }
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(rsvpForm);
            const data = Object.fromEntries(formData.entries());
            
            // Validate guests if attending
            if (data.attending === 'yes' && (!data.guests || parseInt(data.guests) < 1)) {
                if (formStatus) {
                    formStatus.textContent = 'Please enter the number of guests.';
                    formStatus.className = 'form-status error';
                }
                return;
            }
            
            // Show loading state
            const submitBtn = rsvpForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Submitting...';
            if (formStatus) {
                formStatus.textContent = '';
                formStatus.className = 'form-status';
            }
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                console.log('RSVP Data:', data);
                
                // Show success message
                if (formStatus) {
                    formStatus.textContent = 'Thank you! Your RSVP has been received.';
                    formStatus.className = 'form-status success';
                }
                
                // Reset form
                rsvpForm.reset();
                if (guestsGroup) {
                    guestsGroup.style.display = 'none';
                }
                
                // Reset button
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                
                // Scroll to status
                if (formStatus) {
                    formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }, 1000);
        });
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and sections
    const animatedElements = document.querySelectorAll('.event-preview-card, .travel-card, .save-date-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Language toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', switchLanguage);
    }

    // Initialize translations on page load
    const currentLang = getCurrentLanguage();
    translatePage(currentLang);
});
