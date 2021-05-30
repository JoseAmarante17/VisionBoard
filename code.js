//counter
count = -1;

function show() {
    //VARIABLES FOR PICTURES
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");
    let img4 = document.getElementById("img4");
    let img5 = document.getElementById("img5");
    let main = document.getElementById("main");

    //STORES VARIABLES IN ARRAY
    images = [img1, img2, img3, img4, img5];

    //displays
    count++;
    if (count >= 5) {
        main.style.display = 'none';
        let btn = document.createElement("button")
        btn.innerHTML = "Go back";
        btn.setAttribute("class", "go-back");
        btn.setAttribute("id", "back");
        btn.setAttribute("onclick", "back()");
        document.body.appendChild(btn);
    } else {
        display(images[count]);
    }


}

//displays images
function display(img) {
    img.style.display = 'inline-block';
    console.log("WORKS");
}

function back() {
    if (count >= 4) {
        let btn = document.getElementById("back");
        let main = document.getElementById("main");
        let body = document.getElementById("body");
        main.style.display = 'block';
        body.style.backgroundImage = ('linear - gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url("Programming-Language-Popularity.jpg")');
        btn.remove();
    }
}