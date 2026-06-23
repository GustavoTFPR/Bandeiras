const quadradoAzul = document.querySelector('.quadrado-azul');

for(let i=0; i<50; i++) {
    const estrela = document.createElement('div')
    estrela.className = 'estrela'
    quadradoAzul.appendChild(estrela);
}

const Bandeira = document.querySelector('.Bandeira');

const bandeira = document.querySelector('.Bandeira');

for (let i = 0; i < 13; i++) {
    const faixa = document.createElement('div');

    if (i % 2 === 0) {
        faixa.className = 'fxvermelha';
    } else {
        faixa.className = 'fxbranca';
    }

    bandeira.appendChild(faixa);
}