const lessons = [
  {
    id: 0,
    title: 'Trilha 1 · Inglês do dia a dia',
    level: 'Iniciante',
    focus: 'Cumprimentos e frases curtas',
    vocabulary: ['Hello = Olá', 'Good morning = Bom dia', 'Thank you = Obrigado(a)'],
    phrases: ['Hello! How are you?', 'Good morning, teacher.', 'Thank you for your help.'],
    reviewGoal: 3,
    pronunciationHint: 'Fale “thank” com a língua encostando levemente nos dentes.',
  },
  {
    id: 1,
    title: 'Trilha 2 · Inglês prático',
    level: 'Iniciante',
    focus: 'Apresentação pessoal',
    vocabulary: ['My name is... = Meu nome é...', 'I am from... = Eu sou de...', 'Nice to meet you = Prazer em conhecer você'],
    phrases: ['My name is Ana.', 'I am from Brazil.', 'Nice to meet you!'],
    reviewGoal: 3,
    pronunciationHint: 'Em “name”, estique o som final como “nei-m”.',
  },
  {
    id: 2,
    title: 'Trilha 3 · Inglês para rotina',
    level: 'Iniciante',
    focus: 'Necessidades básicas',
    vocabulary: ['I need help = Eu preciso de ajuda', 'Water = Água', 'Where is...? = Onde fica...?'],
    phrases: ['I need help, please.', 'Can I have some water?', 'Where is the library?'],
    reviewGoal: 3,
    pronunciationHint: 'Na frase “Where is”, una os sons para falar de forma contínua.',
  },
];

const studyTemplates = [
  {
    keywords: ['fotossíntese', 'biologia', 'planta'],
    explanation:
      'Fotossíntese é o jeito que a planta usa para produzir o próprio alimento. Ela pega luz do sol, água e gás carbônico e transforma isso em energia para crescer.',
    summary:
      'Plantas usam luz, água e gás carbônico para produzir glicose e liberar oxigênio.',
    topics: ['Entrada de luz solar', 'Uso da água pelas raízes', 'Troca de gases pelas folhas', 'Produção de energia para a planta'],
    questions: ['O que a planta precisa para fazer fotossíntese?', 'Por que a luz do sol é importante?', 'O que a planta libera no final do processo?'],
  },
  {
    keywords: ['cálculo', 'limite', 'matemática'],
    explanation:
      'Limite mostra para qual valor uma função está chegando quando o número de entrada se aproxima de outro número. É uma forma de entender o comportamento da função sem precisar tocar exatamente no ponto.',
    summary:
      'Limite serve para analisar a tendência de uma função quando x se aproxima de um valor.',
    topics: ['Valor de aproximação', 'Comportamento da função', 'Ideia de tendência', 'Base para derivadas e continuidade'],
    questions: ['O que o limite tenta descobrir?', 'Por que ele fala de aproximação?', 'Onde limites são usados no cálculo?'],
  },
  {
    keywords: ['constituição', 'direito', 'princípio'],
    explanation:
      'Na Constituição, princípios são ideias-base que orientam a interpretação das regras. Eles funcionam como bússolas para decidir o que faz mais sentido em um caso concreto.',
    summary:
      'Princípios constitucionais ajudam a interpretar normas e guiam decisões jurídicas.',
    topics: ['Função orientadora', 'Interpretação das normas', 'Aplicação prática em casos', 'Proteção de direitos fundamentais'],
    questions: ['O que é um princípio?', 'Como ele ajuda na interpretação?', 'Qual a diferença entre princípio e regra?'],
  },
];

const PRONUNCIATION_BASE_SCORE = 68;
const PRONUNCIATION_LESSON_WEIGHT = 9;
const PRONUNCIATION_REVIEW_WEIGHT = 5;
const PRONUNCIATION_SCORE_RANGE = 26;
const PRONUNCIATION_WARNING_THRESHOLD = 70;
const PRONUNCIATION_GOOD_THRESHOLD = 82;
const STUDY_TONE_VERY_SIMPLE = 'very-simple';
const STUDY_TONE_SIMPLE = 'simple';

const state = {
  route: normalizeRoute(window.location.hash),
  lessonIndex: 0,
  reviewCount: 0,
  lastAudioMessage: 'Clique em “Ouvir frase” para simular o áudio da lição.',
  pronunciation: null,
  studyResult: null,
};

function normalizeRoute(route) {
  const cleanRoute = route.replace('#', '') || '/';
  return ['/', '/dashboard', '/idiomas', '/estudos'].includes(cleanRoute) ? cleanRoute : '/';
}

