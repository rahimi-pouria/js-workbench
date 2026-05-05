const feature = []
let elementList = document.getElementById('element')
let inputText = document.getElementById('addText')
let btnAddText = document.getElementById('btnAddText')
let txt = '';
let counter = 1

const addFeature = (item) => {
    let div = document.createElement('div')
    div.classList.add('element-list')
    div.setAttribute('data-id', item.id)

    const paragraph = document.createElement('p')
    let text = document.createTextNode(item.name)
    paragraph.appendChild(text)
    paragraph.classList.add('paragraph')

    let btnRemove = document.createElement('button')
    let btnEdit = document.createElement('button')
    let labelBtnEdit = document.createTextNode('edit')
    let labelBtn = document.createTextNode('remove')

    btnEdit.appendChild(labelBtnEdit)
    btnEdit.classList.add('edit')
    btnRemove.appendChild(labelBtn)
    btnRemove.classList.add('remove')

    div.appendChild(paragraph)
    div.appendChild(btnRemove)
    div.appendChild(btnEdit)
    elementList.appendChild(div)
    // btn remove
    btnRemove.addEventListener('click', () => {
        div.remove()
        const index = feature.findIndex(f => f.id === item.id)

        if (index !== -1) {
            feature.splice(index, 1)
        }
    })
}


// btn add text
btnAddText.addEventListener('click', () => {
    txt = inputText.value
    if (txt.trim() === '') return
    counter++
    const newText = {
        id: counter,
        name: txt
    }
    feature.push(newText)
    addFeature(newText)
    inputText.value = ''
})


