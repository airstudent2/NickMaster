// ============================================
// NickMaster - Complete JavaScript
// ============================================

// Fancy Text Transformations
const fancyFonts = {
    // Mathematical Bold
    bold: {
        name: "Bold",
        chars: "𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳"
    },
    // Mathematical Italic
    italic: {
        name: "Italic",
        chars: "𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻"
    },
    // Script
    script: {
        name: "Script",
        chars: "𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏"
    },
    // Fraktur
    fraktur: {
        name: "Fraktur",
        chars: "𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷"
    },
    // Double Struck
    doubleStruck: {
        name: "Double Struck",
        chars: "𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫"
    },
    // Sans Bold
    sansBold: {
        name: "Sans Bold",
        chars: "𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇"
    },
    // Circled
    circled: {
        name: "Circled",
        chars: "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ"
    },
    // Squared
    squared: {
        name: "Squared",
        chars: "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉"
    },
    // Negative Squared
    negativeSquared: {
        name: "Negative Squared",
        chars: "🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉"
    },
    // Wide
    wide: {
        name: "Wide",
        chars: "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ"
    },
    // Small Caps
    smallCaps: {
        name: "Small Caps",
        chars: "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ"
    },
    // Subscript
    subscript: {
        name: "Subscript",
        chars: "ₐBCDₑFGₕᵢⱼₖₗₘₙₒₚQᵣₛₜᵤᵥWₓYZₐbcdₑfgₕᵢⱼₖₗₘₙₒₚqᵣₛₜᵤᵥwₓyz"
    },
    // Superscript
    superscript: {
        name: "Superscript",
        chars: "ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻ"
    },
    // Inverted
    inverted: {
        name: "Inverted",
        chars: "ɐqɔpǝɟƃɥıɾʞlɯuodbɹsʇnʌʍxʎzɐqɔpǝɟƃɥıɾʞlɯuodbɹsʇnʌʍxʎz"
    },
    // Strikethrough
    strikethrough: {
        name: "Strikethrough",
        chars: "A̶B̶C̶D̶E̶F̶G̶H̶I̶J̶K̶L̶M̶N̶O̶P̶Q̶R̶S̶T̶U̶V̶W̶X̶Y̶Z̶a̶b̶c̶d̶e̶f̶g̶h̶i̶j̶k̶l̶m̶n̶o̶p̶q̶r̶s̶t̶u̶v̶w̶x̶y̶z̶"
    }
};

