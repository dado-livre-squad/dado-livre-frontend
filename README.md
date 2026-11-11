# Dado Livre — Frontend

Aplicativo mobile para centralizar, em um só lugar, dados de candidatos em época de eleições: quem são, de qual partido, quais as redes sociais, as notícias do momento e quando acontecem as próximas votações.

Este repositório contém o **frontend** (React Native + Expo). A API fica em [dado-livre-backend](https://github.com/dado-livre-squad/dado-livre-backend).

## Funcionalidades

| Tela | Rota | O que faz |
| --- | --- | --- |
| Início | `/` | Carrossel de notícias em destaque, lista de candidatos e próximas eleições |
| Candidatos | `/candidatos` | Grade de cards com todos os candidatos |
| Detalhes do candidato | `/candidato/[id]` | Nome, número, partido, cargo, idade, sobre e redes sociais |
| Notícias | `/noticias` | Carrossel de destaques e lista de notícias |
| Detalhes da notícia | `/noticia/[id]` | Resumo da notícia e botão para abrir a reportagem original |
| Eleições | `/eleicoes` | Datas e turnos das próximas eleições |
| Comparar | `/comparar` | Em construção |
| Perfil | `/perfil` | Em construção (acessado pelo ícone no cabeçalho) |

Se a rota não existir, o app mostra uma tela de erro com link para o início.

## Tecnologias

- [Expo](https://expo.dev) SDK 58 e [Expo Router](https://docs.expo.dev/router/introduction) (rotas baseadas em arquivos, com `typedRoutes` ativado)
- React Native 0.88 e React 19.3, com React Compiler ativado
- TypeScript 6 em modo `strict`
- [lucide-react-native](https://lucide.dev) para ícones
- Fontes Roboto Slab e Nunito (em `assets/fonts`)
- Suporte a Android, iOS e web

## Como rodar

Pré-requisito: Node.js e npm instalados.

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm start
```

O terminal mostra as opções para abrir o app em um emulador Android, no simulador iOS, na web ou no [Expo Go](https://expo.dev/go).

Outros atalhos:

```bash
npm run android   # abre no Android
npm run ios       # abre no iOS
npm run web       # abre no navegador
npm run lint      # verifica o código (expo lint)
npx tsc --noEmit  # checagem de tipos
```

> Para adicionar bibliotecas, prefira `npx expo install <pacote>`: ele escolhe a versão compatível com o SDK do Expo.

## Estrutura do projeto

```
src/
├── app/                 # Telas e rotas (cada arquivo é uma rota)
│   ├── (tabs)/          # Abas: início, candidatos, notícias, eleições, comparar
│   ├── candidato/[id]   # Detalhes do candidato
│   ├── noticia/[id]     # Detalhes da notícia
│   ├── perfil.tsx
│   └── +not-found.tsx
├── components/          # Componentes, um diretório por assunto
│   ├── CandidateCard/ · CandidateCardList/ · CandidateDetails/
│   ├── NewsCard/ · NewsCardList/ · Carroussel/
│   └── Header/ · NextElections/ · ErrorScreen/ · TabIcon/ · TabLabel/
├── constants/           # Constantes (cor principal)
├── models/              # Tipos TypeScript dos dados
└── mocks/               # Dados fictícios usados pelas telas
assets/
├── fonts/
└── images/
```

O alias `@/` aponta para `src/` (por exemplo, `import Header from "@/components/Header/Header"`).

## Dados

Hoje as telas leem os dados de `src/mocks` (candidatos, candidatos detalhados e notícias), tipados pelos modelos de `src/models`. As datas das próximas eleições estão escritas diretamente no componente `NextElections`.

O `.gitignore` já ignora `.env` e `src/api`, reservados para a integração com a API do backend.

## Contribuindo

1. Crie uma branch a partir da `main`.
2. Antes de abrir o pull request, rode `npm run lint` e `npx tsc --noEmit`.
3. Abra o pull request para a `main`.

## Licença

MIT. Veja o arquivo [LICENSE](LICENSE).