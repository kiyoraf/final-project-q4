/**
 * Explore San Diego - Complete Application Script
 * File: script.js
 */

// 1. Itinerary Data Pool
const itineraries = {
    relax: [
        { time: "09:00 AM", title: "Morning Coffee & Ocean Views", desc: "Start your day at a coastal café in Pacific Beach with an acai bowl." },
        { time: "12:00 PM", title: "Tidepooling & Sea Lions", desc: "Head over to La Jolla Cove to observe the local sea lion colonies." },
        { time: "03:30 PM", title: "Balboa Park Desert Garden", desc: "Stroll leisurely through the historic cactus gardens." }
    ],
    adventure: [
        { time: "07:30 AM", title: "Torrey Pines Coastal Hike", desc: "Beat the midday heat by tackling trails with panoramic ocean views." },
        { time: "11:00 AM", title: "La Jolla Caves Sea Kayaking", desc: "Rent a kayak or take a guided tour into sandstone sea caves." },
        { time: "07:30 PM", title: "Gaslamp Quarter Nightlife", desc: "Reward your active afternoon with dinner in downtown's historic core." }
    ],
    family: [
        { time: "09:00 AM", title: "World-Famous San Diego Zoo", desc: "Spend your morning meeting exotic wildlife." },
        { time: "01:30 PM", title: "Waterfront Park Splash Fountains", desc: "Let the kids burn off energy playing around splash pads." },
        { time: "03:30 PM", title: "USS Midway Museum Tour", desc: "Climb aboard a massive, real historic aircraft carrier." }
    ]
};

// 2. Quiz Configuration Data Records
const quizQuestions = [
    {
        question: "What is your dream vacation vibe?",
        answers: [
            { text: "Strolling through architecture, history, and museums", pointsTo: "balboa" },
            { text: "Relaxing on cliffsides and spotting coastal wildlife", pointsTo: "lajolla" },
            { text: "Dine-ins, urban shopping, and nightlife energy", pointsTo: "gaslamp" }
        ]
    },
    {
        question: "Who is accompanying you on this getaway?",
        answers: [
            { text: "Solo traveler or history buffs", pointsTo: "balboa" },
            { text: "A romantic partner or photography friends", pointsTo: "lajolla" },
            { text: "A group of foodies ready for city life", pointsTo: "gaslamp" }
        ]
    }
];

