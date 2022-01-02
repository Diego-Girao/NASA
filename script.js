const BASE_URL = "https://api.nasa.gov/planetary/apod?api_key={YOUR_API_KEY}";

// Testando a API da NASA e seus retornos
// fetch(BASE_URL).then(function(response) {
//     response.json().then(function(data) {
//       console.log(data.title);
//       console.log(data.date);
//       console.log(data.explanation);
//       console.log(data.hdurl);

//     });
//   }).catch(function(err) {
//     console.error('Failed retrieving information', err);
//   });

const nasaDayImage = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.url;

    } catch (error) {
    console.log(error.message);
    }
}
const nasaDayTitle = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.title;

    } catch (error) {
    console.log(error.message);
    }
};
const nasaDayContent = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.explanation;

    } catch (error) {
    console.log(error.message);
    }
};
const loadImg = async () => {
    const nasaImg = document.getElementById('image');
    nasaImg.src = await nasaDayImage();
};
const loadContent = async () => {
    const nasaContent = document.getElementById('content');
    nasaContent.innerText = await nasaDayContent();
}
const loadTitle = async () => {
    const nasaContent = document.getElementById('title');
    nasaContent.innerText = await nasaDayTitle();
};
loadTitle();
loadContent();
loadImg();
