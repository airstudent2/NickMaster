// ============================================
// NickMaster - Main App (Full Working)
// ============================================

let cat='all',names=[],shown=0;
let favs=JSON.parse(localStorage.getItem('nm_fav'))||[];

const $=id=>document.getElementById(id);

// Init
document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>$('loader').classList.add('hide'),1200);
    loadTheme();
    loadSym('popular');
    loadFnt();
    loadFav();
    setup();
});

function setup(){
    // Generate
    $('genBtn').onclick=gen;
    $('input').onkeypress=e=>{if(e.key==='Enter')gen()};
    $('input').oninput=()=>{if($('input').value.length>0)gen()};
    
    // Clear
    $('clearBtn').onclick=()=>{
        $('input').value='';
        $('grid').innerHTML='<div class="empty"><div class="empty-ico">✨</div><h3>Type a name and click Generate</h3></div>';
        $('count').textContent='0 styles';
        $('moreBtn').style.display='none';
    };
    
    // Random
    $('randBtn').onclick=()=>{
        $('input').value=RNAMES[Math.floor(Math.random()*RNAMES.length)];
        gen();
    };
    
    // Upper/Lower/Reverse
    $('upBtn').onclick=()=>{if($('input').value){$('input').value=$('input').value.toUpperCase();gen()}};
    $('lowBtn').onclick=()=>{if($('input').value){$('input').value=$('input').value.toLowerCase();gen()}};
    $('revBtn').onclick=()=>{if($('input').value){$('input').value=$('input').value.split('').reverse().join('');gen()}};
    
    // Categories
    document.querySelectorAll('.cat').forEach(b=>{
        b.onclick=()=>{
            document.querySelectorAll('.cat').forEach(x=>x.classList.remove('active'));
            b.classList.add('active');
            cat=b.dataset.c;
            if($('input').value)gen();
        };
    });
    
    // Load More
    $('moreBtn').onclick=more;
    
    // Symbols
    document.querySelectorAll('.stab').forEach(b=>{
        b.onclick=()=>{
            document.querySelectorAll('.stab').forEach(x=>x.classList.remove('active'));
            b.classList.add('active');
            loadSym(b.dataset.s);
        };
    });
    
    // Font Input
    $('fntInput').oninput=loadFnt;
    
    // Clear Favs
    $('clearFav').onclick=()=>{
        if(confirm('Clear all favorites?')){
            favs=[];
            localStorage.removeItem('nm_fav');
            loadFav();
            toast('Favorites cleared');
        }
    };
    
    // Theme
    $('themeBtn').onclick=toggleTheme;
    
    // Mobile Menu
    $('menuBtn').onclick=()=>$('mobileNav').classList.toggle('show');
    document.querySelectorAll('#mobileNav a').forEach(a=>{
        a.onclick=()=>$('mobileNav').classList.remove('show');
    });
    
    // Scroll
    window.onscroll=()=>$('topBtn').classList.toggle('show',scrollY>400);
    $('topBtn').onclick=()=>scrollTo({top:0,behavior:'smooth'});
    
    // Nav active
    document.querySelectorAll('.nav-link').forEach(a=>{
        a.onclick=()=>{
            document.querySelectorAll('.nav-link').forEach(x=>x.classList.remove('active'));
            a.classList.add('active');
        };
    });
}

// Generate
function gen(){
    const name=$('input').value.trim();
    if(!name)return;
    
    names=[];
    let decos=[];
    
    if(cat==='all'){
        Object.values(DECO).forEach(arr=>decos.push(...arr));
    }else{
        decos=DECO[cat]||[];
    }
    
    // Font variations
    Object.keys(FONTS).forEach(k=>{
        const f=conv(name,k);
        names.push(f);
        
        // Font + random deco
        for(let i=0;i<2;i++){
            if(decos.length){
                const d=decos[Math.floor(Math.random()*decos.length)];
                names.push(d.p+f+d.s);
            }
        }
    });
    
    // Deco variations
    decos.forEach(d=>{
        names.push(d.p+name+d.s);
        
        // Random font + deco
        const keys=Object.keys(FONTS);
        const rk=keys[Math.floor(Math.random()*keys.length)];
        names.push(d.p+conv(name,rk)+d.s);
        
        // Double deco
        const rk2=keys[Math.floor(Math.random()*keys.length)];
        const d2=decos[Math.floor(Math.random()*decos.length)];
        names.push(d.p+conv(name,rk2)+d.s);
    });
    
    // Unique + shuffle
    names=[...new Set(names)].sort(()=>Math.random()-0.5);
    
    shown=0;
    $('grid').innerHTML='';
    more();
    $('count').textContent=names.length+' styles';
}

