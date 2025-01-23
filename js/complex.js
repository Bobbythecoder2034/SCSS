// https://i.redd.it/2tuay0z91uyc1.jpeg 
// https://m.media-amazon.com/images/M/MV5BYmU5ZmE3ODUtNGI0NS00MGYxLWE1NmUtMDgyMDM4NGM2OTA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg
// https://upload.wikimedia.org/wikipedia/en/e/e7/Helldivers2cover.png
// https://cdn.britannica.com/67/183767-050-23D72392/World-Data-Locator-Map-Sweden.jpg
const siteData = {
    header: "Welcome to Arrowhead Studios",
    bannerImage:  
    {
        image:"https://i.redd.it/2tuay0z91uyc1.jpeg",
        width: "500px",
        height: "250px",
    },
    navLinks:["Home", "About", "Services", "Contact"],
    mainContent:[
        {
            title: "Helldivers 2",
            image: "https://upload.wikimedia.org/wikipedia/en/e/e7/Helldivers2cover.png",
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
    Object.keys(attributes).forEach(key=>element.setAttribute(key,attributes[key]));//(backgroundColor, "Pink") changes for each new element to add every attribute to the element
    //looks at the attributes and sets attributes to the name in key and its then given the value
    
    element.innerHTML = content;
    parent.appendChild(element);
    return element;
}
//keys are names like backgroundColor, width, color

// createAndAppend("p","body"); //This will have no attributes and no content
// createAndAppend("p","body", {}, "Loremfadkjfjdsahgjkda fhjsahkhfjhjadfhjsa"); // <p> fjdakfljakdhsf <p>
// createAndAppend("p","body", {className:"nav bar square"}, "Loremfadkjfjdsahgjkda fhjsahkhfjhjadfhjsa"); // <p> fjdakfljakdhsf <p> but fancy
//You can use document.getElementByID instead of parent as a parameter to append it to a certain element instead of the bottom of the parent

const header = createAndAppend("header", document.body, {class:"site-header"});

//Create banner Image
const banner = createAndAppend("div", document.body, {class: "site-banner"})
createAndAppend('img', banner, {src:siteData.bannerImage.image, alt:siteData.bannerImage.alt})

//Create Navigation

const nav = createAndAppend("nav", document.body, {class:"site-nav"})
const ul = createAndAppend("ul",nav)
siteData.navLinks.forEach((link)=>{
    console.log(link)
    createAndAppend("li", ul ,{}, `<a href="#">${link}</a>`)
})

//Create Main Content

const main = createAndAppend("main", document.body, {class:"site-main"})
siteData.mainContent.forEach(section =>{
    const article = createAndAppend("article", main, {class:"content-section"})
    createAndAppend("h2", article, {},section.title)
    createAndAppend("img", article, {src:section.image, alt:section.title})
    createAndAppend("p",article,{},section.description)
});

const footer = createAndAppend("footer", document.body, {class:"site-footer"})
createAndAppend("p", footer,{},siteData.footer)

//Create some Styling
const style = `
body{font-family: Arial, sans-serif; margin:0; padding:0; line-height:1.6;}
header{ background-color:#333; color:#fff; padding:1rem; text-align:center;}
.site-banner img{width:100%; display:block;}
nav ul{list-style:none; padding:0; margin:0; display:flex; justify-content:center;
background-color:#555;}
nav ul li{margin: 0 1rem;}
nav ul li a{color: #fff; text-decoration:none;}
main{padding:1rem;}
.content-section {margin-bottom:2rem;}
.content-section img{width:100%; height:auto;}
footer{ background-color:#333; color:#fff; text-align:center;padding:1rem;}
`
createAndAppend("style", document.head,{},style)