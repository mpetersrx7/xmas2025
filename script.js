// City navigation
const cityCards = document.querySelectorAll('.city-card');
const cityViews = document.querySelectorAll('.city-detail');
const homeView = document.getElementById('home-view');
const homeLinks = document.querySelectorAll('.home-link');

cityCards.forEach(card => {
    card.addEventListener('click', () => {
        const city = card.getAttribute('data-city');
        showCityView(city);
    });
});

homeLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showHomeView();
    });
});

function showCityView(city) {
    homeView.style.display = 'none';
    cityViews.forEach(view => {
        view.style.display = 'none';
    });
    const cityView = document.getElementById(`${city}-view`);
    if (cityView) {
        cityView.style.display = 'block';
    }
    window.scrollTo(0, 0);
}

function showHomeView() {
    homeView.style.display = 'block';
    cityViews.forEach(view => {
        view.style.display = 'none';
    });
    window.scrollTo(0, 0);
}

// Tab functionality for all cities
const setupTabButtons = (poiBtnId, itineraryBtnId, poiContentId, itineraryContentId) => {
    const poiBtn = document.getElementById(poiBtnId);
    const itineraryBtn = document.getElementById(itineraryBtnId);
    const poiContent = document.getElementById(poiContentId);
    const itineraryContent = document.getElementById(itineraryContentId);

    const resetButtons = () => {
        [poiBtn, itineraryBtn].forEach(btn => {
            if (btn) btn.classList.remove('btn-secondary');
        });
    };

    const hideAllTabs = () => {
        [poiContent, itineraryContent].forEach(content => {
            if (content) content.classList.remove('active');
        });
    };

    if (poiBtn && poiContent) {
        poiBtn.addEventListener('click', () => {
            resetButtons();
            hideAllTabs();
            poiContent.classList.add('active');
            poiBtn.classList.add('btn-secondary');
        });
    }

    if (itineraryBtn && itineraryContent) {
        itineraryBtn.addEventListener('click', () => {
            resetButtons();
            hideAllTabs();
            itineraryContent.classList.add('active');
            itineraryBtn.classList.add('btn-secondary');
        });
    }
};

// Set up tabs for all cities
setupTabButtons(
    'amsterdam-poi-btn', 
    'amsterdam-itinerary-btn',
    'amsterdam-poi', 
    'amsterdam-itinerary'
);

setupTabButtons(
    'lucerne-poi-btn', 
    'lucerne-itinerary-btn',
    'lucerne-poi', 
    'lucerne-itinerary'
);

setupTabButtons(
    'vienna-poi-btn', 
    'vienna-itinerary-btn',
    'vienna-poi', 
    'vienna-itinerary'
);

setupTabButtons(
    'madrid-poi-btn', 
    'madrid-itinerary-btn',
    'madrid-poi', 
    'madrid-itinerary'
);

// Map buttons - Generate Google Maps links
document.querySelectorAll('.map-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const poi = this.getAttribute('data-poi');
        const cityElement = this.closest('.city-detail');
        const city = cityElement ? cityElement.getAttribute('data-city') : '';
        
        // Generate Google Maps URL
        const query = encodeURIComponent(`${poi}, ${city}`);
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
        
        // Open in a new tab
        window.open(mapsUrl, '_blank');
    });
});

// Show active tab buttons on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set POI tabs as active by default
    const poiButtons = [
        'amsterdam-poi-btn',
        'lucerne-poi-btn',
        'vienna-poi-btn',
        'madrid-poi-btn'
    ];
    
    poiButtons.forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) btn.classList.add('btn-secondary');
    });
});