function calculatePronunciationScore(lessonIndex, reviewCount) {
  return (
    PRONUNCIATION_BASE_SCORE +
    (((lessonIndex + 1) * PRONUNCIATION_LESSON_WEIGHT + reviewCount * PRONUNCIATION_REVIEW_WEIGHT) %
      PRONUNCIATION_SCORE_RANGE)
  );
}

function render() {
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(createView());
  bindActions();
}

function createView() {
  const container = document.createElement('div');
  container.className = 'view';

  if (state.route === '/') container.innerHTML = createLandingView();
  if (state.route === '/dashboard') container.innerHTML = createDashboardView();
  if (state.route === '/idiomas') container.innerHTML = createLanguagesView();
  if (state.route === '/estudos') container.innerHTML = createStudiesView();

  return container;
}

function createLandingView() {
  return `
    <section class="hero">
      <div class="hero-copy">
        <span class="chip">MVP funcional · IA + apoio didático</span>
        <h1>Aprenda idiomas e estude com explicações simples, curtas e acolhedoras.</h1>
        <p>
          O Nemo Web junta repetição guiada, prática de fala e resumos fáceis para quem quer aprender
          com menos pressão e mais clareza.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="#/dashboard">Começar agora</a>
          <a class="button button-secondary" href="#/idiomas">Explorar Idiomas</a>
          <a class="button button-ghost" href="#/estudos">Explorar Estudos</a>
        </div>
        <div class="stats-grid">
          <div class="dashboard-card">
            <h3>Modo Idiomas</h3>
            <p>Lições curtas, revisão com repetição e treino de pronúncia.</p>
          </div>
          <div class="dashboard-card">
            <h3>Modo Estudos</h3>
            <p>Explique qualquer tema em linguagem simples, com resumo e revisão.</p>
          </div>
        </div>
      </div>
      <div class="hero-panel">
        <div class="section-title">
          <h2>Como o MVP ajuda no dia a dia</h2>
          <p>Uma experiência feita para ensinar devagar, repetir quando for preciso e dar segurança ao usuário.</p>
        </div>
        <div class="stats-grid">
          <div class="stat-item">
            <strong>3 trilhas</strong>
            <span>de idioma prontas para jogar</span>
          </div>
          <div class="stat-item">
            <strong>1 fluxo</strong>
            <span>de pronúncia com feedback visual mockado</span>
          </div>
          <div class="stat-item">
            <strong>4 saídas</strong>
            <span>no modo estudos: explicação, resumo, tópicos e revisão</span>
          </div>
        </div>
        <div class="mini-pill">
          <strong>Tom do produto</strong>
          <p>Linguagem simples, interface limpa e navegação direta entre início, dashboard, idiomas e estudos.</p>
        </div>
      </div>
    </section>
  `;
}

function createDashboardView() {
  return `
    <section class="section-title">
      <span class="chip">Dashboard inicial</span>
      <h2>Escolha como você quer aprender hoje</h2>
      <p>Você pode treinar um idioma com repetição ou simplificar um conteúdo da faculdade.</p>
    </section>
    <section class="dashboard-grid">
      <article class="dashboard-card">
        <h3>Idiomas</h3>
        <p>Pratique vocabulário, ouça frases, repita quantas vezes precisar e avance no seu ritmo.</p>
        <div class="mode-actions">
          <a class="button button-primary" href="#/idiomas">Ir para Idiomas</a>
        </div>
      </article>
      <article class="dashboard-card">
        <h3>Estudos simplificados</h3>
        <p>Envie um tema ou dúvida e receba uma explicação didática com resumo e revisão guiada.</p>
        <div class="mode-actions">
          <a class="button button-primary" href="#/estudos">Ir para Estudos</a>
        </div>
      </article>
    </section>
  `;
}

