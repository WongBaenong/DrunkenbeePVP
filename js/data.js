const classCode = new Map();
const ICON_ADDRESS = "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas";

const berserker = {
  classcode: "BK",
  rep: [8, 21, 14, 19, 5, 16, 13, 12, 22, 20, 11],
  motion: [
    "레더",
    "윈블",
    "피니쉬",
    "소드스톰",
    "숄차",
    "마운틴",
    "다이빙 슬래쉬",
    "템페스트",
    "메일스톰",
    "각성기",
    "블러디러쉬",
  ],
  exp: [
    //레더
    `
    쿨타임 : 24s
    슈퍼아머 : 없음
    피격 판정 : 경직(강경직)
    `, //윈블
    `
    쿨타임 : 20s
    슈퍼아머 : 경직 면역
    피격 판정 : 경직(강경직)
    `, //피니쉬
    `
    쿨타임 : 18s
    슈퍼아머 : 피격이상 면역
    피격 판정 : 피격이상(다운)
    `, //소드스톰
    `
    쿨타임 : 30s
    슈퍼아머 : 피격이상 면역
    피격 판정 : 상태이상(지진)
    `, //숄차
    `
    쿨타임 : 14s
    슈퍼아머 : 경직 면역
    피격 판정 : 경직(강경직)
    `, //마운틴
    `
    쿨타임 : 12s
    슈퍼아머 : 없음
    피격 판정 : 피격이상(지진)
    `, //다이빙 슬래쉬
    `
    쿨타임 : 16s
    슈퍼아머 : 경직 면역
    피격 판정 : 피격이상(다운)
    `, //템페스트
    `
    쿨타임 : 24s
    슈퍼아머 : 경직 면역
    피격 판정 : 피격이상(에어본, 다운)
    `, //메일스톰
    `
    쿨타임 : 15s
    슈퍼아머 : 피격이상 면역
    피격 판정 : 피격이상(에어본)
    `, //각성기
    `
    슈퍼아머 : 피격이상 면역, 상태이상 면역
    피격 판정 : 경직(강경직, 끌어당김), 피격이상(에어본, 넉백)
    `, //블러디러쉬
    `
    쿨타임 : 36s
    슈퍼아머 : 피격이상 면역
    피격 판정 : 경직(강경직), 피격이상(에어본, 넉백)
    `,
  ],
  enter: [21, 5, 13],
  enterExp: [
    `버서커를 상대할 때 제일 조심해야할 진입기이며 피격 시 강경직 후 마운틴(<img src="${ICON_ADDRESS}/BK_Skill/BK_Skill_01_16.png" class="small-icon"/>) ▶ 
    피니쉬(<img src="${ICON_ADDRESS}/BK_Skill/BK_Skill_01_14.png" class="small-icon"/>) 등 죽창 콤보에 당할 수 있다. 
    돌진 시 버서커 좌표가 생각보다 앞에 있어 앞에서 카운터를 치려면 경직 면역스킬이 필수.`,
    "2회 사용 트포를 찍을 경우 18미터 거리에서도 돌진가능한 진입기지만(1회 당 9미터) 1회 사용 후 2회까지 약간의 시간이 있어 충분히 거리를 유지한다면 경직 면역 스킬로 카운터칠 수 있다.",
    "주로 진입보다는 콤보 사용 후 스킬 쿨타임을 벌기 위한 도주기로 사용하지만 내 스킬 상황에 따라 추노기로도 사용할 수 있으니 주의.",
  ],
  immuneExp:
    "버서커의 경우 대부분 스킬에 경직 면역이 있으며 피격이상 면역 스킬의 모션이 길어 피면 시간 체감이 긴 편이다.",
  stiff: [21, 14, 19, 5, 13, 12, 22, 11],
  sitffExp: "",
  hit: [14, 19, 22, 11],
  hitExp: "",
  winPlan: `버서커를 상대할 때 중요한 점은 섣불리 들어가지 않는 것이다. 버서커의 스킬 구조상 선공보다는 받아치는 것이 좋기 때문이다.
  <br><br>
  윈드 블레이드(<img src="${ICON_ADDRESS}/BK_Skill/BK_Skill_01_21.png" class="small-icon"/>), 숄더 차지(<img src="${ICON_ADDRESS}/BK_Skill/BK_Skill_01_5.png" class="small-icon"/>) 등의 돌진기를
  거리 조절을 통해 피했다면 반격할텐데 이 때 버서커의 피면기에 카운터를 맞고 빈사가 될 수도 있다.
  대신 버서커의 피면기 스킬 쿨이 제법 긴 편이기 때문에 심리전을 통해 스킬을 하나 둘 뺀다면 카운터를 당해도 큰 피해를 입지 않을 수도 있다.
  <br><br>
  단 폭주 상태가 되면 공이속 20% 증가로 인해 대부분의 판정 싸움에서 질 수밖에 없으니 좋은 타이밍이 아니라면 도망다니며 시간을 끄는 것이 좋다.`,
  adv: `버서커를 상대하기 좋은 직업은 다음과 같다.<br>
  <pre>
  1. 스카우터, 데빌헌터, 건슬링어, 호크아이 등 기동성이 좋아 도망치며 체력 갉아먹기 좋은 클래스 
  2. 배틀마스터, 스트라이커 등 스킬교환을 했을 때 쿨타임이 더 짧은 클래스
  ※ 폭주는 제외다.</pre>`,
};

