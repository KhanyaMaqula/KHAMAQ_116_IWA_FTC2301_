const MAX_NUMBER = 15;
const MIN_NUMBER = -5;

const number = document.querySelector('[data-key="number"]')
console.log(typeof number.value)
const subract = document.querySelector('[data-key="subraction"]')
const add = document.querySelector('[data-key="add"]')


const subractHandler = () => {
    const newValue = parseInt(number.value) -1
    number.value = newValue
    if(newValue <=MIN_NUMBER){
        subract.disabled = true;
    }
    else {
        subract.disabled = false
    }

}


const addHandler = () => {
    const newValue = parseInt(number.value) +1
    number.value = newValue

    if (number.value >= MAX_NUMBER) {
        add.disabled = true;
    }
    else {
        add.disabled = false
    }
}

subract.addEventListener('click', subractHandler)


add.addEventListener('click', addHandler)
