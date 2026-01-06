const CHAPTER_DATA = [
    {
        title: "Chapter 1: Short Vowels",
        sections: [
            {
                section: "The kit /ɪ/ vowel",
                instruction: "Transcribe these words with the kit /ɪ/ vowel.",
                exercises: {
                    "big": "/bɪɡ/", "still": "/stɪl/", "list": "/lɪst/", "film": "/fɪlm/", "win": "/wɪn/",
                    "trip": "/trɪp/", "pick": "/pɪk/", "six": "/sɪks/", "give": "/ɡɪv/", "quick": "/kwɪk/",
                    "kid": "/kɪd/", "skin": "/skɪn/", "hill": "/hɪl/", "miss": "/mɪs/", "hit": "/hɪt/",
                    "bit": "/bɪt/", "risk": "/rɪsk/", "tip": "/tɪp/", "bill": "/bɪl/", "mix": "/mɪks/",
                    "sick": "/sɪk/", "split": "/splɪt/", "twin": "/twɪn/", "fit": "/fɪt/", "sit": "/sɪt/",
                    "hip": "/hɪp/", "tin": "/tɪn/", "kill": "/kɪl/", "stick": "/stɪk/", "lift": "/lɪft/"
                }
            },
            {
                section: "The trap /æ/ vowel",
                instruction: "Transcribe these words with the trap /æ/ vowel.",
                exercises: {
                    "man": "/mæn/", "back": "/bæk/", "tax": "/tæks/", "plan": "/plæn/", "mass": "/mæs/",
                    "track": "/træk/", "tag": "/tæɡ/", "add": "/æd/", "van": "/væn/", "fact": "/fækt/",
                    "brand": "/brænd/", "fat": "/fæt/", "stand": "/stænd/", "act": "/ækt/", "vat": "/væt/",
                    "pack": "/pæk/", "tab": "/tæb/", "black": "/blæk/", "rant": "/rænt/", "snack": "/snæk/",
                    "fan": "/fæn/", "wrap": "/ræp/", "gas": "/ɡæs/", "lab": "/læb/", "ban": "/bæn/",
                    "lack": "/læk/", "cat": "/kæt/", "flat": "/flæt/", "hand": "/hænd/", "snap": "/snæp/"
                }
            }
            // ... (Remaining Chapter 1 sections follow the same pattern)
        ]
    },
    {
        title: "Chapter 2: Schwa and Unstressed Vowels",
        sections: [
            {
                section: "Schwa /ə/",
                instruction: "Transcribe with schwa /ə/ in the unstressed syllable. Use the stress mark (ˈ) for the stressed syllable.",
                exercises: {
                    "gallon": "/ˈɡæl.ən/", "above": "/əˈbʌv/", "panda": "/ˈpæn.də/", "villain": "/ˈvɪl.ən/",
                    "collapse": "/kəˈlæps/", "syrup": "/ˈsɪr.əp/", "lemon": "/ˈlem.ən/", "protect": "/prəˈtekt/",
                    "extra": "/ˈek.strə/", "canal": "/kəˈnæl/", "arrest": "/əˈrest/", "tenant": "/ˈten.ənt/",
                    "parrot": "/ˈpær.ət/", "alpha": "/ˈæl.fə/", "campus": "/ˈkæm.pəs/", "welcome": "/ˈwel.kəm/",
                    "lapel": "/ləˈpel/", "cactus": "/ˈkæk.təs/", "collect": "/kəˈlekt/", "bullock": "/ˈbʊl.ək/",
                    "stomach": "/ˈstʌm.ək/", "buttock": "/ˈbʌt.ək/", "correct": "/kəˈrekt/", "woollen": "/ˈwʊl.ən/",
                    "villa": "/ˈvɪl.ə/", "husband": "/ˈhʌz.bənd/", "assess": "/əˈses/", "heron": "/ˈher.ən/",
                    "breakfast": "/ˈbrek.fəst/", "atlas": "/ˈæt.ləs/", "Christmas": "/ˈkrɪs.məs/", "maggot": "/ˈmæɡ.ət/",
                    "atom": "/ˈæt.əm/", "cadet": "/kəˈdet/", "felon": "/ˈfel.ən/", "zebra": "/ˈzeb.rə/",
                    "possess": "/pəˈzes/", "melon": "/ˈmel.ən/", "hammock": "/ˈhæm.ək/", "adopt": "/əˈdɒpt/",
                    "comma": "/ˈkɒm.ə/", "gazette": "/ɡəˈzet/", "gammon": "/ɡæm.ən/", "dragon": "/ˈdræɡ.ən/",
                    "column": "/ˈkɒl.əm/", "salad": "/ˈsæl.əd/", "gallop": "/ˈɡæl.əp/", "stigma": "/ˈstɪɡ.mə/",
                    "ballad": "/ˈbæl.əd/", "attract": "/əˈtrækt/"
                }
            },
            {
                section: "Schwa /ə/ with <r>",
                instruction: "Transcribe words with <r> in spelling. Use stress marks.",
                exercises: {
                    "doctor": "/ˈdɒk.tə/", "lizard": "/ˈlɪz.əd/", "terror": "/ˈter.ə/", "copper": "/ˈkɒp.ə/",
                    "butter": "/ˈbʌt.ə/", "monarch": "/ˈmɒn.ək/", "forgive": "/fəˈɡɪv/", "cover": "/ˈkʌv.ə/",
                    "hover": "/ˈhɒv.ə/", "blizzard": "/ˈblɪz.əd/", "figure": "/ˈfɪɡ.ə/", "liquor": "/ˈlɪk.ə/",
                    "ponder": "/ˈpɒn.də/", "forget": "/fəˈɡet/", "rigour": "/ˈrɪɡ.ə/", "grammar": "/ˈɡræm.ə/",
                    "actor": "/ˈæk.tə/", "suffer": "/ˈsʌf.ə/", "concert": "/ˈkɒn.sət/", "offer": "/ˈɒf.ə/",
                    "persist": "/pəˈsɪst/", "whisper": "/ˈwɪs.pə/", "sponsor": "/ˈsɒn.sə/", "vulgar": "/ˈvʌl.ɡə/",
                    "sulphur": "/ˈsʌl.fə/", "otter": "/ˈɒt.ə/", "centre": "/ˈsen.tə/", "honour": "/ˈɒn.ə/",
                    "enter": "/ˈen.tə/", "standard": "/ˈstæn.dəd/", "plumber": "/ˈplʌm.ə/", "collar": "/ˈkɒl.ə/",
                    "leopard": "/ˈlep.əd/", "mirror": "/ˈmɪr.ə/", "glamour": "/ˈɡlæm.ə/", "custard": "/ˈkʌs.təd/",
                    "timber": "/ˈtɪm.ə/", "cupboard": "/ˈkʌb.əd/", "effort": "/ˈef.ət/", "differ": "/ˈdɪf.ə/"
                }
            },
            {
                section: "Polysyllabic Schwa /ə/",
                instruction: "Transcribe polysyllabic words with stress marks.",
                exercises: {
                    "wilderness": "/ˈwɪl.də.nəs/", "professor": "/prəˈfes.ə/", "asparagus": "/əˈspær.ə.ɡəs/",
                    "customer": "/ˈkʌs.tə.mə/", "abacus": "/ˈæb.ə.kəs/", "consider": "/kənˈsɪd.ə/",
                    "vanilla": "/vəˈnɪl.ə/", "photographer": "/fəˈtɒɡ.rə.fə/", "instrument": "/ˈɪn.strə.mənt/",
                    "propeller": "/prəˈpel.ə/", "predator": "/ˈpred.ə.tə/", "savannah": "/səˈvæn.ə/",
                    "charisma": "/kəˈrɪz.mə/", "surrender": "/səˈren.də/", "conundrum": "/kəˈnʌn.drəm/",
                    "gorilla": "/ɡəˈrɪl.ə/", "hazardous": "/ˈhæz.ə.dəs/", "prospectus": "/prəˈspek.təs/",
                    "adamant": "/ˈæd.ə.mənt/", "astronomer": "/əˈstrɒn.ə.mə/", "adaptor": "/əˈdæp.tə/"
                }
            },
            {
                section: "Unstressed kit /ɪ/",
                instruction: "Transcribe the following words with unstressed kit /ɪ/.",
                exercises: {
                    "comic": "/ˈkɒm.ɪk/", "invest": "/ɪnˈtest/", "rabbit": "/ˈræb.ɪt/", "women": "/ˈwɪm.ɪn/",
                    "solid": "/ˈsɒl.ɪd/", "rapid": "/ˈræp.ɪd/", "visit": "/ˈvɪz.ɪt/", "epic": "/ˈep.ɪk/",
                    "biscuit": "/ˈbɪs.kɪt/", "locket": "/ˈlɒk.ɪt/", "imposter": "/ɪmˈpɒs.tə/", "bucket": "/ˈbʌk.ɪt/",
                    "limit": "/ˈlɪm.ɪt/", "cricket": "/ˈkrɪk.ɪt/", "minute": "/ˈmɪn.ɪt/", "attic": "/ˈæt.ɪk/",
                    "robin": "/ˈrɒb.ɪn/", "coffin": "/ˈkɒf.ɪn/", "rustic": "/ˈrʌs.tɪk/", "puppet": "/ˈpʌp.ɪt/",
                    "captive": "/ˈkæp.tɪv/", "intent": "/ɪnˈtent/", "ticket": "/ˈtɪk.ɪt/", "classic": "/ˈklæs.ɪk/",
                    "profit": "/ˈpɒf.ɪt/", "resin": "/ˈrez.ɪn/", "haggis": "/ˈhæɡ.ɪs/", "bandit": "/ˈbæn.dɪt/",
                    "tonic": "/ˈtɒn.ɪk/", "Latin": "/ˈlæt.ɪn/", "instructor": "/ɪnˈstrʌk.tə/", "pocket": "/ˈpɒk.ɪt/",
                    "promise": "/ˈprɒm.ɪs/", "plastic": "/ˈplæs.tɪk/", "comet": "/ˈkɒm.ɪt/", "relic": "/ˈrel.ɪk/",
                    "lyric": "/ˈlɪr.ɪk/", "goblin": "/ˈɡɒb.lɪn/", "statistic": "/stəˈtɪs.tɪk/", "habit": "/ˈhæb.ɪt/",
                    "public": "/ˈpʌb.lɪk/", "passive": "/ˈpæs.ɪv/", "cabin": "/ˈkæb.ɪn/", "laxative": "/ˈlæk.sə.tɪv/",
                    "picnic": "/ˈpɪk.nɪk/", "rocket": "/ˈrɒk.ɪt/", "gossip": "/ˈɡɒs.ɪp/", "narrative": "/ˈnær.ə.tɪv/",
                    "olive": "/ˈɒl.ɪv/"
                }
            }
        ]
    }
];