// Decorations for different categories
const decorations = {
    gaming: [
        { prefix: "『", suffix: "』" },
        { prefix: "【", suffix: "】" },
        { prefix: "〖", suffix: "〗" },
        { prefix: "《", suffix: "》" },
        { prefix: "「", suffix: "」" },
        { prefix: "◤", suffix: "◢" },
        { prefix: "▄︻┻═┳一", suffix: "" },
        { prefix: "★彡", suffix: "彡★" },
        { prefix: "༺", suffix: "༻" },
        { prefix: "꧁", suffix: "꧂" },
        { prefix: "╰‿╯", suffix: "" },
        { prefix: "乂", suffix: "乂" },
        { prefix: "ᴳᵒᵈ", suffix: "" },
        { prefix: "亗", suffix: "" },
        { prefix: "ツ", suffix: "" }
    ],
    stylish: [
        { prefix: "✿", suffix: "✿" },
        { prefix: "❀", suffix: "❀" },
        { prefix: "☆", suffix: "☆" },
        { prefix: "★", suffix: "★" },
        { prefix: "◆", suffix: "◆" },
        { prefix: "◇", suffix: "◇" },
        { prefix: "♕", suffix: "♕" },
        { prefix: "♛", suffix: "♛" },
        { prefix: "♔", suffix: "♔" },
        { prefix: "➤", suffix: "" },
        { prefix: "✦", suffix: "✦" },
        { prefix: "✧", suffix: "✧" },
        { prefix: "⚡", suffix: "⚡" },
        { prefix: "☯", suffix: "" },
        { prefix: "❂", suffix: "❂" }
    ],
    cool: [
        { prefix: "╚»", suffix: "«╝" },
        { prefix: "≪", suffix: "≫" },
        { prefix: "◥", suffix: "◤" },
        { prefix: "░▒▓", suffix: "▓▒░" },
        { prefix: "▀▄▀▄", suffix: "▄▀▄▀" },
        { prefix: "◢◤", suffix: "◥◣" },
        { prefix: "╔═╦╗", suffix: "╚╦═╝" },
        { prefix: "┏", suffix: "┓" },
        { prefix: "╭∩╮", suffix: "" },
        { prefix: "▌│█║▌│", suffix: "" },
        { prefix: "︻╦╤─", suffix: "" },
        { prefix: "☠", suffix: "☠" },
        { prefix: "◄", suffix: "►" },
        { prefix: "⌁", suffix: "⌁" },
        { prefix: "⍟", suffix: "⍟" }
    ],
    cute: [
        { prefix: "♥", suffix: "♥" },
        { prefix: "♡", suffix: "♡" },
        { prefix: "❤", suffix: "❤" },
        { prefix: "💕", suffix: "" },
        { prefix: "🌸", suffix: "🌸" },
        { prefix: "✿", suffix: "✿" },
        { prefix: "❀", suffix: "❀" },
        { prefix: "☺", suffix: "☺" },
        { prefix: "♪", suffix: "♪" },
        { prefix: "♫", suffix: "♫" },
        { prefix: "◕‿◕", suffix: "" },
        { prefix: "ʕ•ᴥ•ʔ", suffix: "" },
        { prefix: "(◕‿◕)", suffix: "" },
        { prefix: "♧", suffix: "♧" },
        { prefix: "✰", suffix: "✰" }
    ],
    scary: [
        { prefix: "☠", suffix: "☠" },
        { prefix: "💀", suffix: "💀" },
        { prefix: "👹", suffix: "" },
        { prefix: "👺", suffix: "" },
        { prefix: "☽", suffix: "☾" },
        { prefix: "⛧", suffix: "⛧" },
        { prefix: "卍", suffix: "卍" },
        { prefix: "☢", suffix: "☢" },
        { prefix: "☣", suffix: "☣" },
        { prefix: "⚔", suffix: "" },
        { prefix: "🔥", suffix: "🔥" },
        { prefix: "⚰", suffix: "" },
        { prefix: "🗡", suffix: "" },
        { prefix: "ψ", suffix: "ψ" },
        { prefix: "Ӝ", suffix: "Ӝ" }
    ]
};