const destroyer = {
  classcode: "DT",
  rep: [9, 16, 12, 18, 11, 10, 3, 13, 8, 20],
  motion: [
    "인듀어",
    "러닝",
    "점스",
    "파워 숄더",
    "어스 이터",
    "사이즈믹",
    "드레드",
    "퍼스",
    "각성기",
    "돈가스",
  ],
  exp: [
    `
    쿨타임 : 40s
    슈퍼아머 : 피격이상 면역
    피격 판정 : 경직(강경직)
    `,
    `
    쿨타임 : 20s
    슈퍼아머 : 경직 면역
    피격 판정 : 상태이상(기절)
    `,
    `
    쿨타임 : 16s
    슈퍼아머 : 경직 면역
    피격 판정 : 피격이상(다운, 에어본)
    `,
    `
    쿨타임 : 12s
    슈퍼아머 : 없음
    피격 판정 : 경직(강경직), 상태이상(기절)
    `,
    `
    쿨타임 : 18s
    슈퍼아머 : 피격이상 면역
    피격 판정 : 경직(약경직)
    `,
    `
    쿨타임 : 30s
    슈퍼아머 : 피격이상 면역
    피격 판정 : 경직(강경직), 피격이상(에어본)
    `,
    `
    쿨타임 : 10s
    슈퍼아머 : 피격이상 면역
    피격 판정 : 피격이상(에어본, 다운)
    `,
    `
    쿨타임 : 30s
    슈퍼아머 : 피격이상 면역
    피격 판정 : 경직(강경직)
    `,
    `
    슈퍼아머 : 피격이상 면역, 상태이상 면역
    피격 판정 : 피격이상(다운, 에어본)
    `,
    `
    슈퍼아머 : 피격이상 면역, 상태이상 면역
    피격 판정 : 경직(강경직)`,
  ],
  enter: [16, 12, 18],
  enterExp: [
    "돌진속도가 느리기 때문에 거리가 멀면 맞을 일이 없지만 폭발 범위가 넓기 때문에 근접해있을 경우 조심해야 한다.",
    "디트를 상대할 때 제일 조심해야할 진입기이며 피격 시 다운되고 이후 추가로 에어본되는 장판이 넓게 생긴다. 점프를 피했다고 바로 붙으면 에어본 장판에 맞을 수 있으니 주의.",
    "돌진속도가 빠른 편은 아니라서 웬만하면 맞을 일이 없지만 피격 시 강경직 이후 기절까지 확정이므로 조심해야한다. 슈퍼아머가 없기 때문에 모션을 보면 반격하기 쉬운 편.",
  ],
  immuneExp:
    "디트의 경우 대부분 경직면역, 피격이상 면역이 있어 상대하기 어려울 것 같지만 생각보다 긴 쿨타임, 느린 공이속으로 인해 스킬을 안다면 의외로 상대하기 쉽다.",
  stiff: [9, 16, 12, 11, 10, 3, 13, 20],
  sitffExp: "",
  hit: [9, 11, 10, 3, 13, 20],
  hitExp: "",
  winPlan: `디트를 상대할 때 제일 중요한 것은 맞딜하지 않는 것이다.<br>
  특히 인듀어(<img src="${ICON_ADDRESS}/DT_Skill/DT_Skill_01_9.png" class="small-icon"/>)를 사용한 경우 10초 가량 피격이상 면역이 유지되며 받피감 버프가 있기 때문에 맞딜해봐야 별로 아파하지도 않는다.
  <br>어스 이터(<img src="${ICON_ADDRESS}/DT_Skill/DT_Skill_01_11.png" class="small-icon"/>속칭 팽이)를 사용하며 접근하는 경우 약경직이기 때문에 평타를 치고 있으면 끌려가지 않으며 상태이상 스킬로 팽이를 끊고 딜하는 것이 좋다.`,
  adv: `디트를 상대하기 좋은 직업은 다음과 같다.<br>
<pre>
  1. 스카우터, 데빌헌터, 건슬링어, 호크아이 등 기동성이 좋아 도망치며 체력 갉아먹기 좋은 클래스
  2. 서머너, 소서리스 등 원거리에서 일방적으로 때릴 수 있는 클래스</pre>`,
};

