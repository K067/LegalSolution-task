const dropDown = document.querySelector('.form-input-drop');
const input = document.querySelectorAll('.form-input');
const dropList = dropDown.querySelector('.country-list');
const imgMod = dropDown.querySelector('.img-mod');
const list = dropList.querySelectorAll('.country-name');
const countryName = document.querySelector('.country-select');
const formTitle = document.querySelector('.form-title');
const btn = document.querySelectorAll('.header-nav-item');
const mailIcn = document.querySelector('.mail-icn');
const mailPth = mailIcn.querySelectorAll('.mail-pth');

const activeToggle = e => {
    btn.forEach(e => {
        e.classList.remove('actual-page');
        e.firstElementChild.classList.remove('active');
    });
    e.target.classList.add('actual-page');
    e.target.firstElementChild.classList.add('active');
}

const defaultValue = () => {
    dropList.classList.remove('active');
    imgMod.style = "transform: none";
    dropDown.style = "outline:none";
}

list.forEach(e => {
    e.addEventListener('click', e => {
        countryName.textContent = e.target.textContent;
    })
});

btn.forEach(e => {
    e.addEventListener('click', activeToggle)
})

dropDown.addEventListener('click', e => {
    const open = dropList.classList.toggle('active');
    if (open) {
        imgMod.style = "transform: rotate(180deg)";
        dropDown.style = "outline: 1px solid #0E3B6C";

    } else {
        defaultValue();
    }
});

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();

    countryName.textContent === 'Country' ? dropDown.style = "outline: 2px solid red" :
        input.forEach(e => {
            e.value = '';
        }) ? formTitle.textContent === "Join us" : formTitle.textContent = "That's more like it!";
    countryName.textContent = 'Country';

    setTimeout(() => {
        formTitle.textContent = "Join us";
    }, 5000);
});

mailIcn.addEventListener('mouseover', () => {
    mailPth.forEach(e => {
        e.style.stroke = '#71A7E2';
    })
});

mailIcn.addEventListener('mouseout', () => {
    mailPth.forEach(e => {
        e.style.stroke = 'black';
    })
});