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