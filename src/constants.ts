import { Level, MapNode } from './types';

export const LEVELS: Level[] = [
  {
    id: 'prehistoric-culture',
    title: '銀河神話與史前文化',
    heroImage: import.meta.env.BASE_URL + 'images/hero_1.jpg',
    questions: [
      {
        id: 'pc-1',
        text: '在北美拉科塔（Lakota）族的神話中，銀河被賦予了什麼樣的稱呼與意義？',
        source: '拉科塔族人',
        options: [
          { id: 'A', text: '世界樹的枝幹' },
          { id: 'B', text: '天上的恆河' },
          { id: 'C', text: '冬之街' },
          { id: 'D', text: '靈魂之路' },
        ],
        correctAnswer: 'D',
      },
      {
        id: 'pc-2',
        text: '澳洲原住民觀測銀河時，將其中的「暗雲」區域想像成什麼動物？',
        source: '澳洲原住民',
        options: [
          { id: 'A', text: '鴯鶓' },
          { id: 'B', text: '袋鼠' },
          { id: 'C', text: '獵鷹' },
          { id: 'D', text: '無尾熊' },
        ],
        correctAnswer: 'A',
      },
    ],
  },
  {
    id: 'literature-art',
    title: '文學與藝術的銀河',
    heroImage: import.meta.env.BASE_URL + 'images/hero_2.jpg',
    questions: [
      {
        id: 'la-1',
        text: '銀河在宮澤賢治的作品《銀河鐵道之夜》中，主角最終發現銀河鐵道的真相與什麼有關？',
        source: '《銀河鐵道之夜》宮澤賢治',
        options: [
          { id: 'A', text: '星際旅行的航線' },
          { id: 'B', text: '外星文明的交通工具' },
          { id: 'C', text: '引領靈魂的旅程' },
          { id: 'D', text: '科學家的夢境' },
        ],
        correctAnswer: 'C',
      },
    ],
  },
  {
    id: 'myths-legends',
    title: '東西方的銀河傳說',
    heroImage: import.meta.env.BASE_URL + 'images/hero_3.jpg',
    questions: [
      {
        id: 'ml-2',
        category: 'Norse Mythology',
        text: '瑞典語將銀河稱為「冬之街（Vintergatan）」，這在北歐神話中代表什麼？',
        source: '北歐神話',
        options: [
          { id: 'A', text: '霜巨人的居所' },
          { id: 'B', text: '封印邪惡巨狼的鎖鏈' },
          { id: 'C', text: '引領陣亡戰士前往英靈殿的道路' },
          { id: 'D', text: '眾神舉行宴會的地方' },
        ],
        correctAnswer: 'C',
      },
    ],
  },
  {
    id: 'galaxy-heart',
    title: '銀河之心',
    heroImage: import.meta.env.BASE_URL + 'images/hero_4.jpg',
    questions: [
      {
        id: 'gh-1',
        text: '太陽系位於銀河系的哪一個結構上？',
        source: '銀河中的太陽系',
        options: [
          { id: 'A', text: '銀河核球' },
          { id: 'B', text: '獵戶座旋臂' },
          { id: 'C', text: '銀暈' },
          { id: 'D', text: '英仙座旋臂' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 'gh-2',
        text: '太陽系繞行銀河系中心一週大約需要多少年？',
        source: '銀河中的太陽系',
        options: [
          { id: 'A', text: '1千萬年' },
          { id: 'B', text: '1百萬年' },
          { id: 'C', text: '130億年' },
          { id: 'D', text: '2億5千萬年' },
        ],
        correctAnswer: 'D',
      },
      {
        id: 'gh-3',
        text: '銀河系中心的超大質量黑洞「人馬座A*」的質量大約是太陽的多少倍？',
        source: '銀河系的運動',
        options: [
          { id: 'A', text: '1000億倍' },
          { id: 'B', text: '100倍' },
          { id: 'C', text: '430萬倍' },
          { id: 'D', text: '6000億倍' },
        ],
        correctAnswer: 'C',
      },
    ],
  },
  {
    id: 'seasons',
    title: '銀河的四季風貌',
    heroImage: import.meta.env.BASE_URL + 'images/hero_5.jpg',
    missionObjective: 'Orbital Surveillance: Seasonal Drift',
    questions: [
      {
        id: 's-2',
        text: '夏季銀河中最明亮的區域位在哪個星座方向？此處也隱藏著超大質量黑洞。',
        source: '銀河的四季風貌',
        options: [
          { id: 'A', text: '人馬座' },
          { id: 'B', text: '天鵝座' },
          { id: 'C', text: '天鷹座' },
          { id: 'D', text: '天琴座' },
        ],
        correctAnswer: 'A',
      },
    ],
  },
  {
    id: 'gaia-mission',
    title: '蓋亞任務',
    heroImage: import.meta.env.BASE_URL + 'images/hero_6.jpg',
    questions: [
      {
        id: 'gm-1',
        text: '蓋亞（Gaia）望遠鏡目前位於何處?',
        source: '任務的時間與地點',
        options: [
          { id: 'A', text: '月球背面' },
          { id: 'B', text: '火星軌道' },
          { id: 'C', text: '地球同步軌道' },
          { id: 'D', text: '地球附近退休軌道' },
        ],
        correctAnswer: 'D',
      },
      {
        id: 'gm-3',
        text: '蓋亞任務中發現的「蓋亞—恩克拉多斯（Gaia-Enceladus）」是指什麼？',
        source: '銀河考古學',
        options: [
          { id: 'A', text: '銀河系中最高溫的恆星流' },
          { id: 'B', text: '一種新型態的暗物質粒子' },
          { id: 'C', text: '100億年前與銀河系合併的古老星系遺骸' },
          { id: 'D', text: '一顆位於銀河中心的新行星' },
        ],
        correctAnswer: 'C',
      },
      {
        id: 'gm-4',
        text: '在銀河中心發現的兩股古老恆星流「濕婆（Shiva）」與「沙克蒂（Shakti）」，其特點為何？',
        source: '發現古老恆星流',
        options: [
          { id: 'A', text: '見證了銀河系盤面形成前的初期樣貌' },
          { id: 'B', text: '是由仙女座星系噴射而出的恆星' },
          { id: 'C', text: '正以超光速遠離銀河中心' },
          { id: 'D', text: '含有極豐富的金屬元素' },
        ],
        correctAnswer: 'A',
      },
    ],
  },
  {
    id: 'future-past',
    title: '銀河的過去與未來',
    heroImage: import.meta.env.BASE_URL + 'images/hero_7.jpg',
    questions: [
      {
        id: 'fp-1',
        text: '大質量恆星在死亡時發生的哪種天文事件，能為銀河系製造出比鐵更重的元素？',
        source: '宇宙的元素煉金術',
        options: [
          { id: 'A', text: '原恆星塌縮' },
          { id: 'B', text: '超新星爆炸' },
          { id: 'C', text: '紅巨星膨脹' },
          { id: 'D', text: '黑洞吸積' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 'fp-3',
        text: '當數十億年後銀河系與仙女座星系正式碰撞時，最不可能發生的現象是？',
        source: '雲氣擠壓與新星爆發',
        options: [
          { id: 'A', text: '觸發大規模的恆星誕生潮' },
          { id: 'B', text: '形成一個巨大的橢圓星系' },
          { id: 'C', text: '星系旋臂結構消失崩解' },
          { id: 'D', text: '恆星與恆星之間發生直接對撞' },
        ],
        correctAnswer: 'D',
      },
      {
        id: 'fp-4',
        text: '銀河系與仙女座星系合併後的最終終點站，預期會形成哪種形狀的星系？',
        source: '旋臂重組與消逝',
        options: [
          { id: 'A', text: '不規則星系' },
          { id: 'B', text: '棒狀星系' },
          { id: 'C', text: '橢圓星系' },
          { id: 'D', text: '更大的螺旋星系' },
        ],
        correctAnswer: 'C',
      },
    ],
  },
  {
    id: 'webb-telescope',
    title: '韋伯望遠鏡',
    heroImage: import.meta.env.BASE_URL + 'images/hero_8.jpg',
    questions: [
      {
        id: 'wt-1',
        text: '韋伯太空望遠鏡（JWST）主要利用哪種波段來穿透星際塵埃？',
        source: '穿透塵埃：直擊銀河系的心臟',
        options: [
          { id: 'A', text: 'X射線' },
          { id: 'B', text: '紫外光' },
          { id: 'C', text: '可見光' },
          { id: 'D', text: '紅外線' },
        ],
        correctAnswer: 'D',
      },
    ],
  },
  {
    id: 'black-hole',
    title: '超大質量黑洞',
    heroImage: import.meta.env.BASE_URL + 'images/hero_9.jpg',
    missionObjective: 'Deep Space Expedition MISSION 04',
    questions: [
      {
        id: 'bh-1',
        text: '關於星系演化的「謎團」，天文學家目前仍無法完全解答下列哪一項？',
        source: '超大質量黑洞的本質',
        options: [
          { id: 'A', text: '仙女座星系是否正在接近' },
          { id: 'B', text: '月球是如何形成的' },
          { id: 'C', text: '恆星內部是否進行核融合' },
          { id: 'D', text: '最初的「種子黑洞」來源為何' },
        ],
        correctAnswer: 'D',
      },
    ],
  },
  {
    id: 'conditions',
    title: '適合觀賞銀河的條件',
    heroImage: import.meta.env.BASE_URL + 'images/hero_10.jpg',
    questions: [
      {
        id: 'c-1',
        text: '在冬季觀看銀河，會發現其光澤較為淡淡白光，這是因為我們正望向銀河系的哪個方向？',
        source: '觀賞銀河的季節',
        options: [
          { id: 'A', text: '黑洞的陰影區' },
          { id: 'B', text: '銀河中心' },
          { id: 'C', text: '外圍旋臂區域' },
          { id: 'D', text: '另一個宇宙的邊界' },
        ],
        correctAnswer: 'C',
      },
      {
        id: 'c-2',
        text: '在臺灣觀賞夏季銀河時，若想看到最壯觀的垂直銀河，哪段時間最適合？',
        source: '觀賞銀河的時段',
        options: [
          { id: 'A', text: '九月底的午夜' },
          { id: 'B', text: '三月底的午夜' },
          { id: 'C', text: '六月底至七月初的午夜' },
          { id: 'D', text: '十二月中的午夜' },
        ],
        correctAnswer: 'C',
      },
      {
        id: 'c-3',
        text: '為什麼觀賞銀河除了避開城市光害，還必須選擇「農曆初一」附近的日期？',
        source: '觀賞銀河的條件',
        options: [
          { id: 'A', text: '為了配合地磁場的週期' },
          { id: 'B', text: '避免月光照亮大氣干擾觀測' },
          { id: 'C', text: '防止潮汐力影響望遠鏡穩定度' },
          { id: 'D', text: '初一的星星數量會特別多' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 'c-4',
        text: '合歡山馬雅平台（合歡山主峰步道）之所以著名，是因為它是臺灣哪項認證的地點？',
        source: '臺灣賞銀河地點推薦',
        options: [
          { id: 'A', text: '國家級地質觀測站' },
          { id: 'B', text: '世界自然遺產' },
          { id: 'C', text: '國際暗空公園' },
          { id: 'D', text: '全球最高天文台所在地' },
        ],
        correctAnswer: 'C',
      },
    ],
  },
];

export const MAP_NODES: MapNode[] = [
  { id: 'n1', levelId: 'prehistoric-culture', icon: 'history', label: '銀河神話與史前文化', top: '10%', left: '15%' },
  { id: 'n8', levelId: 'webb-telescope', icon: 'eye', label: '韋伯望遠鏡', top: '15%', left: '60%' },
  { id: 'n2', levelId: 'myths-legends', icon: 'book', label: '東西方的銀河傳說', top: '22%', left: '75%' },
  { id: 'n3', levelId: 'literature-art', icon: 'palette', label: '文學與藝術的銀河', top: '38%', left: '48%' },
  { id: 'n4', levelId: 'seasons', icon: 'cloud-sun', label: '銀河的四季風貌', top: '55%', left: '10%' },
  { id: 'n5', levelId: 'galaxy-heart', icon: 'sun', label: '銀河之心', top: '52%', left: '65%' },
  { id: 'n10', levelId: 'conditions', icon: 'mountain', label: '適合觀賞銀河的條件', top: '68%', left: '80%' },
  { id: 'n6', levelId: 'gaia-mission', icon: 'rocket', label: '蓋亞任務', top: '72%', left: '30%' },
  { id: 'n7', levelId: 'future-past', icon: 'clock', label: '銀河的過去與未來', top: '82%', left: '50%' },
  { id: 'n9', levelId: 'black-hole', icon: 'disc', label: '超大質量黑洞', top: '88%', left: '78%' },
];
