const btnCalculator = document.getElementById('body-btn-calculator');

const buttonNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', 'c'];

let showNumber = document.getElementById('show-number')

let information = ''

let value = ''

buttonNumber.forEach((item) => {

    const button = document.createElement('button');

    btnCalculator.appendChild(button)

    button.textContent = item


    if (button.textContent === '=' || button.textContent === '+' || button.textContent === '-' || button.textContent === '*' || button.textContent === '/' || button.textContent === 'c') {

        button.classList.add('information')
        
        button.classList.add('btn')

    } else {
        button.classList.add('btn')
    }

    button.addEventListener('click', () => {

        value = button.innerText

        if (value === 'c') {

            information = ''

        } else if (value === '=') {

            try {

                information = eval(information).toString()

            } catch {

                information = 'error'
            }
        } else {

            information += value
        }
        showNumber.value = information || '0'
    })
})


