

document.querySelector("#file_sel").addEventListener("change", function (e) {
    if (this.value.length > 0)
        document.querySelector(".toplayout__img>img").setAttribute("src", window.URL.createObjectURL(this.files[0]));
});