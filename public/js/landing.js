const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

/*
const switchToggle = document.querySelector(".public")
switchToggle.addEventListener("change", (e) => {
    if (e.target.value == "false") {
        e.target.value = "true"
        featureContainer.style.background = "black";
        blogContainer.style.background = "black";
    }
    else {
        e.target.value = "false"
        featureContainer.style.background = "white";
        blogContainer.style.background = "white";
    }
}) */
// fetching data
// let notifications=[]
// fetch("https://ssbnotifications-864d7-default-rtdb.firebaseio.com/notifications.json")
// .then(res =>{
//     return res.json()
// })
// .then(data=>{
//     console.log(data)
//     for(const key in data){
//         notifications.push(data[key]);
//     }
//     let length=notifications.length;
//     console.log(length);
//     // console.log(notifications[0][0])
//     // console.log(notifications)
//     // console.log(notifications[0][2])


//     notif1=notifications[length-1][0].notification
//     notif2=notifications[length-1][1].notification
//     notif3=notifications[length-1][2].notification

//     first.innerText=notif1;
//     second.innerText=notif2;
//     third.innerText=notif3;
//     setInterval(() => {
//         second.style.display = "block";
//         first.style.display = "none";
//         third.style.display = "none";
    
//     }, 2000)
    
//     setInterval(() => {
//         first.style.display = "block";
//         second.style.display = "none";
//         third.style.display = "none";
        
//     }, 4000)
//     setInterval(() => {
//         first.style.display = "none";
//         second.style.display = "none";
//         third.style.display = "block";
        
//     }, 6000)

// })
// .catch(err=>{
//     console.log(err)
// })




/* Blog Section */
/* Fetch url = https://localhost:3000/articles/getBlogs */
/* @desc: Fetching data through api call to backend blog site */
let length = 0;
async function getBlog() {
    const res = await fetch("https://ssb-blogs.herokuapp.com/articles/getBlogs")
    const data = await res.json()
    console.log(data)
    length = data.data.length;
    console.log(length)
    /* Card Section */
let card = document.querySelectorAll(".card");
let cardTitle = document.querySelectorAll(".title");
const cardDesc = document.querySelectorAll(".copy");
const cardBtn = document.querySelectorAll(".btn")
    for (let i = 0; i < length; i++){
        console.log(data.data[i].title);
        cardTitle[i].innerHTML = data.data[i].title;
        cardDesc[i].innerHTML = data.data[i].Shortdescription;
        console.log(data.data[i]._id)
        cardBtn[i].setAttribute("href",`https://ssb-blogs.herokuapp.com/articles/${data.data[i]._id}`)
    }
}


getBlog();



