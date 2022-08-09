# Projeto Pizzaria

## Back end do projeto em que estou estudando atualmente através do curso UDEMY, com as tecs: React, Node.js, React Native e Typescript.

O projeto funciona em torno de um sistema de pizzaria, onde haverá um dispositivo web na cozinha que receberá os pedidos a serem feitos e entregues, e um dispositivo mobile para o garçom que fará o login e após a autenticação terá disponível as opções de selecionar a mesa, o nome do cliente e os itens escolhidos por ele. 

Após os produtos estarem selecionados o mesmo é enviado como rascunho e status de não finalizado, onde ficará assim até o pedido ficar pronto.

O backend foi desenvolvido em Node.js, typescript e utilizado o banco de dados Postgres para a perstistência dos dados. Também foi utilizado Prisma ORM para a conexão entre o Node e o banco de dados, além da manipulação das tabelas e inserção de dados.

Dentre as tecs também foram utilizados o Insominia, para monitorar as requisições APIrest entre o Node e o Postgres, e o Beekeeper studio para as altetrações no banco. 

Dentre os dados persistidos estão o cadastro do usuário do sistema, com criptografia de senha no banco e o uso de JWT para geração de token a usuários autenticados, dando permissão de apenas estes poderem realizar alterações no sistema.

Além do usuário também serão persistidos dados de produtos, categorias de produtos, pedidos e itens dos pedidos.

## Relacionamentos:

![db_pizzaria](https://user-images.githubusercontent.com/61561169/179373868-2f13ef18-be4f-47b5-8600-b2e4d448462f.png)

