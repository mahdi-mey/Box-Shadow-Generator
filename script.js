const containerBox = document.querySelector('.box')
const x = document.querySelector('.offset-x')
const y = document.querySelector('.offset-y')
const blurRaduis = document.querySelector('.blur-radius')
const blurSpread = document.querySelector('.blur-spread')
const color = document.querySelector('.color')
const resaultCode = document.querySelector('.coppy-link-input')

function updateBoxShadow() {
    let box_shadow = `box-shadow: ${x.value}px ${y.value}px ${blurRaduis.value}px ${blurSpread.value}px ${color.value};`

    resaultCode.value = box_shadow
    containerBox.style.boxShadow = `${x.value}px ${y.value}px ${blurRaduis.value}px ${blurSpread.value}px ${color.value}`
};

updateBoxShadow();

[x, y, blurRaduis, blurSpread, color, resaultCode].forEach(elements => {
    elements.addEventListener('input', updateBoxShadow)
})