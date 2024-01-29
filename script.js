const body = document.getElementsByTagName('body')[0]

document.createElement('h1')

const h1 = document.createElement('h1')

h1.textContent = 'Manuella de Freitas Faria Lopes'

h1.style.textAlign = 'center'
h1.style.color = '#A9A9A9'

body.append(h1)

const input1 = document.createElement('input')
input1.placeholder = 'First number'
const input2 = document.createElement('input')
input2.placeholder = 'Second number'

body.append(input1, input2)

const buttonSum = document.createElement('button')
buttonSum.textContent = 'Sum'

const result = document.createElement('strong')

const validate = element => {
    if (isNaN(Number(element.value))) {
        element.style.borderColor = 'red'
        throw 'Error: Only numbers are accepted'
    } else {
        element.style.borderColor = 'black'
        return true
    }
}

buttonSum.onclick = function () {
    try {
        validate(input1)
        validate(input2)
        result.textContent =
            'The result of the sum is: ' + (+input1.value + +input2.value)
    } catch (error) {
        console.log(error)
        result.textContent = error
    }
}

body.append(buttonSum)
body.append(result)

const bgPicker = document.createElement('input')
bgPicker.type = 'color'

// body.style.backgroundColor = bgPicker.value
body.append(bgPicker)
bgPicker.addEventListener('change', () => {
    body.style.backgroundColor = bgPicker.value
})
