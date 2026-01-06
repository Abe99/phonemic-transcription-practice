const DATA = [
    {
        id: 1,
        title: "Short Vowels",
        sections: [
            {
                name: "The kit /ɪ/ vowel",
                instr: "Transcribe words with the kit /ɪ/ vowel.",
                pairs: {"big":"/bɪɡ/", "still":"/stɪl/", "list":"/lɪst/", "film":"/fɪlm/", "win":"/wɪn/", "trip":"/trɪp/", "pick":"/pɪk/", "six":"/sɪks/", "give":"/ɡɪv/", "quick":"/kwɪk/"}
            },
            {
                name: "The trap /æ/ vowel",
                instr: "Transcribe words with the trap /æ/ vowel.",
                pairs: {"man":"/mæn/", "back":"/bæk/", "tax":"/tæks/", "plan":"/plæn/", "mass":"/mæs/", "track":"/træk/", "tag":"/tæɡ/", "add":"/æd/", "van":"/væn/", "fact":"/fækt/"}
            }
        ]
    },
    {
        id: 2,
        title: "Schwa & Unstressed",
        sections: [
            {
                name: "Schwa /ə/",
                instr: "Use /ə/ and stress marks (ˈ).",
                pairs: {"gallon":"/ˈɡæl.ən/", "above":"/əˈbʌv/", "panda":"/ˈpæn.də/", "villain":"/ˈvɪl.ən/", "collapse":"/kəˈlæps/"}
            }
        ]
    }
];

let state = {
    view: 'menu',
    chapter: null,
    sectionIdx: 0,
    wordIdx: 0,
    words: []
};

// Elements
const menuView = document.getElementById('menu-view');
const exerciseView = document.getElementById('exercise-view');
const chapterList = document.getElementById('chapter-list');
const ipaInput = document.getElementById('ipa-input');
const feedback = document.getElementById('feedback');

function init() {
    renderMenu();
    document.addEventListener('keydown', handleGlobalKeys);
}

function renderMenu() {
    chapterList.innerHTML = '';
    DATA.forEach((ch, i) => {
        const div = document.createElement('div');
        div.className = 'chapter-item';
        div.innerHTML = `<span>${ch.title}</span> <span class="chapter-key">[${i+1}]</span>`;
        div.onclick = () => startChapter(i);
        chapterList.appendChild(div);
    });
}

function handleGlobalKeys(e) {
    if (state.view === 'menu') {
        const num = parseInt(e.key);
        if (num > 0 && num <= DATA.length) startChapter(num - 1);
    } else {
        if (e.key === 'Escape') exitToMenu();
        if (e.key === 'Enter') checkAnswer();
    }
}

function startChapter(idx) {
    state.view = 'exercise';
    state.chapter = DATA[idx];
    state.sectionIdx = 0;
    state.wordIdx = 0;
    menuView.classList.add('hidden');
    exerciseView.classList.remove('hidden');
    loadSection();
}

function exitToMenu() {
    state.view = 'menu';
    exerciseView.classList.add('hidden');
    menuView.classList.remove('hidden');
}

function loadSection() {
    const section = state.chapter.sections[state.sectionIdx];
    state.words = Object.keys(section.pairs);
    state.wordIdx = 0;
    
    document.getElementById('chapter-label').textContent = state.chapter.title;
    document.getElementById('section-label').textContent = section.name;
    document.getElementById('instruction-text').textContent = section.instr;
    
    renderWord();
}

function renderWord() {
    const word = state.words[state.wordIdx];
    document.getElementById('word-display').textContent = word;
    ipaInput.value = '';
    ipaInput.focus();
    feedback.textContent = '';
    updateProgress();
}

function updateProgress() {
    const total = state.words.length;
    const current = state.wordIdx + 1;
    document.getElementById('counter').textContent = `${current} / ${total}`;
    document.getElementById('progress-fill').style.width = `${(current / total) * 100}%`;
}

function checkAnswer() {
    const input = ipaInput.value.trim();
    const section = state.chapter.sections[state.sectionIdx];
    const correct = section.pairs[state.words[state.wordIdx]];

    // Allow with or without slashes
    if (input === correct || `/${input}/` === correct) {
        feedback.textContent = 'CORRECT';
        feedback.style.color = 'var(--success)';
        setTimeout(nextWord, 600);
    } else {
        feedback.textContent = `EXPECTED: ${correct}`;
        feedback.style.color = 'var(--error)';
    }
}

function nextWord() {
    state.wordIdx++;
    if (state.wordIdx < state.words.length) {
        renderWord();
    } else {
        if (state.sectionIdx < state.chapter.sections.length - 1) {
            state.sectionIdx++;
            loadSection();
        } else {
            feedback.textContent = 'CHAPTER COMPLETE. PRESS ESC.';
        }
    }
}

document.getElementById('exit-btn').onclick = exitToMenu;
init();