let currentChapter = 0;
let currentSection = 0;
let currentWordIndex = 0;
let words = [];

// DOM Elements
const chapterSelection = document.getElementById('chapter-selection');
const exercisePage = document.getElementById('exercise-page');
const chapterList = document.getElementById('chapter-list');
const backBtn = document.getElementById('back-btn');

function initApp() {
    CHAPTER_DATA.forEach((chapter, index) => {
        const btn = document.createElement('button');
        btn.className = 'chapter-btn';
        btn.innerHTML = `<strong>${chapter.title}</strong><br><small>${chapter.sections.length} Sections</small>`;
        btn.onclick = () => loadChapter(index);
        chapterList.appendChild(btn);
    });
}

function loadChapter(index) {
    currentChapter = index;
    currentSection = 0;
    chapterSelection.classList.add('hidden');
    exercisePage.classList.remove('hidden');
    loadSection();
}

backBtn.onclick = () => {
    exercisePage.classList.add('hidden');
    chapterSelection.classList.remove('hidden');
};

function loadSection() {
    const data = CHAPTER_DATA[currentChapter].sections[currentSection];
    document.getElementById('chapter-title').textContent = CHAPTER_DATA[currentChapter].title;
    document.getElementById('section-name').textContent = data.section;
    document.getElementById('instruction').textContent = data.instruction;
    document.getElementById('section-info').textContent = `Section ${currentSection + 1} of ${CHAPTER_DATA[currentChapter].sections.length}`;
    
    words = Object.keys(data.exercises);
    currentWordIndex = 0;
    updateWord();
}

