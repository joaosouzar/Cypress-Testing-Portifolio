Funcionalidade: Pesquisa de produtos

  Cenário: BUSCA-01 - Pesquisar por um produto existente
    Dado que estou na página da loja
    Quando pesquiso por um termo que corresponde a produtos existentes
    E aciono a pesquisa
    Então devem ser apresentados produtos correspondentes ao termo
    E os resultados devem permitir identificar os produtos encontrados

  Cenário: BUSCA-02 - Pesquisar por um produto inexistente
    Dado que estou na página da loja
    Quando pesquiso por um termo sem correspondências
    E aciono a pesquisa
    Então nenhum produto incompatível deve ser apresentado
    E devo visualizar uma indicação de que não foram encontrados resultados

  Cenário: BUSCA-03 - Submeter a pesquisa vazia
    Dado que estou na página da loja
    Quando deixo o campo de pesquisa vazio
    E aciono a pesquisa
    Então a aplicação deve manter um comportamento consistente
    E não deve apresentar um erro inesperado

  Cenário: BUSCA-04 - Abrir um produto encontrado
    Dado que pesquisei por um termo com resultados
    Quando seleciono um dos produtos apresentados
    Então devo visualizar a página de detalhes desse produto
    E devo conseguir identificar o nome e o preço do produto

  Cenário: BUSCA-05 - Pesquisar com diferenças entre maiúsculas e minúsculas
    Dado que estou na página da loja
    Quando pesquiso por um termo válido usando letras maiúsculas ou minúsculas
    E aciono a pesquisa
    Então os resultados devem seguir o comportamento definido pela aplicação
    E a pesquisa não deve falhar apenas por causa da capitalização, se for insensível a maiúsculas