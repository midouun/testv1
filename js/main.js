/* 1️⃣ تحميل الجدول من schedule.json */
async function loadSchedule(){
    const resp = await fetch('data/schedule.json');
    const days = await resp.json();
    const container = document.getElementById('schedule-container');
    days.forEach(item=>{
        const div = document.createElement('div');
        div.className = 'schedule-item';
        div.innerHTML = `<strong>${item.day}</strong>: ${item.time}<br>
                         ${item.topic} (لل_year ${item.targetYear})`;
        container.appendChild(div);
    });
}

/* 2️⃣ تحميل الروابط من references.json */
async function loadReferences(){
    const resp = await fetch('data/references.json');
    const data = await resp.json();

    // روابط 공식
    const ul = document.getElementById('official-links');
    data.officialLinks.forEach(l=>{
        const li = document.createElement('li');
        li.innerHTML = `<a href="${l.url}" target="_blank">${l.name}</a>`;
        ul.appendChild(li);
    });

    // خريطة المجالس
    const sel = document.getElementById('courtSelect');
    data.courts.forEach(c=>{
        const opt = document.createElement('option');
        opt.value = c.url;
        opt.textContent = c.name;
        sel.appendChild(opt);
    });
}

/* 3️⃣ تبديل الوضع الليلي */
document.getElementById('toggle-dark').addEventListener('click',function(){
    document.body.classList.toggle('dark');
});

/* 4️⃣ محرك البحث الفوري (simple filter) */
function search(){
    const term = document.querySelector('#quick-search input').value.toLowerCase();
    const results = document.getElementById('results');
    // يُستعمل переимен من data/principles.json أو أي فهرس آخر
    // ... (تطبيق الفلترة هنا)
}
window.onload = function(){
    loadSchedule();
    loadReferences();
};
