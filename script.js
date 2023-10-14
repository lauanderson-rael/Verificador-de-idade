function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'bebe_m.png')      // crianca
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem_m.png')     // jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto_m.png')     // aduldo
            } else {
                img.setAttribute('src', 'idoso_m.png')     // idoso
            }


        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'bebe_f.png')  // crianca
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem_f.png')  // jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto_f.png')   // aduldo
            } else {
                img.setAttribute('src', 'idoso_f.png')   // idoso
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

        res.appendChild(img)
        img.style.width = '250px'
    }
}


// USANDO BOTÃO ENTER PARA CHAMAR A FUNÇÃO

document.addEventListener('keypress', function (verificar) {
    if (event.key === 'Enter') {
        // Ações a serem executadas quando o Enter for pressionado
        var data = new Date()
        var ano = data.getFullYear()
        var fano = window.document.getElementById('txtano')
        var res = window.document.querySelector('div#res')
        if (fano.value.length == 0 || Number(fano.value) > ano) {
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        } else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
                genero = 'Homem'
                if (idade >= 0 && idade <= 10) {
                    img.setAttribute('src', 'bebe_m.png')      // crianca
                } else if (idade < 21) {
                    img.setAttribute('src', 'jovem_m.png')     // jovem
                } else if (idade < 50) {
                    img.setAttribute('src', 'adulto_m.png')     // aduldo
                } else {
                    img.setAttribute('src', 'idoso_m.png')     // idoso
                }


            } else if (fsex[1].checked) {
                genero = 'Mulher'
                if (idade >= 0 && idade <= 10) {
                    img.setAttribute('src', 'bebe_f.png')  // crianca
                } else if (idade < 21) {
                    img.setAttribute('src', 'jovem_f.png')  // jovem
                } else if (idade < 50) {
                    img.setAttribute('src', 'adulto_f.png')   // aduldo
                } else {
                    img.setAttribute('src', 'idoso_f.png')   // idoso
                }
            }

            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

            res.appendChild(img)
            img.style.width = '250px'
        }

    }
});
