function switchPage(newPage) {
    const pages = document.querySelectorAll('.page')
    pages.forEach(page => {
        page.style.display = "none"
    })

    const currentPage = document.querySelector(newPage)
    currentPage.style.display = 'block'
    console.log(currentPage)
}

document.addEventListener('DOMContentLoaded', () => {
    switchPage('.hero-section')
    const sections = document.querySelectorAll('nav a')
    sections.forEach(section => {
        section.onclick = (e) => {
            page = `.${e.target.dataset.section}`
            if(section !== page) {
                switchPage(page)
            }
        }
    })
})
