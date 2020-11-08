// const input = document.querySelector(".inputValue");
// const btn = document.querySelector("button");
// const url =
//   "https://api.themoviedb.org/3/search/movie?api_key=ec37287d33d56214e2498c50afb5bd02";
// const movieContainer = document.querySelector(".movies-container");
// // const movies = document.querySelectorAll(".movie");
// const imgUrl = "https://image.tmdb.org/t/p/w500/";

// function createContainer() {
//   const movieElement = document.createElement("div");
//   movieElement.setAttribute("class", "movie");
// }

// btn.addEventListener("click", searchMovies);

// function searchMovies(e) {
//   e.preventDefault();
//   const value = input.value;

//   if (value.length === 0) {
//     alert("please type something");
//   } else {
//     fetch(`${url}&query=${value}`)
//       .then((res) => res.json())
//       .then((data) => {
//         const result = data["results"];
//         result.forEach((items) => {
//           const movies = document.createElement("div");
//           movies.style.height = "500px";
//           movies.style.width = "500px";
//           const img = document.createElement("img");
//           img.style.height = "500px";
//           img.style.objectFit = "cover";
//           img.style.width = "500px";
//           const src = `${imgUrl}${items["poster_path"]}`;
//           img.src = src;
//           movies.appendChild(img);
//           movieContainer.appendChild(movies);
//         });
//       })
//       .catch((err) => console.log(err));

//     input.value = "";
//   }
// }

const input = document.querySelector(".inputValue");
const btn = document.querySelector("button");
const url =
  "https://api.themoviedb.org/3/search/movie?api_key=ec37287d33d56214e2498c50afb5bd02";
const movieContainer = document.getElementById("movie-container");
// const movies = document.querySelectorAll(".movie");
const imgUrl = "https://image.tmdb.org/t/p/w500/";
const movies = document.querySelectorAll(".movie");

function createContainer() {
  const movieElement = document.createElement("div");
  movieElement.setAttribute("class", "movie");
}

btn.addEventListener("click", searchMovies);

function searchMovies(e) {
  e.preventDefault();
  const value = input.value;

  if (value.length === 0) {
    alert("please type something");
  } else {
    fetch(`${url}&query=${value}`)
      .then((res) => res.json())
      .then((data) => {
        const result = data["results"];
        result.forEach((items) => {
          const movieElement = `<img src="${imgUrl}${items["poster_path"]}" alt="">`;
          console.log(movieElement);
          movieContainer.innerHTML += movieElement;
        });
      })
      .catch((err) => console.log(err));

    movieContainer.innerHTML = "";

    input.value = "";
  }
}
