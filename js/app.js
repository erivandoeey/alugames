function alterarStatus(id) {
    // Obtém o elemento do jogo específico com base no ID passado como parâmetro.
    let gameClicado = document.getElementById(`game-${id}`);

    // Seleciona a imagem do jogo dentro do elemento encontrado.
    let imagem = gameClicado.querySelector('.dashboard__item__img');

    // Seleciona o botão de ação (Alugar/Devolver) dentro do elemento encontrado.
    let botao = gameClicado.querySelector('.dashboard__item__button');

    // Seleciona o nome do jogo dentro do elemento encontrado (não utilizado no código, mas pode ter sido incluído para futuras funcionalidades).
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    // Verifica se a imagem já possui a classe 'dashboard__item__img--rented', indicando que o jogo está alugado.
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Se o jogo estiver alugado, remove a classe para marcar como disponível.
        imagem.classList.remove('dashboard__item__img--rented');

        // Remove a classe do botão que indica a ação de devolução.
        botao.classList.remove('dashboard__item__button--return');

        // Altera o texto do botão para "Alugar", indicando que o jogo está disponível para aluguel.
        botao.textContent = 'Alugar';
    } else {
        // Se o jogo não estiver alugado, adiciona a classe para marcar como alugado.
        imagem.classList.add('dashboard__item__img--rented');

        // Adiciona a classe ao botão para indicar a ação de devolução.
        botao.classList.add('dashboard__item__button--return');

        // Altera o texto do botão para "Devolver", indicando que o jogo foi alugado e pode ser devolvido.
        botao.textContent = 'Devolver';
    }
}
