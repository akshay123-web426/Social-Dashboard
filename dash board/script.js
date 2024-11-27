document.getElementById('login-button').addEventListener('click', function() {
    loginToSocialMedia();
});

// Fake login function for simulation
function loginToSocialMedia() {
    // Here, you would typically use OAuth to authenticate the user.
    // For simulation, we'll just show the dashboard and mock data.
    
    // Show the dashboard
    document.getElementById('login-area').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');

    // Fetch feeds from social media APIs (simulated here)
    fetchSocialFeeds();
}

// Fake fetch function for social media feeds
function fetchSocialFeeds() {
    // Simulated social media feeds
    const facebookFeed = [
        { text: "Just had an awesome lunch!" },
        { text: "Working on a new project." },
        { text: "Loving the new movie release!" }
    ];

    const twitterFeed = [
        { text: "Exploring new technologies!" },
        { text: "Don't forget to stay hydrated!" },
        { text: "New blog post up! Check it out." }
    ];

    const instagramFeed = [
        { text: "Had a great weekend at the beach!" },
        { text: "Coffee + books = perfect combo." },
        { text: "Excited for the upcoming event!" }
    ];

    // Display the feeds on the dashboard
    displayFeed('facebook-feed', facebookFeed);
    displayFeed('twitter-feed', twitterFeed);
    displayFeed('instagram-feed', instagramFeed);
}

function displayFeed(feedId, feedData) {
    const feedContainer = document.getElementById(feedId);
    feedData.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerText = post.text;
        feedContainer.appendChild(postElement);
    });
}

document.getElementById('logout-button').addEventListener('click', function() {
    logout();
});

function logout() {
    // Hide dashboard and show login area
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('login-area').classList.remove('hidden');
}
