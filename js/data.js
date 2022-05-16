const classCode = new Map();
const ICON_ADDRESS = "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas";

const translateImg = (classname, skillnum) => {
  return `<img src="${ICON_ADDRESS}/${classname}_Skill/${classname}_Skill_01_${skillnum}.png" class="small-icon"/>`;
};

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
    `버서커를 상대할 때 제일 조심해야할 진입기이며 피격 시 강경직 후 마운틴(${translateImg(
      "BK",
      16
    )}) ▶ 피니쉬(${translateImg("BK", 14)}) 등 죽창 콤보에 당할 수 있다. 
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
  윈드 블레이드(${translateImg("BK", 21)}), 숄더 차지(${translateImg(
    "BK",
    5
  )}) 등의 돌진기를
  거리 조절을 통해 피했다면 반격할텐데 이 때 버서커의 피면기에 카운터를 맞고 빈사가 될 수도 있다.
  대신 버서커의 피면기 스킬 쿨이 제법 긴 편이기 때문에 심리전을 통해 스킬을 하나 둘 뺀다면 카운터를 당해도 큰 피해를 입지 않을 수도 있다.
  <br><br>
  단 폭주 상태가 되면 공이속 20% 증가로 인해 대부분의 판정 싸움에서 질 수밖에 없으니 좋은 타이밍이 아니라면 도망다니며 시간을 끄는 것이 좋다.`,
  combo: ``,
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
  combo: `<img src="${ICON_ADDRESS}/DT_Skill/DT_Skill_01_16.png" />`,
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
  combo: ``,
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
  combo: ``,
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
    쿨타임이 5초로 상당히 빠르며 이후 ${translateImg("IF", 13)}${translateImg(
      "IF",
      14
    )}${translateImg("IF", 20)} 등 쿨타임 남아있는 스킬로 연계도 간단하다.`,
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
  타이밍을 바꿔서 진입할 수 있으니 해당사항 유의할 것.
  <br><br>
  각성기는 1각, 2각 취향이나 작성자가 2각(<img src="${ICON_ADDRESS}/IF_Skill/IF_Skill_01_23.png" class="small-icon" />) 취향이라 2각으로 넣었음`,
  combo: `<span class="stress">1. 기본 콤보</span>
  <br><br>
  ${translateImg("IF", 0)} ▶ ${translateImg("IF", 12)} ▶ ${translateImg(
    "IF",
    13
  )} ▶ ${translateImg("IF", 20)}
  <br>
  스킬을 조금만 늦게 눌러도 일망 경직 후에 스페를 쓸 수도 있으니 안전하게 하려면 ${translateImg(
    "IF",
    0
  )} ▶ ${translateImg("IF", 13)} ▶ ${translateImg("IF", 20)}로
  바로 진용출로 이어가는 것도 좋다.
  <br><br>
  <span class="stress">2. 풀 콤보</span>
  <br><br>
  ${translateImg("IF", 0)} ▶ ${translateImg("IF", 12)} ▶ ${translateImg(
    "IF",
    13
  )} ▶ ${translateImg("IF", 20)} ▶ ${translateImg("IF", 14)} ▶ ${translateImg(
    "IF",
    10
  )}
  <br>
  일망 후에 순타 기절로 저울을 초기화한 후 기절 유지시간 동안 진용출 후 맹호격으로 다시 띄워 죽선까지 맞추는 콤보<br>
  죽선까지 적중 시 반피 가까이 삭제시킬 수 있으며 바로 저울이 뜨므로 쿨관리를 위해 거리를 벌리는 것이 좋다.`,
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
  combo: ``,
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
    쿨타임 : 16s
    슈퍼아머 : 경직 면역
    피격 판정 : 경직(강경직), 피격이상(에어본)
    `,
    //화조
    `
    쿨타임 : 18s
    슈퍼아머 : 경직 면역
    피격 판정 : 상태이상(동결)/피격이상(에어본)
    `,
    //붕천퇴
    `
    쿨타임 : 8s
    슈퍼아머 : 없음
    피격 판정 : 피격이상(에어본)
    `,
    //월섬각
    `
    쿨타임 : 22s
    슈퍼아머 : 경직 면역
    피격 판정 : 피격이상(에어본)
    `,
    //뇌명각
    `
    쿨타임 : 9s
    슈퍼아머 : 경직 면역
    피격 판정 : 경직(강경직)
    `,
    //초풍각
    `
    쿨타임 : 20s
    슈퍼아머 : 경직 면역
    피격 판정 : 피격이상(에어본)
    `,
    //방천격
    `
    쿨타임 : 25s
    슈퍼아머 : 경직 면역
    피격 판정 : 피격이상(넉백, 에어본)
    `,
    //번속
    `
    쿨타임 : 25s
    슈퍼아머 : 없음
    피격 판정 : 경직(강경직)
    `,
    //운룡각
    `
    쿨타임 : 8s
    슈퍼아머 : 경직 면역(3타만)
    피격 판정 : 경직(1, 2타 : 강경직) 피격이상(3타 : 에어본)
    `,
    //광폭진
    `
    쿨타임 : 24s
    슈퍼아머 : 경직 면역
    피격 판정 : 상태이상(동결), 피격이상(넉백, 에어본)
    `,
    //뇌호격
    `
    쿨타임 : 18s
    슈퍼아머 : 피격이상 면역
    피격 판정 : 피격이상(에어본)
    `,
    //각성기
    `
    슈퍼아머 : 피격이상 면역, 상태이상 면역
    피격 판정 : 경직(강격직), 피격이상(넉백, 에어본)
    `,
  ],
  enter: [2, 12, 16, 18, 29, 35],
  enterExp: [
    `속칭 윈드밀로 불리며 슬라이딩 후 추가입력 시 한바퀴 돌며 에어본시킨다. 카운터 칠 스킬이 전부 쿨타임인 경우가 아니라면 해당 스킬로 에어본되는 경우는 별로 없으며 
    주로 거리를 좁혀 다른 진입기(${translateImg("BM", 16)} ${translateImg(
      "BM",
      18
    )})를 사용할 때 쓴다.`,
    `16:9 모니터 기준 상대가 21:9 모니터를 사용한다면 화면 밖에서 날아와 반응하기 힘들어지는 스킬. 피격 시 트포에 따라 에어본 혹은 동결이 된다. 스커는 상태이상 스킬이 거의 없기 때문에
    주로 동결을 사용하며 소리를 듣고도 화조 사용 유무를 알 수 있기 때문에 스페로 면역을 띄워 피하거나 반격하기는 수월한 편`,
    `돌진 후 한바퀴 돌아 띄우는 모션이지만 돌진을 맞는 순간 에어본이어서 판정이 좋은 편이다. 주로 잠룡(${translateImg(
      "BM",
      2
    )})으로 거리를 좁혀 스페 ▶ 월섬을 하거나
    잠룡 ▶ 월섬을 이용해 에어본을 시킨다.`,
    `쿨타임이 짧고 반응하기도 쉽지 않아 스커들이 애용하는 견제기이다. 주로 상대가 뇌명각을 카운터치기 위해 스페나 스킬을 사용하길 유도할 때 사용하며 혹여 맞는다면 운룡각(${translateImg(
      "BM",
      29
    )})
    을 사용해 에어본시킨다.`,
    `3회 체인 스킬로 1타, 2타에는 경직 면역이 없지만 3타에는 경직 면역과 피격이상(에어본)이 붙어 있다. 2타까지는 허공에 버리고 뇌명각(${translateImg(
      "BM",
      18
    )})을 쓰고 3타를 쓰거나
    진입기 중 1개라도 맞으면 사용해 콤보를 잇는다.`,
    `스커의 유일한 피면기이며, 긴 거리와 2회 사용이라는 특징 때문에 첫 공중콤보로 인해 기상기를 뺀 상대를 추노하는 용도로 많이 사용한다.
    이동속도가 상당히 빠르기 떄문에 예상하지 않는 한 상태이상기로 맞춰 끊기도 힘들어 제일 좋은 대처는 스페를 쓰거나 피면기를 같이 써서 에어본당하지 않는 것이다.
    공중콤보 후 뇌호격으로 2다운이 되면 각성기를 맞고 빈사상태가 될 수도 있다.`,
  ],
  immuneExp: `스트라이커는 스킬트리에 따라 8개 중 7개를 경면으로 사용할 수도 있는 직업이라 <span class="stress">경직 위주로 플레이하는 직업에게 유리</span>하다.
  <br><br>하지만 피면이상은 뇌호격 1개밖에 없어 상태이상이 많은 직업의 스킬을 잘 파악하고 있어야 한다.`,
  stiff: [2, 12, 16, 18, 23, 26, 33, 35],
  sitffExp: "",
  hit: [35],
  hitExp: "",
  winPlan: `스커는 상성이 명확한 캐릭터로 경직 위주 캐릭터에게는 강하고 피면과 피격이상이 많은 캐릭터에게는 상대적으로 힘든 편이다.`,
  combo: `<span class="stress">1. 기본 공중콤보</span>
  <br><br>
  ${translateImg("BM", 2)} ▶ ${translateImg("BM", 16)} ▶ ${translateImg(
    "BM",
    29
  )} ▶ ${translateImg("BM", 29)} ▶ ${translateImg("BM", 29)} ▶ ${translateImg(
    "BM",
    28
  )} 
  ▶ ${translateImg("BM", 23)}
  <br>
  가장 기본적인 공중 콤보로 번속을 쓰지 않는 트리인 경우 평타 2방 혹은 붕천퇴를 쓰면 된다.
  <br><br>
  <span class="stress">2. 공중콤보 응용</span>
  <br><br>
  ${translateImg("BM", 18)} ▶ ${translateImg("BM", 29)} ▶ ${translateImg(
    "BM",
    29
  )} ▶ ${translateImg("BM", 29)} ▶ ${translateImg("BM", 28)} 
  ▶ ${translateImg("BM", 16)}  ▶ ${translateImg("BM", 35)} ▶ ${translateImg(
    "BM",
    35
  )} ▶ ${translateImg("BM", 23)}
  <br>
  뇌명각 적중 시 월섬각으로 띄우지 않아도 운룡각으로 에어본시킬 수 있는 것을 응용해 버블을 채운 후 뇌호격까지 사용하는 콤보이다.<br>
  뇌호격 2타에 저울이 떠서 초풍각을 못맞출 수도 있으니 주의해야한다.
  (사실 뇌호격은 보통 2다운용으로 쓰기 때문에 에어본 스킬이 전부 쿨타임인 경우가 아니라면 콤보 중간에는 잘 쓰지 않는다.)<br>`,
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
  combo: ``,
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
  combo: ``,
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
  combo: ``,
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
  combo: ``,
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
  combo: ``,
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
  combo: ``,
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
  combo: ``,
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
  combo: ``,
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
  combo: ``,
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
  combo: ``,
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
  combo: ``,
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
  combo: ``,
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
  combo: ``,
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
  combo: ``,
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
  combo: ``,
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
