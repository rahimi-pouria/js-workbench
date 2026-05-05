const header = document.getElementsByClassName('header')
const description = document.getElementsByClassName('description')
const headers = Array.from(header)
const descriptions = Array.from(description)


headers.forEach((item, index) => {
    item.addEventListener('click', () => {
        descriptions.forEach((desc, i) => {
            desc.classList.remove('open')
            desc.classList.add('closed')
            if (index === i) {
                desc.classList.toggle('closed')
            }
        })
    })
})