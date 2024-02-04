const body = document.getElementsByTagName('body')[0]
body.style.backgroundColor = 'brown'

document.createElement('h1')

const h1 = document.createElement('h1')

h1.textContent = 'Manuella de Freitas Faria Lopes'

h1.style.textAlign = 'center'
h1.style.color = '#A9A9A9'
h1.style.marginTop = '64px'
h1.style.marginBottom = '64px'

body.append(h1)

//div input
const div = document.createElement('div')
div.style.display = 'flex'
div.style.justifyContent = 'center'
div.style.alignItems = 'center'
div.style.gap = '48px'

const input1 = document.createElement('input')
input1.placeholder = '1st Number'
styleInput(input1)

const buttonSum = document.createElement('button')
buttonSum.style.background = 'url(images/sumIcon.png)'
buttonSum.style.backgroundSize = 'cover'
buttonSum.style.width = '100px'
buttonSum.style.height = '100px'
buttonSum.style.border = 'none'

const input2 = document.createElement('input')
input2.placeholder = '2nd Number'
styleInput(input2)

div.append(input1, buttonSum, input2)
body.append(div)

//div result
const divResult = document.createElement('div')
divResult.style.display = 'flex'
divResult.style.justifyContent = 'center'
divResult.style.alignItems = 'center'

const result = document.createElement('strong')
result.style.textAlign = 'center'
result.style.alignContent = 'center'
result.style.marginTop = '64px'
h1.style.marginBottom = '64px'
result.style.fontSize = '48px'

const validate = element => {
    if (isNaN(Number(element.value))) {
        element.style.borderColor = 'red'
        throw 'Error: Only numbers are accepted'
    } else {
        element.style.borderColor = 'rgb(128, 128, 128)'
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

divResult.append(result)
body.append(divResult)

//refresh button
const divRefresh = document.createElement('div')
divRefresh.style.display = 'flex'
divRefresh.style.justifyContent = 'center'
divRefresh.style.alignItems = 'center'
divRefresh.style.marginTop = '64px'

const refreshButton = document.createElement('button')
refreshButton.style.background = 'url(images/refresh.png)'
refreshButton.style.backgroundSize = 'cover'
refreshButton.style.width = '76px'
refreshButton.style.height = '76px'
refreshButton.style.border = 'none'

refreshButton.onclick = window.location.reload.bind(window.location)

divRefresh.append(refreshButton)
body.append(divRefresh)

const bgPicker = document.createElement('input')
bgPicker.type = 'color'

function styleInput(element) {
    element.style.width = '100px'
    element.style.height = '100px'
    element.style.borderRadius = '50%'
    element.style.textAlign = 'center'
    element.style.padding = '16px'
    element.style.fontSize = '48px'
    element.style.borderWidth = 'thick'
    element.style.borderStyle = 'dashed'
    element.style.outline = '0'
}

buttonSum.addEventListener('mouseover', () => {
    buttonSum.style.scale = 1.25
})
buttonSum.addEventListener('mouseout', () => {
    buttonSum.style.scale = 1
})
