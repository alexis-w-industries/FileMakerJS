document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.getElementById('cards-container');
    const cardData = [
        { count: 6, title: 'Pending' },
        { count: 5, title: 'Draft' },
        { count: 8, title: 'Rejected By Customer' },
        { count: 3, title: 'Approved By Customer' },
        { count: 7, title: 'Invoiced' },
        { count: 4, title: 'Hold' },
        { count: "", title: '' },
        { count: 9, title: 'In Customer Portal' },
        { count: "", title: '' }
    ];

    const cardsPerRow = 3;
    let currentRow;

    cardData.forEach((data, index) => {
        if (index % cardsPerRow === 0) {
            currentRow = document.createElement('div');
            currentRow.className = 'row';
            cardContainer.appendChild(currentRow);
        }

        const card = document.createElement('div');
        card.className = 'card';

        const countCard = document.createElement('p');
        countCard.className = 'count-card';
        countCard.innerText = data.count;

        const cardTitle = document.createElement('p');
        cardTitle.className = 'card-title';
        cardTitle.innerText = data.title;

        card.appendChild(countCard);
        card.appendChild(cardTitle);
        currentRow.appendChild(card);
    });
});
