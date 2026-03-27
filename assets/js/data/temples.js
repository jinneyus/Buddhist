export const temples = [
  {
    id: 1,
    name: "불국사",
    englishName: "Bulguksa",
    region: "경북",
    city: "경주시",
    address: "경상북도 경주시 불국로 385",
    lat: 35.7895,
    lng: 129.3317,
    phone: "054-746-9913",
    website: "https://www.bulguksa.or.kr",
    founded: "528년 (신라 법흥왕 15년)",
    denomination: "대한불교조계종 제11교구 본사",
    mainBuddha: "아미타불",
    description:
      "신라 법흥왕 때 창건되어 경덕왕 때 크게 중창된 대사찰로, 1995년 유네스코 세계문화유산으로 등재되었습니다. 다보탑과 석가탑, 청운교·백운교 등 국보급 문화재를 간직하고 있으며, 인접한 석굴암과 함께 신라 불교 예술의 정수를 보여줍니다.",
    shortDesc: "유네스코 세계문화유산, 신라 불교 예술의 정수",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/Bulguksa-Gyeongju-Korea-2007-01.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/Bulguksa_Dabotap_Pagode.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/7/71/Daeungjeon_at_Bulguksa_1.jpg"
    ],
    tags: ["세계문화유산", "국보", "신라", "경주"],
    templestay: {
      available: true,
      programs: ["휴식형", "체험형"],
      pricePerNight: 70000,
      pricePerDay: 30000,
      description:
        "천년고찰 불국사에서 신라 문화와 함께하는 특별한 사찰 체험. 새벽 예불, 발우공양, 스님과의 차담 등 다채로운 프로그램이 진행됩니다.",
      schedule: [
        "16:00 입소 및 오리엔테이션",
        "18:00 저녁 공양",
        "19:30 저녁 예불",
        "20:30 스님과의 차담",
        "22:00 취침",
        "04:00 새벽 예불",
        "05:30 포행(사찰 내 명상 걷기)",
        "07:00 아침 공양",
        "09:00 문화재 해설 투어",
        "10:00 퇴소"
      ],
      capacity: 30,
      contact: "054-746-9913",
      reservationUrl: "https://www.templestay.com"
    },
    nearbyRestaurants: [
      { name: "황리단길 한식당", category: "한식", distance: "1.2km", rating: 4.5 },
      { name: "경주 쌈밥집", category: "한식·쌈밥", distance: "0.8km", rating: 4.3 },
      { name: "불국사 비빔밥", category: "비빔밥", distance: "0.3km", rating: 4.6 }
    ],
    nearbyAttractions: [
      { name: "석굴암", category: "문화재", distance: "2.5km" },
      { name: "경주 국립박물관", category: "박물관", distance: "8km" },
      { name: "안압지(동궁과 월지)", category: "역사유적", distance: "9km" }
    ]
  },
  {
    id: 2,
    name: "해인사",
    englishName: "Haeinsa",
    region: "경남",
    city: "합천군",
    address: "경상남도 합천군 가야면 해인사길 122",
    lat: 35.7999,
    lng: 128.1044,
    phone: "055-934-3000",
    website: "https://www.haeinsa.or.kr",
    founded: "802년 (신라 애장왕 3년)",
    denomination: "대한불교조계종 제12교구 본사",
    mainBuddha: "비로자나불",
    description:
      "법보사찰(法寶寺刹)로 불리는 합천 가야산의 명찰입니다. 고려 팔만대장경을 봉안한 장경판전은 1995년 유네스코 세계문화유산으로 지정되었으며, 팔만대장경은 세계기록유산에 등재된 소중한 문화유산입니다. 통도사, 송광사와 함께 한국 3대 사찰 중 하나입니다.",
    shortDesc: "법보사찰, 팔만대장경 봉안 세계문화유산",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/6/6c/Haeinsa_inner_sanctum_2013_05.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/0/03/Haeinsa_Seongbo_Museum.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Haeinsa_inner_sanctum_2013_04.JPG"
    ],
    tags: ["세계문화유산", "팔만대장경", "3대사찰", "가야산"],
    templestay: {
      available: true,
      programs: ["휴식형", "체험형", "당일형"],
      pricePerNight: 80000,
      pricePerDay: 40000,
      description:
        "팔만대장경의 숨결이 살아있는 해인사 템플스테이. 스님들과 함께 예불을 드리고, 108배 수행과 참선을 통해 진정한 자아를 만납니다.",
      schedule: [
        "14:00 입소 및 사찰 안내",
        "17:30 저녁 예불",
        "18:30 저녁 공양",
        "20:00 108배 또는 참선",
        "22:00 취침",
        "03:30 새벽 예불",
        "06:00 아침 공양",
        "07:30 팔만대장경 특별 관람",
        "09:00 스님과의 담화",
        "10:30 퇴소"
      ],
      capacity: 40,
      contact: "055-934-3000",
      reservationUrl: "https://www.templestay.com"
    },
    nearbyAttractions: [
      { name: "가야산 국립공원", category: "자연", distance: "0km" },
      { name: "홍류동 계곡", category: "자연·계곡", distance: "1km" },
      { name: "합천 영상테마파크", category: "테마파크", distance: "30km" }
    ],
    nearbyRestaurants: [
      { name: "해인사 산채식당", category: "사찰음식", distance: "0.2km", rating: 4.7 },
      { name: "가야산 두부전골", category: "두부요리", distance: "1km", rating: 4.4 },
      { name: "합천 순두부", category: "두부·한식", distance: "2km", rating: 4.2 }
    ]
  },
  {
    id: 3,
    name: "통도사",
    englishName: "Tongdosa",
    region: "경남",
    city: "양산시",
    address: "경상남도 양산시 하북면 통도사로 108",
    lat: 35.4893,
    lng: 129.0583,
    phone: "055-382-7182",
    website: "https://www.tongdosa.or.kr",
    founded: "646년 (신라 선덕여왕 15년)",
    denomination: "대한불교조계종 제15교구 본사",
    mainBuddha: "석가모니불 (진신사리)",
    description:
      "불보사찰(佛寶寺刹)로 불리며, 자장율사가 당나라에서 가져온 석가모니의 진신사리를 금강계단에 봉안하고 있습니다. 2018년 '산사, 한국의 산지 승원'으로 유네스코 세계문화유산에 등재되었으며, 대웅전에는 불상 대신 금강계단이 있는 것이 특징입니다.",
    shortDesc: "불보사찰, 진신사리 봉안, 유네스코 세계문화유산",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/4/48/양산통도사삼층석탑1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/ed/양산통도사삼층석탑2.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/a/af/양산통도사삼층석탑3.jpg"
    ],
    tags: ["세계문화유산", "불보사찰", "3대사찰", "진신사리"],
    templestay: {
      available: true,
      programs: ["휴식형", "체험형"],
      pricePerNight: 75000,
      pricePerDay: 35000,
      description:
        "진신사리가 봉안된 성지에서 드리는 예불과 참선. 통도사의 울창한 자연 속에서 진정한 내면의 평화를 찾아보세요.",
      schedule: [
        "15:00 입소 및 사찰 안내",
        "18:00 저녁 공양",
        "19:00 저녁 예불",
        "20:00 참선",
        "22:00 취침",
        "04:00 새벽 예불",
        "06:30 아침 공양",
        "08:00 사찰 투어",
        "10:00 퇴소"
      ],
      capacity: 35,
      contact: "055-382-7182",
      reservationUrl: "https://www.templestay.com"
    },
    nearbyRestaurants: [
      { name: "통도사 전통찻집", category: "찻집·전통", distance: "0.3km", rating: 4.6 },
      { name: "양산 부대찌개", category: "부대찌개", distance: "5km", rating: 4.3 },
      { name: "신평 막국수", category: "막국수", distance: "3km", rating: 4.4 }
    ],
    nearbyAttractions: [
      { name: "통도사 성보박물관", category: "박물관", distance: "0.2km" },
      { name: "영축산 등산로", category: "자연·등산", distance: "0km" },
      { name: "자장암", category: "암자", distance: "2km" }
    ]
  },
  {
    id: 4,
    name: "조계사",
    englishName: "Jogyesa",
    region: "서울",
    city: "종로구",
    address: "서울특별시 종로구 우정국로 55",
    lat: 37.5715,
    lng: 126.9817,
    phone: "02-768-8600",
    website: "https://www.jogyesa.kr",
    founded: "1395년 (조선 태조 4년)",
    denomination: "대한불교조계종 직할교구 본사",
    mainBuddha: "석가모니불",
    description:
      "한국 불교의 최대 종단인 대한불교조계종의 총본산입니다. 도심 속에 위치해 연간 수백만 명의 신도와 관광객이 방문하며, 연등회 기간에는 화려한 연등 장식으로 아름다운 야경을 선사합니다. 조선시대 왕실 원찰이었던 유서 깊은 사찰입니다.",
    shortDesc: "한국 불교 총본산, 도심 속 천년 고찰",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/c/cc/Korea-Seoul-Jogyesa_Main_Hall_2188-06.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/6/6c/Korea-Seoul-Jogyesa_lanterns_2183-06.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Korea-Seoul-Jogyesa_Chinese_Scholar_Tree_2195-06.JPG"
    ],
    tags: ["조계종 총본산", "연등회", "도심사찰", "서울"],
    templestay: {
      available: true,
      programs: ["체험형", "당일형"],
      pricePerNight: 60000,
      pricePerDay: 25000,
      description:
        "서울 도심 한복판에서 만나는 사찰 문화. 전통 의식과 명상을 통해 일상의 스트레스를 내려놓고 진정한 쉼을 경험하세요.",
      schedule: [
        "09:00 입소 및 오리엔테이션 (당일형)",
        "09:30 사찰 예절 교육",
        "10:30 염주 만들기 체험",
        "12:00 발우공양",
        "13:00 명상 및 참선",
        "14:30 다도 체험",
        "16:00 퇴소"
      ],
      capacity: 50,
      contact: "02-768-8600",
      reservationUrl: "https://www.templestay.com"
    },
    nearbyRestaurants: [
      { name: "인사동 쌈지길 식당가", category: "한식·퓨전", distance: "0.5km", rating: 4.2 },
      { name: "낙원동 삼겹살 골목", category: "고기·구이", distance: "0.7km", rating: 4.4 },
      { name: "종로 해장국", category: "해장국", distance: "0.3km", rating: 4.5 }
    ],
    nearbyAttractions: [
      { name: "인사동", category: "쇼핑·문화", distance: "0.5km" },
      { name: "창덕궁", category: "궁궐·문화재", distance: "1.5km" },
      { name: "북촌 한옥마을", category: "관광지", distance: "2km" }
    ]
  },
  {
    id: 5,
    name: "화엄사",
    englishName: "Hwaeomsa",
    region: "전남",
    city: "구례군",
    address: "전라남도 구례군 마산면 화엄사로 539",
    lat: 35.2122,
    lng: 127.5047,
    phone: "061-782-7600",
    website: "https://www.hwaeomsa.org",
    founded: "544년 (백제 성왕 22년)",
    denomination: "대한불교조계종 제19교구 본사",
    mainBuddha: "비로자나불",
    description:
      "지리산 자락에 위치한 화엄사는 백제 시대 연기조사가 창건한 천년 고찰입니다. 국보인 각황전과 석등, 사사자삼층석탑 등 귀중한 문화재를 보유하고 있으며, 봄이면 경내 홍매화와 벚꽃이 장관을 이룹니다. 2018년 유네스코 세계문화유산에 등재되었습니다.",
    shortDesc: "지리산 품에 안긴 천년고찰, 유네스코 세계문화유산",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Korea-Gurye-Hwaeomsa_4999-06.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/9/90/Korea-Gurye-Hwaeomsa_5017-06.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Korea-Gurye-Hwaeomsa_5014-06.JPG"
    ],
    tags: ["세계문화유산", "지리산", "각황전", "봄꽃"],
    templestay: {
      available: true,
      programs: ["휴식형", "체험형"],
      pricePerNight: 65000,
      pricePerDay: 30000,
      description:
        "지리산의 맑은 공기와 함께하는 화엄사 템플스테이. 울창한 숲속에서 예불, 명상, 다도를 체험하며 온전한 휴식을 누리세요.",
      schedule: [
        "15:00 입소 및 사찰 안내",
        "17:30 저녁 예불",
        "18:30 저녁 공양",
        "19:30 다도 체험",
        "21:00 취침",
        "04:30 새벽 예불",
        "06:00 숲길 포행",
        "07:00 아침 공양",
        "08:00 사찰 문화재 해설",
        "10:00 퇴소"
      ],
      capacity: 30,
      contact: "061-782-7600",
      reservationUrl: "https://www.templestay.com"
    },
    nearbyRestaurants: [
      { name: "구례 산채비빔밥", category: "한식·산채", distance: "3km", rating: 4.6 },
      { name: "섬진강 은어구이", category: "민물생선", distance: "8km", rating: 4.5 },
      { name: "지리산 토종닭", category: "닭요리", distance: "4km", rating: 4.3 }
    ],
    nearbyAttractions: [
      { name: "지리산 국립공원", category: "자연·등산", distance: "0km" },
      { name: "섬진강", category: "자연·강", distance: "8km" },
      { name: "쌍계사", category: "사찰", distance: "22km" }
    ]
  },
  {
    id: 6,
    name: "선암사",
    englishName: "Seonamsa",
    region: "전남",
    city: "순천시",
    address: "전라남도 순천시 승주읍 선암사길 450",
    lat: 35.0006,
    lng: 127.4348,
    phone: "061-754-5247",
    website: "https://www.seonamsa.net",
    founded: "875년 (신라 헌강왕 1년)",
    denomination: "한국불교태고종 총림",
    mainBuddha: "석가모니불",
    description:
      "조계산 자락의 선암사는 고려 시대부터 내려오는 전통 방식 그대로의 아름다운 사찰입니다. 봄이면 수백 년 된 홍매화 고목이 꽃을 피워 장관을 이루며, 무지개 모양의 승선교는 천연기념물로 지정된 걸작입니다. 2018년 유네스코 세계문화유산으로 등재되었습니다.",
    shortDesc: "홍매화 만발하는 조계산의 고즈넉한 명찰",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/Seonamsa_Eungjindang_11-06859.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/9/90/Seonamsa_11-06793.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/Seonamsa_11-06844.JPG"
    ],
    tags: ["세계문화유산", "홍매화", "조계산", "승선교"],
    templestay: {
      available: true,
      programs: ["휴식형", "당일형"],
      pricePerNight: 60000,
      pricePerDay: 25000,
      description:
        "시간이 멈춘 듯한 고요함 속에서의 휴식. 선암사의 자연 속에서 자신을 돌아보는 특별한 시간을 가져보세요.",
      schedule: [
        "13:00 입소",
        "14:00 사찰 안내 및 예절 교육",
        "17:00 저녁 예불",
        "18:00 공양",
        "19:00 자유 시간 (명상, 산책)",
        "22:00 취침",
        "04:30 새벽 예불",
        "07:00 아침 공양",
        "09:00 사찰 안내",
        "11:00 퇴소"
      ],
      capacity: 20,
      contact: "061-754-5247",
      reservationUrl: "https://www.templestay.com"
    },
    nearbyRestaurants: [
      { name: "순천 국밥", category: "국밥·한식", distance: "8km", rating: 4.4 },
      { name: "조계산 산채정식", category: "산채·한식", distance: "1km", rating: 4.5 },
      { name: "낙안읍성 음식점", category: "전통음식", distance: "12km", rating: 4.3 }
    ],
    nearbyAttractions: [
      { name: "송광사", category: "사찰", distance: "10km" },
      { name: "순천만 국가정원", category: "정원·자연", distance: "18km" },
      { name: "낙안읍성", category: "역사유적", distance: "12km" }
    ]
  },
  {
    id: 7,
    name: "해동용궁사",
    englishName: "Haedong Yonggungsa",
    region: "부산",
    city: "기장군",
    address: "부산광역시 기장군 기장읍 용궁길 86",
    lat: 35.1878,
    lng: 129.2217,
    phone: "051-722-7744",
    website: "https://www.yonggungsa.org",
    founded: "1376년 (고려 우왕 2년)",
    denomination: "대한불교조계종 제14교구",
    mainBuddha: "관세음보살",
    description:
      "바다를 배경으로 한 국내 유일의 해변 사찰로, 동해 바다와 기암절벽을 배경으로 한 웅장한 관음대불이 압권입니다. 새해 첫날 해돋이 명소로도 유명하며, 108 계단을 내려가면 만나는 해수관음보살상이 소원을 들어준다고 하여 매일 많은 참배객이 방문합니다.",
    shortDesc: "동해 바다 절벽 위 국내 유일의 해변 사찰",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/Haedong_Yonggungsa_Temple_view_on_sea.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Haedong_yonggungsa_temple_1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Haedong_yonggungsa_temple_2.jpg"
    ],
    tags: ["해변사찰", "관음대불", "해돋이", "부산"],
    templestay: {
      available: true,
      programs: ["체험형", "당일형"],
      pricePerNight: 65000,
      pricePerDay: 30000,
      description:
        "파도 소리와 함께하는 해동용궁사의 템플스테이. 바다를 바라보며 드리는 예불과 명상은 세상 어디서도 경험할 수 없는 특별한 감동입니다.",
      schedule: [
        "14:00 입소",
        "15:00 사찰 안내 및 108 계단 체험",
        "17:00 저녁 예불 (해넘이와 함께)",
        "18:30 저녁 공양",
        "19:30 바다 명상",
        "22:00 취침",
        "04:30 새벽 예불 (해돋이 함께)",
        "07:00 아침 공양",
        "09:00 연화 만들기",
        "11:00 퇴소"
      ],
      capacity: 25,
      contact: "051-722-7744",
      reservationUrl: "https://www.templestay.com"
    },
    nearbyRestaurants: [
      { name: "기장 대게요리", category: "해산물", distance: "2km", rating: 4.7 },
      { name: "죽성 횟집", category: "횟집", distance: "3km", rating: 4.5 },
      { name: "기장 멸치국수", category: "국수", distance: "1.5km", rating: 4.4 }
    ],
    nearbyAttractions: [
      { name: "기장 해안도로", category: "드라이브코스", distance: "0km" },
      { name: "죽성드림성당", category: "이색명소", distance: "2.5km" },
      { name: "기장 아홉산숲", category: "자연", distance: "5km" }
    ]
  },
  {
    id: 8,
    name: "봉은사",
    englishName: "Bongeunsa",
    region: "서울",
    city: "강남구",
    address: "서울특별시 강남구 봉은사로 531",
    lat: 37.5152,
    lng: 127.0586,
    phone: "02-3218-4895",
    website: "https://www.bongeunsa.org",
    founded: "794년 (신라 원성왕 10년)",
    denomination: "대한불교조계종 직할교구",
    mainBuddha: "비로자나불",
    description:
      "코엑스와 맞닿은 도심 속 1200년 고찰입니다. 현대식 빌딩숲 사이에 위치하여 도심의 번잡함 속에서도 깊은 고요함을 간직하고 있습니다. 23m 높이의 미륵대불이 강남 빌딩숲을 내려다보고 있으며, 매주 다양한 문화 프로그램이 진행됩니다.",
    shortDesc: "코엑스 옆 강남의 천년고찰, 도심 속 오아시스",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Bongeun_Sa_Temple_Seoul.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Q17278985_Bongeunsa_A01.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Q17278985_Bongeunsa_A02.jpg"
    ],
    tags: ["도심사찰", "미륵대불", "강남", "코엑스"],
    templestay: {
      available: false
    },
    nearbyRestaurants: [
      { name: "코엑스몰 푸드코트", category: "다양", distance: "0.3km", rating: 4.0 },
      { name: "강남 고깃집", category: "고기·구이", distance: "0.5km", rating: 4.3 },
      { name: "청담 디저트 카페", category: "카페·디저트", distance: "1km", rating: 4.5 }
    ],
    nearbyAttractions: [
      { name: "코엑스 아쿠아리움", category: "수족관", distance: "0.3km" },
      { name: "현대백화점 무역센터", category: "쇼핑", distance: "0.5km" },
      { name: "강남 테헤란로", category: "도심관광", distance: "0.5km" }
    ]
  }
];

export const regions = ["전체", "서울", "경기", "강원", "충청", "경북", "경남", "전남", "전북", "부산", "제주"];

export function getTempleById(id) {
  return temples.find(t => t.id === Number(id));
}

export function filterTemples({ region, templestayOnly, search } = {}) {
  return temples.filter(t => {
    if (region && region !== "전체" && t.region !== region) return false;
    if (templestayOnly && !t.templestay?.available) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        t.name.toLowerCase().includes(q) ||
        t.city.toLowerCase().includes(q) ||
        t.region.toLowerCase().includes(q) ||
        t.tags.some(tag => tag.toLowerCase().includes(q))
      );
    }
    return true;
  });
}
