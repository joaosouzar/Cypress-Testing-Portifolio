Funcionalidade: Login

  Cenário: LOGIN-01 - Entrar com e-mail e senha válidos
    Dado que estou na página de login
    Quando informo um e-mail válido e uma senha correta
    E clico no botão de login
    Então devo entrar na minha conta
    E devo visualizar a área autenticada do utilizador

  Cenário: LOGIN-02 - Tentar entrar com e-mail não registado
    Dado que estou na página de login
    Quando informo um e-mail que não está registado
    E informo uma senha qualquer
    E clico no botão de login
    Então o sistema deve impedir o acesso
    E deve apresentar uma mensagem de erro adequada

  Cenário: LOGIN-03 - Tentar entrar com senha incorreta
    Dado que estou na página de login
    Quando informo um e-mail registado
    E informo uma senha incorreta
    E clico no botão de login
    Então o sistema deve impedir o acesso
    E deve informar que as credenciais são inválidas

  Cenário: LOGIN-04 - Verificar a validação dos campos vazios
    Dado que estou na página de login
    Quando deixo o e-mail e a senha vazios
    E clico no botão de login
    Então o sistema deve impedir o envio do formulário
    E deve indicar os campos obrigatórios

  Cenário: LOGIN-05 - Abrir a recuperação de senha
    Dado que estou na página de login
    Quando seleciono a opção de recuperação de senha
    Então devo ser encaminhado para o fluxo de recuperação
    E devo visualizar os campos ou instruções correspondentes