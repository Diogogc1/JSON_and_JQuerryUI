# JSON_and_JQuerryUI

Uma página WEB contendo um formulário com dois campos - nome e data de nascimento (utiliza o Datepicker do JQuerry UI) - e um botão INCLUIR.
A página apresenta uma área para apresentar os dados e um textarea para apresentar o objeto JSON.

Ao clicar no botão INCLUIR:
  Um script lê os dados de nome e data de nascimento do formulário e inclui em um objeto JSON.
  OS dados são aprensentados em um tabela.
  Apresenta no textarea a estrutura do JSON atualizado (um vetor de JSON).

Os campos do formulário são validados da seguinte forma:
  O campo nome não pode ser vazio e deve ter entre 3 e 50 caracteres.
  O campo data de nascimento não pode aceitar valores para menores de 18 anos.
  Apresenta o componente dialog do JQuerry UI para apresentar mensagem de erro.
