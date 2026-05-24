// list images

const images = [
    {
        id: 1,
        title: 'slider1',
        srcImage: './assets/image/item1.png',
        active: true
    },
    {
        id: 2,
        title: 'slider2',
        srcImage: './assets/image/item2.png',
        active: false
    },
    {
        id: 3,
        title: 'slider3',
        srcImage: './assets/image/item3.png',
        active: false
    },
    {
        id: 4,
        title: 'slider4',
        srcImage: './assets/image/item4.png',
        active: false
    },
    {
        id: 5,
        title: 'slider5',
        srcImage: './assets/image/item5.png',
        active: false
    },
    {
        id: 6,
        title: 'slider6',
        srcImage: './assets/image/item6.png',
        active: false
    },
    {
        id: 7,
        title: 'slider7',
        srcImage: './assets/image/item7.png',
        active: false
    },
    {
        id: 8,
        title: 'slider8',
        srcImage: './assets/image/item8.png',
        active: false
    }
]
// variable
let slide = document.getElementById('slide')
let counter = 0
let currentSlide = null
let div = ''
let img = ''

// slide photo
const slider = () => {   

    if (currentSlide && currentSlide.classList.contains('cerousel-item')) {
        currentSlide.remove()
    }

    images.forEach((item) => item.active = false)

    images[counter].active = true

    div = document.createElement('div')

    div.classList.add('cerousel-item')

    img = document.createElement('img')

    img.src = images[counter].srcImage

    div.appendChild(img)

    slide.appendChild(div)

    currentSlide = div

}

// loded content Dom
document.addEventListener('DOMContentLoaded', () => {
    slider()
    setInterval(() => {
        counter = (counter + 1) % images.length
        slider()
    }, 4000)
})






// prev
const prev = document.getElementById('arrow-left').addEventListener('click', () => {
    counter = (counter - 1 + images.length) % images.length
    slider()
})

// next
const next = document.getElementById('arrow-right').addEventListener('click', () => {
    counter = (counter + 1) % images.length
    slider()
})