// Convert font
function conv(text,key){
    const f=FONTS[key];
    if(!f)return text;
    let r='';
    for(const c of text){
        const i=NM.indexOf(c);
        r+=(i!==-1&&f.c[i])?f.c[i]:c;
    }
    return r;
}

// Load more cards
function more(){
    const batch=names.slice(shown,shown+21);
    batch.forEach((name,i)=>{
        const card=document.createElement('div');
        card.className='card';
        card.style.animationDelay=i*0.03+'s';
        const isFav=favs.includes(name);
        
        card.innerHTML=`
            <span class="card-text">${esc(name)}</span>
            <div class="card-btns">
                <button class="act-btn copy-btn" title="Copy"><i class="fas fa-copy"></i></button>
                <button class="act-btn fav-btn ${isFav?'on':''}" title="Favorite"><i class="fas fa-heart"></i></button>
            </div>
        `;
        
        card.querySelector('.copy-btn').onclick=()=>copy(name);
        card.querySelector('.fav-btn').onclick=e=>toggleFav(name,e.currentTarget);
        
        $('grid').appendChild(card);
    });
    
    shown+=batch.length;
    $('moreBtn').style.display=shown>=names.length?'none':'flex';
}

// Symbols
function loadSym(cat){
    const list=SYMS[cat]||[];
    $('symGrid').innerHTML='';
    list.forEach(s=>{
        const el=document.createElement('div');
        el.className='sym-item';
        el.textContent=s;
        el.onclick=()=>copy(s);
        $('symGrid').appendChild(el);
    });
}

// Fonts preview
function loadFnt(){
    const text=$('fntInput').value||'NickMaster';
    $('fntGrid').innerHTML='';
    Object.entries(FONTS).forEach(([k,f])=>{
        const fancy=conv(text,k);
        const card=document.createElement('div');
        card.className='fnt-card';
        card.innerHTML=`<div class="fnt-prev">${fancy}</div><div class="fnt-name">${f.n}</div>`;
        card.onclick=()=>copy(fancy);
        $('fntGrid').appendChild(card);
    });
}

// Favorites
function loadFav(){
    if(!favs.length){
        $('favGrid').innerHTML='<div class="empty"><div class="empty-ico">💝</div><h3>No favorites yet</h3></div>';
        $('clearFav').style.display='none';
        return;
    }
    $('clearFav').style.display='block';
    $('favGrid').innerHTML='';
    favs.forEach(name=>{
        const card=document.createElement('div');
        card.className='card';
        card.innerHTML=`
            <span class="card-text">${esc(name)}</span>
            <div class="card-btns">
                <button class="act-btn copy-btn"><i class="fas fa-copy"></i></button>
                <button class="act-btn fav-btn on"><i class="fas fa-heart"></i></button>
            </div>
        `;
        card.querySelector('.copy-btn').onclick=()=>copy(name);
        card.querySelector('.fav-btn').onclick=e=>toggleFav(name,e.currentTarget);
        $('favGrid').appendChild(card);
    });
}

function toggleFav(name,btn){
    const i=favs.indexOf(name);
    if(i===-1){
        favs.push(name);
        btn.classList.add('on');
        toast('Added to favorites ❤️');
    }else{
        favs.splice(i,1);
        btn.classList.remove('on');
        toast('Removed from favorites');
    }
    localStorage.setItem('nm_fav',JSON.stringify(favs));
    loadFav();
}

// Copy
function copy(text){
    navigator.clipboard.writeText(text).then(()=>toast('Copied! 📋')).catch(()=>{
        const t=document.createElement('textarea');
        t.value=text;
        document.body.appendChild(t);
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
        toast('Copied! 📋');
    });
}

// Toast
function toast(msg){
    $('toastMsg').textContent=msg;
    $('toast').classList.add('show');
    setTimeout(()=>$('toast').classList.remove('show'),2500);
}

// Theme
function toggleTheme(){
    document.body.classList.toggle('dark');
    const d=document.body.classList.contains('dark');
    localStorage.setItem('nm_theme',d?'dark':'light');
    $('themeBtn').innerHTML=d?'<i class="fas fa-sun"></i>':'<i class="fas fa-moon"></i>';
}

function loadTheme(){
    if(localStorage.getItem('nm_theme')==='dark'){
        document.body.classList.add('dark');
        $('themeBtn').innerHTML='<i class="fas fa-sun"></i>';
    }
}

// Escape HTML
function esc(t){
    const d=document.createElement('div');
    d.textContent=t;
    return d.innerHTML;
}