function createLanguagesView() {
  const lesson = lessons[state.lessonIndex];
  const reviewReady = state.reviewCount >= lesson.reviewGoal;
  const pronunciationCard = state.pronunciation
    ? `
      <div class="feedback-banner ${state.pronunciation.score < PRONUNCIATION_WARNING_THRESHOLD ? 'warning' : ''}">
        <strong>${state.pronunciation.title}</strong>
        <p>${state.pronunciation.message}</p>
        <div class="practice-meter" aria-hidden="true"><span style="width:${state.pronunciation.score}%"></span></div>
        <p class="tiny">Pontuação estimada: ${state.pronunciation.score}/100</p>
      </div>
    `
    : `
      <div class="feedback-banner">
        <strong>Pronto para praticar</strong>
        <p>Use o botão abaixo para simular uma gravação e receber um feedback de pronúncia.</p>
      </div>
    `;

  const tracks = lessons
    .map(
      (item, index) => `
      <article class="mode-card">
        <span class="chip">${item.level}</span>
        <h3>${item.title}</h3>
        <p>${item.focus}</p>
        <button class="button button-secondary" data-action="select-lesson" data-lesson-index="${index}">
          ${index === state.lessonIndex ? 'Trilha atual' : 'Abrir trilha'}
        </button>
      </article>
    `
    )
    .join('');

  return `
    <section class="section-title">
      <span class="chip">Modo Idiomas</span>
      <h2>Aprenda com passos pequenos, repetição e prática guiada</h2>
      <p>Escolha uma trilha, ouça a frase, repita e só avance quando se sentir seguro.</p>
    </section>
    <section class="mode-grid">${tracks}</section>
    <section class="lesson-grid">
      <article class="lesson-card">
        <div class="lesson-header">
          <span class="chip">${lesson.focus}</span>
          <h3>${lesson.title}</h3>
          <p>Vocabulário e frases curtas para memorizar sem pressa.</p>
        </div>
        <div class="lesson-progress">
          <div class="progress-chip">
            <strong>${state.reviewCount}/${lesson.reviewGoal}</strong>
            <span>repetições da lição atual</span>
          </div>
          <div class="progress-chip">
            <strong>${state.lessonIndex + 1}/${lessons.length}</strong>
            <span>trilhas concluídas na sequência</span>
          </div>
        </div>
        <div>
          <h4>Vocabulário base</h4>
          <ul>${lesson.vocabulary.map((item) => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div>
          <h4>Frases para ouvir e repetir</h4>
          <ul>${lesson.phrases.map((item) => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div class="lesson-actions">
          <button class="button button-primary" data-action="listen">Ouvir frase</button>
          <button class="button button-secondary" data-action="repeat">Marcar repetição</button>
          <button class="button button-ghost" data-action="next-lesson" ${reviewReady ? '' : 'disabled'}>
            ${state.lessonIndex === lessons.length - 1 ? 'Revisar do início' : 'Avançar trilha'}
          </button>
        </div>
        <p class="tiny">${state.lastAudioMessage}</p>
      </article>

      <article class="practice-card">
        <div class="practice-header">
          <span class="chip">Prática de fala</span>
          <h3>Área preparada para correção de pronúncia</h3>
          <p>Fluxo mockado para demonstrar gravação, análise e retorno visual.</p>
        </div>
        ${pronunciationCard}
        <p><strong>Dica:</strong> ${lesson.pronunciationHint}</p>
        <div class="button-row">
          <button class="button button-primary" data-action="pronunciation">Gravar prática (mock)</button>
        </div>
      </article>
    </section>
  `;
}

function createStudiesView() {
  const result = state.studyResult;

  return `
    <section class="section-title">
      <span class="chip">Modo Estudos</span>
      <h2>Explique um conteúdo da faculdade de um jeito mais simples</h2>
      <p>Digite um tema, dúvida ou trecho de estudo e receba uma versão mais didática para revisar.</p>
    </section>
    <section class="study-layout">
      <article class="study-panel">
        <h2>Peça ajuda para estudar</h2>
        <p>O MVP usa modelos locais para mostrar como a experiência de IA pode funcionar.</p>
        <form id="study-form">
          <div class="field">
            <label for="study-topic">Tema ou conteúdo</label>
            <textarea
              id="study-topic"
              name="topic"
              rows="8"
              placeholder="Ex.: Explique fotossíntese de forma simples, com exemplos do dia a dia."
              required
            ></textarea>
          </div>
          <div class="field">
            <label for="study-tone">Nível da explicação</label>
            <select id="study-tone" name="tone">
              <option value="${STUDY_TONE_VERY_SIMPLE}">Bem simples</option>
              <option value="${STUDY_TONE_SIMPLE}">Simples e objetiva</option>
            </select>
          </div>
          <div class="button-row">
            <button class="button button-primary" type="submit">Gerar explicação</button>
          </div>
        </form>
      </article>
      <article class="study-result">
        ${
          result
            ? `
            <div class="study-meta">
              <span class="chip">${result.label}</span>
              <h3>Saída simplificada</h3>
              <p>${result.explanation}</p>
            </div>
            <div class="result-grid">
              <div>
                <h4>Resumo</h4>
                <p>${result.summary}</p>
              </div>
              <div>
                <h4>Tópicos principais</h4>
                <ul>${result.topics.map((item) => `<li>${item}</li>`).join('')}</ul>
              </div>
              <div>
                <h4>Perguntas de revisão</h4>
                <ol>${result.questions.map((item) => `<li>${item}</li>`).join('')}</ol>
              </div>
            </div>
          `
            : `
            <div class="empty-state">
              <span class="chip">Pronto para estudar</span>
              <h3>Nenhuma explicação gerada ainda</h3>
              <p>Digite um tema ao lado para ver explicação simplificada, resumo, tópicos e perguntas de revisão.</p>
            </div>
          `
        }
      </article>
    </section>
  `;
}

