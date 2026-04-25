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
  {
    id: 'galaxy-structure',
    title: '星系奇航：解密宇宙結構',
    heroImage: import.meta.env.BASE_URL + 'images/hero_11.png',
    questions: [
      {
        id: 'gs-1',
        text: '星系可以分類。根據「哈伯音叉圖」的分類法，天文學家主要是依據星系的哪一項特徵來進行分類？',
        source: '展示場三樓:哈伯星系分類',
        options: [
          { id: 'A', text: '星系與地球之間的相對距離' },
          { id: 'B', text: '星系的化學元素組成比率' },
          { id: 'C', text: '星系中心黑洞的質量大小' },
          { id: 'D', text: '星系的外觀型態及特性' },
        ],
        correctAnswer: 'D',
      },
      {
        id: 'gs-2',
        text: '星系常因彼此間的重力作用而群聚成「星系團」。其中成員較少、體積較小的星系團也常被稱為「星系群」。離我們最近的星系團是哪一個？',
        source: '展示場三樓:星系的群聚',
        options: [
          { id: 'A', text: '室女座星系團' },
          { id: 'B', text: '后髮座星系團' },
          { id: 'C', text: '仙女座星系團' },
          { id: 'D', text: '本星系群' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 'gs-3',
        text: '銀河系屬於「本星系群」。本星系群中哪一個星系的直徑最大，且包含約 1 兆顆恆星？',
        source: '展示場三樓:本星系群',
        options: [
          { id: 'A', text: '仙女座星系 (M31)' },
          { id: 'B', text: '三角座星系 (M33)' },
          { id: 'C', text: 'M87 星系' },
          { id: 'D', text: '銀河系' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 'gs-4',
        text: '根據密度波理論，銀河系類別的螺旋星系旋臂是如何形成的？',
        source: '展示場三樓:都卜勒效應',
        options: [
          { id: 'A', text: '恆星被永久鎖定在旋臂中跟隨星系整體轉動' },
          { id: 'B', text: '由星系中心的黑洞噴射出的恆星物質所組成' },
          { id: 'C', text: '星際介質與密度波交會並聚合形成新生恆星' },
          { id: 'D', text: '星系與其他星系發生碰撞後的物質殘跡' },
        ],
        correctAnswer: 'C',
      },
      {
        id: 'gs-5',
        text: '仙女座星系正在接近銀河系。根據都卜勒效應，當發光的波源「接近」觀察者時，會產生什麼現象？',
        source: '展示場三樓:都卜勒效應',
        options: [
          { id: 'A', text: '頻率變高，聲音變得尖銳' },
          { id: 'B', text: '波長變長，光譜向紅端移動（紅移）' },
          { id: 'C', text: '光速會因為波源移動而變慢' },
          { id: 'D', text: '波長變短，光譜向藍端移動（藍移）' },
        ],
        correctAnswer: 'D',
      },
    ],
  },
];

export const MAP_NODES: MapNode[] = [
  { id: 'n1', levelId: 'prehistoric-culture', icon: 'history', label: '銀河神話與史前文化', top: '10%', left: '15%' },
  { id: 'n11', levelId: 'galaxy-structure', icon: 'network', label: '星系奇航：解密宇宙結構', top: '25%', left: '35%' },
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
