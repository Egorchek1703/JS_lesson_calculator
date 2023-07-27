let num1Input = document.querySelector('.num1')
let num2Input = document.querySelector('.num2')
let btnsOperation = document.querySelectorAll('.btn-operation')
let result = document.querySelector('.result')
let operation

function useOperation(event){
    if(event.target.getAttribute('data-operation') == '+'){
        result.innerHTML = Number(num1Input.value) + Number(num2Input.value)
    }
    if(event.target.getAttribute('data-operation') == '-'){
        result.innerHTML = Number(num1Input.value) - Number(num2Input.value)
    }
    if(event.target.getAttribute('data-operation') == '/'){
        result.innerHTML = Math.round(Number(num1Input.value) / Number(num2Input.value))
    }
    if(event.target.getAttribute('data-operation') == '*'){
        result.innerHTML = Number(num1Input.value) * Number(num2Input.value)
    }
}

for(let i=0; i<btnsOperation.length; i++){
    btnsOperation[i].addEventListener('click', useOperation)
}


