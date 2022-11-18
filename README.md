# NodeJs - API-Restfull


Vamos utilizar três pacotes para começar:

✔ Express > Express é uma estrutura de aplicativo da Web que fornece muitos recursos incríveis e métodos utilitários HTTP.

✔ body-parser > body-parser é um middleware (método de interface) para análise de body (corpo do do código) que ajuda a processar o body de solicitações enviadas ao servidor express.

✔ nodemon > completamente opcional, mas o Nodemon é super útil porque atua como um observador de arquivos, recarregando nosso servidor quando fazemos alterações em nossos arquivos - útil!

Vamos instalá-los digitando no terminal do VSCode:

npm install express ⚡

Clique enter e aguarde a instalação

npm install body-parser ⚡

Clique enter e aguarde a instalação

Depois do comando vamos lá...

Nossa API será um serviço de consulta de cadastro de usuários, conforme o arquivo json do projeto:

Em nossa estrutura o arquivo serve.js, como o proprio nome sugere irá fazer a inicialização das rotas de requisições, processo de leitura de nosso arquivo JSON via função “fs” e manterá a “escuta” de solicitações ativa na porta de internet local numero 3001.

Feito isso, podemos testar (se nodemon não estiver rodando insira no terminal > npm start

Se tudo estiver correto você receberá a mensagem de que o servidor da nossa API está escutando a porta local 3001.

Para consultar nossa base de dados do arquivo JSON, basta digitar no browser http://localhost:3001/users e clicar enter

Pronto temos nosso primeiro serviço cliente servidor em API Rest com NodeJS funcionando.

![NodeJs-API REST](https://user-images.githubusercontent.com/28484134/202705023-0a15a0d7-ed5f-4cea-ab21-75657a2d5ce4.jpg)
