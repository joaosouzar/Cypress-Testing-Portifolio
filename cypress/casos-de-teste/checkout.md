Funcionalidade: Checkout

  Cenário: CHECK-01 - Concluir uma compra com dados válidos
    Dado que adicionei um produto disponível ao carrinho
    E avancei para o checkout
    Quando preencho os dados obrigatórios com informações válidas
    E seleciono as opções de pagamento disponíveis
    E confirmo a encomenda
    Então a encomenda deve ser concluída
    E devo visualizar uma confirmação ou referência da encomenda

  Cenário: CHECK-02 - Conferir os itens e o total antes de confirmar
    Dado que adicionei um ou mais produtos ao carrinho
    Quando avanço para o checkout
    Então os produtos e as quantidades devem corresponder ao carrinho
    E o total apresentado deve corresponder aos valores dos itens e encargos aplicáveis

  Cenário: CHECK-03 - Tentar avançar sem preencher os campos obrigatórios
    Dado que tenho um produto no carrinho
    E estou no formulário de checkout
    Quando deixo um ou mais campos obrigatórios vazios
    E tento continuar ou confirmar a encomenda
    Então o sistema deve impedir o avanço
    E deve indicar os campos que precisam de ser preenchidos

  Cenário: CHECK-04 - Informar um e-mail inválido no checkout
    Dado que tenho um produto no carrinho
    E estou no formulário de checkout
    Quando preencho os restantes campos obrigatórios
    E informo um e-mail num formato inválido
    E tento continuar
    Então o sistema deve rejeitar o formato do e-mail
    E deve apresentar uma mensagem ou validação adequada

  Cenário: CHECK-05 - Voltar ao carrinho e atualizar a compra
    Dado que estou no checkout com produtos no carrinho
    Quando regresso ao carrinho e altero a quantidade ou removo um produto
    E volto ao checkout
    Então o resumo da compra deve refletir as alterações
    E o total deve ser recalculado corretamente