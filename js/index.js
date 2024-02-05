// Inicio Step 1
const buttonNext = document.querySelectorAll('.next')
const formName = document.querySelector('#name')
const formEmail = document.querySelector('#email')
const formPhone = document.querySelector('#phone-number')
const formulario = document.querySelector('#formulario')
const numeroSide = document.querySelectorAll('.numero-sidebar')

const selecaoPlano = document.querySelector('#selecao-plano')

buttonNext[0].addEventListener('click', ()=> {
    if(formName.value === "") {
        formName.style.border = '1px solid red'
    } else {
        formName.removeAttribute('style')
    }
        
    if(formEmail.value === "") {
        formEmail.style.border = '1px solid red'
    } else {
        formEmail.removeAttribute('style')

    }

    if(formPhone.value === "") {
        formPhone.style.border = '1px solid red'
    } else {
        formPhone.removeAttribute('style')
    }

    if(formName.value !== "" && formEmail.value !== "" && formPhone.value !== "") {
        formulario.style.display = "none"
        numeroSide[0].classList.remove('selecao-step')
        numeroSide[1].classList.add('selecao-step')
        selecaoPlano.style.display = 'block'
    }
})
// Fim do Step 1

// Inicio do Step 2
const goBack = document.querySelectorAll('.go-back')

goBack[0].addEventListener('click', ()=> {
    selecaoPlano.removeAttribute('style')
    formulario.style.display = 'block'
    numeroSide[0].classList.add('selecao-step')
    numeroSide[1].classList.remove('selecao-step')
})

const botaoMensalAnual = document.querySelector('.botao-escolha')
const bolinhaBranca = document.querySelector('.bolinha-botao')
const planoMensal = document.querySelector('.plano-mensal')
const planoAnual = document.querySelector('.plano-anual')
const valorPlano = document.querySelectorAll('.valor-plano')
const planos = document.querySelectorAll('.planos')
const msgAnual = document.querySelectorAll('.msg-anual')
const valorAdicional = document.querySelectorAll('.valor-add')
const modalidadePlanoEscolhido = document.querySelector('.modalidade-plano-escolhido')

function Plano_Mensal() {
    let valorServicoSl = document.querySelectorAll('.valor-servico-sl')

    bolinhaBranca.style.margin = '3px 0px 3px 5px'
    planoAnual.style.color = '#a7a7b0'
    planoMensal.style.color = '#01285a'
    valorPlano[0].innerHTML = '$9/mo'
    valorPlano[1].innerHTML = '$12/mo'
    valorPlano[2].innerHTML = '$15/mo'

    valorAdicional[0].innerHTML = '+$1/mo'
    valorAdicional[1].innerHTML = '+$2/mo'
    valorAdicional[2].innerHTML = '+$2/mo'

    for(let i = 0; i < valorServicoSl.length; i++) {
        valorServicoSl[i].innerHTML = valorAdicional[i].innerHTML
    }
    
    msgAnual.forEach(e => {
        e.removeAttribute('style')
    })
    planos.forEach(e => {
        e.removeAttribute('style')
    })

    modalidadePlanoEscolhido.innerHTML = '(Monthly)'
}

function Plano_Anual() {
    let valorServicoSl = document.querySelectorAll('.valor-servico-sl')

    bolinhaBranca.style.margin = '3px 0px 3px 25px'
    planoAnual.style.color = '#01285a'
    planoMensal.style.color = '#a7a7b0'
    valorPlano[0].innerHTML = '$90/yr'
    valorPlano[1].innerHTML = '$120/yr'
    valorPlano[2].innerHTML = '$150/yr'

    valorAdicional[0].innerHTML = '+$10/yr'
    valorAdicional[1].innerHTML = '+$20/yr'
    valorAdicional[2].innerHTML = '+$20/yr'

    for(let i = 0; i < valorServicoSl.length; i++) {
        valorServicoSl[i].innerHTML = valorAdicional[i].innerHTML
    }

    msgAnual.forEach(e => {
        e.style.display = 'block'
    })
    planos.forEach(e => {
        e.style.height = '130px'
    })

    modalidadePlanoEscolhido.innerHTML = '(Yearly)'
}

botaoMensalAnual.addEventListener('click', ()=> {
    if(bolinhaBranca.style.margin === '3px 0px 3px 5px') {
        Plano_Anual()
    } else {
        Plano_Mensal()
    }
    planoResumoFinal()
    Servicos()
})

planos.forEach(e => {
    e.addEventListener('click', () => {
        e.classList.add('plano-selecionado')
        for(let i = 0; i < planos.length; i++) {
            if(planos[i] !== e) {
                planos[i].classList.remove('plano-selecionado')
            }
        }
        planoResumoFinal()
        Servicos()
    })
})

