const languageData = {
  en: {
    name: 'Inglês',
    flag: '🇺🇸',
    levels: {
      iniciante: {
        title: 'Inglês · Iniciante',
        focus: 'Cumprimentos e frases curtas',
        vocabulary: ['Hello = Olá', 'Good morning = Bom dia', 'Thank you = Obrigado(a)', 'Please = Por favor', 'Excuse me = Com licença'],
        phrases: ['Hello! How are you?', 'Good morning, teacher.', 'Thank you for your help.', 'Excuse me, can you help me?'],
        reviewGoal: 3,
        pronunciationHint: 'Fale "thank" com a língua encostando levemente nos dentes.',
      },
      basico: {
        title: 'Inglês · Básico',
        focus: 'Apresentação e cotidiano',
        vocabulary: ['My name is... = Meu nome é...', 'I am from... = Eu sou de...', 'I like... = Eu gosto de...', 'I work at... = Eu trabalho em...'],
        phrases: ['My name is Ana, I am from Brazil.', 'I like to read and travel.', 'I work at a hospital.', 'What do you do for a living?'],
        reviewGoal: 3,
        pronunciationHint: 'Em "name", estique o som final como "nei-m".',
      },
      intermediario: {
        title: 'Inglês · Intermediário',
        focus: 'Situações do dia a dia',
        vocabulary: ["Could you repeat that? = Pode repetir?", "I don't understand = Não entendo", 'Can we schedule a meeting? = Podemos agendar uma reunião?'],
        phrases: ["Could you please repeat that more slowly?", "I don't quite understand what you mean.", 'Can we schedule a meeting for next week?'],
        reviewGoal: 4,
        pronunciationHint: 'Em "schedule", o "sch" soa como "sk" no inglês americano.',
      },
      avancado: {
        title: 'Inglês · Avançado',
        focus: 'Fluência e expressões idiomáticas',
        vocabulary: ['To beat around the bush = Enrolar, não ir direto ao ponto', 'Hit the nail on the head = Acertar em cheio', 'Once in a blue moon = De vez em quando'],
        phrases: ['Stop beating around the bush and tell me what happened.', 'You really hit the nail on the head with that analysis.', 'I only visit that restaurant once in a blue moon.'],
        reviewGoal: 4,
        pronunciationHint: 'Nas expressões idiomáticas, a entonação é tão importante quanto o vocabulário.',
      },
    },
  },
  es: {
    name: 'Espanhol',
    flag: '🇪🇸',
    levels: {
      iniciante: {
        title: 'Espanhol · Iniciante',
        focus: 'Saudações e frases básicas',
        vocabulary: ['Hola = Olá', 'Buenos días = Bom dia', 'Gracias = Obrigado(a)', 'Por favor = Por favor', 'Lo siento = Desculpe'],
        phrases: ['¡Hola! ¿Cómo estás?', 'Buenos días, mucho gusto.', 'Gracias por su ayuda.', 'Lo siento, no entiendo.'],
        reviewGoal: 3,
        pronunciationHint: 'O "h" em espanhol é sempre mudo: "Hola" se lê como "Ola".',
      },
      basico: {
        title: 'Espanhol · Básico',
        focus: 'Apresentação pessoal',
        vocabulary: ['Me llamo... = Meu nome é...', 'Soy de... = Sou de...', 'Tengo... años = Tenho... anos', 'Trabajo como... = Trabalho como...'],
        phrases: ['Me llamo Carlos, soy de México.', 'Tengo veinticinco años.', 'Trabajo como profesor.', '¿Cuántos años tienes?'],
        reviewGoal: 3,
        pronunciationHint: 'O "ll" soa como "j" na maioria dos países hispânicos.',
      },
      intermediario: {
        title: 'Espanhol · Intermediário',
        focus: 'Conversas do cotidiano',
        vocabulary: ['¿Podría repetir? = Poderia repetir?', 'No entiendo bien = Não entendo bem', '¿Dónde queda...? = Onde fica...?'],
        phrases: ['¿Podría hablar más despacio, por favor?', 'No entiendo bien lo que dices.', '¿Dónde queda la estación de metro?'],
        reviewGoal: 4,
        pronunciationHint: 'O "r" vibrante simples no meio de palavras soa mais suave que o "rr".',
      },
      avancado: {
        title: 'Espanhol · Avançado',
        focus: 'Expressões e cultura',
        vocabulary: ['A toda mecha = A toda velocidade', 'Ser pan comido = Ser muito fácil', 'Costar un ojo de la cara = Custar os olhos da cara'],
        phrases: ['Fue a toda mecha para no perder el tren.', 'Para él, ese examen fue pan comido.', 'Ese coche nuevo le costó un ojo de la cara.'],
        reviewGoal: 4,
        pronunciationHint: 'Nas expressões idiomáticas, use a entonação natural do falante nativo.',
      },
    },
  },
  fr: {
    name: 'Francês',
    flag: '🇫🇷',
    levels: {
      iniciante: {
        title: 'Francês · Iniciante',
        focus: 'Saudações e cortesia',
        vocabulary: ['Bonjour = Bom dia / Olá', 'Merci = Obrigado(a)', "S'il vous plaît = Por favor", 'Excusez-moi = Com licença', 'Au revoir = Até logo'],
        phrases: ['Bonjour! Comment allez-vous?', 'Merci beaucoup.', "Excusez-moi, pouvez-vous m'aider?", 'Au revoir!'],
        reviewGoal: 3,
        pronunciationHint: 'O "r" francês é gutural, pronunciado na garganta, não na ponta da língua.',
      },
      basico: {
        title: 'Francês · Básico',
        focus: 'Apresentação e rotina',
        vocabulary: ["Je m'appelle... = Meu nome é...", "J'habite à... = Eu moro em...", "J'aime... = Eu gosto de...", 'Je travaille = Eu trabalho'],
        phrases: ["Je m'appelle Marie, j'habite à Paris.", "J'aime le café et les croissants.", 'Je travaille dans un bureau.', 'Quel est votre prénom?'],
        reviewGoal: 3,
        pronunciationHint: 'No francês, as letras finais geralmente não são pronunciadas: "aimer" → "ê-mê".',
      },
      intermediario: {
        title: 'Francês · Intermediário',
        focus: 'Situações práticas',
        vocabulary: ['Pourriez-vous répéter? = Poderia repetir?', 'Je ne comprends pas = Não entendo', "C'est combien? = Quanto custa?"],
        phrases: ['Pourriez-vous parler plus lentement?', 'Je ne comprends pas ce que vous dites.', "C'est combien, ce livre?"],
        reviewGoal: 4,
        pronunciationHint: 'O "u" francês não existe em português — diga "i" mas arredonde muito os lábios.',
      },
      avancado: {
        title: 'Francês · Avançado',
        focus: 'Expressões idiomáticas',
        vocabulary: ['Avoir le cafard = Estar deprimido', 'Casser les pieds = Chatear, irritar', "Il ne faut pas vendre la peau de l'ours = Não conte com o ovo antes de botar"],
        phrases: ["Il a le cafard depuis que son ami est parti.", 'Tu me casses les pieds avec tes questions!', "Il ne faut pas vendre la peau de l'ours avant de l'avoir tué."],
        reviewGoal: 4,
        pronunciationHint: 'A liaison conecta palavras: "les amis" → "lê-za-mi". Pratique devagar.',
      },
    },
  },
  it: {
    name: 'Italiano',
    flag: '🇮🇹',
    levels: {
      iniciante: {
        title: 'Italiano · Iniciante',
        focus: 'Cumprimentos e cortesia',
        vocabulary: ['Ciao = Olá / Tchau', 'Buongiorno = Bom dia', 'Grazie = Obrigado(a)', 'Per favore = Por favor', 'Scusi = Com licença'],
        phrases: ['Ciao! Come stai?', 'Buongiorno, piacere.', 'Grazie mille!', 'Scusi, può aiutarmi?'],
        reviewGoal: 3,
        pronunciationHint: 'O "c" antes de "i" ou "e" soa como "tch": "ciao" = "tchau".',
      },
      basico: {
        title: 'Italiano · Básico',
        focus: 'Apresentação pessoal',
        vocabulary: ['Mi chiamo... = Meu nome é...', 'Sono di... = Sou de...', "Ho... anni = Tenho... anos", 'Lavoro come... = Trabalho como...'],
        phrases: ['Mi chiamo Lucia, sono di Roma.', "Ho trent'anni.", 'Lavoro come insegnante.', 'Di dove sei?'],
        reviewGoal: 3,
        pronunciationHint: 'O italiano é uma língua musical: dê atenção ao ritmo das sílabas.',
      },
      intermediario: {
        title: 'Italiano · Intermediário',
        focus: 'Conversas práticas',
        vocabulary: ['Potrebbe ripetere? = Poderia repetir?', 'Non capisco = Não entendo', 'Quanto costa? = Quanto custa?'],
        phrases: ['Potrebbe parlare più lentamente?', 'Non capisco bene quello che dice.', 'Quanto costa questo libro?'],
        reviewGoal: 4,
        pronunciationHint: 'O duplo consoante muda o significado: "nono" (nono) vs "nonno" (avô).',
      },
      avancado: {
        title: 'Italiano · Avançado',
        focus: 'Expressões e cultura',
        vocabulary: ['In bocca al lupo = Boa sorte (lit. na boca do lobo)', 'Avere il pollice verde = Ter jeito com plantas', 'Fare le ore piccole = Ficar acordado até tarde'],
        phrases: ['In bocca al lupo per il tuo esame!', 'Mia nonna ha il pollice verde, il giardino è bellissimo.', 'Abbiamo fatto le ore piccole a festeggiare.'],
        reviewGoal: 4,
        pronunciationHint: 'Pratique os ditongos: "uomo", "piede", "fiore" — abra bem a boca.',
      },
    },
  },
  de: {
    name: 'Alemão',
    flag: '🇩🇪',
    levels: {
      iniciante: {
        title: 'Alemão · Iniciante',
        focus: 'Saudações e palavras básicas',
        vocabulary: ['Hallo = Olá', 'Guten Morgen = Bom dia', 'Danke = Obrigado(a)', 'Bitte = Por favor / De nada', 'Entschuldigung = Com licença'],
        phrases: ['Hallo! Wie geht es Ihnen?', 'Guten Morgen, schön Sie zu sehen.', 'Danke schön!', 'Entschuldigung, können Sie mir helfen?'],
        reviewGoal: 3,
        pronunciationHint: 'O "ch" alemão soa gutural, como um "r" arrastado — pratique com "Bach".',
      },
      basico: {
        title: 'Alemão · Básico',
        focus: 'Apresentação pessoal',
        vocabulary: ['Ich heiße... = Meu nome é...', 'Ich komme aus... = Eu venho de...', 'Ich bin... Jahre alt = Tenho... anos', 'Ich arbeite als... = Trabalho como...'],
        phrases: ['Ich heiße Thomas und komme aus Berlin.', 'Ich bin dreißig Jahre alt.', 'Ich arbeite als Ingenieur.', 'Woher kommen Sie?'],
        reviewGoal: 3,
        pronunciationHint: 'No alemão, todas as letras são pronunciadas. Não existem letras mudas como no francês.',
      },
      intermediario: {
        title: 'Alemão · Intermediário',
        focus: 'Conversas do dia a dia',
        vocabulary: ['Könnten Sie das wiederholen? = Poderia repetir?', 'Ich verstehe nicht = Não entendo', 'Was kostet das? = Quanto custa?'],
        phrases: ['Könnten Sie bitte langsamer sprechen?', 'Ich verstehe nicht, was Sie meinen.', 'Was kostet dieses Buch?'],
        reviewGoal: 4,
        pronunciationHint: 'O "ü" não existe em português — diga "i" mas arredonde os lábios como se fosse "u".',
      },
      avancado: {
        title: 'Alemão · Avançado',
        focus: 'Expressões e compostos',
        vocabulary: ['Fernweh = Saudade de lugares distantes', 'Weltschmerz = Dor do mundo, melancolia existencial', 'Verschlimmbessern = Piorar tentando melhorar'],
        phrases: ['Ich habe so ein Fernweh, ich möchte reisen.', 'Nach den Nachrichten fühlte er sich vom Weltschmerz überwältigt.', 'Er hat die Situation verschlimmbessert mit seiner Einmischung.'],
        reviewGoal: 4,
        pronunciationHint: 'O alemão usa compostos longos — leia sílaba por sílaba e vá acelerando aos poucos.',
      },
    },
  },
};

