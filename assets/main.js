let x = document.querySelector("input");

let ctn = document.querySelector(".icn");

ctn.addEventListener("click", function () {
    x.click();
})

let imgs = document.querySelector(".img");


x.addEventListener("change", function () {
    [...this.files].forEach(x => {
        let filere = new FileReader();
        let div = document.createElement("div");
        imgs.appendChild(div);
        filere.onload = function () {
            div.innerHTML = "<img src='" + this.result + "'> <span>X</span>";
            let y = document.querySelectorAll("span")
            y.forEach(e => {
                e.addEventListener("click", function () {
                    this.parentElement.remove();
                })
            })
        }
        filere.readAsDataURL(x);
    })
})


ctn.addEventListener("dragover", function (e) {
    e.preventDefault();
})

ctn.addEventListener("drop", function (e) {
    e.preventDefault();
    let transfer = e.dataTransfer;
    [...transfer.files].forEach(x => {
        let filere = new FileReader();
        let div = document.createElement("div");
        imgs.appendChild(div);
        filere.onload = function () {
            div.innerHTML = "<img src='" + this.result + "'> <span>X</span>";
            let y = document.querySelectorAll("span")
            y.forEach(e => {
                e.addEventListener("click", function () {
                    this.parentElement.remove();
                })
            })
        }
        filere.readAsDataURL(x);
    })

})

