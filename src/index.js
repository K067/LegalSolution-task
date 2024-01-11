const dropDown = document.querySelector('.form-input-drop');
const dropList = dropDown.querySelector('.country-list');
const imgMod = dropDown.querySelector('.img-mod');
const list = dropList.querySelectorAll('.country-name');

list.forEach(e => {
    e.addEventListener('click', e => {
        document.querySelector('.country-select').textContent = e.target.textContent;
    })
})

dropDown.addEventListener('click', e => {
    const open = dropList.classList.toggle('active');
    open ? imgMod.style = "transform: rotate(180deg)" : imgMod.style = "transform: none";
})
document.querySelector('.dropdown-group').addEventListener('blur', e => {
    const close = dropList.classList.remove('active');
    imgMod.style = "transform: none";
});