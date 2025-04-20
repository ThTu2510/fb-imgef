const fullImg = document.querySelector(".full-img");
const smallImg = document.querySelectorAll(".gallery img");
const blackbgr = document.querySelector(".blackbgr");

// dùng vòng lặp foreach để add các ảnh khi click vào
smallImg.forEach(function (img) { //Duyệt qua từng ảnh nhỏ với forEach
    img.addEventListener('click', function () {
        //Khi có người dùng "click" vào ảnh
        blackbgr.classList.add("open"); // hiện nền đen
        fullImg.classList.add("open"); //hiện ảnh lớn ở giữa//

        //liên kết ảnh lớn phù hợp với ảnh nhỏ.
        const profitImg = img.getAttribute("alt");
        fullImg.src = `./img-full/${profitImg}.jpg`;
    });
});
// Khi người dùng click vào vùng đen ( nền ngoài ảnh) thì
blackbgr.addEventListener("click", function(e){
    if(e.target.classList.contains("blackbgr")){
        blackbgr.classList.remove("open"); // ẩn nền đen - remove open
        fullImg.classList.remove("open"); // ẩn ảnh lớn, quay về ảnh nhỏ - remove open 
    }
});