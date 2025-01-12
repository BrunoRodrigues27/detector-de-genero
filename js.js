var botao = document.querySelector('input#verificar')
var homem = document.querySelector('input#ihomem')
var mulher = document.querySelector('input#imulher')
var msg = document.querySelector('div#mensagem')
var foto = document.querySelector('img#imagem')
var date = document.querySelector('input#ianonascimento')


botao.addEventListener("click", analisar)


function analisar() {
    var datan = Number(date.value)
    var dataatual = new Date()
    var anoatual = dataatual.getFullYear()
    var idade = anoatual - datan

    msg.innerHTML = 'Verificando!'
    if (homem.checked) {
        msg.innerHTML = `Homem de ${idade} anos de idade detectado!`
        foto.src = 'h.webp'
    }

    else {
        msg.innerHTML = `Mulher de ${idade} anos de idade detectada!`
        foto.src ='m.png'
    }
}