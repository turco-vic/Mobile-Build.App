# 🎮 App RPG Party Manager - Versão Refatorada

Um aplicativo React Native para gerenciar personagens de RPG com interface moderna e componentizada.

## 📱 Sobre o Projeto

Este projeto foi refatorado de uma única tela (`App.js`) para uma arquitetura componentizada e profissional, aplicando melhores práticas de desenvolvimento React Native.

## 🚀 Melhorias Implementadas

### 1. **Modal de Confirmação para Adição de Personagens**
- **O que foi feito**: Implementado um modal elegante que solicita confirmação antes de adicionar um novo personagem à party.
- **Por que foi feito**: Evita adições acidentais e proporciona uma experiência mais intencional ao usuário.
- **Valor agregado**: Melhora a usabilidade e reduz erros do usuário, tornando a interação mais deliberada e profissional.

### 2. **Sistema de Ícones Visuais Intuitivos**
- **O que foi feito**: Substituição de textos simples por ícones Material Icons em toda a interface:
  - Ícone de grupo no cabeçalho
  - Ícones para status de recrutamento (check-circle/radio-button-unchecked)
  - Ícones para ações (person-add, add, etc.)
  - Ícones nos botões do modal
- **Por que foi feito**: Os ícones comunicam informações de forma mais rápida e universal que texto.
- **Valor agregado**: Interface mais moderna, intuitiva e acessível, reduzindo a curva de aprendizado.

### 3. **Feedback Visual com Sistema de Toast**
- **O que foi feito**: Implementado sistema completo de notificações toast com:
  - Mensagens de sucesso (verde) para adições
  - Mensagens informativas (azul) para recrutamento/dispensação
  - Mensagens de erro (vermelho) para remoções
  - Animações suaves de entrada e saída
- **Por que foi feito**: Usuários precisam de feedback imediato sobre suas ações.
- **Valor agregado**: Confirma que as ações foram executadas com sucesso, melhora a confiança do usuário e torna a experiência mais satisfatória.

### 4. **Sistema de Filtros Avançado**
- **O que foi feito**: Adicionado filtro com três opções:
  - "Todos": Exibe todos os personagens
  - "Recrutados": Apenas personagens na party ativa
  - "Disponíveis": Apenas personagens não recrutados
- **Por que foi feito**: Facilita a navegação em listas grandes de personagens.
- **Valor agregado**: Melhora a organização e permite foco específico em diferentes grupos de personagens.

### 5. **Animações Fluidas**
- **O que foi feito**: Implementadas animações usando react-native-animatable:
  - FadeIn animado para novos cards de personagem
  - Slide animations para modais
  - Animações de entrada para toasts
- **Por que foi feito**: Animações tornam a interface mais viva e profissional.
- **Valor agregado**: Experiência visual mais agradável e polida, transmitindo qualidade e modernidade.

## 🏗️ Arquitetura Componentizada

### Componentes Criados:
- **`Header`**: Cabeçalho com título e ícones
- **`AddCharacterForm`**: Formulário de adição com modal de confirmação
- **`CharacterCard`**: Card individual de personagem com animações
- **`CharacterFilter`**: Sistema de filtros por categoria
- **`CharacterList`**: Lista renderizada com estado vazio
- **`Toast`**: Sistema de notificações com tipos diferentes

### Benefícios da Componentização:
- **Reutilização**: Componentes podem ser reutilizados em outras telas
- **Manutenibilidade**: Código organizado e fácil de manter
- **Testabilidade**: Cada componente pode ser testado isoladamente
- **Legibilidade**: App.js ficou limpo com apenas lógica de negócio

## 🎨 Biblioteca de UI

**React Native Paper** foi escolhida como base, junto com:
- **@expo/vector-icons**: Para ícones Material Design
- **react-native-animatable**: Para animações fluidas
- **react-native-vector-icons**: Suporte adicional a ícones

### Substitutições Realizadas:
- `TouchableOpacity` → Componentes estilizados com feedback visual
- `TextInput` → Inputs com ícones e melhor estilização
- Layout básico → Cards e containers modernos

## 🛠️ Tecnologias Utilizadas

- React Native
- Expo
- React Native Paper
- Expo Vector Icons
- React Native Animatable
- SQLite (estrutura preparada)

## 📦 Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto:
```bash
npm start
```

3. Para build Android:
```bash
npx eas build --platform android
```

## 👥 Desenvolvido por

Este projeto foi desenvolvido como atividade em dupla para demonstrar boas práticas de componentização e UI/UX em React Native.

---

**Versão**: 2.0.0 - Refatorada e Componentizada  
**Data**: Setembro 2025
