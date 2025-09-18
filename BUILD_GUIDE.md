# 🚀 Guia de Build e Deployment

## Para gerar o APK para Android:

1. **Instalar EAS CLI (se ainda não tiver)**:
```bash
npm install -g @expo/eas-cli
```

2. **Fazer login no Expo**:
```bash
eas login
```

3. **Configurar o projeto**:
```bash
eas build:configure
```

4. **Gerar APK para Android**:
```bash
eas build --platform android --profile preview
```

O APK será gerado e você receberá um link para download.

## Comandos úteis:

- `npm start` - Executar em modo desenvolvimento
- `npm run android` - Executar no emulador Android
- `eas build --platform android` - Build de produção
- `eas build --platform android --profile preview` - Build APK para testes

## Estrutura do projeto após refatoração:

```
├── App.js                 # Arquivo principal (refatorado)
├── components/            # Componentes organizados
│   ├── Header.js         # Cabeçalho com título
│   ├── AddCharacterForm.js # Formulário com modal
│   ├── CharacterCard.js  # Card de personagem
│   ├── CharacterFilter.js # Sistema de filtros
│   ├── CharacterList.js  # Lista de personagens
│   └── Toast.js          # Sistema de notificações
├── assets/               # Recursos visuais
├── package.json          # Dependências atualizadas
├── eas.json             # Configuração de build
└── README.md            # Documentação completa
```
