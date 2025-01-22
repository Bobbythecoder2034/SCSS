// Create header
const header = document.createElement('header');
header.innerHTML = "<h1> Welcome to our Website: Arrowhead Studios </h1>";
document.body.appendChild(header);

const section = document.createElement('section');
for(var i = 0; i < 3; i++){
    const article = document.createElement('article');
    const img = document.createElement('img')
    img.src = '../images/oMftdFPT5bAuhp6VUcND7a-1200-80.jpg'
    const content = document.createElement('p')
    content.innerHTML = "Lorem ipsum odor amet, consectetuer adipiscing elit. Pulvinar lacinia sem placerat placerat pellentesque suspendisse vestibulum nascetur. Cras sagittis nascetur auctor fusce semper pellentesque. Nisi semper"
    article.appendChild(img)
    article.appendChild(content)
    section.appendChild(article)
}

document.body.appendChild(section)



//create footer content
const footer = document.createElement('footer')
const logo = document.createElement('img')

logo.src = '../images/0.jpg'
footer.innerHTML = '<h1> 2025 Arrowhead Studios </h1>'
footer.style.backgroundColor = P
footer.appendChild(logo)
for(var i = 0; i < 2; i++){
    const link = document.createElement('a')
    link.innerHTML = "link"
    link.href = '#'
    footer.appendChild(link)
}

document.body.appendChild(footer)