const warlord = {
  classcode: "GL",
  rep: [8, 29, 27, 9, 1, 5, 16, 17, 3, 28, 31],
  motion: [
    "대어파",
    "카스",
    "스피어 샷",
    "버캐",
    "배쉬",
    "리프어택",
    "가낙",
    "갈고리",
    "방돌",
    "각성기",
    "방어태세",
  ],
  exp: [
    //대어파
    `
    쿨타임 : 16s
    슈퍼아머 : 없음
    피격 판정 : 피격이상(에어본)
    `, // 카스
    `
    쿨타임 : 20s
    슈퍼아머 : 피격이상 면역, 상태이상 면역
    피격 판정 : 상태이상(감전)
    `, //스피어 샷
    `
    쿨타임 : 18s
    슈퍼아머 : 피격이상 면역
    피격 판정 : 피격이상(넉백)
    `, //버캐
    `
    쿨타임 : 30s
    슈퍼아머 : 경직 면역
    피격 판정 : 피격이상(넉백)
    `, //배쉬
    `
    쿨타임 : 10s
    슈퍼아머 : 없음
    피격 판정 : 상태이상(기절)
    `, //리프어택
    `
    쿨타임 : 16s
    슈퍼아머 : 경직 면역
    피격 판정 : 피격이상(에어본)
    `, //가낙
    `
    쿨타임 : 20s
    슈퍼아머 : 피격이상 면역
    피격 판정 : 상태이상(감전)
    `, //갈고리
    `
    쿨타임 : 24s
    슈퍼아머 : 없음
    피격 판정 : 경직(약경직)
    `, //방돌
    `
    쿨타임 : 16s
    슈퍼아머 : 경직면역
    피격 판정 : 경직(강경직), 피격이상(에어본)
    `, //각성기
    `
    슈퍼아머 : 피격이상 면역, 상태이상 면역
    피격 판정 : 상태이상(기절)
    `, //방어태세
    ` 
    슈퍼아머 : 피격이상 면역
    `,
  ],
  enter: [27, 5, 17, 3],
  enterExp: [
    "트라이포드를 찍을 경우 돌진 판정이 있으며 생각보다 반응하기 쉽지 않다. 방어태세를 켜고 천천히 접근하다가 갑자기 선공하는 경우도 있으니 주의.",
    "",
    "",
  ],
  immuneExp: "",
  stiff: [9, 16, 12, 11, 10, 3, 13, 20],
  sitffExp: "",
  hit: [9, 11, 10, 3, 13, 20],
  hitExp: "",
  winPlan: ``,
  adv: ``,
};
const holynight = {
  classcode: "HK",
  rep: [9, 16, 12, 18, 11, 10, 3, 13, 8],
  motion: [
    "대어파",
    "카스",
    "스피어 샷",
    "버캐",
    "배쉬",
    "리프어택",
    "가낙",
    "갈고리",
    "방돌",
    "각성기",
    "방어태세",
  ],
  exp: [
    //대어파
    `
    쿨타임 : 16s
    슈퍼아머 : 없음
    피격 판정 : 피격이상(에어본)
    `, // 카스
    `
    쿨타임 : 20s
    슈퍼아머 : 피격이상 면역, 상태이상 면역
    피격 판정 : 상태이상(감전)
    `, //스피어 샷
    `
    쿨타임 : 18s
    슈퍼아머 : 피격이상 면역
    피격 판정 : 피격이상(넉백)
    `, //버캐
    `
    쿨타임 : 30s
    슈퍼아머 : 경직 면역
    피격 판정 : 피격이상(넉백)
    `, //배쉬
    `
    쿨타임 : 10s
    슈퍼아머 : 없음
    피격 판정 : 상태이상(기절)
    `, //리프어택
    `
    쿨타임 : 16s
    슈퍼아머 : 경직 면역
    피격 판정 : 피격이상(에어본)
    `, //가낙
    `
    쿨타임 : 20s
    슈퍼아머 : 피격이상 면역
    피격 판정 : 상태이상(감전)
    `, //갈고리
    `
    쿨타임 : 24s
    슈퍼아머 : 없음
    피격 판정 : 경직(약경직)
    `, //방돌
    `
    쿨타임 : 16s
    슈퍼아머 : 경직면역
    피격 판정 : 경직(강경직), 피격이상(에어본)
    `, //각성기
    `
    슈퍼아머 : 피격이상 면역, 상태이상 면역
    피격 판정 : 상태이상(기절)
    `, //방어태세
    ` 
    슈퍼아머 : 피격이상 면역
    `,
  ],
  enter: [27, 5, 17, 3],
  enterExp: ["", "", ""],
  immuneExp: "",
  stiff: [9, 16, 12, 11, 10, 3, 13, 20],
  sitffExp: "",
  hit: [9, 11, 10, 3, 13, 20],
  hitExp: "",
  winPlan: ``,
  adv: ``,
};

