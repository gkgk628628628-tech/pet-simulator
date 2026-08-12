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
    image: catAsset("menu/play-cat.webp"), // cat을 새 동물의 영문 이름으로 변경
  },
  {
    id: "cat-action-3", // cat을 새 동물의 영문 이름으로 변경
    name: "화장실 청소하기",
    image: catAsset("menu/mdeicine.webp"), // cat을 새 동물의 영문 이름으로 변경
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
        actionImage: catAsset("actions/water-catbp"), // cat을 새 동물의 영문 이름으로 변경
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
    background: catAsset("backgrounds/두번째-행동-배경-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
    instruction: "물건을 움직일 때 표시할 안내 문구 입력",
    progressMessage: "물건을 놓은 뒤 표시할 문구 입력",
    options: [
      {
        id: "cat-action-2-option-1", // cat을 새 동물의 영문 이름으로 변경
        name: "첫 번째 세부 행동 버튼 문구 입력",
        image: catAsset("items/첫-선택-버튼-이미지-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
        actionImage: catAsset("actions/첫-행동-이미지-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
        reaction: "첫 번째 세부 행동이 끝난 뒤 표시할 문구 입력",
      },
      {
        id: "cat-action-2-option-2", // cat을 새 동물의 영문 이름으로 변경
        name: "두 번째 세부 행동 버튼 문구 입력",
        image: catAsset("items/두번째-선택-버튼-이미지-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
        actionImage: catAsset("actions/두번째-행동-이미지-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
        reaction: "두 번째 세부 행동이 끝난 뒤 표시할 문구 입력",
      },
      {
        id: "cat-action-2-option-3", // cat을 새 동물의 영문 이름으로 변경
        name: "세 번째 세부 행동 버튼 문구 입력",
        image: catAsset("items/세번째-선택-버튼-이미지-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
        actionImage: catAsset("actions/세번째-행동-이미지-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
        reaction: "세 번째 세부 행동이 끝난 뒤 표시할 문구 입력",
      },
      {
        id: "cat-action-2-option-4", // cat을 새 동물의 영문 이름으로 변경
        name: "네 번째 세부 행동 버튼 문구 입력",
        image: catAsset("items/네번째-선택-버튼-이미지-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
        actionImage: catAsset("actions/네번째-행동-이미지-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
        reaction: "네 번째 세부 행동이 끝난 뒤 표시할 문구 입력",
      },
    ],
  },

  "cat-action-3": { // cat을 새 동물의 영문 이름으로 변경
    // ↑ catActions의 세 번째 ID와 동일하게 입력 // cat을 새 동물의 영문 이름으로 변경
    interaction: "drag-timer",
    // 상호작용 방식 고정: 동물을 일정 시간 드래그
    duration: 10,
    background: catAsset("backgrounds/세번째-행동-배경-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
    instruction: "동물을 움직이는 동안 표시할 안내 문구 입력",
    options: [
      {
        id: "cat-action-3-option-1", // cat을 새 동물의 영문 이름으로 변경
        name: "첫 번째 세부 행동 버튼 문구 입력",
        image: catAsset("items/첫-선택-버튼-이미지-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
        background: catAsset("backgrounds/첫-선택-후-배경-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
        actionImage: catAsset("actions/첫-행동-이미지-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
        reaction: "첫 번째 세부 행동이 끝난 뒤 표시할 문구 입력",
      },
      {
        id: "cat-action-3-option-2", // cat을 새 동물의 영문 이름으로 변경
        name: "두 번째 세부 행동 버튼 문구 입력",
        image: catAsset("items/두번째-선택-버튼-이미지-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
        background: catAsset("backgrounds/두번째-선택-후-배경-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
        actionImage: catAsset("actions/두번째-행동-이미지-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
        reaction: "두 번째 세부 행동이 끝난 뒤 표시할 문구 입력",
      },
      {
        id: "cat-action-3-option-3", // cat을 새 동물의 영문 이름으로 변경
        name: "세 번째 세부 행동 버튼 문구 입력",
        image: catAsset("items/세번째-선택-버튼-이미지-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
        background: catAsset("backgrounds/세번째-선택-후-배경-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
        actionImage: catAsset("actions/세번째-행동-이미지-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
        reaction: "세 번째 세부 행동이 끝난 뒤 표시할 문구 입력",
      },
      {
        id: "cat-action-3-option-4", // cat을 새 동물의 영문 이름으로 변경
        name: "네 번째 세부 행동 버튼 문구 입력",
        image: catAsset("items/네번째-선택-버튼-이미지-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
        background: catAsset("backgrounds/네번째-선택-후-배경-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
        actionImage: catAsset("actions/네번째-행동-이미지-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
        reaction: "네 번째 세부 행동이 끝난 뒤 표시할 문구 입력",
      },
    ],
  },

  "cat-action-4": { // cat을 새 동물의 영문 이름으로 변경
    interaction: "pet-timer",
    // 상호작용 방식 고정: 세부 선택 없이 10초 동안 도구를 움직임
    duration: 10,
    instruction: "상호작용하는 동안 표시할 안내 문구 입력",
    toolImage: catAsset("tools/움직이는-도구-이미지-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
    reaction: "10초 상호작용이 끝난 뒤 표시할 문구 입력",
  },
};

const requests = [
  {
    activityId: "cat-action-1", // cat을 새 동물의 영문 이름으로 변경
    //           ↑ 연결할 큰 행동 ID 입력
    optionId: "cat-action-1-option-1", // cat을 새 동물의 영문 이름으로 변경
    //         ↑ 연결할 세부 행동 ID 입력
    before: "강조 문구 앞에 표시할 내용 입력",
    highlight: "강조색으로 표시할 핵심 문구 입력",
    after: "강조 문구 뒤에 표시할 내용 입력",
  },
  {
    activityId: "cat-action-1", // cat을 새 동물의 영문 이름으로 변경
    optionId: "cat-action-1-option-2", // cat을 새 동물의 영문 이름으로 변경
    before: "강조 문구 앞에 표시할 내용 입력",
    highlight: "강조색으로 표시할 핵심 문구 입력",
    after: "강조 문구 뒤에 표시할 내용 입력",
  },
  {
    activityId: "cat-action-1", // cat을 새 동물의 영문 이름으로 변경
    optionId: "cat-action-1-option-3", // cat을 새 동물의 영문 이름으로 변경
    before: "강조 문구 앞에 표시할 내용 입력",
    highlight: "강조색으로 표시할 핵심 문구 입력",
    after: "강조 문구 뒤에 표시할 내용 입력",
  },
  {
    activityId: "cat-action-1", // cat을 새 동물의 영문 이름으로 변경
    optionId: "cat-action-1-option-4", // cat을 새 동물의 영문 이름으로 변경
    before: "강조 문구 앞에 표시할 내용 입력",
    highlight: "강조색으로 표시할 핵심 문구 입력",
    after: "강조 문구 뒤에 표시할 내용 입력",
  },
  {
    activityId: "cat-action-2", // cat을 새 동물의 영문 이름으로 변경
    optionId: "cat-action-2-option-1", // cat을 새 동물의 영문 이름으로 변경
    before: "강조 문구 앞에 표시할 내용 입력",
    highlight: "강조색으로 표시할 핵심 문구 입력",
    after: "강조 문구 뒤에 표시할 내용 입력",
  },
  {
    activityId: "cat-action-2", // cat을 새 동물의 영문 이름으로 변경
    optionId: "cat-action-2-option-2", // cat을 새 동물의 영문 이름으로 변경
    before: "강조 문구 앞에 표시할 내용 입력",
    highlight: "강조색으로 표시할 핵심 문구 입력",
    after: "강조 문구 뒤에 표시할 내용 입력",
  },
  {
    activityId: "cat-action-2", // cat을 새 동물의 영문 이름으로 변경
    optionId: "cat-action-2-option-3", // cat을 새 동물의 영문 이름으로 변경
    before: "강조 문구 앞에 표시할 내용 입력",
    highlight: "강조색으로 표시할 핵심 문구 입력",
    after: "강조 문구 뒤에 표시할 내용 입력",
  },
  {
    activityId: "cat-action-2", // cat을 새 동물의 영문 이름으로 변경
    optionId: "cat-action-2-option-4", // cat을 새 동물의 영문 이름으로 변경
    before: "강조 문구 앞에 표시할 내용 입력",
    highlight: "강조색으로 표시할 핵심 문구 입력",
    after: "강조 문구 뒤에 표시할 내용 입력",
  },
  {
    activityId: "cat-action-3", // cat을 새 동물의 영문 이름으로 변경
    optionId: "cat-action-3-option-1", // cat을 새 동물의 영문 이름으로 변경
    before: "강조 문구 앞에 표시할 내용 입력",
    highlight: "강조색으로 표시할 핵심 문구 입력",
    after: "강조 문구 뒤에 표시할 내용 입력",
  },
  {
    activityId: "cat-action-3", // cat을 새 동물의 영문 이름으로 변경
    optionId: "cat-action-3-option-2", // cat을 새 동물의 영문 이름으로 변경
    before: "강조 문구 앞에 표시할 내용 입력",
    highlight: "강조색으로 표시할 핵심 문구 입력",
    after: "강조 문구 뒤에 표시할 내용 입력",
  },
  {
    activityId: "cat-action-3", // cat을 새 동물의 영문 이름으로 변경
    optionId: "cat-action-3-option-3", // cat을 새 동물의 영문 이름으로 변경
    before: "강조 문구 앞에 표시할 내용 입력",
    highlight: "강조색으로 표시할 핵심 문구 입력",
    after: "강조 문구 뒤에 표시할 내용 입력",
  },
  {
    activityId: "cat-action-3", // cat을 새 동물의 영문 이름으로 변경
    optionId: "cat-action-3-option-4", // cat을 새 동물의 영문 이름으로 변경
    before: "강조 문구 앞에 표시할 내용 입력",
    highlight: "강조색으로 표시할 핵심 문구 입력",
    after: "강조 문구 뒤에 표시할 내용 입력",
  },
  {
    activityId: "cat-action-4", // cat을 새 동물의 영문 이름으로 변경
    optionId: null,
    // 네 번째 행동에는 세부 선택지가 없으므로 null 유지
    before: "강조 문구 앞에 표시할 내용 입력",
    highlight: "강조색으로 표시할 핵심 문구 입력",
    after: "강조 문구 뒤에 표시할 내용 입력",
  },
];

export const cat = { // cat을 새 동물의 영문 이름으로 변경
  //           ↑ 새 동물의 영문 이름으로 변경
  id: "cat", // cat을 새 동물의 영문 이름으로 변경
  //   ↑ 새 동물의 영문 ID로 변경
  name: "화면에 표시할 동물 이름 입력",
  selectionImage: catAsset("pet.webp"), // cat을 새 동물의 영문 이름으로 변경
  defaultImage: catAsset("pet.webp"), // cat을 새 동물의 영문 이름으로 변경
  homeBackground: catAsset("backgrounds/집-배경-파일명.webp"), // cat을 새 동물의 영문 이름으로 변경
  available: true,
  actions: catActions, // cat을 새 동물의 영문 이름으로 변경
  //       ↑ 새 동물 이름으로 변경
  activities,
  requests,
};