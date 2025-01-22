// https://static.wikia.nocookie.net/logopedia/images/7/75/Arrowhead_Game_Studios_2012_%28Stacked%29.png/revision/latest?cb=20230525214952 
// https://m.media-amazon.com/images/M/MV5BYmU5ZmE3ODUtNGI0NS00MGYxLWE1NmUtMDgyMDM4NGM2OTA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg
// https://static.wikia.nocookie.net/helldivers_gamepedia/images/3/33/Helldivers_2_Art.png/revision/latest?cb=20240216152845
// https://cdn.britannica.com/67/183767-050-23D72392/World-Data-Locator-Map-Sweden.jpg
const siteData = {
    header: "Welcome to Arrowhead Studios",
    bannerImage: "https://static.wikia.nocookie.net/logopedia/images/7/75/Arrowhead_Game_Studios_2012_%28Stacked%29.png/revision/latest?cb=20230525214952" ,
    navLinks:["Home", "About", "Services", "Contact"],
    mainContent:[
        {
            title: "Helldivers 2",
            image: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/3/33/Helldivers_2_Art.png/revision/latest?cb=20240216152845",
            description: "Our biggest game yet, with the largest audience we have ever seen"
        },{
            title: "Helldivers",
            image: "https://m.media-amazon.com/images/M/MV5BYmU5ZmE3ODUtNGI0NS00MGYxLWE1NmUtMDgyMDM4NGM2OTA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" ,
            description: "Our first game was when we really became well known and popular."
        
        },{
            title: "Sweden",
            image: "https://cdn.britannica.com/67/183767-050-23D72392/World-Data-Locator-Map-Sweden.jpg" ,
            description: "We are based in Sweden",
        }
    ],
    footer:"Arrowhead Studios c 2025. All rights reserved"
}

//Create and append elements dynamically

const createAndAppend = (tag, parent, attributes = {}, content ="")=>{
    const element = document.createElement(tag);
    Object.keys(attributes).forEach(key=>element.setAttribute(key,attributes[key]));
    element.innerHtml = content;
    parent.appendChild(element);
    return element;
}