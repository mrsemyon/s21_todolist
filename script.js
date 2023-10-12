'use strict';

const inputField = document.getElementsByClassName('input_field')[0]
const inputBtn = document.getElementsByClassName('input_btn')[0]
const list = document.getElementsByClassName('list')[0]

const arr = ['one', 'two', 'asda']

let counter = 0

function render() {
  list.innerHTML = ''
  for (let item of arr) {
    addEL(item)
  }
}

function addEL(text) {
  const liTag = document.createElement('li')
  liTag.classList.add('item')

  const labelEl = document.createElement('label')
  labelEl.classList.add('checkbox_lbl')

  const checkboxEl = document.createElement('input')
  checkboxEl.classList.add('checkbox')
  checkboxEl.setAttribute('type', 'checkbox')

  const spanEl = document.createElement('span')
  spanEl.classList.add('prg')

  const imgLabelEl = document.createElement('label')
  imgLabelEl.classList.add('img_lbl')

  const imgEl = document.createElement('img')
  imgEl.classList.add('img')
  imgEl.setAttribute('src', 'vector.svg')

  spanEl.innerText = text
  // arr.push(text)

  imgLabelEl.appendChild(imgEl);
  labelEl.appendChild(checkboxEl)
  labelEl.appendChild(spanEl)
  liTag.appendChild(labelEl)
  liTag.appendChild(imgLabelEl)
  list.appendChild(liTag)
}


inputBtn.addEventListener('click', () => {
  if (inputField.value.trim()) {
    arr.push(inputField.value)
    render()
  }
  inputField.value = ''
})

render()

console.log(arr)