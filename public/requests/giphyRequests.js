let gif = document.getElementById('gif')
/*
    Usando FETCH

fetch('https://api.giphy.com/v1/gifs/search?api_key=XtrW39FAtl71SwOBiYkTK6OK764UZMuI&q=not found&limit=1&offset=0&rating=g&lang=en')
.then(response => response.json())
    .then(json => {
        gif.src = json.data[0].images.original.url
    }) 
    .catch(function (error) {
        // handle error
        console.log(error)
    }); 
*/

//  Usando AXIOS

    axios('https://api.giphy.com/v1/gifs/random?api_key=XtrW39FAtl71SwOBiYkTK6OK764UZMuI&tag=not found&rating=g')
    .then(json => {
        console.log(json.data)
        gif.src = json.data.data.images.original.url
    })
    .catch(function (error) {
        // handle error
        console.log(error)
    }); 