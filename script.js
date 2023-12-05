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

const photosH3 = document.querySelectorAll(".photos")

photosH3.forEach(photos => {
    photos.addEventListener('mouseover', () => {
        removeActiveClassesPhotos()
        photos.classList.add("view")
    })
})

photosH3.forEach(photos =>{
    photos.addEventListener("mouseout", () => {
          photos.classList.remove("view")
    })
})

  function removeActiveClassesPhotos(){
    photosH3.forEach(photos =>{

        photos.classList.remove("view")
    })
  }

  