// Symbols Collection
const symbols = {
    popular: ["꧁", "꧂", "༺", "༻", "『", "』", "【", "】", "★", "☆", "♔", "♕", "♛", "♚", "✿", "❀", "❤", "♥", "☯", "⚡", "✦", "✧", "◆", "◇", "▶", "◀", "●", "○", "■", "□"],
    stars: ["★", "☆", "✡", "✦", "✧", "✩", "✪", "✫", "✬", "✭", "✮", "✯", "✰", "⋆", "≛", "⍟", "✶", "✷", "✸", "✹", "✺", "❂", "❃", "❇", "❈", "❉", "❊", "❋", "⁂", "⁑"],
    hearts: ["♥", "♡", "❤", "❥", "❣", "❦", "❧", "💕", "💖", "💗", "💘", "💙", "💚", "💛", "💜", "🖤", "💝", "💞", "💟", "❤️‍🔥", "❤️‍🩹", "🤍", "🤎", "💔", "💓", "💌", "😍", "🥰", "😘", "😻"],
    arrows: ["→", "←", "↑", "↓", "↔", "↕", "➜", "➝", "➞", "➟", "➠", "➡", "➢", "➣", "➤", "➥", "➦", "➧", "➨", "➩", "➪", "➫", "➬", "➭", "➮", "➯", "➱", "➲", "⇒", "⇐"],
    brackets: ["『", "』", "【", "】", "〖", "〗", "《", "》", "「", "」", "〔", "〕", "〈", "〉", "❪", "❫", "❬", "❭", "❮", "❯", "❰", "❱", "❲", "❳", "❴", "❵", "⟦", "⟧", "⟨", "⟩"],
    gaming: ["亗", "乂", "ツ", "シ", "彡", "メ", "卄", "丹", "尺", "ᴳᵒᵈ", "ㄒ", "匕", "卂", "从", "刃", "㔿", "爪", "尸", "ᴷⁱˡˡᵉʳ", "ᴮᵒˢˢ", "ℙ𝕣𝕠", "༒", "☬", "⁂", "☣", "☠", "⚔", "🎮", "🎯", "🏆"],
    animals: ["🐱", "🐶", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐸", "🐵", "🐔", "🐧", "🐦", "🐤", "🦆", "🦅", "🦉", "🦇", "🐺", "🐗", "🐴", "🦄", "🐝", "🐛", "🦋"],
    nature: ["🌸", "🌺", "🌻", "🌼", "🌷", "🌹", "🥀", "💐", "🌲", "🌳", "🌴", "🌵", "🌿", "☘️", "🍀", "🍁", "🍂", "🍃", "🌾", "🌱", "🌊", "💧", "⛅", "🌈", "⭐", "🌙", "☀️", "🔥", "❄️", "⚡"]
};

// Random Names for Generator
const randomNames = [
    "Shadow", "Phoenix", "Dragon", "Thunder", "Storm", "Blaze", "Frost", "Wolf",
    "Ninja", "Warrior", "Knight", "Legend", "Master", "King", "Queen", "Boss",
    "Sniper", "Hunter", "Killer", "Demon", "Angel", "Ghost", "Phantom", "Venom",
    "Toxic", "Savage", "Beast", "Predator", "Reaper", "Joker", "Ace", "Zero",
    "Neo", "Max", "Pro", "Elite", "God", "Devil", "Dark", "Light",
    "Fire", "Ice", "Thunder", "Lightning", "Cyber", "Rage", "Fury", "Chaos"
];

// State
let favorites = JSON.parse(localStorage.getItem('nickmaster_favorites')) || [];
let currentCategory = 'all';
let generatedNames = [];

// DOM Elements
const loader = document.getElementById('loader');
const nameInput = document.getElementById('nameInput');
const generateBtn = document.getElementById('generateBtn');
const randomBtn = document.getElementById('randomBtn');
const namesGrid = document.getElementById('namesGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const symbolsGrid = document.getElementById('symbolsGrid');
const fontsGrid = document.getElementById('fontsGrid');
const fontPreviewInput = document.getElementById('fontPreviewInput');
const favoritesGrid = document.getElementById('favoritesGrid');
const clearFavoritesBtn = document.getElementById('clearFavorites');
const themeToggle = document.getElementById('themeToggle');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1500);

    loadTheme();
    loadSymbols('popular');
    loadFontPreviews('NickMaster');
    loadFavorites();
    setupEventListeners();
});

