const radioBtns = document.querySelectorAll(".product-card__btn-radio");
radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("click", () => {
        let productCard = radioBtn.parentElement.parentElement,
            productImg = productCard.querySelector(".product-card__img > img"),
            proRadioBtns = productCard.querySelectorAll(".product-card__btn-radio");
        if(radioBtn.parentElement.parentElement === productCard) {
            proRadioBtns.forEach(radioBtn => radioBtn.classList.remove("selected"))
            radioBtn.classList.add("selected");
            productImg.src = radioBtn.dataset.img       }
    })
})
