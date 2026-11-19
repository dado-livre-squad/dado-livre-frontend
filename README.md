# Dado Livre — Frontend

Aplicativo mobile para centralizar, em um só lugar, dados de candidatos em época de eleições: quem são, de qual partido, quais as redes sociais, as notícias do momento e quando acontecem as votações.

Este repositório contém o **frontend** (React Native + Expo). A API fica em [dado-livre-backend](https://github.com/dado-livre-squad/dado-livre-backend).

## Funcionalidades

| Tela | Rota | O que faz |
| --- | --- | --- |
| Início | `/` | Carrossel de notícias em destaque, lista de candidatos e próximas eleições |
| Candidatos | `/candidatos` | Grade de cards com os candidatos (API ou mock) |
| Detalhes do candidato | `/candidato/[id]` | Nome, número, partido, cargo, idade, sobre e redes sociais |
| Notícias | `/noticias` | Carrossel de destaques e lista de notícias |
| Detalhes da notícia | `/noticia/[id]` | Resumo da notícia e botão para abrir a reportagem original |
| Eleições | `/eleicoes` | Datas e turnos das próximas eleições e resultados de eleições anteriores |
| Comparar | `/comparar` | Em construção |
| Perfil | `/perfil` | Preferências do app, como o tema escuro (acessado pelo ícone no cabeçalho). Notificações e lembretes ainda não têm efeito |

Se a rota não existir, o app mostra uma tela de erro com link para o início.

## Tema escuro

O app tem tema claro e escuro, e a troca é feita no switch **Fundo escuro** da tela de Perfil.

- Na primeira abertura, o app segue o tema do sistema. Depois da troca manual, a escolha é salva no aparelho com `@react-native-async-storage/async-storage`.
- As paletas ficam em `src/constants/theme.ts` (`lightTheme` e `darkTheme`).
- `src/contexts/ThemeContext.tsx` expõe `useTheme()` e `useThemedStyles()`. Os componentes criam os estilos a partir do tema:

```tsx
const styles = useThemedStyles(createStyles);

const createStyles = (t: Theme) => StyleSheet.create({
  container: { backgroundColor: t.background },
});
```

Para criar uma cor nova, adicione a chave em `lightTheme` e o equivalente em `darkTheme`. Evite cores fixas nos componentes, exceto sobre imagens, como no carrossel e na foto do candidato.

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

Antes do `npm start`, copie o `example.env` para um arquivo `.env` na raiz e ajuste os valores (veja [Variáveis de ambiente](#variáveis-de-ambiente)).

O terminal mostra as opções para abrir o app em um emulador Android, no simulador iOS, na web ou no [Expo Go](https://expo.dev/go).

Outros atalhos:

```bash
npm run android    # abre no Android
npm run ios        # abre no iOS
npm run web        # abre no navegador
npm run start:dev  # inicia usando as variáveis de .env.dev
npm run start:qa   # inicia usando as variáveis de .env.qa
npm run lint       # verifica o código (expo lint)
npx tsc --noEmit   # checagem de tipos
```

> Para adicionar bibliotecas, prefira `npx expo install <pacote>`: ele escolhe a versão compatível com o SDK do Expo.

## Variáveis de ambiente

O `example.env` lista as variáveis. O `npm start` lê o `.env`; os scripts `start:dev` e `start:qa` carregam `.env.dev` e `.env.qa` com o `dotenv-cli`. Os três arquivos estão no `.gitignore`: crie-os localmente.

| Variável | Padrão | Para que serve |
| --- | --- | --- |
| `EXPO_PUBLIC_API_URL` | vazio | URL base da API do backend |
| `EXPO_PUBLIC_AMBIENTE` | `dev` | Nome do ambiente do app |
| `EXPO_PUBLIC_MOCK` | `true` | `true` usa os dados fictícios; qualquer outro valor usa a API |

Ao mudar uma variável, recarregue o app no aparelho. Em um celular físico, `EXPO_PUBLIC_API_URL` precisa apontar para o IP da máquina que roda o backend, não para `localhost`.

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
│   ├── CandidateCard/ · CandidateCardList/ · CandidateDetails/ · InfoContainer/
│   ├── NewsCard/ · NewsCardList/ · Carroussel/
│   ├── NextElections/ · PreviousElections/
│   └── Header/ · ErrorScreen/ · SpinLoader/ · TabIcon/ · TabLabel/
├── api/                 # Cliente HTTP (fetch) da API
├── services/            # Origem dos dados: API ou mock
├── repositories/        # Interfaces que os serviços implementam
├── dto/                 # Formato das respostas da API
├── contexts/            # Tema (claro/escuro)
├── constants/           # Cores, tema, URL da API e ambiente
├── models/              # Tipos TypeScript dos dados das telas
└── mocks/               # Dados fictícios
assets/
├── fonts/
└── images/
```

O alias `@/` aponta para `src/` (por exemplo, `import Header from "@/components/Header/Header"`).

## Contribuindo

1. Crie uma branch a partir da `main`.
2. Antes de abrir o pull request, rode `npm run lint` e `npx tsc --noEmit`.
3. Abra o pull request para a `main`.