const infighter = {
  classcode: "IF",
  rep: [0, 13, 5, 14, 4, 10, 12, 20, 23],
  motion: [
    "전진",
    "순타",
    "용강",
    "맹호격",
    "연파",
    "죽선",
    "일망",
    "진용출",
    "각성기",
  ],
  exp: [
    //전진
    `
    쿨타임 : 5s
    슈퍼아머 : 없음
    피격 판정 : 경직(강경직)
    `,
    //순타
    `
    쿨타임 : 20s
    슈퍼아머 : 없음
    피격 판정 : 상태이상(기절)
    `,
    //용강
    `
    쿨타임 : 16s
    슈퍼아머 : 피격이상 면역
    피격 판정 : 피격이상(에어본)
    `,
    //맹호격
    `
    쿨타임 : 8s
    슈퍼아머 : 없음
    피격 판정 : 피격이상(에어본)
    `,
    //연파
    `
    쿨타임 : 30s
    슈퍼아머 : 피격이상 면역
    피격 판정 : 경직(약경직), 피격이상(에어본)
    `,
    //죽선
    `
    쿨타임 : 24s
    슈퍼아머 : 경직면역 / 피격이상 면역
    피격 판정 : 피격이상(넉백, 에어본)
    `,
    //일망
    `
    쿨타임 : 8s
    슈퍼아머 : 없음
    피격 판정 : 경직(강경직)
    `,
    //진용출
    `
    쿨타임 : 24s
    슈퍼아머 : 경직 면역
    피격 판정 : 피격이상(에어본, 다운)
    `,
    //각성기
    `
    슈퍼아머 : 피격이상 면역, 상태이상 면역
    피격 판정 : 상태이상(넉백)
    `,
  ],
  enter: [0, 5],
  enterExp: [
    `<span class="stress">인파의 PVP 밥줄스킬.</span>
    <br>
    쿨타임이 5초로 상당히 빠르며 이후 <img src="${ICON_ADDRESS}/IF_Skill/IF_Skill_01_13.png" class="small-icon" />
    <img src="${ICON_ADDRESS}/IF_Skill/IF_Skill_01_14.png" class="small-icon" /><img src="${ICON_ADDRESS}/IF_Skill/IF_Skill_01_20.png" class="small-icon" /> 등
    쿨타임 남아있는 스킬로 연계도 간단하다.`,
    `<span class="stress">피격면역 + 피격이상 + 이동기</span>
    <br>
    전진의 일격을 피해서 안심하고 있을 때 추노가 들어올 수 있다.`,
  ],
  immuneExp: `인파는 면역스킬이 많지는 않은 편이다. 심지어 진용출의 경우 띄우는 자세는 경직 면역도 없어 진입기가 적중하지 않은 상태에서 스탠딩으로 쓸 수는 없다.`,
  stiff: [5, 4, 10, 20],
  sitffExp: "",
  hit: [5, 4, 10],
  hitExp: "",
  winPlan: `쿨타임 5초의 전진의 일격(<img src="${ICON_ADDRESS}/IF_Skill/IF_Skill_01_0.png" class="small-icon" />)을 가장 주의해야 한다.
  <br><br>
  상당히 사거리가 길고 경직 시간이 길기 때문에 피격 시 이후 순타(<img src="${ICON_ADDRESS}/IF_Skill/IF_Skill_01_13.png" class="small-icon" />) ▶ 
  진용출(<img src="${ICON_ADDRESS}/IF_Skill/IF_Skill_01_20.png" class="small-icon" />) ▶ 맹호격(<img src="${ICON_ADDRESS}/IF_Skill/IF_Skill_01_14.png" class="small-icon" />) ▶ 
  죽선(<img src="${ICON_ADDRESS}/IF_Skill/IF_Skill_01_10.png" class="small-icon" />)콤보를 맞고 반피 가까이 삭제당할 수 있다.
  <br><br>
  경직 면역스킬이 거의 없기 때문에 전진의 일격 거리조절만 잘해주면 상대하기 수월한 편.
  다만 전진의 일격(<img src="${ICON_ADDRESS}/IF_Skill/IF_Skill_01_0.png" class="small-icon" />) ▶ 순타(<img src="${ICON_ADDRESS}/IF_Skill/IF_Skill_01_13.png" class="small-icon" />)
  혹은 용강(<img src="${ICON_ADDRESS}/IF_Skill/IF_Skill_01_5.png" class="small-icon" />) ▶ 전진(<img src="${ICON_ADDRESS}/IF_Skill/IF_Skill_01_0.png" class="small-icon" />)처럼
  타이밍을 바꿔서 진입할 수 있으니 해당사항 유의할 것
  <br<br>
  각성기는 1각, 2각 취향이나 작성자가 2각(<img src="${ICON_ADDRESS}/IF_Skill/IF_Skill_01_23.png" class="small-icon" />) 취향이라 2각으로 넣었음`,
  adv: ``,
};
const battlemaster = {
  classcode: "BM",
  rep: [9, 16, 12, 18, 11, 10, 3, 13, 8],
  motion: [""],
  exp: [``],
  enter: [0],
  enterExp: [``, ``, ``],
  immuneExp: ``,
  stiff: [0],
  sitffExp: ``,
  hit: [0],
  hitExp: ``,
  winPlan: ``,
  adv: ``,
};
const striker = {
  classcode: "BM",
  rep: [2, 12, 14, 16, 18, 23, 26, 28, 29, 33, 35, 37],
  motion: [
    "잠룡",
    "화조",
    "붕천퇴",
    "월섬각",
    "뇌명각",
    "초풍각",
    "방천격",
    "번속",
    "운룡각",
    "광폭진",
    "뇌호격",
    "각성기",
  ],
  exp: [
    //잠룡
    `
    쿨타임 : 
    슈퍼아머 : 
    피격 판정 : 
    `,
    //화조
    `
    쿨타임 : 
    슈퍼아머 : 
    피격 판정 : 
    `,
    //붕천퇴
    `
    쿨타임 : 8s
    슈퍼아머 : 없음
    피격 판정 : 피격이상(에어본)
    `,
    //월섬각
    `
    쿨타임 : 9s
    슈퍼아머 : 경직 면역
    피격 판정 : 
    `,
    //뇌명각
    `
    쿨타임 : 
    슈퍼아머 : 
    피격 판정 : 
    `,
    //초풍각
    `
    쿨타임 : 
    슈퍼아머 : 
    피격 판정 : 
    `,
    //방천격
    `
    쿨타임 : 
    슈퍼아머 : 
    피격 판정 : 
    `,
    //번속
    `
    쿨타임 : 
    슈퍼아머 : 
    피격 판정 : 
    `,
    //운룡각
    `
    쿨타임 : 
    슈퍼아머 : 
    피격 판정 : 
    `,
    //광폭진
    `
    쿨타임 : 
    슈퍼아머 : 
    피격 판정 : 
    `,
    //뇌호격
    `
    쿨타임 : 
    슈퍼아머 : 
    피격 판정 : 
    `,
    //각성기
    `
    슈퍼아머 : 피격이상 면역, 상태이상 면역
    피격 판정 : 경직(강격직), 피격이상(넉백, 에어본)
    `,
  ],
  enter: [2, 12, 16, 18, 29, 35],
  enterExp: [``, ``, ``],
  immuneExp: `스트라이커는 스킬트리에 따라 8개 중 7개를 경면으로 사용할 수도 있는 직업이라 <span class="stress">경직 위주로 플레이하는 직업에게 유리</span>하다.
  <br><br>피면이상은 반대로 뇌호격 1개밖에 없어 상태이상이 많은 직업의 스킬을 잘 파악하고 있어야 한다.`,
  stiff: [2, 12, 16, 18, 23, 26, 33, 35],
  sitffExp: "",
  hit: [35],
  hitExp: "",
  winPlan: ``,
  adv: ``,
};
const soulmaster = {
  classcode: "SO",
  rep: [9, 16, 12, 18, 11, 10, 3, 13, 8],
  motion: [""],
  exp: [``],
  enter: [0],
  enterExp: [``, ``, ``],
  immuneExp: ``,
  stiff: [0],
  sitffExp: ``,
  hit: [0],
  hitExp: ``,
  winPlan: ``,
  adv: ``,
};
const lancemaster = {
  classcode: "LM",
  rep: [9, 16, 12, 18, 11, 10, 3, 13, 8],
  rep: [9, 16, 12, 18, 11, 10, 3, 13, 8],
  motion: [""],
  exp: [``],
  enter: [0],
  enterExp: [``, ``, ``],
  immuneExp: ``,
  stiff: [0],
  sitffExp: ``,
  hit: [0],
  hitExp: ``,
  winPlan: ``,
  adv: ``,
};
const bard = {
  classcode: "BD",
  rep: [9, 16, 12, 18, 11, 10, 3, 13, 8],
  rep: [9, 16, 12, 18, 11, 10, 3, 13, 8],
  motion: [""],
  exp: [``],
  enter: [0],
  enterExp: [``, ``, ``],
  immuneExp: ``,
  stiff: [0],
  sitffExp: ``,
  hit: [0],
  hitExp: ``,
  winPlan: ``,
  adv: ``,
};
const summoner = {
  classcode: "SM",
  rep: [9, 16, 12, 18, 11, 10, 3, 13, 8],
  rep: [9, 16, 12, 18, 11, 10, 3, 13, 8],
  motion: [""],
  exp: [``],
  enter: [0],
  enterExp: [``, ``, ``],
  immuneExp: ``,
  stiff: [0],
  sitffExp: ``,
  hit: [0],
  hitExp: ``,
  winPlan: ``,
  adv: ``,
};
const sorceress = {
  classcode: "SCS",
  rep: [4, 7, 9, 11, 12, 14, 16, 17, 21],
  rep: [9, 16, 12, 18, 11, 10, 3, 13, 8],
  motion: [""],
  exp: [``],
  enter: [0],
  enterExp: [``, ``, ``],
  immuneExp: ``,
  stiff: [0],
  sitffExp: ``,
  hit: [0],
  hitExp: ``,
  winPlan: ``,
  adv: ``,
};
const arcana = {
  classcode: "AC",
  rep: [9, 16, 12, 18, 11, 10, 3, 13, 8],
  rep: [9, 16, 12, 18, 11, 10, 3, 13, 8],
  motion: [""],
  exp: [``],
  enter: [0],
  enterExp: [``, ``, ``],
  immuneExp: ``,
  stiff: [0],
  sitffExp: ``,
  hit: [0],
  hitExp: ``,
  winPlan: ``,
  adv: ``,
};
const blade = {
  classcode: "BL",
  rep: [0, 1, 8, 10, 11, 14, 16, 17, 18, 21],
  motion: [""],
  exp: [``],
  enter: [0],
  enterExp: [``, ``, ``],
  immuneExp: ``,
  stiff: [0],
  sitffExp: ``,
  hit: [0],
  hitExp: ``,
  winPlan: ``,
  adv: ``,
};
const ripper = {
  classcode: "RP",
  rep: [6, 7, 10, 11, 13, 14, 15, 16, 17, 21, 20],
  motion: [""],
  exp: [``],
  enter: [0],
  enterExp: [``, ``, ``],
  immuneExp: ``,
  stiff: [0],
  sitffExp: ``,
  hit: [0],
  hitExp: ``,
  winPlan: ``,
  adv: ``,
};
const demonic = {
  classcode: "DM",
  rep: [9, 16, 12, 18, 11, 10, 3, 13, 8],
  motion: [""],
  exp: [``],
  enter: [0],
  enterExp: [``, ``, ``],
  immuneExp: ``,
  stiff: [0],
  sitffExp: ``,
  hit: [0],
  hitExp: ``,
  winPlan: ``,
  adv: ``,
};
const lemonhunter = {
  classcode: "DH",
  rep: [9, 16, 12, 18, 11, 10, 3, 13, 8],
  motion: [""],
  exp: [``],
  enter: [0],
  enterExp: [``, ``, ``],
  immuneExp: ``,
  stiff: [0],
  sitffExp: ``,
  hit: [0],
  hitExp: ``,
  winPlan: ``,
  adv: ``,
};
const gunslinger = {
  classcode: "DH",
  rep: [9, 16, 12, 18, 11, 10, 3, 13, 8],
  motion: [""],
  exp: [``],
  enter: [0],
  enterExp: [``, ``, ``],
  immuneExp: ``,
  stiff: [0],
  sitffExp: ``,
  hit: [0],
  hitExp: ``,
  winPlan: ``,
  adv: ``,
};
const blaster = {
  classcode: "BS",
  rep: [9, 16, 12, 18, 11, 10, 3, 13, 8],
  motion: [""],
  exp: [``],
  enter: [0],
  enterExp: [``, ``, ``],
  immuneExp: ``,
  stiff: [0],
  sitffExp: ``,
  hit: [0],
  hitExp: ``,
  winPlan: ``,
  adv: ``,
};
const hawkeye = {
  classcode: "HE",
  rep: [9, 16, 12, 18, 11, 10, 3, 13, 8],
  motion: [""],
  exp: [``],
  enter: [0],
  enterExp: [``, ``, ``],
  immuneExp: ``,
  stiff: [0],
  sitffExp: ``,
  hit: [0],
  hitExp: ``,
  winPlan: ``,
  adv: ``,
};
const donthide = {
  classcode: "SC",
  rep: [9, 16, 12, 18, 11, 10, 3, 13, 8],
  motion: [""],
  exp: [``],
  enter: [0],
  enterExp: [``, ``, ``],
  immuneExp: ``,
  stiff: [0],
  sitffExp: ``,
  hit: [0],
  hitExp: ``,
  winPlan: ``,
  adv: ``,
};
const artist = {
  classcode: "YY",
  rep: [9, 16, 12, 18, 11, 10, 3, 13, 8],
  motion: [""],
  exp: [``],
  enter: [0],
  enterExp: [``, ``, ``],
  immuneExp: ``,
  stiff: [0],
  sitffExp: ``,
  hit: [0],
  hitExp: ``,
  winPlan: ``,
  adv: ``,
};

classCode.set("버서커", berserker);
classCode.set("디스트로이어", destroyer);
classCode.set("워로드", warlord);
classCode.set("홀리나이트", holynight);
classCode.set("인파이터", infighter);
classCode.set("배틀마스터", battlemaster);
classCode.set("기공사", soulmaster);
classCode.set("창술사", lancemaster);
classCode.set("스트라이커", striker);
classCode.set("바드", bard);
classCode.set("서머너", summoner);
classCode.set("아르카나", arcana);
classCode.set("소서리스", sorceress);
classCode.set("데빌헌터", lemonhunter);
classCode.set("호크아이", hawkeye);
classCode.set("블래스터", blaster);
classCode.set("스카우터", donthide);
classCode.set("건슬링어", gunslinger);
classCode.set("데모닉", demonic);
classCode.set("리퍼", ripper);
classCode.set("블레이드", blade);
classCode.set("도화가", artist);
