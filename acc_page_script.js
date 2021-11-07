

document.querySelector("#file_sel").addEventListener("change", function (e) {
    if (this.value.length > 0)
        document.querySelector(".toplayout__img>img").setAttribute("src", window.URL.createObjectURL(this.files[0]));
});

function clearClass() {
    document.querySelectorAll(".categories__item").forEach(el => {
        if (el.classList.contains("_active"))
            el.classList.remove("_active");
    });
};

document.querySelectorAll(".categories li>a").forEach(el => el.addEventListener("click", function (p) {
    let rb = document.getElementById(p.currentTarget.name);
    rb.checked = true;
    clearClass();
    p.currentTarget.parentElement.classList.add("_active");
}));

let inputs = document.querySelectorAll(".section > form > .form__field > input");
inputs.forEach(el => {
    el.addEventListener("change", function (e) {
        let styleElem = document.head.getElementsByTagName("style");
        if (styleElem.length == 0) {
            styleElem = document.head.appendChild(document.createElement("style"));
        }
        else
            styleElem = document.head.getElementsByTagName("style");

        let input = e.currentTarget;
        if (input.value) {
            styleElem.innerHTML += "\n#" + input.id.toString() + "+" + ".form__label::after { transform: translateX(0%);}";
            styleElem.innerHTML += "\n#" + input.id.toString() + "+" + `.form__label .content-name { 
                font-size: 14px;
                color: #00e2ff;
                transform: translateY(-150%);}`;
        }
        else {
            document.head.removeChild(styleElem[0]);
        }
    });
});