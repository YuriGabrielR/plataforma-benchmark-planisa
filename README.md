<h1 align="left">👩🏽‍💻 Benchmark Covid 19 - Planisa</h1>

###

<h2 align="left">O que é o projeto ? 🤔</h2>

###

<p align="left">Uma plataforma de dados relacionados a covid 19, cujo é possível analisar dados dentre dois paises no período de data que você desejar. <br><br>Utilizei a api pública disponibilizada pela api-ninja (https://api-ninjas.com/api/covid19) cujo dados foram alimentados até 2023.</p>

###

<h2 align="left">🛠 Tecnologias</h2>

###

<p align="left">No back-end utilizei as tecnologias:<br>Java 21, Spring Boot, Open Feign, Spring Data JPA, Hibernate e MySQL</p>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" height="40" alt="java logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" height="40" alt="spring logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" height="40" alt="intellij logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="40" alt="mysql logo"  />
</div>

###

<p align="left">No front-end utilizei as tecnologias:<br>Javascript, Typescript, ReactJS, ChakraUI, Axios, React Query, Yup e Chart.js</p>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo"  />
</div>

###

<h2 align="left">🛠 Como rodar localmente o projeto:</h2>

###

<h4 align="left">Front-end: <br><br>Basta rodar os comandos:<br><br>✔ Clonar o projeto:<br>git clone -> https://github.com/YuriGabrielR/plataforma-benchmark-planisa<br><br>✔ Entrar na pasta do front através do comando:<br>cd plataforma-benchmark-covid-front<br><br>✔ Instalar as dependências<br>npm install <br><br>✔ Rodar o comando para iniciar  a aplicação<br>npm run dev</h4>

###

<h2 align="left"></h2>

###

<h4 align="left">Back-end:<br><br>Basta rodar os comandos:<br><br>✔ Clonar o projeto:<br>git clone -> https://github.com/YuriGabrielR/plataforma-benchmark-planisa<br><br>✔ Entrar na pasta do back através do comando:<br>cd plataforma-benchmark-covid-backend<br><br>✔ No arquivo application.properties, informe os dados do seu MYSQL. <br><br>spring.application.name=plataforma-benchmark-covid-backend<br>spring.jpa.hibernate.ddl-auto=update<br>spring.jpa.show-sql=true<br>spring.datasource.url=jdbc:mysql://localhost:3306/benchmark<br>spring.datasource.username=usuario_nome<br>spring.datasource.password=usuario_senha<br><br>✔ Rode o projeto!</h4>

###

<h2 align="left">🗺Visão geral do projeto (Front-end)</h2>

###

<p align="left">A página foi construída com React.js e demais bibliotecas, minha ideia foi trazer algo moderno e interativo para o usuário, principalmente com a adição de gráficos interativos, aumentando seu poder de análise acerca desses dados. <br>Ele implementa o CRUD completo dos benchmarks.</p>

###

<h2 align="left"></h2>

###

<p align="left">Página de introdução ao usuário</p>

###

<div align="center">
  <img height="300" src="https://github.com/user-attachments/assets/ed2d0509-e088-4cf3-ad57-09c882145cd0"  />
</div>

###

<h4 align="left">Meus benchmarks.</h4>

###

<p align="left">Tela de listagem de benchmarks, onde fica armazenado todas as comparações e análises feitas pelo usuário onde ele pode editar, excluir e ver detalhes com gráficos sobre sua comparação.</p>

###

<div align="center">
  <img height="300" src="https://github.com/user-attachments/assets/6cf15fa5-8745-4ce5-b492-03a49d9c129d"  />
</div>

###

<h4 align="left">Formulário de criação de benchmark</h4>

###

<p align="left">Formulário que cria seus benchmarks, solicitando dois países com um input select automatizado e o período desejado da análise.</p>

###

<div align="center">
  <img height="300" src="https://github.com/user-attachments/assets/5f62e116-713d-486e-94ed-612dad5e8301"  />
</div>

###

<h4 align="left">Detalhes do meu benchmark</h4>

###

<p align="left">Página cujo o usuário pode ver através de gráficos e demais informações os números de casos confirmados, mortes confirmadas e taxa de letalidade, podendo comparar esses números entre os dois países também pelo gráfico.</p>

###

<div align="center">
  <img height="300" src="https://github.com/user-attachments/assets/2a177b13-e0d3-4207-91ce-ff1c0b246f05"  />
</div>

###

<h2 align="left">🗺Visão geral do projeto (Front-end)</h2>

###

<p align="left">A API foi criada com Java e Spring Boot, para persistências dos dados utilizei o Hibernate e JPA juntamente do MySQL. <br><br>Esta aplicação consome uma api pública externa, portanto criei uma lógica modular para poder extrair dados da mesma e persistir essas informações no nosso banco de dados, para isso no Spring Boot, utilizei as excelentes funcionalidades do Open Feign.<br><br>Visei utilizar bastante expressões lambda e a api nativa do Java de fluxos de dados (Streams) para poder filtrar e coletar os dados com maior precisão. <br><br>A API implementa um CRUD completo de Benchmarks.</p>

###

<h2 align="left">👨🏽‍💻 Rotas da API</h2>

###

<p align="left">✔C - CREATE  | Criação de benchmarks.<br><br>POST - api/benchmarks-covid/criar</p>

###

<div align="center">
  <img height="200" src="https://github.com/user-attachments/assets/3ef009a7-db5b-4cbb-aeca-f994cdf43b8a"  />
</div>

###

<p align="left">✔ R - READ | Leitura de benchmarks.<br>Já incluso dados de ambos os países filtrados a partir do período informado.<br><br>GET - api/benchmarks-covid</p>

###

<div align="center">
  <img height="330" src="https://github.com/user-attachments/assets/6f561984-ddee-480a-b092-b8c79de73e43"  />
</div>

###

<p align="left">✔ Procurar benchmark a partir do ID: <br>.<br>Procura dados únicos do benchmark a partir do ID do mesmo, possibilitando o usuário de compartilhar suas análises.<br><br>GET - api/benchmarks-covid/id</p>

###

<div align="center">
  <img height="300" src="https://github.com/user-attachments/assets/0e7a5bac-91b8-4f51-9e8f-531ad99fdccb"  />
</div>

###

<p align="left">✔D - Delete | Deleção de benchmarks<br><br>DELETE - api/benchmarks-covid/id</p>

###

<div align="center">
  <img height="200" src="https://github.com/user-attachments/assets/aee69ac3-05e7-42cf-8822-c707dd054edd"  />
</div>

###

<div align="left">
  <a href="https://www.linkedin.com/in/yurigabrielramos/" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="52" height="40" alt="linkedin logo"  />
  </a>
  <a href="https://api.whatsapp.com/send?phone=5512981946294" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/whatsapp/default.svg" width="52" height="40" alt="whatsapp logo"  />
  </a>
</div>

###
