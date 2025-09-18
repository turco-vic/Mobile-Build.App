# � Minha Festa - App de Gerenciamento de Convidados

Um aplicativo React Native para gerenciar a lista de convidados da sua festa com interface moderna e componentizada.

## 📱 Sobre o Projeto

Este projeto foi desenvolvido para facilitar a organização de festas, permitindo gerenciar convites, confirmações de presença e a lista de amigos de forma intuitiva e moderna.

## 🚀 Melhorias Implementadas

### 1. **Modal de Confirmação para Convites**
- **O que foi feito**: Implementado um modal elegante que solicita confirmação antes de enviar um convite para a festa.
- **Por que foi feito**: Evita convites acidentais e proporciona uma experiência mais intencional ao organizador.
- **Valor agregado**: Melhora a usabilidade e reduz erros, tornando o processo de convite mais deliberado e profissional.

### 2. **Sistema de Ícones Temáticos de Festa**
- **O que foi feito**: Substituição de textos simples por ícones Material Icons temáticos:
  - Ícone de celebração no cabeçalho
  - Ícones para status de confirmação (celebration/schedule)
  - Ícones para ações (person-add, party-mode, etc.)
  - Ícones nos botões do modal
- **Por que foi feito**: Os ícones comunicam o tema de festa de forma mais visual e divertida.
- **Valor agregado**: Interface mais alegre, intuitiva e condizente com o tema de festa.

### 3. **Feedback Visual com Sistema de Toast**
- **O que foi feito**: Implementado sistema completo de notificações toast com:
  - Mensagens de sucesso (verde) para novos convites
  - Mensagens informativas (azul) para confirmações/cancelamentos
  - Mensagens de erro (vermelho) para remoções
  - Animações suaves de entrada e saída
- **Por que foi feito**: Usuários precisam de feedback imediato sobre o status dos convites.
- **Valor agregado**: Confirma que as ações foram executadas e mantém o organizador informado sobre o status da festa.

### 4. **Sistema de Filtros para Convidados**
- **O que foi feito**: Adicionado filtro com três opções:
  - "Todos": Exibe todos os convidados
  - "Confirmados": Apenas amigos que confirmaram presença
  - "Pendentes": Apenas convites ainda não confirmados
- **Por que foi feito**: Facilita a organização e o controle dos convidados da festa.
- **Valor agregado**: Permite planejamento mais eficiente e controle de presença para a festa.

### 5. **Animações Festivas**
- **O que foi feito**: Implementadas animações usando react-native-animatable:
  - FadeIn animado para novos cards de convidados
  - Slide animations para modais
  - Animações de entrada para toasts
- **Por que foi feito**: Animações tornam a interface mais animada, condizente com o tema de festa.
- **Valor agregado**: Experiência visual mais divertida e envolvente, criando expectativa para a festa.

## 🏗️ Arquitetura Componentizada

### Componentes Criados:
- **`Header`**: Cabeçalho com tema de festa e ícones celebrativos
- **`AddCharacterForm`**: Formulário de convite com modal de confirmação
- **`CharacterCard`**: Card individual de convidado com animações
- **`CharacterFilter`**: Sistema de filtros por status de confirmação
- **`CharacterList`**: Lista de convidados com estado vazio personalizado
- **`Toast`**: Sistema de notificações temático para festa

### Benefícios da Componentização:
- **Reutilização**: Componentes podem ser reutilizados para outras festas/eventos
- **Manutenibilidade**: Código organizado e fácil de manter
- **Testabilidade**: Cada componente pode ser testado isoladamente
- **Legibilidade**: App.js ficou limpo focando apenas na lógica da festa

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

**Versão**: 2.0.0 - Tema Festa Implementado  
**Data**: Setembro 2025

## 🎊 Funcionalidades da Festa

- ✅ Adicionar amigos à lista de convidados
- ✅ Confirmar/cancelar presença dos amigos
- ✅ Filtrar por status (Todos/Confirmados/Pendentes)
- ✅ Remover convidados da lista
- ✅ Feedback visual para todas as ações
- ✅ Interface temática de festa com animações
