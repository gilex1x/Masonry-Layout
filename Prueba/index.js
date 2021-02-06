//Acceso de unsplash
const accesKey = 'l3HhSefzVShhtuaDIlVXCy2jdM3sLl27PCrnUruFfhA';
const container = document.getElementById('portfolio');
const actionButton = document.getElementById('buttonMore');
let page = 1;
const getInfo = async()=>{
    //LLamamos la información de la API 
    let response = await fetch(`https://api.unsplash.com/photos/?client_id=${accesKey}&page=${page}`);
    let data = await response.json();
    //Capturamos solo las url de las imagenes que es lo que nos importa
    let imagesList = await data.map((element)=>{
        return element.urls.thumb
    });
    console.log(imagesList)

    const createImage =(list)=>{
        list.forEach(element => {
            container.innerHTML +=`
            <div class="portfolio-container__grid-item">
                <img class="portfolio-container__grid-image" src=${element}/>
                <div class="overlay">
                    <p class="image-overlay_text1">CREATIVE LOGO</p>
                    <p class="image-overlay_text2">Branding</p>
                </div>
            </div>
                
            `
        });
    }
    createImage(imagesList);
};
getInfo();
const loadMore =(e)=>{
    e.preventDefault();
    page = page + 1;
    getInfo();
}

actionButton.addEventListener('click',loadMore);

const burguerMenu = document.getElementById('burguer');
const myMenu = document.getElementById('menu')
console.log(burguerMenu)
burguerMenu.addEventListener('click', ()=>{
    myMenu.classList.toggle('isActive');
})