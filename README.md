# Nemo-Web

MVP funcional de uma plataforma web de aprendizado com IA focada em:

- **Idiomas** com lições curtas, repetição guiada e prática de pronúncia mockada;
- **Estudos** com explicações simplificadas, resumo, tópicos principais e revisão.

## Como rodar

```bash
npm run dev
```

Depois, abra `http://localhost:4173`.

## O que foi implementado

- landing page com proposta do produto e CTAs;
- dashboard com acesso aos modos **Idiomas** e **Estudos**;
- **modo Idiomas com seleção funcional de idioma e nível**:
  - escolha de idioma: Inglês 🇺🇸, Espanhol 🇪🇸, Francês 🇫🇷, Italiano 🇮🇹 e Alemão 🇩🇪;
  - escolha de nível: Iniciante, Básico, Intermediário e Avançado;
  - vocabulário, frases e dica de pronúncia mudam conforme idioma e nível escolhidos;
  - seleção ativa exibida em destaque na tela;
  - idioma e nível persistidos em `localStorage` (restaurados ao recarregar a página);
- prática de fala com feedback visual mockado de pronúncia;
- área de estudos que transforma um tema em explicação simples, resumo, tópicos e perguntas de revisão;
- navegação SPA simples por hash (`#/dashboard`, `#/idiomas`, `#/estudos`).

## Observações

- A experiência de voz e IA foi preparada com dados e feedbacks locais para demonstrar o fluxo do MVP sem depender de integrações externas.
- A persistência de idioma e nível usa `localStorage` com as chaves `nemo_language` e `nemo_level`.
