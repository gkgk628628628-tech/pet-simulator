const catAsset = (path) => `/assets/animals/cat/${path}`; // cat을 새 동물의 영문 이름으로 변경
//    ↑ 새 동물 이름으로 변경             ↑ 새 동물 이미지 폴더명으로 변경

const catActions = [ // cat을 새 동물의 영문 이름으로 변경
  //  ↑ 새 동물 이름으로 변경
  {
    id: "cat-action-1", // cat을 새 동물의 영문 이름으로 변경
    name: "먹이주기",
    image: catAsset("menu/food.webp"), // cat을 새 동물의 영문 이름으로 변경
  },
  {
    id: "cat-action-2", // cat을 새 동물의 영문 이름으로 변경
    name: "놀아주기",
    image: catAsset("menu/play-tool.webp"), // cat을 새 동물의 영문 이름으로 변경
  },
  {
    id: "cat-action-3", // cat을 새 동물의 영문 이름으로 변경
    name: "화장실 청소하기",
    image: catAsset("menu/clean-tool.webp"), // cat을 새 동물의 영문 이름으로 변경
  },
  {
    id: "cat-action-4", // cat을 새 동물의 영문 이름으로 변경
    name: "빗질하기",
    image: catAsset("menu/comb.webp"), // cat을 새 동물의 영문 이름으로 변경
  },
];

