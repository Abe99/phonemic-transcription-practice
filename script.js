/**
 * DATASET: British English Phonemic Transcriptions
 * Derived from Cambridge Online Dictionary
 */
const DATASET = [
    { "word": "quit", "ipa": "/kwɪt/", "group": 1 }, { "word": "ram", "ipa": "/ræm/", "group": 1 },
    { "word": "wolf", "ipa": "/wʊlf/", "group": 1 }, { "word": "egg", "ipa": "/eɡ/", "group": 1 },
    { "word": "trick", "ipa": "/trɪk/", "group": 1 }, { "word": "buzz", "ipa": "/bʌz/", "group": 1 },
    { "word": "scant", "ipa": "/skænt/", "group": 1 }, { "word": "swap", "ipa": "/swɒp/", "group": 1 },
    { "word": "cliff", "ipa": "/klɪf/", "group": 1 }, { "word": "flood", "ipa": "/flʌd/", "group": 1 },
    { "word": "quest", "ipa": "/kwest/", "group": 1 }, { "word": "skull", "ipa": "/skʌl/", "group": 1 },
    { "word": "guess", "ipa": "/ɡes/", "group": 2 }, { "word": "squid", "ipa": "/skwɪd/", "group": 2 },
    { "word": "helm", "ipa": "/helm/", "group": 2 }, { "word": "rub", "ipa": "/rʌb/", "group": 2 },
    { "word": "scab", "ipa": "/skæb/", "group": 2 }, { "word": "smog", "ipa": "/smɒɡ/", "group": 2 },
    { "word": "peg", "ipa": "/peɡ/", "group": 2 }, { "word": "snug", "ipa": "/snʌɡ/", "group": 2 },
    { "word": "quilt", "ipa": "/kwɪlt/", "group": 2 }, { "word": "crack", "ipa": "/kræk/", "group": 2 },
    { "word": "knot", "ipa": "/nɒt/", "group": 2 }, { "word": "bull", "ipa": "/bʊl/", "group": 2 },
    { "word": "kick", "ipa": "/kɪk/", "group": 3 }, { "word": "strut", "ipa": "/strʌt/", "group": 3 },
    { "word": "floss", "ipa": "/flɒs/", "group": 3 }, { "word": "scrum", "ipa": "/skrʌm/", "group": 3 },
    { "word": "book", "ipa": "/bʊk/", "group": 3 }, { "word": "sweat", "ipa": "/swet/", "group": 3 },
    { "word": "cough", "ipa": "/kɒf/", "group": 3 }, { "word": "slam", "ipa": "/slæm/", "group": 3 },
    { "word": "duck", "ipa": "/dʌk/", "group": 3 }, { "word": "sieve", "ipa": "/sɪv/", "group": 3 },
    { "word": "blob", "ipa": "/blɒb/", "group": 3 }, { "word": "twist", "ipa": "/twɪst/", "group": 3 },
    { "word": "gulf", "ipa": "/ɡʌlf/", "group": 4 }, { "word": "spell", "ipa": "/spel/", "group": 4 },
    { "word": "doll", "ipa": "/dɒl/", "group": 4 }, { "word": "foot", "ipa": "/fʊt/", "group": 4 },
    { "word": "clump", "ipa": "/klʌmp/", "group": 4 }, { "word": "plait", "ipa": "/plæt/", "group": 4 },
    { "word": "scan", "ipa": "/skæn/", "group": 4 }, { "word": "fix", "ipa": "/fɪks/", "group": 4 },
    { "word": "twelve", "ipa": "/twelv/", "group": 4 }, { "word": "blonde", "ipa": "/blɒnd/", "group": 4 },
    { "word": "hymn", "ipa": "/hɪm/", "group": 4 }, { "word": "drum", "ipa": "/drʌm/", "group": 4 },
    { "word": "hook", "ipa": "/hʊk/", "group": 5 }, { "word": "knack", "ipa": "/næk/", "group": 5 },
    { "word": "sculpt", "ipa": "/skʌlpt/", "group": 5 }, { "word": "whelk", "ipa": "/welk/", "group": 5 },
    { "word": "bronze", "ipa": "/brɒnz/", "group": 5 }, { "word": "frizz", "ipa": "/frɪz/", "group": 5 },
    { "word": "gut", "ipa": "/ɡʌt/", "group": 5 }, { "word": "gram", "ipa": "/ɡræm/", "group": 5 },
    { "word": "quell", "ipa": "/kwel/", "group": 5 }, { "word": "frost", "ipa": "/frɒst/", "group": 5 },
    { "word": "swab", "ipa": "/swɒb/", "group": 5 }, { "word": "hem", "ipa": "/hem/", "group": 5 },
    { "word": "stud", "ipa": "/stʌd/", "group": 6 }, { "word": "breast", "ipa": "/brest/", "group": 6 },
    { "word": "smock", "ipa": "/smɒk/", "group": 6 }, { "word": "build", "ipa": "/bɪld/", "group": 6 },
    { "word": "pat", "ipa": "/pæt/", "group": 6 }, { "word": "milk", "ipa": "/mɪlk/", "group": 6 },
    { "word": "realm", "ipa": "/relm/", "group": 6 }, { "word": "blitz", "ipa": "/blɪts/", "group": 6 },
    { "word": "pull", "ipa": "/pʊl/", "group": 6 }, { "word": "sulk", "ipa": "/sʌlk/", "group": 6 },
    { "word": "sob", "ipa": "/sɒb/", "group": 6 }, { "word": "ant", "ipa": "/ænt/", "group": 6 },
    { "word": "fib", "ipa": "/fɪb/", "group": 7 }, { "word": "crumb", "ipa": "/krʌm/", "group": 7 },
    { "word": "stress", "ipa": "/stres/", "group": 7 }, { "word": "sock", "ipa": "/sɒk/", "group": 7 },
    { "word": "spill", "ipa": "/spɪl/", "group": 7 }, { "word": "smell", "ipa": "/smel/", "group": 7 },
    { "word": "pulse", "ipa": "/pʌls/", "group": 7 }, { "word": "frock", "ipa": "/frɒk/", "group": 7 },
    { "word": "flex", "ipa": "/fleks/", "group": 7 }, { "word": "clan", "ipa": "/klæn/", "group": 7 },
    { "word": "lapse", "ipa": "/læps/", "group": 7 }, { "word": "frog", "ipa": "/frɒɡ/", "group": 8 },
    { "word": "mud", "ipa": "/mʌd/", "group": 8 }, { "word": "swim", "ipa": "/swɪm/", "group": 8 },
    { "word": "hump", "ipa": "/hʌmp/", "group": 8 }, { "word": "scamp", "ipa": "/skæmp/", "group": 8 },
    { "word": "clock", "ipa": "/klɒk/", "group": 8 }, { "word": "wool", "ipa": "/wʊl/", "group": 8 },
    { "word": "pond", "ipa": "/pɒnd/", "group": 8 }, { "word": "cull", "ipa": "/kʌl/", "group": 8 },
    { "word": "lamb", "ipa": "/læm/", "group": 8 }, { "word": "mock", "ipa": "/mɒk/", "group": 8 },
    { "word": "zip", "ipa": "/zɪp/", "group": 8 }, { "word": "swift", "ipa": "/swɪft/", "group": 9 },
    { "word": "stamp", "ipa": "/stæmp/", "group": 9 }, { "word": "pant", "ipa": "/pænt/", "group": 9 },
    { "word": "mob", "ipa": "/mɒb/", "group": 9 }, { "word": "kiss", "ipa": "/kɪs/", "group": 9 },
    { "word": "weld", "ipa": "/weld/", "group": 9 }, { "word": "quip", "ipa": "/kwɪp/", "group": 9 },
    { "word": "script", "ipa": "/skrɪpt/", "group": 9 }, { "word": "dud", "ipa": "/dʌd/", "group": 9 },
    { "word": "stood", "ipa": "/stʊd/", "group": 9 }, { "word": "sand", "ipa": "/sænd/", "group": 9 },
    { "word": "silk", "ipa": "/sɪlk/", "group": 9 }, { "word": "slop", "ipa": "/slɒp/", "group": 10 },
    { "word": "slab", "ipa": "/slæb/", "group": 10 }, { "word": "sprint", "ipa": "/sprɪnt/", "group": 10 },
    { "word": "plump", "ipa": "/plʌmp/", "group": 10 }, { "word": "crust", "ipa": "/krʌst/", "group": 10 },
    { "word": "whip", "ipa": "/wɪp/", "group": 10 }, { "word": "bog", "ipa": "/bɒɡ/", "group": 10 },
    { "word": "disc", "ipa": "/dɪsk/", "group": 10 }, { "word": "rook", "ipa": "/rʊk/", "group": 10 },
    { "word": "rot", "ipa": "/rɒt/", "group": 10 }, { "word": "mill", "ipa": "/mɪl/", "group": 10 },
    { "word": "gland", "ipa": "/ɡlænd/", "group": 10 }
];