buttonNext[1].addEventListener('click', () => {
    selecaoPlano.removeAttribute('style')
    adicionaisAdd.style.display = 'block'
    numeroSide[1].classList.remove('selecao-step')
    numeroSide[2].classList.add('selecao-step')
})
// Fim do Step 2

// Inicio do Step 3
const selecaoAdd = document.querySelectorAll('.selecao-add')
const checkAdd = document.querySelectorAll('.bloco-adicionais input')

let hr = document.createElement('hr')
let div = document.createElement('div')
div.classList.add('conteiner-servico-add')

let nomeServicoFinal = document.createElement('h5')
nomeServicoFinal.classList.add('servico-sl')
let valorServicoFinal = document.createElement('h5')
valorServicoFinal.classList.add('valor-servico-sl')

let blocoItens = document.querySelector('.bloco-itens')

div.appendChild(nomeServicoFinal)
div.appendChild(valorServicoFinal)

let cont = 0 
let listaServicos = false

function Servicos() {
    const nomeServico = document.querySelectorAll('.plano-selecionado .nome-servico')
    const valorAdd = document.querySelectorAll('.plano-selecionado .valor-add')

    let valorPlanoResumoFinal = document.querySelector('.plano-selecionado .valor-plano')
    let reservaValor = valorPlanoResumoFinal.innerHTML

    let soma = 0
    let string = 0
    let numeros = 0

    if(listaServicos === false) {
        hr.style.display = 'block'
        blocoItens.appendChild(hr)
        listaServicos = true
    }
    
    for(let i = 0; i < nomeServico.length; i++) {
        nomeServicoFinal.innerHTML = nomeServico[i].innerHTML
        valorServicoFinal.innerHTML = valorAdd[i].innerHTML

        if(i === cont) {
            blocoItens.appendChild(div.cloneNode(true))
            cont++
        }
        string = valorAdd[i].innerHTML
        numeros = string.match(/\d/g).join("")
        soma += parseInt(numeros)
        if(bolinhaBranca.style.margin === '3px 0px 3px 25px') {
            valorTotal.innerHTML = `$${soma + parseInt(reservaValor.match(/\d/g).join(""))}/yr`
        } else {
            valorTotal.innerHTML = `$${soma + parseInt(reservaValor.match(/\d/g).join(""))}/mo`
        }
    }
}

for(let i = 0; i < selecaoAdd.length; i++) {
    selecaoAdd[i].addEventListener('click', () => {
        if(checkAdd[i].hasAttribute('checked')) {
            selecaoAdd[i].classList.remove('plano-selecionado')
            checkAdd[i].removeAttribute('checked', '')
        } else {
            selecaoAdd[i].classList.add('plano-selecionado')
            checkAdd[i].setAttribute('checked', '')
            Servicos()
        }
    })
}

const adicionaisAdd = document.querySelector('#adicionais')

goBack[1].addEventListener('click', ()=> {
    selecaoPlano.style.display = 'block'
    adicionaisAdd.removeAttribute('style')
    numeroSide[1].classList.add('selecao-step')
    numeroSide[2].classList.remove('selecao-step')
})

buttonNext[2].addEventListener('click', ()=> {
    adicionaisAdd.removeAttribute('style')
    resumoFinal.style.display = 'block'
    numeroSide[2].classList.remove('selecao-step')
    numeroSide[3].classList.add('selecao-step')
})
// Fim do Step 3

// Inicio Step 4
const resumoFinal = document.querySelector('#resumo-final')
const valorTotal = document.querySelector('.valor-total')
let nomePlanoEscolhido = document.querySelector('.nome-plano-escolhido')
let valorPlanoFinal = document.querySelector('.valor-plano-final')

function planoResumoFinal() {
    let planoSelecionadoResumoFinal = document.querySelector('.plano-selecionado h5')
    let valorPlanoResumoFinal = document.querySelector('.plano-selecionado .valor-plano')

    nomePlanoEscolhido.innerHTML = planoSelecionadoResumoFinal.innerHTML
    valorPlanoFinal.innerHTML = valorPlanoResumoFinal.innerHTML
}
planoResumoFinal()

goBack[2].addEventListener('click', ()=> {
    adicionaisAdd.style.display = 'block'
    resumoFinal.removeAttribute('style')
    numeroSide[2].classList.add('selecao-step')
    numeroSide[3].classList.remove('selecao-step')
})

const botaoChange = document.querySelector('.botao-mudar')

botaoChange.addEventListener('click', ()=> {
    resumoFinal.removeAttribute('style')
    selecaoPlano.style.display = 'block'
    numeroSide[1].classList.add('selecao-step')
    numeroSide[3].classList.remove('selecao-step')
})

// Final

const botaoConfirmacao = document.querySelector('.confirmacao')
const confirmacaoSub = document.querySelector('#confirmacao-sub')

botaoConfirmacao.addEventListener('click', ()=> {
    resumoFinal.removeAttribute('style')
    confirmacaoSub.style.display = 'flex'
})