const activities = {
  "cat-action-1": { // cat을 새 동물의 영문 이름으로 변경
    // ↑ catActions의 첫 번째 ID와 동일하게 입력 // cat을 새 동물의 영문 이름으로 변경
    interaction: "instant",
    // 상호작용 방식 고정: 선택 즉시 반응
    background: catAsset("backgrounds/food-cat-background.webp"), // cat을 새 동물의 영문 이름으로 변경
    //                                  ↑ 실제 파일명 입력
    options: [
      {
        id: "cat-action-1-option-1", // cat을 새 동물의 영문 이름으로 변경
        //   ↑ 첫 번째 세부 행동 ID 입력
        name: "물",
        image: catAsset("items/water.webp"), // cat을 새 동물의 영문 이름으로 변경
        //                     ↑ 실제 파일명 입력
        actionImage: catAsset("actions/water-cat.webp"), // cat을 새 동물의 영문 이름으로 변경
        //                             ↑ 실제 파일명 입력
        reaction: "시원하게 물을 마셨어요!",
      },
      {
        id: "cat-action-1-option-2", // cat을 새 동물의 영문 이름으로 변경
        name: "사료",
        image: catAsset("items/food.webp"), // cat을 새 동물의 영문 이름으로 변경
        actionImage: catAsset("actions/food-cat.webp"), // cat을 새 동물의 영문 이름으로 변경
        reaction: "냠냠! 사료를 맛있게 먹었어요!",
      },
      {
        id: "cat-action-1-option-3", // cat을 새 동물의 영문 이름으로 변경
        name: "간식",
        image: catAsset("items/chew.webp"), // cat을 새 동물의 영문 이름으로 변경
        actionImage: catAsset("actions/chew-cat.webp"), // cat을 새 동물의 영문 이름으로 변경
        reaction: "제일 좋아하는 간식이에요!",
      },
      {
        id: "cat-action-1-option-4", // cat을 새 동물의 영문 이름으로 변경
        name: "약",
        image: catAsset("items/medicine.webp"), // cat을 새 동물의 영문 이름으로 변경
        actionImage: catAsset("actions/medicine-cat.webp"), // cat을 새 동물의 영문 이름으로 변경
        reaction: "건강해지는 약도 잘 먹었어요!",
      },
    ],
  },

  "cat-action-2": { // cat을 새 동물의 영문 이름으로 변경
    // ↑ catActions의 두 번째 ID와 동일하게 입력 // cat을 새 동물의 영문 이름으로 변경
    interaction: "place",
    // 상호작용 방식 고정: 물건을 움직여 원하는 위치에 놓기
    completionDelay: 1300,
    background: catAsset("backgrounds/cat-house.webp"), // cat을 새 동물의 영문 이름으로 변경
    instruction: "장난감을 움직여서 원하는 곳에 놓아 주세요!",
    progressMessage: "고양이가 장난감을 따라가요!",
    options: [
      {
        id: "cat-action-2-option-1", // cat을 새 동물의 영문 이름으로 변경
        name: "공",
        image: catAsset("items/ball(2).webp"), // cat을 새 동물의 영문 이름으로 변경
        actionImage: catAsset("actions/ball(2)-cat.webp"), // cat을 새 동물의 영문 이름으로 변경
        reaction: "공 놀이 신나요!",
      },
      {
        id: "cat-action-2-option-2", // cat을 새 동물의 영문 이름으로 변경
        name: "깃털 낚시대",
        image: catAsset("items/git.webp"), // cat을 새 동물의 영문 이름으로 변경
        actionImage: catAsset("actions/fish-cat.webp"), // cat을 새 동물의 영문 이름으로 변경
        reaction: "깃털 잡았어요! 신나요!",
      },
      {
        id: "cat-action-2-option-3", // cat을 새 동물의 영문 이름으로 변경
        name: "장난감",
        image: catAsset("items/mousebot.webp"), // cat을 새 동물의 영문 이름으로 변경
        actionImage: catAsset("actions/mousebot-cat.webp"), // cat을 새 동물의 영문 이름으로 변경
        reaction: "움직이는 장난감 재밌어요!",
      },
      {
        id: "cat-action-2-option-4", // cat을 새 동물의 영문 이름으로 변경
        name: "인형",
        image: catAsset("items/toy.webp"), // cat을 새 동물의 영문 이름으로 변경
        actionImage: catAsset("actions/toy-fish.webp"), // cat을 새 동물의 영문 이름으로 변경
        reaction: "인형이 푹신해요!"
      },
    ],
  },

  "cat-action-3": { // cat을 새 동물의 영문 이름으로 변경
    // ↑ catActions의 세 번째 ID와 동일하게 입력 // cat을 새 동물의 영문 이름으로 변경
    interaction: "drag-timer",
    // 상호작용 방식 고정: 동물을 일정 시간 드래그
    dragImage: catAsset("drag/comb.webp"), // 드래그할 이미지 (삽?)
    hidePetOnComplete: true,
    duration: 10,
    completionDelay: 1300,
    background: catAsset("backgrounds/(back)toilet.webp"), // cat을 새 동물의 영문 이름으로 변경
    instruction: "",
    progressMessage: "화장실이 깨끗해졌어요!",
    options: [
      {
        id: "cat-action-3-option-1", // cat을 새 동물의 영문 이름으로 변경
        name: "대변 치우기",
        image: catAsset("items/ddong-out(2).webp"), // cat을 새 동물의 영문 이름으로 변경
        background: catAsset("backgrounds/(b)ddong.webp"),
        actionImage: catAsset("actions/ddong-out(2).webp"), // cat을 새 동물의 영문 이름으로 변경
        reaction: "대변을 치워줘서 고마워요!",
      },
      {
        id: "cat-action-3-option-2", // cat을 새 동물의 영문 이름으로 변경
        name: "뭉친 모래 치우기",
        image: catAsset("items/pee-put(2).webp"), // cat을 새 동물의 영문 이름으로 변경
        background: catAsset("backgrounds/(b)pee.webp"),
        actionImage: catAsset("actions/pee-put(2).webp"), // cat을 새 동물의 영문 이름으로 변경
        reaction: "뭉친 모래를 치워줘서 고마워요!",
      },
      {
        id: "cat-action-3-option-3", // cat을 새 동물의 영문 이름으로 변경
        name: "모래 채우기",
        image: catAsset("items/more-sand(2).webp"), // cat을 새 동물의 영문 이름으로 변경
        background: catAsset("backgrounds/(b)sand.webp"),
        actionImage: catAsset("actions/more-sand(2).webp"), // cat을 새 동물의 영문 이름으로 변경
        reaction: "새 모래가 채워져서 기분이 좋아요!",
      },
      {
        id: "cat-action-3-option-4", // cat을 새 동물의 영문 이름으로 변경
        name: "정리하기",
        image: catAsset("items/clean(2).webp"), // cat을 새 동물의 영문 이름으로 변경
        background: catAsset("backgrounds/(b)dirty.webp"),
        actionImage: catAsset("actions/clean(2).webp"), // cat을 새 동물의 영문 이름으로 변경
        reaction: "주변을 깨끗하게 정리해줘서 고마워요!",
      },
    ],
  },

  "cat-action-4": { // cat을 새 동물의 영문 이름으로 변경
    interaction: "pet-timer",
    // 상호작용 방식 고정: 세부 선택 없이 10초 동안 도구를 움직임
    duration: 10,
    instruction: "빗으로 털을 빗어 주세요!",
    toolImage: catAsset("tools/comb.webp"), // cat을 새 동물의 영문 이름으로 변경
    reaction: "털이 부드러워졌어요!",
  },
};

