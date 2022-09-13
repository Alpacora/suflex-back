# Densenvolvido por Kaê Teixeira Benning Leal - Suflex

- Esclarecimentos
- Como rodar o projeto
- Estrutura do projeto & tomadas de decisão

# Esclarecimentos
Gostaria de agradecer a atenção da equipe Suflex pela entrevista e agora por este desafio.
<br>
Por pouco não cheguei aos 100% do back, devido a falta de tempo mesmo, recebi o desafio no final da tarde da sexta-feira (09) quando eu estava saindo do estado do Ceará à caminho da minha casa em Pernambuco, só comecei a executar o desafio de fato mesmo, no domingo. O desafio foi simples, bem formulado, porém longo.

# Como rodar o projeto
- Clone o projeto em sua máquina
- Rode yarn ou npm install para instalar as dependências
- Renomei a .env.example para .env (já deixei com os valores default)
- por último rode yarn dev (Deve aparecer em seu terminal => Server Running on http://localhost:3333/)

# Estrutura do projeto & tomadas de decisão
Montei o back-end o mais simples possível pois ainda teria o front inteiro para fazer, escolhi novamente as tecnologias da suflex (Graphql e Prisma) e para agilizar ainda mais utilizei a lib TypeGraphQl para integrar com o TypeScript e gerar o schema.graphql fazendo com que minha responsabilidade fosse construir os resolvers (controllers). Busquei por fazer uma organização semi-solid para demonstrar que mesmo um pequeno projeto pode ser escalável, simples e de fácil manutenção.

#Features finalizadas 
- Login
- Cadastro
- Prisma Schema já com os relacionamento
