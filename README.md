# Lumi teste
> Uma aplicação de leitura de faturas com api e web que extrai dados de faturas

## Estrutura do projeto
```bash
├── apps/
│ ├── api/
│ │ ├── src/
│ │ ├── .env
│ ├── web/
│ │ ├── public/
│ │ ├── src/
│ │ │ ├── components/
│ │ │ ├── pages/
│ │ ├── .env.local
```

## Ambiente 🛠️
| Biblioteca  | Ambiente | Descrição |
| ------------- | ------------- | ------------- |
| Node 20.11.1 | Front e Back | Runtime javascript |
| Docker | Front e Back | Ferramenta para trabalhar com containers |
| Typescript | Front e Back | Superset javascript para tipagem estática |
| BiomeJs | Front e Back | Ferramenta para padronização de código |
| Express | Back | Framework node para criação de rest api |
| Prisma | Back | ORM node |
| Postgres | Back | Banco de dados relacional |
| Vitest | Back | Framework para testes |
| PdfParser | Back | Biblioteca para leitura de pdfs usando node |
| Vite - React | Front | Framework javascript para criar projetos web |
| ShadcnUI | Front | Biblioteca UI com princípio copy and paste |
| Tailwind | Front | Motor CSS |
| Tailwind | Front | Framework CSS |
| React Query | Front | Framework react que facilita requisições |

## Configurando ambiente
1. Navegue para pasta <code>/apps/api</code>
```bash
cd apps/api
```

2. Crie uma pasta chamada <b>invoices</b>
```bash
mkdir invoices
```

3. Em seguida cole os pdfs que serão lidos na pasta criada

4. Instale o docker na sua máquina pelo [link](https://docs.docker.com/get-docker/)

## Rodando com Docker

1. Com o docker instalado, rode o comando no terminal para subir os containers
```bash
docker compose up -d
```

2. Após a instalação é necessário gerar os dados dos pdfs, rode os seguintes comandos:
```bash
docker compose exec -it api sh

cd apps/api

npm run generate

exit
```

3. O programa vai estar rodando por padrão na url http://localhost:5173


## Testes 🧪
- 1. Navegue até o backend
```bash
cd ./apps/api
```

### Testes unitários
```bash
npm run test
```