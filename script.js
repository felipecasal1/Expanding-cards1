const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

const photosH3 = document.querySelector(".photos")

    photosH3.addEventListener('mouseover', () => {
        photosH3.classList.add('active')
    })