function updateWord() {
    document.getElementById('current-word').textContent = words[currentWordIndex];
    document.getElementById('ipa-input').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('stats').textContent = `Word ${currentWordIndex + 1} of ${words.length}`;
    document.getElementById('progress-bar').style.width = `${(currentWordIndex / words.length) * 100}%`;
}

document.getElementById('check-btn').onclick = checkAnswer;
document.getElementById('ipa-input').onkeypress = (e) => { if(e.key === 'Enter') checkAnswer(); };

function checkAnswer() {
    const input = document.getElementById('ipa-input').value.trim();
    const correct = CHAPTER_DATA[currentChapter].sections[currentSection].exercises[words[currentWordIndex]];
    const feedback = document.getElementById('feedback');

    if (input === correct || input === correct.replace(/\//g, '')) {
        feedback.textContent = "Correct! ✓";
        feedback.style.color = "var(--success)";
        setTimeout(() => {
            currentWordIndex++;
            if (currentWordIndex < words.length) {
                updateWord();
            } else {
                feedback.textContent = "Section Complete! Click 'Next' to continue.";
            }
        }, 1000);
    } else {
        feedback.textContent = `Incorrect. Hint: ${correct}`;
        feedback.style.color = "var(--error)";
    }
}

document.getElementById('next-section').onclick = () => {
    if (currentSection < CHAPTER_DATA[currentChapter].sections.length - 1) {
        currentSection++;
        loadSection();
    }
};

document.getElementById('prev-section').onclick = () => {
    if (currentSection > 0) {
        currentSection--;
        loadSection();
    }
};

initApp();
