const slide1 = 'url(./asset/img/slide1.jpg)';
const slide2 = 'url(./asset/img/slide2.jpg)';
const slide3 = 'url(./asset/img/slide3.jpg)';
const listImage = [
    {
        name: slide1,
        messageHeading: 'New York',
        messageDescription: '<b>The atmosphere in New York is lorem ipsum.</b>',
    },
    {
        name: slide2,
        messageHeading: 'Chicago',
        messageDescription: '<b>Thank you, Chicago - A night we won\'t forget.</b>',
    },
    {
        name: slide3,
        messageHeading: 'Los Angeles',
        messageDescription: '<b>We had the best time playing at Venice Beach!</b>',
    }
];
let count = 1;
setInterval(() => {
    const slider = document.querySelector('.slider');
    const sliderMessageHeading = document.querySelector('.message .message-heading');
    const sliderMessageDescription = document.querySelector('.message .message-description');
    if (count === listImage.length) count = 0;
    slider.style.backgroundImage = listImage[count].name;
    sliderMessageHeading.innerHTML = listImage[count].messageHeading;
    sliderMessageDescription.innerHTML = listImage[count].messageDescription;
    count++;
}, 5000);

const buyTicketBtns = document.querySelectorAll('.js-buy-ticket');
const closeBtns = document.querySelectorAll('.js-close-btn');
const payBtns = document.querySelector('.js-pay-btn');
const modal = document.getElementById('ticketModal');
const modalContainer = document.querySelector('.modal-container');
const header = document.getElementById('header');
const menuBtn = header.querySelector('.menu-btn');
const listMenuBtn = header.querySelectorAll('.navbar > li a');

let isOpen = false;
const headerHeight = header.offsetHeight;

const openModal = () => {
    modal.classList.add('open');
}

const closeModal = (e) => {
    modal.classList.remove('open');
}

for(const buyBtn of buyTicketBtns) {
    buyBtn.addEventListener('click', openModal);
}

for(const closeBtn of closeBtns) {
    closeBtn.addEventListener('click', closeModal);
}

modal.addEventListener('click', closeModal);
modalContainer.addEventListener('click', (event) => {
    event.stopPropagation();
});
payBtns.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Pay successfully!');
});

menuBtn.onclick = () => {
    isOpen = !isOpen;
    if (isOpen) {
        header.style.height = 'auto';
    } else {
        header.style.height = headerHeight + 'px';
    }
};

for (const btn of listMenuBtn) {
    btn.onclick = () => {
        header.style.height = headerHeight + 'px';
        isOpen = false;
    }
}