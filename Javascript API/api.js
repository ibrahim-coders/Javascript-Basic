// fetch -

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     displayData(data);  // Pass the fetched data to displayData
//   });

// const postsDiv = document.querySelector(".posts");

// function displayData(fruits) {
//   let data = fruits.slice(0, 20);
//   data.forEach((fruit) => {
//     postsDiv.innerHTML += `
//       <div class="box">
//         <h4>${fruit.id}</h4>
//         <h2>${fruit.title}</h2>
//         <p>${fruit.body}</p>
//       </div>
//     `;
//   });
// }


const PHOTOS_API = "https:jsonplaceholder.typicode.com/photos";
function fetchApi(url) {
  fetch(url)
    .then(res => res.json())
    .then((phots) => console.log(phots));
}
fetchApi(PHOTOS_API);