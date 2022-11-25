searchbtn =  document.getElementById("search");
inputfield = document.getElementById("movie");

searchbtn.addEventListener("click", (input) => {
    input = inputfield.value;
    url = `https://api.tvmaze.com/search/shows?q=${input}`;
    getdata(url);
});

imagesArray = [];

async function getdata(url) {
    const response = await fetch(url);

    var data = await response.json();
    console.log(data);
    if (response) {
        data.forEach(element => {
            console.log(element.show.image['original']);
            imagesArray.push(element.show.image['original']);
        });
        console.log(imagesArray);
    }
    showPhoto();
}

movieMainDiv = document.getElementById("movieDiv");
function showPhoto() {
    movieMainDiv.innerHtml = "";
    for(let element of imagesArray) {
        var card = document.createElement("div");
        var imageElement = document.createElement('img');
            imageElement.src = element;
            movieMainDiv.appendChild(card);
            card.appendChild(imageElement);
    };
}
const a = document.getElementById('btn1');
a.addEventListener('click', function onClick(event) {

    document.body.style.backgroundColor = 'grey';
  });
  const b = document.getElementById('btn2');
  
  b.addEventListener('click', function onClick(event) {
  
    document.body.style.backgroundColor = 'lightpink';
  });
  const c = document.getElementById('btn3');
  
  c.addEventListener('click', function onClick(event) {
  
    document.body.style.backgroundColor = 'lightblue';
  });
  const d = document.getElementById('btn4');
  
  d.addEventListener('click', function onClick(event) {
  
    document.body.style.backgroundColor = 'lightgreen';
  });
  const e = document.getElementById('btn5');
  
  e.addEventListener('click', function onClick(event) {
  
    document.body.style.backgroundColor = 'blue';
  });