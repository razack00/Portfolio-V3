function switchPage(newPage) {
    const pages = document.querySelectorAll('.page')
    pages.forEach(page => {
        page.style.display = "none"
    })

    const currentPage = document.querySelector(newPage)
    currentPage.style.display = 'flex'
}

document.addEventListener('DOMContentLoaded', () => {
    switchPage('.about-section')
    const links = document.querySelectorAll('nav a')
    links.forEach(link => {  
        link.onclick = (e) => {
            page = `.${e.target.dataset.page}`
            console.log(page)
            if(link !== page) {
                switchPage(page)
            }
        }
    })

    const title = document.querySelector('.intro')
    const text = "WebDeveloper &Designer".split(" ")
    text.forEach(function(word) {
        let chars = word.split('')
        let div = document.createElement('div')
        chars.forEach(char => {
            let span = document.createElement('span')
            span.textContent = char
            div.appendChild(span)
        })
        title.appendChild(div)
    })


    const cursortext = document.querySelector('.cursor');
    cursortext.innerHTML = cursortext.textContent.replace(/\S/g, "<span>$&</span>")

    const element = document.querySelectorAll('.cursor span')
    for(let i = 0; i<element.length; i++){
        element[i].style.transform = "rotate("+i*12.2+"deg)"
    }

    let cursor = document.querySelector('.cursor')
    document.addEventListener('mousemove', (e) => {
        cursor.style.cssText =  'left: ' + (e.clientX+30) + 'px; top: ' + (e.clientY+40) + 'px;';
    })
})


