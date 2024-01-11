const dropDown = document.querySelector('.form-input-drop');
const input = document.querySelectorAll('.form-input');
const dropList = dropDown.querySelector('.country-list');
const imgMod = dropDown.querySelector('.img-mod');
const list = dropList.querySelectorAll('.country-name');
const countryName = document.querySelector('.country-select');
const formTitle = document.querySelector('.form-title');

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
})