const LANGUAGE_KEYS = ['en', 'es', 'fr', 'it', 'de'];
const LEVEL_KEYS = ['iniciante', 'basico', 'intermediario', 'avancado'];
const LEVEL_LABELS = { iniciante: 'Iniciante', basico: 'Básico', intermediario: 'Intermediário', avancado: 'Avançado' };

function getCurrentLesson() {
  return languageData[state.selectedLanguage].levels[state.selectedLevel];
}

function getLessonComboIndex() {
  return LANGUAGE_KEYS.indexOf(state.selectedLanguage) * LEVEL_KEYS.length + LEVEL_KEYS.indexOf(state.selectedLevel);
}


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
  selectedLanguage: 'en',
  selectedLevel: 'iniciante',
  reviewCount: 0,
  lastAudioMessage: 'Clique em “Ouvir frase” para simular o áudio da lição.',
  pronunciation: null,
  studyResult: null,
};

// Restaura idioma e nível salvos pelo usuário
(function () {
  const lang = localStorage.getItem('nemo_language');
  const level = localStorage.getItem('nemo_level');
  if (lang && LANGUAGE_KEYS.includes(lang)) state.selectedLanguage = lang;
  if (level && LEVEL_KEYS.includes(level)) state.selectedLevel = level;
})();

function normalizeRoute(route) {
  const cleanRoute = route.replace('#', '') || '/';
  return ['/', '/dashboard', '/idiomas', '/estudos'].includes(cleanRoute) ? cleanRoute : '/';
}

