Funcionalidade: Cadastro

  Cenário: CAD-01 - Criar uma conta com dados válidos
    Dado que estou na página de cadastro
    Quando preencho todos os campos obrigatórios com dados válidos
    E informo um e-mail ainda não utilizado
    E informo uma senha que cumpre os requisitos
    E submeto o formulário
    Então a conta deve ser criada
    E o sistema deve apresentar uma confirmação

  Cenário: CAD-02 - Tentar cadastrar um e-mail existente
    Dado que estou na página de cadastro
    Quando preencho os campos obrigatórios com dados válidos
    Mas utilizo um e-mail já associado a uma conta
    E submeto o formulário
    Então o sistema deve impedir a criação de uma conta duplicada
    E deve apresentar uma mensagem informativa

  Cenário: CAD-03 - Submeter o cadastro com campos obrigatórios vazios
    Dado que estou na página de cadastro
    Quando deixo um ou mais campos obrigatórios vazios
    E submeto o formulário
    Então o sistema deve impedir o cadastro
    E deve indicar os campos que precisam de preenchimento

  Cenário: CAD-04 - Informar um e-mail com formato inválido
    Dado que estou na página de cadastro
    Quando preencho os campos obrigatórios
    E informo um e-mail num formato inválido
    E submeto o formulário
    Então o sistema deve rejeitar o e-mail
    E deve apresentar uma validação adequada

  Cenário: CAD-05 - Informar uma senha que cumpre os requisitos
    Dado que estou na página de cadastro
    Quando digito uma senha que cumpre os requisitos indicados
    Então a indicação de força ou validação da senha deve ser atualizada
    E a senha deve ser aceite quando os restantes campos forem válidos