const requests = [
  {
    activityId: "cat-action-1", // cat을 새 동물의 영문 이름으로 변경
    //           ↑ 연결할 큰 행동 ID 입력
    optionId: "cat-action-1-option-1", // cat을 새 동물의 영문 이름으로 변경
    //         ↑ 연결할 세부 행동 ID 입력
    before: "지금은 ",
    highlight: "목이 말라요",
    after: ".",
  },
  {
    activityId: "cat-action-1", // cat을 새 동물의 영문 이름으로 변경
    optionId: "cat-action-1-option-2", // cat을 새 동물의 영문 이름으로 변경
    before: "지금은 ",
    highlight: "배가 고파요",
    after: ".",
  },
  {
    activityId: "cat-action-1", // cat을 새 동물의 영문 이름으로 변경
    optionId: "cat-action-1-option-3", // cat을 새 동물의 영문 이름으로 변경
    before: "지금은 ",
    highlight: "간식",
    after: "이 먹고 싶어요.",
  },
  {
    activityId: "cat-action-1", // cat을 새 동물의 영문 이름으로 변경
    optionId: "cat-action-1-option-4", // cat을 새 동물의 영문 이름으로 변경
    before: "너무 아파요.",
    highlight: "약",
    after: "이 필요해요.",
  },
  {
    activityId: "cat-action-2", // cat을 새 동물의 영문 이름으로 변경
    optionId: "cat-action-2-option-1", // cat을 새 동물의 영문 이름으로 변경
    before: "지금은 ",
    highlight: "공",
    after: "가지고 놀래요.",
  },
  {
    activityId: "cat-action-2", // cat을 새 동물의 영문 이름으로 변경
    optionId: "cat-action-2-option-2", // cat을 새 동물의 영문 이름으로 변경
    before: "지금은 ",
    highlight: "깃털 낚시대",
    after: "가지고 놀래요.",
  },
  {
    activityId: "cat-action-2", // cat을 새 동물의 영문 이름으로 변경
    optionId: "cat-action-2-option-3", // cat을 새 동물의 영문 이름으로 변경
    before: "지금은 ",
    highlight: "장난감",
    after: "가지고 놀래요.",
  },
  {
    activityId: "cat-action-2", // cat을 새 동물의 영문 이름으로 변경
    optionId: "cat-action-2-option-4", // cat을 새 동물의 영문 이름으로 변경
    before: "지금은 ",
    highlight: "인형",
    after: "가지고 놀래요.",
  },
  {
    activityId: "cat-action-3", // cat을 새 동물의 영문 이름으로 변경
    optionId: "cat-action-3-option-1", // cat을 새 동물의 영문 이름으로 변경
    before: "냄새나요.",
    highlight: "대변",
    after: "을 치워 주세요!",
  },
  {
    activityId: "cat-action-3", // cat을 새 동물의 영문 이름으로 변경
    optionId: "cat-action-3-option-2", // cat을 새 동물의 영문 이름으로 변경
    before: "모래가 뭉쳤어요.",
    highlight: "뭉친 모래",
    after: "를 치워 주세요.",
  },
  {
    activityId: "cat-action-3", // cat을 새 동물의 영문 이름으로 변경
    optionId: "cat-action-3-option-3", // cat을 새 동물의 영문 이름으로 변경
    before: "모래가 부족해요.",
    highlight: "새 모래",
    after: "를 채워 주세요.",
  },
  {
    activityId: "cat-action-3", // cat을 새 동물의 영문 이름으로 변경
    optionId: "cat-action-3-option-4", // cat을 새 동물의 영문 이름으로 변경
    before: "주변에",
    highlight: "모래가 떨어져있어요",
    after: ". 깨끗하게 정리해 주세요!",
  },
  {
    activityId: "cat-action-4", // cat을 새 동물의 영문 이름으로 변경
    optionId: null,
    // 네 번째 행동에는 세부 선택지가 없으므로 null 유지
    before: "",
    highlight: "털이 엉켰어요",
    after: ".",
  },
];

export const cat = { // cat을 새 동물의 영문 이름으로 변경
  //           ↑ 새 동물의 영문 이름으로 변경
  id: "cat", // cat을 새 동물의 영문 이름으로 변경
  //   ↑ 새 동물의 영문 ID로 변경
  name: "고양이",
  selectionImage: catAsset("pet.webp"), // cat을 새 동물의 영문 이름으로 변경
  defaultImage: catAsset("pet.webp"), // cat을 새 동물의 영문 이름으로 변경
  homeBackground: catAsset("backgrounds/cat-house.webp"), // cat을 새 동물의 영문 이름으로 변경
  available: true,
  actions: catActions, // cat을 새 동물의 영문 이름으로 변경
  //       ↑ 새 동물 이름으로 변경
  activities,
  requests,
};