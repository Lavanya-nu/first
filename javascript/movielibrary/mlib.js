const mainDiv=document.getElementById('mlib')
const mlist=[
    {
        "Director": "shekar kamula",
        "country": "India",
        "imageLink": "images/fidaa.jpg",
        "language": "Telugu",
        "link": "https://www.aha.video/player/movie/fidaa\n",
        "title": "Fidaa",
        
      },
      {
        "Director": "Rajamouli",
        "country": "India",
        "imageLink": "images/sye.jpg",
        "language": "Telugu",
        "link": "\n",
        "title": "Sye",
        
      },
      {
        "Director": "Shouryuv",
        "country": "India",
        "imageLink": "images\Hi nanna.jpg",
        "language": "Telugu",
        "link": "\n",
        "title": "Hi nanna",
        
      },
      {
        "Director": "bakkiyaraj kanna",
        "country": "India",
        "imageLink": "images\Remo.jpg",
        "language": "Telugu",
        "link": "\n",
        "title": "Remo",
        
      },
      {
        "Director": "Boyapati Srinu ",
        "country": "India",
        "imageLink": "images/sarrainodu.jpg",
        "language": "Telugu",
        "link": "\n",
        "title": "Sarrainodu",
        
      },
      {
        "Director": "Hanu raghavapudi",
        "country": "India",
        "imageLink": "images/Sita ramam.jpg",
        "language": "Telugu",
        "link": "\n",
        "title": "Sita Ramam",
        
      },
]
mlist.forEach(function (movie)
{
  console.log(movie.title);
  const MovieDiv=document.createElement('div')
  const img=document.createElement('img')
  img.src=movie.imageLink
  img.alt=movie.title
  const title=document.createElement('h4')
  title.textContent=movie.title
  const button=document.createElement('button')
  const anchor=document.createElement('a')
  anchor.href=movie.link;
  anchor.target="_blank"
  anchor.textContent="Watch"
  button.appendChild(anchor)
  MovieDiv.appendChild(img)
  MovieDiv.appendChild(title)
  MovieDiv.appendChild(button)
  MovieDiv.classList.add('movie')
  mainDiv.appendChild(MovieDiv)
})