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
    paragraph.textContent = item.name
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

    // btn edit
    btnEdit.addEventListener('click', () => {
        const index = feature.findIndex(f => f.id === item.id)

        if (index !== -1) {
            btnEdit.classList.add('hiden')
            btnRemove.classList.add('hiden')
            let divEdit = document.createElement('div')
            let inputEdit = document.createElement('input')
            let btnSubmit = document.createElement('button')
            let btnCancel = document.createElement('button')
            btnSubmit.textContent = 'submit'
            btnCancel.textContent = 'cancel'
            btnSubmit.classList.add('submit')
            btnCancel.classList.add('remove')
            divEdit.classList.add('editTxt')
            inputEdit.classList.add('add-text')
            inputEdit.classList.add('w-100')
            divEdit.appendChild(inputEdit)
            divEdit.appendChild(btnSubmit)
            divEdit.appendChild(btnCancel)
            div.appendChild(divEdit)
            inputEdit.value = paragraph.textContent

            paragraph.classList.add('hiden')
            btnSubmit.addEventListener('click', () => {
                let newText = inputEdit.value
                item.name = newText
                divEdit.remove()
                paragraph.classList.remove('hiden')
                btnEdit.classList.remove('hiden')
                btnRemove.classList.remove('hiden')
                btnSubmit.classList.add('hiden')
                btnCancel.classList.add('hiden')
                inputEdit.classList.add('hiden')
                paragraph.textContent = newText
            })
            btnCancel.addEventListener('click', () => {
                divEdit.remove()
                paragraph.classList.remove('hiden')
                btnEdit.classList.remove('hiden')
                btnRemove.classList.remove('hiden')
                btnSubmit.classList.add('hiden')
                btnCancel.classList.add('hiden')
                inputEdit.classList.add('hiden')
            })
        }
    })
}


// btn add text
btnAddText.addEventListener('click', () => {
    if (inputText.value === '') {
        alert('please complte field')
        return
    }
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


