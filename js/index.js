var index = 0;
coverSlides();

function coverSlides() {
    var image = document.getElementsByClassName("cover_image");
    for (var i = 0; i < image.length; i++) {
        image[i].style.display = "none";
    }
    index++;
    if (index > image.length) { index = 1 }
    image[(index - 1)].style.display = "block";
    // time to change the slide is set to 4 seconds
    setTimeout(coverSlides, 4000);
}




var mynew = document.getElementById("demo");
const Url = "https://jsonplaceholder.typicode.com/users"

axios.get(Url)
    .then((response) => {
        generate(response);
    })
    .then(error => console.log(error))


function generate(response) {
    let output = '';
    response.data.forEach(el => {
        output += `<h2 class="my">${el.name}</h2>`
    })
    mynew.insertAdjacentHTML('afterbegin', output)
}