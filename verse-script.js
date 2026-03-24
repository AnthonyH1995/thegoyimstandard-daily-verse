// verse-script.js

// Function to load verses from verses.json
async function loadVerses() {
    const response = await fetch('verses.json');
    const verses = await response.json();
    createVerseCards(verses);
}

// Function to create expandable verse cards
function createVerseCards(verses) {
    const container = document.getElementById('verse-container');
    verses.forEach(verse => {
        const card = document.createElement('div');
        card.className = 'verse-card';
        card.innerHTML = `<h3>${verse.title}</h3><p>${verse.text}</p>`;

        const insightSection = document.createElement('div');
        insightSection.className = 'insight-section';
        insightSection.innerHTML = `<p>${verse.insight}</p>`;
        insightSection.style.display = 'none'; // Initially hidden

        card.appendChild(insightSection);
        card.addEventListener('click', () => {
            insightSection.style.display = insightSection.style.display === 'none' ? 'block' : 'none';
        });

        container.appendChild(card);
    });
}

// Load verses when the document is ready
document.addEventListener('DOMContentLoaded', loadVerses);