/**
 * App State Machine
 */
const State = {
    INTRO: 'intro',
    TRAINING: 'training',
    FEEDBACK: 'feedback',
    COMPLETED: 'completed'
};

let currentState = State.INTRO;
let sessionData = [];
let currentIndex = 0;
let lastResult = { correct: false, userVal: '', correctVal: '', word: '' };

const app = document.getElementById('app');

/**
 * Fisher-Yates Shuffle Algorithm
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
 * Evaluates the transcription
 * Strips slashes / / for evaluation as per rules
 */
function checkAnswer(userIn, correctIpa) {
    const cleanCorrect = correctIpa.replace(/\//g, '');
    return userIn === cleanCorrect;
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
                <p>You will see a word. Type its phonemic transcription.<br>Case-sensitive. Exact match only.</p>
                <div class="instruction-footer">Press Enter to start</div>
            `;
            break;

        case State.TRAINING:
            const item = sessionData[currentIndex];
            app.innerHTML = `
                <h1>${item.word}</h1>
                <input type="text" id="ipa-input" autocomplete="off" spellcheck="false">
                <div class="instruction-footer">Press Enter to submit</div>
            `;
            document.getElementById('ipa-input').focus();
            break;

        case State.FEEDBACK:
            const statusClass = lastResult.correct ? 'correct' : 'incorrect';
            const statusText = lastResult.correct ? 'CORRECT' : 'INCORRECT';
            app.innerHTML = `
                <h1 class="${statusClass}">${statusText}</h1>
                <p>Word: ${lastResult.word}</p>
                <div class="feedback-ipa">
                    Target: <span class="correct">${lastResult.correctVal}</span><br>
                    Yours: <span class="${statusClass}">${lastResult.userVal || '(empty)'}</span>
                </div>
                <div class="instruction-footer">Press Enter to continue</div>
            `;
            break;

        case State.COMPLETED:
            app.innerHTML = `
                <h1>Finished</h1>
                <p>Training session completed for ${DATASET.length} words.</p>
                <div class="instruction-footer">Press Enter to restart</div>
            `;
            break;
    }
}

/**
 * Global Keyboard Controller
 */
window.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;

    switch (currentState) {
        case State.INTRO:
            sessionData = shuffle([...DATASET]);
            currentIndex = 0;
            currentState = State.TRAINING;
            render();
            break;

        case State.TRAINING:
            const input = document.getElementById('ipa-input');
            const currentItem = sessionData[currentIndex];
            const isCorrect = checkAnswer(input.value, currentItem.ipa);
            
            lastResult = {
                correct: isCorrect,
                userVal: input.value,
                correctVal: currentItem.ipa.replace(/\//g, ''),
                word: currentItem.word
            };

            currentState = State.FEEDBACK;
            render();
            break;

        case State.FEEDBACK:
            currentIndex++;
            if (currentIndex >= sessionData.length) {
                currentState = State.COMPLETED;
            } else {
                currentState = State.TRAINING;
            }
            render();
            break;

        case State.COMPLETED:
            currentState = State.INTRO;
            render();
            break;
    }
});

// Initial Load
render();
