const dropDown = document.querySelector('.form-input-drop');
const dropList = dropDown.querySelector('.country-list');
const imgMod = dropDown.querySelector('.img-mod');

// dropList.addEventListener('click', () => {
//     console.log(dropList.selectedIndex);
// });

dropDown.addEventListener('click', (e) => {
    const open = dropList.classList.toggle('active');
    open ? imgMod.style = "transform: rotate(180deg)" : imgMod.style = "transform: none";
});
