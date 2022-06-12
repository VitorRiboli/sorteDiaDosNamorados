function Sortear(){
    let sorte = parseInt(Math.random() * 11); 
    let resultado = document.getElementById("resultado");
    
    if(sorte == 0){
        resultado.innerHTML = "Eu te Amo!";
    } else if (sorte == 1) {
        resultado.innerHTML = "Tentei escrever muitas coisas, mas acabei descobrindo que amar é melhor sentir do que dizer, e que milhões de frases bonitas jamais alcançariam a grandeza do que sinto por você. Resumindo... te amo."
    } else if (sorte == 2) {
        resultado.innerHTML = "Dizem que o amor é belo, mas belo ele não é. Belas são as pessoas que o têm nas mãos e sabem cultivá-lo. Te amo! Feliz Dia dos Namorados!"
    } else if (sorte == 3) {
        resultado.innerHTML = "Não preciso de desculpas para celebrar o nosso amor, mas aceito mesmo assim. Feliz Dia dos Namorados, meu bem! Te amo muito!"
    } else if (sorte == 4) {
        resultado.innerHTML = "O amor não se vê com os olhos mas com o coração."
    } else if (sorte == 5) {
        resultado.innerHTML = "Você tem meu coração, te amo minha nega"
    } else if (sorte == 6) {
        resultado.innerHTML = "Você é perfeita assim mesmo, desse jeito meio brigona, mas sempre carinhosa."
    } else if (sorte == 7) {
        resultado.innerHTML = "Te conhecer foi a melhor coisa que me aconteceu, eu tenho sorte de ter você. Obrigado por estar sempre ao meu lado"
    } else if (sorte == 8) {
        resultado.innerHTML = "Desculpa não ter comprado nenhum presente"
    } else if (sorte == 9) {
        resultado.innerHTML = "Você é a pessoa que me completa, que me faz feliz. Que venham muitos dia dos Namorados!"
    } else if (sorte == 10) {
        resultado.innerHTML = "Algumas escolhas mudam nossas vidas completamente. Você foi minha melhor escolha. te amor"
    }
};