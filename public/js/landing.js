const first = document.getElementById("first");
const second = document.getElementById("second");

setInterval(() => {
    second.style.display = "block";
    first.style.display = "none";

}, 2000)

setInterval(() => {
    first.style.display = "block";
    second.style.display = "none";
}, 4000)


/* Blog Section */
/* Fetch url = https://localhost:3000/articles/getBlogs */
/* @desc: Fetching data through api call to backend blog site */
let length = 0;
async function getBlog() {
    const res = await fetch("http://localhost:5000/articles/getBlogs")
    const data = await res.json()
    console.log(data)
    length = data.data.length;
    console.log(length)
    /* Card Section */
let card = document.querySelectorAll(".card");
let cardTitle = document.querySelectorAll(".title");
const cardDesc = document.querySelectorAll(".copy");

    for (let i = 0; i < length; i++){
        console.log(data.data[i].title);
        cardTitle[i].innerHTML = data.data[i].title;
        cardDesc[i].innerHTML = data.data[i].Shortdescription;
    }
}


getBlog();