// Event Listeners Setup
function setupEventListeners() {
    // Generate Button
    generateBtn.addEventListener('click', generateNames);
    nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') generateNames();
    });

    // Real-time generation as user types
    nameInput.addEventListener('input', () => {
        if (nameInput.value.length > 0) {
            generateNames();
        } else {
            namesGrid.innerHTML = '';
            loadMoreBtn.style.display = 'none';
        }
    });

    // Random Name Button
    randomBtn.addEventListener('click', () => {
        const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
        nameInput.value = randomName;
        generateNames();
    });

    // Category Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            if (nameInput.value) generateNames();
        });
    });

    // Symbol Tabs
    document.querySelectorAll('.symbol-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.symbol-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadSymbols(btn.dataset.symbol);
        });
    });

    // Font Preview Input
    fontPreviewInput.addEventListener('input', () => {
        const text = fontPreviewInput.value || 'NickMaster';
        loadFontPreviews(text);
    });

    // Theme Toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Nav Toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Load More
    loadMoreBtn.addEventListener('click', loadMoreStyles);

    // Clear Favorites
    clearFavoritesBtn.addEventListener('click', clearFavorites);

    // Scroll Top
    document.getElementById('scrollTopBtn').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Text Case
    document.getElementById('textCaseBtn').addEventListener('click', () => {
        if (nameInput.value) {
            const text = nameInput.value;
            if (text === text.toLowerCase()) {
                nameInput.value = text.toUpperCase();
            } else {
                nameInput.value = text.toLowerCase();
            }
            generateNames();
        }
    });

    // Reverse Text
    document.getElementById('reverseBtn').addEventListener('click', () => {
        if (nameInput.value) {
            nameInput.value = nameInput.value.split('').reverse().join('');
            generateNames();
        }
    });

    // Smooth Scroll for Nav Links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-menu a').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            navMenu.classList.remove('active');
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Generate Names
function generateNames() {
    const name = nameInput.value.trim();
    if (!name) return;

    generatedNames = [];
    
    // Get decorations based on category
    let decos = [];
    if (currentCategory === 'all') {
        decos = [
            ...decorations.gaming,
            ...decorations.stylish,
            ...decorations.cool,
            ...decorations.cute,
            ...decorations.scary
        ];
    } else {
        decos = decorations[currentCategory] || [];
    }

    // Generate with different fonts and decorations
    Object.keys(fancyFonts).forEach(fontKey => {
        const fancyName = convertToFancy(name, fontKey);
        generatedNames.push(fancyName);
        
        // Add some with decorations
        const randomDeco = decos[Math.floor(Math.random() * decos.length)];
        if (randomDeco) {
            generatedNames.push(`${randomDeco.prefix}${fancyName}${randomDeco.suffix}`);
        }
    });

    // Add more decorated versions
    decos.forEach(deco => {
        generatedNames.push(`${deco.prefix}${name}${deco.suffix}`);
        
        // Mix fonts with decorations
        const randomFont = Object.keys(fancyFonts)[Math.floor(Math.random() * Object.keys(fancyFonts).length)];
        const fancyName = convertToFancy(name, randomFont);
        generatedNames.push(`${deco.prefix}${fancyName}${deco.suffix}`);
    });

    // Remove duplicates
    generatedNames = [...new Set(generatedNames)];

    // Display first batch
    displayNames(generatedNames.slice(0, 20));
    loadMoreBtn.style.display = generatedNames.length > 20 ? 'block' : 'none';
}

// Convert to Fancy Font
function convertToFancy(text, fontKey) {
    const font = fancyFonts[fontKey];
    if (!font) return text;

    const normalChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = '';

    for (let char of text) {
        const index = normalChars.indexOf(char);
        if (index !== -1 && font.chars[index]) {
            result += font.chars[index];
        } else {
            result += char;
        }
    }

    return result;
}

// Display Names
function displayNames(names) {
    namesGrid.innerHTML = '';
    
    names.forEach((name, index) => {
        const isFav = favorites.includes(name);
        const card = document.createElement('div');
        card.className = 'name-card';
        card.style.animationDelay = `${index * 0.05}s`;
        card.innerHTML = `
            <span class="name-text">${name}</span>
            <div class="name-actions">
                <button class="btn-copy" onclick="copyToClipboard('${escapeHtml(name)}')" title="Copy">
                    <i class="fas fa-copy"></i>
                </button>
                <button class="btn-fav ${isFav ? 'active' : ''}" onclick="toggleFavorite('${escapeHtml(name)}', this)" title="Favorite">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        `;
        namesGrid.appendChild(card);
    });
}

