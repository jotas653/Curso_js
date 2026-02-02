//Exercicios sobre string
    // 012345678901234567890123
    // joão pedro moura barboza

const userName = prompt('Digite o seu nome completo: ')
document.body.innerHTML +=`O seu nome é: <strong>${userName}</strong><br />`
document.body.innerHTML +=`Seu nome tem <strong>${userName.length}</strong> letras <br />`
document.body.innerHTML +=`A segunda letra do seu nome é: <strong>${userName.charAt(1)}</strong> <br />`
document.body.innerHTML +=`Qual e o primeiro indice da letra a no seu nome: <strong>${userName.indexOf('a')}</strong> <br />`
document.body.innerHTML +=`Qual e o ultimo indice da letra a no seu nome: <strong>${userName.lastIndexOf('a')}</strong> <br />`
document.body.innerHTML +=`As ultimas 3 letras do seu nome são: <strong>${userName.slice(-3)}</strong> <br />`
document.body.innerHTML +=`As palavras do seu nome são: <strong>${userName.split(' ')}</strong> <br />`
document.body.innerHTML +=`Seu nome com letras maiúsculas: <strong>${userName.toUpperCase()}</strong> <br />`
document.body.innerHTML +=`Seu nome com letras minúsculas: <strong>${userName.toLowerCase()}</strong> <br />`
