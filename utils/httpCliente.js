const API = "https://api.themoviedb.org/3"

export const get = (path)=>{
  console.log(path);
  return fetch(API + path, {
    headers: {
      Authorization:
        "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGIyYWEzOGNjNjI4ZDNiZTIxMzZmZTE5YjQzOGViOSIsInN1YiI6IjY1MGVjZmQ2NmY1M2UxMGFhYzJhM2U4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XeGzk0rttYli1r5o9QbuRNDm-t7F6zOgX1auC4-6GTU",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((results) => results.json());
}