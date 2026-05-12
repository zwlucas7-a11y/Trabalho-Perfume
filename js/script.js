const cursor = document.querySelector('.cursor')

window.addEventListener('mousemove', (e) => {

    cursor.style.top = e.clientY + 'px'
    cursor.style.left = e.clientX + 'px'

})

const header = document.querySelector('.header')

window.addEventListener('scroll', () => {

    if(window.scrollY > 60){

        header.style.background = 'rgba(0,0,0,.95)'

    }else{

        header.style.background = 'rgba(0,0,0,.4)'

    }

})

const cards = document.querySelectorAll('.card')

cards.forEach((card) => {

    card.addEventListener('mousemove', (e) => {

        const rect = card.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        card.style.backgroundPosition = `${x / 25}px ${y / 25}px`

    })

    card.addEventListener('mouseleave', () => {

        card.style.backgroundPosition = 'center'

    })

})