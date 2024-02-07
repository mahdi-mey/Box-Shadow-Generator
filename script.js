// selecting variables
const containerBox = document.querySelector('.box')
const x = document.querySelector('.offset-x')
const y = document.querySelector('.offset-y')
const blurRaduis = document.querySelector('.blur-radius')
const blurSpread = document.querySelector('.blur-spread')
const color = document.querySelector('.color')
const resaultCode = document.querySelector('.coppy-link-input')

// handeling the function
function updateBoxShadow() {
    let box_shadow = `box-shadow: ${x.value}px ${y.value}px ${blurRaduis.value}px ${blurSpread.value}px ${color.value};`

    resaultCode.value = box_shadow
    containerBox.style.boxShadow = `${x.value}px ${y.value}px ${blurRaduis.value}px ${blurSpread.value}px ${color.value}`
};


// functionality to coppy to clippboard
document.querySelectorAll('.coppy-link').forEach(coppyLinkContainer => {
    const inputField = coppyLinkContainer.querySelector('.coppy-link-input')
    const coppyBtn = coppyLinkContainer.querySelector('.coppy-link-btn')

    inputField.addEventListener('focus', () => {
        const text = inputField.value
        inputField.select()
        navigator.clipboard.writeText(text)
    })

    coppyBtn.addEventListener('click', () => {
        const text = inputField.value
        navigator.clipboard.writeText(text)

        inputField.value = 'Coppied !'
        setTimeout(() => { inputField.value = text }, 1500);
    })
});


// addin functin to multiple elements in once
[x, y, blurRaduis, blurSpread, color, resaultCode].forEach(elements => {
    elements.addEventListener('input', updateBoxShadow)
})

// calling function after dom content is load
updateBoxShadow()