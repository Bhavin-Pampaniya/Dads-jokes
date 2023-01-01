console.log("dad jokes");

const URL = 'https://icanhazdadjoke.com/';
const btn = document.querySelector('button');
const para = document.querySelector('p');

// const showJokes = () => {
//     const requestHeaders = {
//         method: "GET",
//         headers: {
//             Accept: "application/json"
//         }
//     }
//     fetch(URL, requestHeaders)
//         .then((res) => res.json())
//         .then((data) => para.innerHTML = data.joke);
// }
const showJokes = async ()=>{
    const requestHeaders = {
        method : "GET",
        headers : {
            Accept : "application/json"
        }
    }
    const response = await fetch (URL,requestHeaders);
    const data = await response.json()
    para.innerHTML = data.joke
}
showJokes();
btn.addEventListener('click', showJokes)