const AD = document.querySelector('.nav-menu li.AD');
const DK = document.querySelector('.nav-menu li.DK'); 
const dkMore = document.querySelector('.DK-more');
const adMore = document.querySelector('.ad-more');

console.log(AD);

DK.addEventListener('mouseenter', function() {
    dkMore.style.display = 'block'; // Hiện danh sách khi di chuột vào
});

DK.addEventListener('mouseleave', function() {
    dkMore.style.display = 'none'; // Ẩn danh sách khi rời chuột
});

AD.addEventListener('mouseenter', function() {
    adMore.style.display = 'block'; // Hiện danh sách ad-more khi di chuột vào
});

AD.addEventListener('mouseleave', function() {
    adMore.style.display = 'none'; // Ẩn danh sách ad-more khi rời chuột
});