function bindActions() {
  document.querySelectorAll('[data-action="select-lesson"]').forEach((button) => {
    button.addEventListener('click', () => {
      state.lessonIndex = Number(button.dataset.lessonIndex);
      state.reviewCount = 0;
      state.pronunciation = null;
      state.lastAudioMessage = 'Nova trilha aberta. Clique em “Ouvir frase” para praticar.';
      render();
    });
  });

  document.querySelector('[data-action="listen"]')?.addEventListener('click', () => {
    const phrase = lessons[state.lessonIndex].phrases[0];
    state.lastAudioMessage = `Áudio exemplo reproduzido: “${phrase}”. Agora tente repetir em voz alta.`;
    render();
  });

  document.querySelector('[data-action="repeat"]')?.addEventListener('click', () => {
    const lesson = lessons[state.lessonIndex];
    state.reviewCount = Math.min(state.reviewCount + 1, lesson.reviewGoal);
    state.lastAudioMessage =
      state.reviewCount >= lesson.reviewGoal
        ? 'Ótimo! Você já repetiu a lição o bastante para avançar.'
        : 'Boa! Repita mais um pouco para fixar melhor a frase.';
    render();
  });

  document.querySelector('[data-action="next-lesson"]')?.addEventListener('click', () => {
    state.lessonIndex = state.lessonIndex === lessons.length - 1 ? 0 : state.lessonIndex + 1;
    state.reviewCount = 0;
    state.pronunciation = null;
    state.lastAudioMessage = 'Próxima trilha carregada. Recomece ouvindo a nova frase.';
    render();
  });

  document.querySelector('[data-action="pronunciation"]')?.addEventListener('click', () => {
    const lesson = lessons[state.lessonIndex];
    const baseScore = calculatePronunciationScore(state.lessonIndex, state.reviewCount);
    state.pronunciation = {
      score: baseScore,
      title: baseScore >= PRONUNCIATION_GOOD_THRESHOLD ? 'Pronúncia muito boa' : 'Pronúncia em progresso',
      message:
        baseScore >= PRONUNCIATION_GOOD_THRESHOLD
          ? `Você falou com boa clareza. Continue praticando a entonação da frase “${lesson.phrases[0]}”.`
          : `Você está no caminho certo. Tente repetir mais devagar e reforçar esta dica: ${lesson.pronunciationHint}`,
    };
    render();
  });

  document.getElementById('study-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const topic = String(formData.get('topic') || '').trim();
    const tone = String(formData.get('tone') || STUDY_TONE_SIMPLE);

    if (!topic) return;

    state.studyResult = buildStudyResult(topic, tone);
    render();
  });
}

function buildStudyResult(topic, tone) {
  const lowerTopic = topic.toLowerCase();
  const template = studyTemplates.find((item) => item.keywords.some((keyword) => lowerTopic.includes(keyword)));
  const base = template || buildFallbackTemplate(topic);

  return {
    label: tone === STUDY_TONE_VERY_SIMPLE ? 'Explicação bem simples' : 'Explicação simples e objetiva',
    explanation:
      tone === STUDY_TONE_VERY_SIMPLE
        ? `${base.explanation} Pense nisso como um passo a passo curto, sem palavras difíceis.`
        : base.explanation,
    summary: base.summary,
    topics: base.topics,
    questions: base.questions,
  };
}

function buildFallbackTemplate(topic) {
  const cleanTopic = topic.replace(/\s+/g, ' ').trim();
  // Usa a primeira frase ou cláusula para gerar uma resposta mockada mais focada quando não há template específico.
  const primaryTopic = cleanTopic
    .split(/[.,;\n]/)
    .map((item) => item.trim())
    .filter(Boolean)[0] || cleanTopic;

  return {
    explanation: `Em palavras simples, ${primaryTopic} pode ser entendido como um assunto que precisa ser dividido em partes menores. Primeiro, veja a ideia principal. Depois, observe como cada parte se conecta com exemplos do cotidiano.`,
    summary: `Resumo rápido: ${primaryTopic} fica mais fácil quando você separa conceito principal, exemplos e aplicação prática.`,
    topics: ['Ideia principal do tema', 'Exemplo prático do dia a dia', 'Palavras-chave para memorizar', 'Passo seguinte para revisar'],
    questions: ['Qual é a ideia principal desse conteúdo?', 'Como eu explicaria isso com minhas próprias palavras?', 'Que exemplo simples ajuda a lembrar do tema?'],
  };
}

window.addEventListener('hashchange', () => {
  state.route = normalizeRoute(window.location.hash);
  render();
});

render();