// Load More Styles
function loadMoreStyles() {
    const currentCount = namesGrid.children.length;
    const nextBatch = generatedNames.slice(currentCount, currentCount + 20);
    
    nextBatch.forEach((name, index) => {
        const isFav = favorites.includes(name);
        const card = document.createElement('div');
        card.className = 'name-card';
        card.style.animationDelay = `${index * 0.05}s`;
        card.innerHTML = `
            <span class="name-text">${name}</span>
            <div class="name-actions">
                <button class="btn-copy" onclick="copyToClipboard('${escapeHtml(name)}')" title="Copy">
                    <i class="fas fa-copy"></i>
                </button>
                <button class="btn-fav ${isFav ? 'active' : ''}" onclick="toggleFavorite('${escapeHtml(name)}', this)" title="Favorite">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        `;
        namesGrid.appendChild(card);
    });

    if (currentCount + 20 >= generatedNames.length) {
        loadMoreBtn.style.display = 'none';
    }
}

// Load Symbols
function loadSymbols(category) {
    const symbolList = symbols[category] || [];
    symbolsGrid.innerHTML = '';
    
    symbolList.forEach(symbol => {
        const item = document.createElement('div');
        item.className = 'symbol-item';
        item.textContent = symbol;
        item.addEventListener('click', () => copyToClipboard(symbol));
        symbolsGrid.appendChild(item);
    });
}

// Load Font Previews
function loadFontPreviews(text) {
    fontsGrid.innerHTML = '';
    
    Object.entries(fancyFonts).forEach(([key, font]) => {
        const fancyText = convertToFancy(text, key);
        const card = document.createElement('div');
        card.className = 'font-card';
        card.innerHTML = `
            <div>
                <div class="font-preview">${fancyText}</div>
                <div class="font-name">${font.name}</div>
            </div>
            <button class="btn-copy" onclick="copyToClipboard('${escapeHtml(fancyText)}')">
                <i class="fas fa-copy"></i>
            </button>
        `;
        fontsGrid.appendChild(card);
    });
}

// Load Favorites
function loadFavorites() {
    if (favorites.length === 0) {
        favoritesGrid.innerHTML = '<p class="empty-favorites">No favorites yet! Click ❤️ on any name to save.</p>';
        clearFavoritesBtn.style.display = 'none';
        return;
    }

    clearFavoritesBtn.style.display = 'block';
    favoritesGrid.innerHTML = '';
    
    favorites.forEach(name => {
        const card = document.createElement('div');
        card.className = 'name-card';
        card.innerHTML = `
            <span class="name-text">${name}</span>
            <div class="name-actions">
                <button class="btn-copy" onclick="copyToClipboard('${escapeHtml(name)}')" title="Copy">
                    <i class="fas fa-copy"></i>
                </button>
                <button class="btn-fav active" onclick="toggleFavorite('${escapeHtml(name)}', this)" title="Remove">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        `;
        favoritesGrid.appendChild(card);
    });
}

// Toggle Favorite
function toggleFavorite(name, button) {
    const index = favorites.indexOf(name);
    
    if (index === -1) {
        favorites.push(name);
        button.classList.add('active');
        showToast('Added to favorites! ❤️');
    } else {
        favorites.splice(index, 1);
        button.classList.remove('active');
        showToast('Removed from favorites');
    }
    
    localStorage.setItem('nickmaster_favorites', JSON.stringify(favorites));
    loadFavorites();
}

// Clear Favorites
function clearFavorites() {
    if (confirm('Are you sure you want to clear all favorites?')) {
        favorites = [];
        localStorage.removeItem('nickmaster_favorites');
        loadFavorites();
        showToast('All favorites cleared');
        
        // Update favorite buttons in names grid
        document.querySelectorAll('.btn-fav').forEach(btn => {
            btn.classList.remove('active');
        });
    }
}

// Copy to Clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard! 📋');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('Copied to clipboard! 📋');
    });
}

// Show Toast
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Toggle Theme
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    themeToggle.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('nickmaster_theme', isLight ? 'light' : 'dark');
}

// Load Theme
function loadTheme() {
    const savedTheme = localStorage.getItem('nickmaster_theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Escape HTML
function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Make functions available globally
window.copyToClipboard = copyToClipboard;
window.toggleFavorite = toggleFavorite;
