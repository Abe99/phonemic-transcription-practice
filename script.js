/**
 * DATASET: Chapter 1 - Short Vowels
 * Structured by sections with embedded IPA from Cambridge Online Dictionary
 */
const CHAPTER_DATA = [
  {
    "section": "The kit /ɪ/ vowel",
    "exercise_set": [
      { "word": "big", "ipa": "/bɪɡ/" }, { "word": "still", "ipa": "/stɪl/" }, { "word": "list", "ipa": "/lɪst/" },
      { "word": "film", "ipa": "/fɪlm/" }, { "word": "win", "ipa": "/wɪn/" }, { "word": "trip", "ipa": "/trɪp/" },
      { "word": "pick", "ipa": "/pɪk/" }, { "word": "six", "ipa": "/sɪks/" }, { "word": "give", "ipa": "/ɡɪv/" },
      { "word": "quick", "ipa": "/kwɪk/" }, { "word": "kid", "ipa": "/kɪd/" }, { "word": "skin", "ipa": "/skɪn/" },
      { "word": "hill", "ipa": "/hɪl/" }, { "word": "miss", "ipa": "/mɪs/" }, { "word": "hit", "ipa": "/hɪt/" },
      { "word": "bit", "ipa": "/bɪt/" }, { "word": "risk", "ipa": "/rɪsk/" }, { "word": "tip", "ipa": "/tɪp/" },
      { "word": "bill", "ipa": "/bɪl/" }, { "word": "mix", "ipa": "/mɪks/" }, { "word": "sick", "ipa": "/sɪk/" },
      { "word": "split", "ipa": "/splɪt/" }, { "word": "twin", "ipa": "/twɪn/" }, { "word": "fit", "ipa": "/fɪt/" },
      { "word": "sit", "ipa": "/sɪt/" }, { "word": "hip", "ipa": "/hɪp/" }, { "word": "tin", "ipa": "/tɪn/" },
      { "word": "kill", "ipa": "/kɪl/" }, { "word": "stick", "ipa": "/stɪk/" }, { "word": "lift", "ipa": "/lɪft/" }
    ]
  },
  {
    "section": "The trap /æ/ vowel",
    "exercise_set": [
      { "word": "man", "ipa": "/mæn/" }, { "word": "back", "ipa": "/bæk/" }, { "word": "tax", "ipa": "/tæks/" },
      { "word": "plan", "ipa": "/plæn/" }, { "word": "mass", "ipa": "/mæs/" }, { "word": "track", "ipa": "/træk/" },
      { "word": "tag", "ipa": "/tæɡ/" }, { "word": "add", "ipa": "/æd/" }, { "word": "van", "ipa": "/væn/" },
      { "word": "fact", "ipa": "/fækt/" }, { "word": "brand", "ipa": "/brænd/" }, { "word": "fat", "ipa": "/fæt/" },
      { "word": "stand", "ipa": "/stænd/" }, { "word": "act", "ipa": "/ækt/" }, { "word": "vat", "ipa": "/væt/" },
      { "word": "pack", "ipa": "/pæk/" }, { "word": "tab", "ipa": "/tæb/" }, { "word": "black", "ipa": "/blæk/" },
      { "word": "rant", "ipa": "/rænt/" }, { "word": "snack", "ipa": "/snæk/" }, { "word": "fan", "ipa": "/fæn/" },
      { "word": "wrap", "ipa": "/ræp/" }, { "word": "gas", "ipa": "/ɡæs/" }, { "word": "lab", "ipa": "/læb/" },
      { "word": "ban", "ipa": "/bæn/" }, { "word": "lack", "ipa": "/læk/" }, { "word": "cat", "ipa": "/kæt/" },
      { "word": "flat", "ipa": "/flæt/" }, { "word": "hand", "ipa": "/hænd/" }, { "word": "snap", "ipa": "/snæp/" }
    ]
  },
  {
    "section": "The kit /ɪ/, trap /æ/ revision",
    "exercise_set": [
      { "word": "tap", "ipa": "/tæp/" }, { "word": "mat", "ipa": "/mæt/" }, { "word": "trim", "ipa": "/trɪm/" },
      { "word": "strand", "ipa": "/strænd/" }, { "word": "tick", "ipa": "/tɪk/" }, { "word": "rack", "ipa": "/ræk/" },
      { "word": "lip", "ipa": "/lɪp/" }, { "word": "drag", "ipa": "/dræɡ/" }, { "word": "pin", "ipa": "/pɪn/" },
      { "word": "rim", "ipa": "/rɪm/" }, { "word": "lap", "ipa": "/læp/" }, { "word": "grin", "ipa": "/ɡrɪn/" },
      { "word": "lad", "ipa": "/læd/" }, { "word": "wig", "ipa": "/wɪɡ/" }, { "word": "scrap", "ipa": "/skræp/" },
      { "word": "grill", "ipa": "/ɡrɪl/" }, { "word": "bat", "ipa": "/bæt/" }, { "word": "wit", "ipa": "/wɪt/" },
      { "word": "span", "ipa": "/spæn/" }, { "word": "lid", "ipa": "/lɪd/" }, { "word": "valve", "ipa": "/vælv/" },
      { "word": "stiff", "ipa": "/stɪf/" }, { "word": "skim", "ipa": "/skɪm/" }, { "word": "wax", "ipa": "/wæks/" },
      { "word": "wrist", "ipa": "/rɪst/" }, { "word": "grip", "ipa": "/ɡrɪp/" }, { "word": "trap", "ipa": "/træp/" },
      { "word": "pill", "ipa": "/pɪl/" }, { "word": "knit", "ipa": "/nɪt/" }, { "word": "tram", "ipa": "/træm/" }
    ]
  },
  {
    "section": "The dress /e/ vowel",
    "exercise_set": [
      { "word": "best", "ipa": "/best/" }, { "word": "next", "ipa": "/nekst/" }, { "word": "web", "ipa": "/web/" },
      { "word": "help", "ipa": "/help/" }, { "word": "set", "ipa": "/set/" }, { "word": "well", "ipa": "/wel/" },
      { "word": "press", "ipa": "/pres/" }, { "word": "red", "ipa": "/red/" }, { "word": "let", "ipa": "/let/" },
      { "word": "end", "ipa": "/end/" }, { "word": "bread", "ipa": "/bred/" }, { "word": "rent", "ipa": "/rent/" },
      { "word": "text", "ipa": "/tekst/" }, { "word": "pet", "ipa": "/pet/" }, { "word": "head", "ipa": "/hed/" },
      { "word": "den", "ipa": "/den/" }, { "word": "rest", "ipa": "/rest/" }, { "word": "friend", "ipa": "/frend/" },
      { "word": "step", "ipa": "/step/" }, { "word": "dress", "ipa": "/dres/" }, { "word": "bed", "ipa": "/bed/" },
      { "word": "bell", "ipa": "/bel/" }, { "word": "neck", "ipa": "/nek/" }, { "word": "desk", "ipa": "/desk/" },
      { "word": "spread", "ipa": "/spred/" }, { "word": "pen", "ipa": "/pen/" }, { "word": "wet", "ipa": "/wet/" },
      { "word": "mess", "ipa": "/mes/" }, { "word": "hell", "ipa": "/hel/" }, { "word": "ten", "ipa": "/ten/" }
    ]
  },
  {
    "section": "The kit, trap, dress revision",
    "exercise_set": [
      { "word": "nest", "ipa": "/nest/" }, { "word": "wag", "ipa": "/wæɡ/" }, { "word": "vet", "ipa": "/vet/" },
      { "word": "lick", "ipa": "/lɪk/" }, { "word": "bent", "ipa": "/bent/" }, { "word": "limb", "ipa": "/lɪm/" },
      { "word": "melt", "ipa": "/melt/" }, { "word": "flint", "ipa": "/flɪnt/" }, { "word": "axe", "ipa": "/æks/" },
      { "word": "pest", "ipa": "/pest/" }, { "word": "drift", "ipa": "/drɪft/" }, { "word": "rag", "ipa": "/ræɡ/" },
      { "word": "drip", "ipa": "/drɪp/" }, { "word": "pram", "ipa": "/præm/" }, { "word": "sift", "ipa": "/sɪft/" },
      { "word": "vent", "ipa": "/vent/" }, { "word": "fig", "ipa": "/fɪɡ/" }, { "word": "tract", "ipa": "/trækt/" },
      { "word": "skid", "ipa": "/skɪd/" }, { "word": "tread", "ipa": "/tred/" }, { "word": "din", "ipa": "/dɪn/" },
      { "word": "nip", "ipa": "/nɪp/" }, { "word": "sap", "ipa": "/sæp/" }, { "word": "deck", "ipa": "/dek/" },
      { "word": "gift", "ipa": "/ɡɪft/" }, { "word": "dam", "ipa": "/dæm/" }, { "word": "frisk", "ipa": "/frɪsk/" },
      { "word": "crest", "ipa": "/krest/" }, { "word": "glint", "ipa": "/ɡlɪnt/" }, { "word": "ramp", "ipa": "/ræmp/" },
      { "word": "kilt", "ipa": "/kɪlt/" }, { "word": "plaid", "ipa": "/plæd/" }, { "word": "lilt", "ipa": "/lɪlt/" },
      { "word": "nick", "ipa": "/nɪk/" }, { "word": "glen", "ipa": "/ɡlen/" }, { "word": "kit", "ipa": "/kɪt/" },
      { "word": "damp", "ipa": "/dæmp/" }, { "word": "lag", "ipa": "/læɡ/" }, { "word": "sniff", "ipa": "/snɪf/" },
      { "word": "crab", "ipa": "/kræb/" }
    ]
  },
  {
    "section": "The lot /ɒ/ vowel",
    "exercise_set": [
      { "word": "top", "ipa": "/tɒp/" }, { "word": "want", "ipa": "/wɒnt/" }, { "word": "stop", "ipa": "/stɒp/" },
      { "word": "log", "ipa": "/lɒɡ/" }, { "word": "stock", "ipa": "/stɒk/" }, { "word": "cost", "ipa": "/kɒst/" },
      { "word": "rock", "ipa": "/rɒk/" }, { "word": "hot", "ipa": "/hɒt/" }, { "word": "golf", "ipa": "/ɡɒlf/" },
      { "word": "box", "ipa": "/bɒks/" }, { "word": "loss", "ipa": "/lɒs/" }, { "word": "bomb", "ipa": "/bɒm/" },
      { "word": "spot", "ipa": "/spɒt/" }, { "word": "god", "ipa": "/ɡɒd/" }, { "word": "boss", "ipa": "/bɒs/" },
      { "word": "block", "ipa": "/blɒk/" }, { "word": "crop", "ipa": "/krɒp/" }, { "word": "plot", "ipa": "/plɒt/" },
      { "word": "dog", "ipa": "/dɒɡ/" }, { "word": "swan", "ipa": "/swɒn/" }, { "word": "rob", "ipa": "/rɒb/" },
      { "word": "squad", "ipa": "/skwɒd/" }, { "word": "bond", "ipa": "/bɒnd/" }, { "word": "fox", "ipa": "/fɒks/" },
      { "word": "cross", "ipa": "/krɒs/" }, { "word": "drop", "ipa": "/drɒp/" }, { "word": "lock", "ipa": "/lɒk/" },
      { "word": "pot", "ipa": "/pɒt/" }, { "word": "what", "ipa": "/wɒt/" }
    ]
  },
  {
    "section": "Short vowels revision (Mixed)",
    "exercise_set": [
      { "word": "quit", "ipa": "/kwɪt/" }, { "word": "ram", "ipa": "/ræm/" }, { "word": "wolf", "ipa": "/wʊlf/" },
      { "word": "egg", "ipa": "/eɡ/" }, { "word": "trick", "ipa": "/trɪk/" }, { "word": "buzz", "ipa": "/bʌz/" },
      { "word": "scant", "ipa": "/skænt/" }, { "word": "swap", "ipa": "/swɒp/" }, { "word": "cliff", "ipa": "/klɪf/" },
      { "word": "flood", "ipa": "/flʌd/" }, { "word": "quest", "ipa": "/kwest/" }, { "word": "skull", "ipa": "/skʌl/" },
      { "word": "guess", "ipa": "/ɡes/" }, { "word": "squid", "ipa": "/skwɪd/" }, { "word": "helm", "ipa": "/helm/" },
      { "word": "rub", "ipa": "/rʌb/" }, { "word": "scab", "ipa": "/skæb/" }, { "word": "smog", "ipa": "/smɒɡ/" },
      { "word": "peg", "ipa": "/peɡ/" }, { "word": "snug", "ipa": "/snʌɡ/" }, { "word": "quilt", "ipa": "/kwɪlt/" },
      { "word": "crack", "ipa": "/kræk/" }, { "word": "knot", "ipa": "/nɒt/" }, { "word": "bull", "ipa": "/bʊl/" },
      { "word": "kick", "ipa": "/kɪk/" }, { "word": "strut", "ipa": "/strʌt/" }, { "word": "floss", "ipa": "/flɒs/" },
      { "word": "scrum", "ipa": "/skrʌm/" }, { "word": "book", "ipa": "/bʊk/" }, { "word": "sweat", "ipa": "/swet/" },
      { "word": "cough", "ipa": "/kɒf/" }, { "word": "slam", "ipa": "/slæm/" }, { "word": "duck", "ipa": "/dʌk/" },
      { "word": "sieve", "ipa": "/sɪv/" }, { "word": "blob", "ipa": "/blɒb/" }, { "word": "twist", "ipa": "/twɪst/" }
    ]
  }
];

