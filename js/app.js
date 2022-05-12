const classes = document.querySelectorAll(".classes");
const containerRepSkill = document.querySelector(".class-skill__rep");
const containerEnterSkill = document.querySelector(".class-skill__enter");
const containerStiffSkill = document.querySelector(".immune-skill__stiff");
const containerHitSkill = document.querySelector(".immune-skill__hit");

const CLASS_HIDDEN = "hidden";
const CLASS_BIGICON = "big-icon";

const inputSKillImg = (whatClass, whichSkill, container) => {
  let listSkillImg = [];

  container.removeChild(container.children[1]);
  switch (whichSkill) {
    case "rep":
      listSkillImg = whatClass.rep;
      break;
    case "enter":
      listSkillImg = whatClass.enter;
      break;
    case "stiff":
      listSkillImg = whatClass.stiff;
      break;
    case "hit":
      listSkillImg = whatClass.hit;
      break;
  }

  const ulSkill = document.createElement("ul");
  ulSkill.classList.add(`${whichSkill}-skill__icons`);

  for (let cnt = 0; cnt < listSkillImg.length; cnt++) {
    const li = document.createElement("li");
    li.classList.add("skill-icon");
    li.classList.add(`${whichSkill}-skill__icon`);

    const img = document.createElement("img");
    img.src = `https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/${whatClass.classcode}_Skill/${whatClass.classcode}_Skill_01_${listSkillImg[cnt]}.png`;

    li.appendChild(img);
    ulSkill.appendChild(li);
    container.appendChild(ulSkill);
  }
};

const hiddenSkillExp = () => {
  const popups = containerRepSkill.querySelectorAll(".popup");
  const icons = containerRepSkill.querySelectorAll(".rep-skill__icon > img");
  popups.forEach((element) => {
    element.classList.add(CLASS_HIDDEN);
  });
  icons.forEach((icon) => {
    icon.classList.remove(CLASS_BIGICON);
  });
};

const inputSkillExp = (whatClass) => {
  const repSkillIcons = containerRepSkill.querySelectorAll(".rep-skill__icon");

  repSkillIcons.forEach((repSkillIcon, idx) => {
    const div = document.createElement("div");
    div.classList.add("popup");
    div.classList.add(CLASS_HIDDEN);

    const span = document.createElement("span");
    span.classList.add("popup-title");
    span.innerText = whatClass.motion[idx];

    const exp = document.createElement("span");
    exp.classList.add("popup-exp");
    exp.innerText = whatClass.exp[idx];

    const img = document.createElement("img");
    img.src = `./img/${whatClass.classcode}/${whatClass.motion[idx]}.gif`;

    div.appendChild(span);
    div.appendChild(exp);
    div.appendChild(img);
    repSkillIcon.appendChild(div);
  });

  //addEventListener
  const repSkillImgs = containerRepSkill.querySelectorAll(
    ".rep-skill__icon > img"
  );
  repSkillImgs.forEach((repSkillImg) => {
    repSkillImg.addEventListener("click", (event) => {
      const target = event.path[1].children[1];
      if (target.classList.contains(CLASS_HIDDEN)) {
        hiddenSkillExp();
      }
      repSkillImg.classList.toggle(CLASS_BIGICON);
      target.classList.toggle(CLASS_HIDDEN);
    });
  });
};

const inputEnterExp = (whatClass) => {
  const enterSkillIcons =
    containerEnterSkill.querySelectorAll(".enter-skill__icon");

  enterSkillIcons.forEach((enterSkillicon, idx) => {
    const span = document.createElement("span");
    span.innerText = whatClass.enterExp[idx];
    span.classList.add("enter-skill__exp");

    enterSkillicon.appendChild(span);
  });
};

const handleClassClick = (event) => {
  const className = document.querySelector(".class-name");
  const target = event.target.innerText;
  className.innerText = target;
  const whatClass = classCode.get(target);

  // 스킬 이미지 불러오기
  inputSKillImg(whatClass, "rep", containerRepSkill);
  inputSkillExp(whatClass);
  inputSKillImg(whatClass, "enter", containerEnterSkill);
  inputEnterExp(whatClass);
  inputSKillImg(whatClass, "stiff", containerStiffSkill);
  inputSKillImg(whatClass, "hit", containerHitSkill);

  // 면역 설명
  const immuneExp = document.querySelector(".immune__exp");
  immuneExp.innerText = whatClass.immuneExp;

  const winPlan = document.querySelector(".win-plan > span");
  winPlan.innerText = whatClass.winPlan;

  const adv = document.querySelector(".adv > span");
  adv.innerText = whatClass.adv;
};

classes.forEach((element) => {
  element.addEventListener("click", handleClassClick);
});
