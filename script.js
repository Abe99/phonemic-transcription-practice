/***********************
 * DATASET
 ***********************/
const WORDS = [
  { word: "quit", ipa: "/kwɪt/", group: 1 },
  { word: "ram", ipa: "/ræm/", group: 1 },
  { word: "wolf", ipa: "/wʊlf/", group: 1 },
  { word: "egg", ipa: "/eɡ/", group: 1 },
  { word: "trick", ipa: "/trɪk/", group: 1 },
  { word: "buzz", ipa: "/bʌz/", group: 1 },
  { word: "scant", ipa: "/skænt/", group: 1 },
  { word: "swap", ipa: "/swɒp/", group: 1 },
  { word: "cliff", ipa: "/klɪf/", group: 1 },
  { word: "flood", ipa: "/flʌd/", group: 1 },
  { word: "quest", ipa: "/kwest/", group: 1 },
  { word: "skull", ipa: "/skʌl/", group: 1 }
];

/***********************
 * STATE
 ***********************/
const app = document.getElementById("app");

let queue = [];
let index = 0;
let current = null;
let userAnswer = "";

/***********************
 * UTILS
 ***********************/
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function normalizeIPA(ipa) {
  return ipa.replace(/^\/|\/$/g, "");
}

/***********************
 * SCREENS
 ***********************/
function renderIntro() {
  app.innerHTML = `
    <div>
      <p>Type the phonemic transcription of the word.</p>
      <p>Press Enter to submit.</p>
      <p class="muted">Press Enter to start</p>
    </div>
  `;

  function onEnter(e) {
    if (e.key === "Enter") {
      document.removeEventListener("keydown", onEnter);
      startTraining();
    }
  }

  document.addEventListener("keydown", onEnter);
}

function renderTraining() {
  current = queue[index];

  app.innerHTML = `
    <div class="word">${current.word}</div>
    <input id="input" type="text" autocomplete="off" spellcheck="false" />
  `;

  const input = document.getElementById("input");
  input.focus();

  input.addEventListener("keydown", function onSubmit(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      userAnswer = input.value;

      // IMPORTANT: remove focus and listener before changing screen
      input.blur();
      renderFeedback();
    }
  });
}

function renderFeedback() {
  const correct = normalizeIPA(current.ipa);
  const isCorrect = userAnswer === correct;

  app.innerHTML = `
    <div class="word">${current.word}</div>
    <div class="feedback ${isCorrect ? "correct" : "incorrect"}">
      Correct: ${correct}<br>
      Yours: ${userAnswer || "∅"}
    </div>
    <p class="muted">Press Enter to continue</p>
  `;

  function onEnter(e) {
    if (e.key === "Enter") {
      document.removeEventListener("keydown", onEnter);
      index++;
      if (index >= queue.length) {
        renderComplete();
      } else {
        renderTraining();
      }
    }
  }

  // NEW listener only after feedback is fully rendered
  document.addEventListener("keydown", onEnter);
}

function renderComplete() {
  app.innerHTML = `
    <div>
      <p>Training completed</p>
      <p class="muted">Press Enter to restart</p>
    </div>
  `;

  function onEnter(e) {
    if (e.key === "Enter") {
      document.removeEventListener("keydown", onEnter);
      startTraining();
    }
  }

  document.addEventListener("keydown", onEnter);
}

/***********************
 * FLOW
 ***********************/
function startTraining() {
  queue = [...WORDS];
  shuffle(queue);
  index = 0;
  renderTraining();
}

/***********************
 * INIT
 ***********************/
renderIntro();