/**
 * App State Machine
 */
const State = {
    INTRO: 'intro',
    SELECT_SECTION: 'select',
    TRAINING: 'training',
    FEEDBACK: 'feedback',
    COMPLETED: 'completed'
};

let currentState = State.INTRO;
let sessionData = [];
let currentIndex = 0;
let selectedSectionIndex = 0;
let lastResult = { correct: false, userVal: '', correctVal: '', word: '' };

const app = document.getElementById('app');

/**
 * Fisher-Yates Shuffle
 */
function shuffle(array) {
    let m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

/**
 * UI Render Logic
 */
function render() {
    app.innerHTML = '';

    switch (currentState) {
        case State.INTRO:
            app.innerHTML = `
                <h1>IPA Trainer</h1>
                <p>Deliberate practice for English phonemic transcription.<br>Version 2.0: Section Based Training.</p>
                <div class="instruction-footer">Press Enter to choose section</div>
            `;
            break;

        case State.SELECT_SECTION:
            let sectionList = CHAPTER_DATA.map((s, idx) => {
                const active = idx === selectedSectionIndex ? 'style="color: var(--accent-correct);"' : '';
                const arrow = idx === selectedSectionIndex ? '→ ' : '&nbsp;&nbsp;';
                return `<div ${active}>${arrow} [${idx + 1}] ${s.section}</div>`;
            }).join('');

            app.innerHTML = `
                <h2>Select Section</h2>
                <div style="text-align: left; display: inline-block; font-family: var(--font-mono); line-height: 2;">
                    ${sectionList}
                </div>
                <div class="instruction-footer">Arrows to move • Enter to start</div>
            `;
            break;

        case State.TRAINING:
            const item = sessionData[currentIndex];
            app.innerHTML = `
                <p style="text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px;">
                    ${CHAPTER_DATA[selectedSectionIndex].section}
                </p>
                <h1>${item.word}</h1>
                <input type="text" id="ipa-input" autocomplete="off" spellcheck="false">
                <div class="instruction-footer">Press Enter to submit</div>
            `;
            document.getElementById('ipa-input').focus();
            break;

        case State.FEEDBACK:
            const statusClass = lastResult.correct ? 'correct' : 'incorrect';
            app.innerHTML = `
                <h1 class="${statusClass}">${lastResult.correct ? 'CORRECT' : 'INCORRECT'}</h1>
                <div class="feedback-ipa">
                    Target: <span class="correct">${lastResult.correctVal}</span><br>
                    Yours: <span class="${statusClass}">${lastResult.userVal || '(empty)'}</span>
                </div>
                <div class="instruction-footer">Press Enter to continue</div>
            `;
            break;

        case State.COMPLETED:
            app.innerHTML = `
                <h1>Section Completed</h1>
                <p>You finished "${CHAPTER_DATA[selectedSectionIndex].section}"</p>
                <div class="instruction-footer">Press Enter to return to menu</div>
            `;
            break;
    }
}

/**
 * Global Keyboard Controller
 */
window.addEventListener('keydown', (e) => {
    // Navigation Keys for Selection Screen
    if (currentState === State.SELECT_SECTION) {
        if (e.key === 'ArrowDown') {
            selectedSectionIndex = (selectedSectionIndex + 1) % CHAPTER_DATA.length;
            render();
            return;
        }
        if (e.key === 'ArrowUp') {
            selectedSectionIndex = (selectedSectionIndex - 1 + CHAPTER_DATA.length) % CHAPTER_DATA.length;
            render();
            return;
        }
        // Direct number selection
        if (!isNaN(e.key) && e.key > 0 && e.key <= CHAPTER_DATA.length) {
            selectedSectionIndex = parseInt(e.key) - 1;
            render();
        }
    }

    // Progression Key
    if (e.key !== 'Enter') return;

    switch (currentState) {
        case State.INTRO:
            currentState = State.SELECT_SECTION;
            break;

        case State.SELECT_SECTION:
            sessionData = shuffle([...CHAPTER_DATA[selectedSectionIndex].exercise_set]);
            currentIndex = 0;
            currentState = State.TRAINING;
            break;

        case State.TRAINING:
            const input = document.getElementById('ipa-input');
            const target = sessionData[currentIndex].ipa.replace(/\//g, '');
            lastResult = {
                correct: input.value === target,
                userVal: input.value,
                correctVal: target,
                word: sessionData[currentIndex].word
            };
            currentState = State.FEEDBACK;
            break;

        case State.FEEDBACK:
            currentIndex++;
            currentState = (currentIndex >= sessionData.length) ? State.COMPLETED : State.TRAINING;
            break;

        case State.COMPLETED:
            currentState = State.SELECT_SECTION;
            break;
    }
    render();
});

render();