function calculatePronunciationScore(comboIndex, reviewCount) {
  // O módulo mantém o feedback mockado dentro de uma faixa estável de 68 a 93 pontos.
  return (
    PRONUNCIATION_BASE_SCORE +
    (((comboIndex + 1) * PRONUNCIATION_LESSON_WEIGHT + reviewCount * PRONUNCIATION_REVIEW_WEIGHT) %
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
  const lesson = getCurrentLesson();
  const lang = languageData[state.selectedLanguage];
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

  const languageButtons = LANGUAGE_KEYS.map((key) => {
    const l = languageData[key];
    const active = key === state.selectedLanguage ? ' active' : '';
    return `<button class="selector-btn${active}" data-action="select-language" data-lang="${key}">${l.flag} ${l.name}</button>`;
  }).join('');

  const levelButtons = LEVEL_KEYS.map((key) => {
    const active = key === state.selectedLevel ? ' active' : '';
    return `<button class="selector-btn${active}" data-action="select-level" data-level="${key}">${LEVEL_LABELS[key]}</button>`;
  }).join('');

  const nextLevelIndex = (LEVEL_KEYS.indexOf(state.selectedLevel) + 1) % LEVEL_KEYS.length;
  const nextLevelLabel = LEVEL_LABELS[LEVEL_KEYS[nextLevelIndex]];

  return `
    <section class="section-title">
      <span class="chip">Modo Idiomas</span>
      <h2>Aprenda com passos pequenos, repetição e prática guiada</h2>
      <p>Escolha um idioma e nível, ouça a frase, repita e só avance quando se sentir seguro.</p>
    </section>
    <section class="selector-section">
      <h3>Idioma</h3>
      <div class="selector-row">${languageButtons}</div>
    </section>
    <section class="selector-section">
      <h3>Nível</h3>
      <div class="selector-row">${levelButtons}</div>
    </section>
    <div class="active-badge">
      <span>Estudando agora:</span>
      <strong>${lang.flag} ${lang.name} · ${LEVEL_LABELS[state.selectedLevel]}</strong>
    </div>
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
            <span>repetições desta lição</span>
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
          <button class="button button-ghost" data-action="next-level" ${reviewReady ? '' : 'disabled'}>
            Avançar para ${nextLevelLabel}
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
  document.querySelectorAll('[data-action="select-language"]').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedLanguage = button.dataset.lang;
      state.reviewCount = 0;
      state.pronunciation = null;
      state.lastAudioMessage = 'Idioma alterado. Clique em "Ouvir frase" para praticar.';
      localStorage.setItem('nemo_language', state.selectedLanguage);
      render();
    });
  });

  document.querySelectorAll('[data-action="select-level"]').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedLevel = button.dataset.level;
      state.reviewCount = 0;
      state.pronunciation = null;
      state.lastAudioMessage = 'Nível alterado. Clique em "Ouvir frase" para praticar.';
      localStorage.setItem('nemo_level', state.selectedLevel);
      render();
    });
  });

  document.querySelector('[data-action="listen"]')?.addEventListener('click', () => {
    const phrase = getCurrentLesson().phrases[0];
    state.lastAudioMessage = `\u00c1udio exemplo reproduzido: "${phrase}". Agora tente repetir em voz alta.`;
    render();
  });

  document.querySelector('[data-action="repeat"]')?.addEventListener('click', () => {
    const lesson = getCurrentLesson();
    if (state.reviewCount >= lesson.reviewGoal) return;
    state.reviewCount = Math.min(state.reviewCount + 1, lesson.reviewGoal);
    state.lastAudioMessage =
      state.reviewCount >= lesson.reviewGoal
        ? 'Ótimo! Você já repetiu a lição o bastante para avançar.'
        : 'Boa! Repita mais um pouco para fixar melhor a frase.';
    render();
  });

  document.querySelector('[data-action="next-level"]')?.addEventListener('click', () => {
    const nextIndex = (LEVEL_KEYS.indexOf(state.selectedLevel) + 1) % LEVEL_KEYS.length;
    state.selectedLevel = LEVEL_KEYS[nextIndex];
    state.reviewCount = 0;
    state.pronunciation = null;
    state.lastAudioMessage = 'Próximo nível carregado. Recomece ouvindo a nova frase.';
    localStorage.setItem('nemo_level', state.selectedLevel);
    render();
  });

  document.querySelector('[data-action="pronunciation"]')?.addEventListener('click', () => {
    const lesson = getCurrentLesson();
    const baseScore = calculatePronunciationScore(getLessonComboIndex(), state.reviewCount);
    state.pronunciation = {
      score: baseScore,
      title: baseScore >= PRONUNCIATION_GOOD_THRESHOLD ? 'Pronúncia muito boa' : 'Pronúncia em progresso',
      message:
        baseScore >= PRONUNCIATION_GOOD_THRESHOLD
          ? `Você falou com boa clareza. Continue praticando a entonação da frase "${lesson.phrases[0]}".`
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
