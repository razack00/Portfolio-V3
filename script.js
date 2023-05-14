let switchPage = (newPage) => {
    const pages = document.querySelectorAll('.page')
    pages.forEach((page) => {
        page.style.display = "none"
    })
    const currentPage = document.querySelector(`.${newPage}`)

    // currentPage.className !== 'home' && (document.querySelectorAll('nav li').style.color = "#555")

currentPage.style.display = "block"
}

document.addEventListener('DOMContentLoaded', () => {
    switchPage("section-1")
    document.querySelectorAll('nav li').forEach((li) => {
        li.onclick = (e) => {
            const page = e.target.dataset.section
            if(li !== page) {
                switchPage(page)
            } 
        }
    })
})