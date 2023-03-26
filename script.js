var count = 0;
let countText = document.querySelector('#count');
countText.innerHTML = count;

let wrapper__things_laptop = document.querySelector('#wrapper__things_laptop');
let wrapper__things_glasses = document.querySelector('#wrapper__things_glasses');
let wrapper__things_trunks = document.querySelector('#wrapper__things_trunks');

wrapper__things_laptop.addEventListener('click', () => {
    window.count++;
    countText.innerHTML = window.count;
    wrapper__things_laptop.style.display = 'none';
});

wrapper__things_glasses.addEventListener('click', () => {
    window.count++;
    countText.innerHTML = window.count;
    wrapper__things_glasses.style.display = 'none';
});

wrapper__things_trunks.addEventListener('click', () => {
    window.count++;
    countText.innerHTML = window.count;
    wrapper__things_trunks.style.display = 'none';
});

setInterval(()=>{
    if (window.count == 3) {
        window.location.href = "path.html";
    }
},1000);