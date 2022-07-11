images=[
    "https://cdn.pixabay.com/photo/2017/08/06/11/50/nature-2591762_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/03/10/17/59/light-3214742_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
]
randomNumber = Math.floor(Math.random()*images.length);
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "100% 100%";
document.body.style.backgroundImage = `url(${images[randomNumber]})`;