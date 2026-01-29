const menuData = [
    {
        name: "한우 안심 스테이크",
        class: "white",
        category: "western",
        temp: "hot",
        desc: "최상급 한우의 육즙과 익힘 정도가 완벽한 스테이크.",
        comment: "고기 익힘이 완벽합니다. 생존입니다.",
        chef: "안성재 심사위원",
        img: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?w=800&q=80"
    },
    {
        name: "밤 티라미수",
        class: "black",
        category: "western",
        temp: "cold",
        desc: "편의점 재료로 만든 기적의 맛, 깊은 밤의 풍미.",
        comment: "이건 예술이네요. 맛이 미쳤습니다.",
        chef: "나폴리 맛피아",
        img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80"
    },
    {
        name: "들기름 메밀국수",
        class: "white",
        category: "korean",
        temp: "cold",
        desc: "재료 본연의 맛을 극대화한 고소한 메밀의 향연.",
        comment: "들기름 향이 채소의 익힘(?)보다 더 완벽하네요.",
        chef: "에드워드 리",
        img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80"
    },
    {
        name: "마라 크림 짬뽕",
        class: "black",
        category: "chinese",
        temp: "hot",
        desc: "강렬한 마라와 부드러운 크림의 파격적인 만남.",
        comment: "완전 미친놈(?)이네요 이거! 재밌는 맛입니다.",
        chef: "요리하는 돌아이",
        img: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=800&q=80"
    },
    {
        name: "정통 고기 짬뽕",
        class: "white",
        category: "chinese",
        temp: "hot",
        desc: "50년 전통의 깊은 불맛과 묵직한 국물.",
        comment: "이게 진짜 중식의 정석이죠. 합격입니다.",
        chef: "철가방 요리사",
        img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=800&q=80"
    },
    {
        name: "초밥 세트 (오마카세 스타일)",
        class: "white",
        category: "japanese",
        temp: "cold",
        desc: "신선한 제철 생선과 완벽한 샤리의 조화.",
        comment: "밥알의 온도가 혀끝에서 정확히 맞아떨어집니다.",
        chef: "안성재 심사위원",
        img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80"
    },
    {
        name: "돈카츠 샌드위치",
        class: "black",
        category: "japanese",
        temp: "hot",
        desc: "두툼한 등심과 바삭한 빵의 조화.",
        comment: "이건 뭐... 설명이 필요 없쥬? 맛있어유!",
        chef: "백종원 심사위원",
        img: "https://images.unsplash.com/photo-1594212699903-ec8a3ecc50f1?w=800&q=80"
    },
    {
        name: "매콤 제육볶음",
        class: "black",
        category: "korean",
        temp: "hot",
        desc: "불맛 가득한 기사식당 스타일의 최강 밥도둑.",
        comment: "이야~ 이 양념은 밥 세 공기 뚝딱이쥬!",
        chef: "백종원 심사위원",
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80"
    }
];

const menuGrid = document.getElementById('menu-grid');
const recommendBtn = document.getElementById('recommend-btn');
const modal = document.getElementById('result-modal');
const closeBtn = document.getElementsByClassName('close')[0];
const judgeComment = document.getElementById('judge-comment');

const filterBtns = document.querySelectorAll('.filter-btn');
const catBtns = document.querySelectorAll('.cat-btn');

let currentClass = 'all';
let currentCat = 'all';

function displayMenus() {
    menuGrid.innerHTML = '';
    const filtered = menuData.filter(item => {
        const classMatch = currentClass === 'all' || item.class === currentClass;
        const catMatch = currentCat === 'all' || 
                         item.category === currentCat || 
                         item.temp === currentCat;
        return classMatch && catMatch;
    });

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <img class="menu-img" src="${item.img}" alt="${item.name}">
            <div class="menu-info">
                <span class="badge ${item.class === 'white' ? 'badge-white' : 'badge-black'}">
                    ${item.class === 'white' ? '백수저' : '흑수저'}
                </span>
                <h3>${item.name}</h3>
                <p>${item.desc.substring(0, 30)}...</p>
            </div>
        `;
        card.onclick = () => showResult(item);
        menuGrid.appendChild(card);
    });
}

function showResult(item) {
    const modalTitle = document.getElementById('modal-title');
    const resultImg = document.getElementById('result-img');
    const resultName = document.getElementById('result-name');
    const resultDesc = document.getElementById('result-desc');
    const chefName = document.getElementById('chef-name');
    const chefText = document.getElementById('chef-text');

    modalTitle.innerText = "심사 결과: 생존입니다!";
    resultImg.src = item.img;
    resultName.innerText = item.name;
    resultDesc.innerText = item.desc;
    chefName.innerText = `${item.chef}:`;
    chefText.innerText = `"${item.comment}"`;

    modal.style.display = "block";
}

recommendBtn.onclick = () => {
    judgeComment.innerText = "음... 맛을 보겠습니다. 기다리세요.";
    recommendBtn.innerText = "채점 중...";
    
    setTimeout(() => {
        const randomItem = menuData[Math.floor(Math.random() * menuData.length)];
        showResult(randomItem);
        judgeComment.innerText = `"${randomItem.name}"... 이 요리는 채소의 익힘 정도가 아주 완벽합니다.`;
        recommendBtn.innerText = "다시 평가받기";
    }, 1500);
};

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
};

filterBtns.forEach(btn => {
    btn.onclick = () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentClass = btn.dataset.class;
        displayMenus();
    };
});

catBtns.forEach(btn => {
    btn.onclick = () => {
        catBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCat = btn.dataset.cat;
        displayMenus();
    };
});

// 초기 실행
displayMenus();
