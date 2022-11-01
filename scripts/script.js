$(document).ready(function(){
    $('#icon').click(function(){
        $('ul').toggleClass('show')
    })
})

let igual_apertado = 0
//refere-se a todos os botões exceto AC e DEL
let buttom_input = document.querySelector("botao-input")
//Referência o valores para input, igual, limpar tudo, apagar

let input = document.getElementById("input")
let igual = document.getElementById("igual")
let limpar = document.getElementById("apagar")
let apagar = document.getElementById("apaga")

window.onload = () => {
    input.value = ""
}

