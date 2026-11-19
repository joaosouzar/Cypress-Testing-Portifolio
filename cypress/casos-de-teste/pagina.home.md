Funcionalidade: Área do utilizador

  Cenário: DASH-01 - Visualizar a área após login
    Dado que entrei na aplicação com credenciais válidas
    Quando a página autenticada terminar de carregar
    Então devo visualizar o conteúdo da área do utilizador
    E os elementos principais da navegação devem estar disponíveis

  Cenário: DASH-02 - Tentar abrir uma área protegida sem login
    Dado que não tenho uma sessão autenticada
    Quando tento abrir diretamente uma página protegida
    Então o sistema deve encaminhar-me para o login
    Ou deve impedir o acesso ao conteúdo protegido

  Cenário: DASH-03 - Voltar à página inicial
    Dado que estou numa página interna da loja
    Quando seleciono o logótipo ou a opção de página inicial
    Então devo regressar à página inicial da loja
    E a lista de produtos deve ser apresentada

  Cenário: DASH-04 - Abrir o carrinho através do menu
    Dado que estou na loja
    Quando seleciono o ícone ou a opção do carrinho
    Então devo visualizar a página do carrinho
    E o conteúdo apresentado deve corresponder aos itens adicionados

  Cenário: DASH-05 - Terminar a sessão autenticada
    Dado que estou autenticado na aplicação
    Quando seleciono a opção de terminar sessão
    Então a sessão deve ser encerrada
    E devo deixar de ter acesso às páginas que exigem autenticação