// Expanded to 9 total destination records
const spotDetails = {
    balboa: {
        id: "balboa",
        title: "Balboa Park",
        tagline: "The Cultural Heart of San Diego",
        bgClass: "bg-balboa",
        tag: "Culture & Nature",
        shortDesc: "A 1,200-acre historic urban cultural park filled with beautiful gardens, museums, and the famous San Diego Zoo.",
        description: "Balboa Park is a 1,200-acre wonderland of history, structures, and natural beauty. It features historic Spanish-Renaissance architecture, deep art collections, and lush gardens. It is perfect for travelers who want to dive deep into cultural exhibits or wander around scenic paths.",
        tips: [
            "Many museums offer free admission to local residents on rotating Tuesdays.",
            "Park near the Inspiration Point lot and catch the free park tram to avoid traffic.",
            "Make sure to stop by the Spanish Village Art Center to watch local artists work."
        ]
    },
    lajolla: {
        id: "lajolla",
        title: "La Jolla Cove",
        tagline: "Where Dramatic Cliffs Meet Marine Wilds",
        bgClass: "bg-lajolla",
        tag: "Beaches & Wildlife",
        shortDesc: "A breathtaking, jewel-toned beach surrounded by cliffs. Perfect for spotting local sea lions, kayaking, and sunset views.",
        description: "La Jolla Cove offers emerald-colored ocean vistas wrapped by protective sandstone cliffs. Home to wild populations of sea lions and harbor seals, this underwater ecological reserve is an outstanding destination for kayaking, open-water snorkeling, and catching unforgettable sunsets.",
        tips: [
            "Arrive before 9:00 AM if you want to find free street parking along the coast.",
            "Maintain a safe distance of at least 50 feet from the resting sea lions.",
            "Visit the sunny cave access point hidden inside the Cave Store shop."
        ]
    },
    gaslamp: {
        id: "gaslamp",
        title: "Gaslamp Quarter",
        tagline: "The Epicenter of Local Dining & Entertainment",
        bgClass: "bg-gaslamp",
        tag: "Food & History",
        shortDesc: "A lively 16-block neighborhood known for its Victorian-era buildings, fantastic restaurants, and bustling nightlife.",
        description: "Spanning 16 historic blocks, the Gaslamp Quarter blends classic Victorian charm with dynamic modern venues. It is a dense paradise of premier dining terraces, trendy rooftop cocktail clubs, and legendary live music spaces, serving as the city's ultimate night-out destination.",
        tips: [
            "Most restaurants offer great happy hour deals on weekdays from 4:00 PM to 6:00 PM.",
            "Utilize city transit or ride-shares to skip parking garage fees.",
            "Look for the bronze historical markers detailing the wild-west history of each building."
        ]
    },
    fashion: {
        id: "fashion",
        title: "Fashion Valley",
        tagline: "Southern California's Premier Open-Air Shopping Center",
        bgClass: "bg-fashion",
        tag: "Shopping & Luxury",
        shortDesc: "A beautiful outdoor oasis featuring luxury designer boutiques, great dining varieties, and upscale department stores.",
        description: "Fashion Valley stands as San Diego's finest open-air retail trendsetter. Embracing the city's gorgeous year-round weather, this palm-lined lifestyle destination features over 200 stores, showcasing global fashion houses like Gucci, Louis Vuitton, and Prada alongside major culinary options.",
        tips: [
            "Use the multi-level parking garages adjacent to Nordstrom for the best shade during hot afternoons.",
            "Take advantage of the San Diego Trolley System—the Green Line drops off directly at the Fashion Valley Transit Center.",
            "Check out the central courtyards for live acoustic music and events scheduled during weekend afternoons."
        ]
    },
    cliffs: {
        id: "cliffs",
        title: "Sunset Cliffs",
        tagline: "Breathtaking Coastal Horizons and Natural Caves",
        bgClass: "bg-cliffs",
        tag: "Scenic Views & Hiking",
        shortDesc: "Dramatic ocean bluffs lining the Point Loma peninsula, famous for producing the absolute best sunset views in the county.",
        description: "Sunset Cliffs Natural Park stretches along the western shoreline of Point Loma, featuring expansive cliff formations, coastal sea caves, and uninhibited panoramic views across the Pacific Ocean. It is a legendary local gathering spot for watching the sun drop past the horizon.",
        tips: [
            "Arrive at least 45 minutes before sunset to secure parking spaces along Sunset Cliffs Blvd.",
            "The cliffs can crumble; stay firmly behind the designated safety railings and fences at all times.",
            "Walk down to the lower tidepools at Ladera Street during an optimal low-tide calendar day to see marine life."
        ]
    },
    oldtown: {
        id: "oldtown",
        title: "Old Town State Historic Park",
        tagline: "The Birthplace of California",
        bgClass: "bg-oldtown",
        tag: "History & Heritage",
        shortDesc: "Step back into the 1800s with preserved adobe buildings, live artisan crafts, museums, and authentic Mexican dining.",
        description: "Old Town preserves the rich cultural roots of San Diego's earliest settlements from the Spanish and Mexican periods. Featuring historic schoolhouses, blacksmith shops, lively traditional music marketplace plazas, and world-class regional food, it presents living history at its best.",
        tips: [
            "Admission into the state park grounds and historical museums is completely free.",
            "Visit the Cosmopolitan Hotel restaurant patio to dine inside an authentic 1800s building track.",
            "Don't miss the freshly made handmade tortillas cooked right along the sidewalk at local restaurants."
        ]
    },
    midway: {
        id: "midway",
        title: "USS Midway Museum",
        tagline: "An Unforgettable Journey Aboard a Floating City",
        bgClass: "bg-midway",
        tag: "Museums & Maritime",
        shortDesc: "Explore America's longest-serving aircraft carrier, featuring 29 restored aircraft on a massive oceanfront flight deck.",
        description: "The USS Midway Museum provides an unforgettable historical tribute to naval aviation. Located in downtown's harbor area, visitors walk through the engine rooms, sleeping berths, bridge, and flight deck of this massive vessel, listening to real veterans share memories via audio tours.",
        tips: [
            "Purchase admission tickets online beforehand to completely bypass the primary entry lines.",
            "Give yourself at least 3 to 4 hours to thoroughly experience all the hidden inner rooms.",
            "Climb up inside the 'Island' (the superstructure command tower) early in the morning before crowds form."
        ]
    },
    coronado: {
        id: "coronado",
        title: "Coronado Beach",
        tagline: "Sparkling Sands and Legendary Coastal Elegance",
        bgClass: "bg-coronado",
        tag: "Beaches & Relaxation",
        shortDesc: "Famous for its sparkling mineral sands, calm swimming water, and the iconic, historic Hotel del Coronado castle.",
        description: "Coronado Beach features a flat, wide coastline that shimmers due to mica minerals embedded in its white sand. Bordering the crown jewel architectural beauty of the Hotel del Coronado, this pristine beach is perfect for relaxed strolls, sunbathing, and beachside resort style luxury.",
        tips: [
            "Free street parking is plentiful along Ocean Boulevard if you search a block or two outward.",
            "Walk through the public lobby and beachfront pathways of the Hotel del Coronado to admire its Victorian design.",
            "Visit the North Beach section if you are traveling with pets—it is an official off-leash dog area."
        ]
    },
    littleitaly: {
        id: "littleitaly",
        title: "Little Italy",
        tagline: "A Chic and Flavorful Cultural Culinary Sanctuary",
        bgClass: "bg-littleitaly",
        tag: "Food & Nightlife",
        shortDesc: "A bustling, trendy neighborhood packed with celebrity chef restaurants, outdoor patio cafés, and lively squares.",
        description: "Once a historic fishing village, Little Italy has evolved into San Diego's premier culinary epicenter. Spanning dozens of vibrant blocks, it features pedestrian plazas with fountains, artisan craft cocktail bars, local gelaterias, and incredible Italian restaurants featuring open patio seating.",
        tips: [
            "Plan a visit on Saturday morning between 8:00 AM and 2:00 PM to explore the famous 'Mercato' Farmers Market.",
            "Grab a seat at the Piazza della Famiglia fountain plaza to relax and people-watch.",
            "Reservations are strongly recommended on weekends for popular restaurants along India Street."
        ]
    }
};

// 3. Application State Counters
let currentQuestionIndex = 0;
let scores = { balboa: 0, lajolla: 0, gaslamp: 0 };

// 4. Operational Run Engines
document.addEventListener('DOMContentLoaded', () => {
    
    // Core Elements Grab
    const attractionsGrid = document.getElementById('attractions-grid');
    const displayContainer = document.getElementById('itinerary-display');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('quiz-modal');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const closeBtn = document.querySelector('.close-btn');
    const questionText = document.getElementById('question-text');
    const answerButtonsContainer = document.getElementById('answer-buttons');
    const mainContent = document.getElementById('main-content');
    const detailsPage = document.getElementById('details-page');
    const backToHomeBtn = document.getElementById('back-to-home');
    const navHomeBtn = document.querySelector('.nav-home-btn');
    const navAttractionsBtn = document.querySelector('.nav-attractions-btn');

    // Dynamically Populate Expanded Attractions Section Grid
    function buildAttractionsGrid() {
        if (!attractionsGrid) return;
        let gridHtml = '';
        
        // Loop through all 9 items in our database pool
        for (const key in spotDetails) {
            const spot = spotDetails[key];
            gridHtml += `
                <div class="card" data-id="${spot.id}">
                    <div class="card-img ${spot.bgClass}"></div>
                    <div class="card-content">
                        <h3>${spot.title}</h3>
                        <p>${spot.shortDesc}</p>
                        <span class="tag">${spot.tag}</span>
                    </div>
                </div>
            `;
        }
        attractionsGrid.innerHTML = gridHtml;

        // Wire click triggers into every newly generated element card
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', () => {
                const spotId = card.getAttribute('data-id');
                showDetails(spotId);
            });
        });
    }

    // Initialize Card Generation Engine
    buildAttractionsGrid();

    // Render Itineraries Planner
    function renderItinerary(style) {
        const selectedData = itineraries[style];
        if (!selectedData) return;

        let htmlContent = '';
        selectedData.forEach(item => {
            htmlContent += `
                <div class="itinerary-step">
                    <h4>${item.time} - ${item.title}</h4>
                    <p>${item.desc}</p>
                </div>
            `;
        });
        displayContainer.innerHTML = htmlContent;
    }

    // Initialize Default View
    renderItinerary('relax');

    // Itinerary Toggles
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.currentTarget.classList.add('active');
            renderItinerary(e.currentTarget.getAttribute('data-style'));
        });
    });

    // Quiz Navigation Mechanics
    function openQuiz() {
        currentQuestionIndex = 0;
        scores = { balboa: 0, lajolla: 0, gaslamp: 0 };
        modal.classList.add('open');
        showQuestion();
    }

    function closeQuiz() {
        modal.classList.remove('open');
    }

    function showQuestion() {
        answerButtonsContainer.innerHTML = '';
        const currentQuestion = quizQuestions[currentQuestionIndex];
        questionText.innerText = currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('quiz-choice-btn');
            button.addEventListener('click', () => {
                scores[answer.pointsTo]++;
                currentQuestionIndex++;
                if (currentQuestionIndex < quizQuestions.length) {
                    showQuestion();
                } else {
                    evaluateResults();
                }
            });
            answerButtonsContainer.appendChild(button);
        });
    }

    function evaluateResults() {
        closeQuiz();
        let bestMatch = 'balboa';
        let highestScore = -1;

        for (const spot in scores) {
            if (scores[spot] > highestScore) {
                highestScore = scores[spot];
                bestMatch = spot;
            }
        }
        showDetails(bestMatch);
    }

    // Interactive Deep Dive Display System
    function showDetails(spotKey) {
        const data = spotDetails[spotKey];
        if (!data) return;

        document.getElementById('details-title').innerText = data.title;
        document.getElementById('details-tagline').innerText = data.tagline;
        document.getElementById('details-description').innerText = data.description;

        const heroBg = document.getElementById('details-hero-bg');
        heroBg.className = "details-hero " + data.bgClass;

        const tipsList = document.getElementById('details-tips');
        tipsList.innerHTML = '';
        data.tips.forEach(tip => {
            const li = document.createElement('li');
            li.innerText = tip;
            tipsList.appendChild(li);
        });

        mainContent.classList.add('hidden');
        detailsPage.classList.remove('hidden');
        window.scrollTo(0, 0);
    }

    function showHome() {
        detailsPage.classList.add('hidden');
        mainContent.classList.remove('hidden');
    }

    // App Navigation Listeners
    if(startQuizBtn) startQuizBtn.addEventListener('click', openQuiz);
    if(closeBtn) closeBtn.addEventListener('click', closeQuiz);
    if(backToHomeBtn) backToHomeBtn.addEventListener('click', showHome);
    
    if(navHomeBtn) {
        navHomeBtn.addEventListener('click', (e) => {
            if (!detailsPage.classList.contains('hidden')) {
                e.preventDefault();
                showHome();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    if(navAttractionsBtn) {
        navAttractionsBtn.addEventListener('click', (e) => {
            if (!detailsPage.classList.contains('hidden')) {
                showHome();
                // Brief pause allows structural swap engine to process layout safely
                setTimeout(() => {
                    const target = document.getElementById('attractions');
                    if(target) target.scrollIntoView({ behavior: 'smooth' });
                }, 50);
            }
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) closeQuiz();
    });
});