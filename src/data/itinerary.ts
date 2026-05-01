export interface ItineraryItem {
  id: string;
  time?: string;
  type: 'flight' | 'hotel' | 'food' | 'sightseeing' | 'transport' | 'shopping' | 'entertainment';
  title: string;
  location: string;
  address?: string;
  transport?: string;
  note?: string;
  tags?: string[];
  reservationCode?: string;
  insights?: {
    story?: string;
    mustEat?: string[];
    mustOrder?: string[];
    mustBuy?: string[];
    tips?: string;
    image?: string;
    plan?: string;
  };
}

export interface DayPlan {
  date: string;
  weekday: string;
  location: string;
  weather: {
    temp: string;
    condition: 'sunny' | 'cloudy' | 'rainy';
  };
  items: ItineraryItem[];
  dayNote?: {
    title: string;
    content: string;
    url?: string;
  };
}

export const ITINERARY_DATA: DayPlan[] = [
  {
    date: '5月4日',
    weekday: '週一',
    location: '大阪',
    weather: { temp: '18°C', condition: 'sunny' },
    items: [
      {
        id: '1-8',
        type: 'hotel',
        title: '大阪麗嘉皇家酒店 Vignette Collection',
        location: '大阪府大阪市北區中之島5-3-68',
        address: '大阪府大阪市北區中之島5-3-68',
        transport: '京阪電車 中之島站 2號出口旁 / JR大阪站有免費接駁車',
        note: 'Check in 15:00'
      },
      {
        id: '1-1',
        time: '09:30',
        type: 'flight',
        title: '機票：桃園-大阪',
        location: '桃園機場一航廈',
        transport: 'MM24',
        note: '樂桃航空',
      },
      {
        id: '1-2',
        time: '14:44',
        type: 'transport',
        title: '搭乘 Haruka 32',
        location: '大阪關西機場',
        transport: '15:31 抵達 JR 大阪',
      },
      {
        id: '1-3',
        time: '15:30',
        type: 'transport',
        title: 'JR大阪站搭乘飯店接駁車',
        location: 'JR大阪站',
        insights: {
          image: 'https://ais-dev-6gtbk2s7phqx535atkpa3f-370747766189.asia-northeast1.run.app/input_file_1.png',
          tips: '🚶‍♀️ 出站路線（最容易迷路的地方⚠️）\n👉在大阪站下車後：\n\nStep 1\n👉找「櫻橋口（Sakurabashi Exit）」\n👉不要走：\n❌ 中央口\n❌ 御堂筋口\n⸻\nStep 2\n👉出站後往「高架橋方向」走\n👉你會看到：\n • 飯店接駁車排隊處\n • 有標示 RIHGA Royal'
        }
      },
      {
        id: '1-4',
        time: '17:00',
        type: 'shopping',
        title: 'TOWER RECORDS 梅田NU茶屋町',
        location: '大阪府大阪市北區茶屋町10-12 NU Chayamachi 6F',
        address: '大阪府大阪市北區茶屋町10-12 NU Chayamachi 6F',
        insights: {
          story: '日本最大的唱片行之一，梅田店擁有豐富的 K-POP 與 J-POP 收藏。',
          mustBuy: ['限定版 CD', '唱片行周邊'],
          tips: '營業時間至 22:00，適合晚上漫步。'
        }
      },
      {
        id: '1-5',
        type: 'food',
        title: '可麗餅 中村屋',
        location: '大阪府大阪市北區天神橋2-3-21',
        address: '大阪府大阪市北區天神橋2-3-21',
        insights: {
          mustEat: ['原味可麗餅'],
          tips: '天神橋筋商店街的人氣老店。'
        }
      },
      {
        id: '1-6',
        type: 'food',
        title: 'SOT COFFEE ROASTER',
        location: '大阪府大阪市中央區大手通1-3-7',
        address: '大阪府大阪市中央區大手通1-3-7',
        insights: {
          mustEat: ['手沖咖啡'],
          tips: '自家烘焙咖啡豆，氛圍安靜。'
        }
      },
      {
        id: '1-7',
        time: '20:00',
        type: 'food',
        title: 'Yasai Kushimaki Naruto ya Ao',
        location: '大阪府大阪市中央區難波千日前14-18',
        address: '大阪府大阪市中央區難波千日前14-18',
        insights: {
          mustEat: ['蔬菜肉捲串燒'],
          mustOrder: ['博多肉捲', '紫蘇肉捲'],
          tips: '位於道具屋筋橫丁，建議提早預約。'
        }
      }
    ]
  },
  {
    date: '5月5日',
    weekday: '週二',
    location: '大阪',
    weather: { temp: '20°C', condition: 'cloudy' },
    items: [
      {
        id: '2-7',
        type: 'hotel',
        title: '大阪麗嘉皇家酒店 Vignette Collection',
        location: '大阪府大阪市北區中之島5-3-68',
        address: '大阪府大阪市北區中之島5-3-68'
      },
      {
        id: '2-1',
        time: '03:00',
        type: 'shopping',
        title: '排隊周邊：SUPER JUNIOR-YESUNG LIVE TOUR',
        location: '大阪國際會議場 (Grand Cube Osaka)',
        note: '咲き誇る時を待つの'
      },
      {
        id: '2-2',
        type: 'food',
        title: 'SOT COFFEE ROASTER',
        location: '大阪府大阪市中央區大手通1-3-7',
        address: '大阪府大阪市中央區大手通1-3-7'
      },
      {
        id: '2-3',
        time: '17:30',
        type: 'entertainment',
        title: '演唱會：SUPER JUNIOR-YESUNG LIVE TOUR',
        location: '大阪國際會議場',
        note: '咲き誇る時和待つの'
      },
      {
        id: '2-4',
        type: 'food',
        title: 'Je T’aime Cafe',
        location: 'RIHGA Royal Hotel Osaka B1',
        address: '日本〒530-0005 Osaka, Kita Ward, Nakanoshima, 5 Chome−3 内地下 RIHGA Royal Hotel Osaka, Vignette Collection by IHG, 1階',
        insights: {
          mustEat: ['布丁'],
          tips: '飯店對面，要買布丁吃'
        }
      },
      {
        id: '2-5',
        type: 'food',
        title: 'MOTO COFFEE',
        location: 'Kitahama',
        address: '日本〒541-0041 Osaka, Chuo Ward, Kitahama, 2 Chome−1−1 ライオンビル'
      },
      {
        id: '2-6',
        type: 'food',
        title: 'Takamura Wine & Coffee Roasters',
        location: 'Edobori',
        address: '2 Chome-2-18 Edobori, Nishi Ward, Osaka, 550-0002日本',
        insights: {
          mustOrder: ['咖啡'],
          tips: '賣酒和咖啡，外型是一個倉庫。平價且咖啡很好喝。'
        }
      }
    ]
  },
  {
    date: '5月6日',
    weekday: '週三',
    location: '大阪',
    weather: { temp: '19°C', condition: 'sunny' },
    dayNote: {
      title: '中之島附近的咖啡店',
      content: 'Tabelog 上的咖啡店清單',
      url: 'https://tabelog.com/tw/osaka/A2701/A270108/R11301/rstLst/SC1001/'
    },
    items: [
      {
        id: '3-6',
        type: 'hotel',
        title: '大阪麗嘉皇家酒店 Vignette Collection',
        location: '大阪府大阪市北區中之島5-3-68',
        address: '大阪府大阪市北區中之島5-3-68'
      },
      {
        id: '3-1',
        time: '09:30',
        type: 'sightseeing',
        title: '大鳥大社',
        location: '大阪府堺市西區鳳北町1-1-2',
        address: '大阪府堺市西區鳳北町1-1-2',
        insights: {
          story: '和泉國一之宮，以祈求開運與交通安全聞名。',
          tips: '境內有美麗的千種之森。'
        }
      },
      {
        id: '3-2',
        time: '11:30',
        type: 'food',
        title: '中餐：大鳥大社附近隨便吃',
        location: '大鳥大社附近'
      },
      {
        id: '3-3',
        time: '13:00',
        type: 'transport',
        title: '前往 住吉大社',
        location: '住吉大社',
        transport: '鳳站-天王寺-住吉'
      },
      {
        id: '3-4',
        time: '16:00',
        type: 'entertainment',
        title: '演唱會：SUPER JUNIOR-YESUNG LIVE TOUR',
        location: '大阪國際會議場',
        note: '17:00 開演'
      },
      {
        id: '3-5',
        time: '21:00',
        type: 'food',
        title: '晚餐：大阪燒 千房',
        location: '大阪府大阪市中央區道頓堀1-5-5',
        address: '大阪府大阪市中央區道頓堀1-5-5',
        insights: {
          mustEat: ['道頓堀燒', '千房燒'],
          mustOrder: ['千房燒', '蔥燒'],
          tips: '大阪燒名店，道頓堀店氣氛熱鬧。'
        }
      }
    ]
  },
  {
    date: '5月7日',
    weekday: '週四',
    location: '京都',
    weather: { temp: '17°C', condition: 'rainy' },
    items: [
      {
        id: '4-9',
        type: 'hotel',
        title: '知恩院和順會館',
        location: '京都市東山區林下町400-2',
        address: '京都市東山區林下町400-2',
        note: 'Check in 15:00, Check out 10:00, 門禁 23:00'
      },
      {
        id: '4-1',
        time: '10:00',
        type: 'hotel',
        title: 'Check out',
        location: '大阪麗嘉皇家酒店',
        transport: '8:00 搭乘飯店接駁車前往 JR 大阪站'
      },
      {
        id: '4-2',
        time: '10:30',
        type: 'transport',
        title: '寄放行李',
        location: 'HEP FIVE 8F HEP HALL',
        address: '大阪府大阪市北區角田町5-15 HEP FIVE 8F HEP HALL'
      },
      {
        id: '4-3',
        type: 'food',
        title: 'Truffle BAKERY',
        location: '中崎',
        address: '日本〒530-0016 Osaka, Kita Ward, Nakazaki, 1-chome-10-10 ソレイユ中崎 1f',
        insights: {
          mustBuy: ['白松露鹽可頌']
        }
      },
      {
        id: '4-4',
        type: 'food',
        title: 'Pâtisserie Ravi,e relier',
        location: 'Osaka',
        address: '5-13 Yamazakicho, Kita Ward, Osaka, 530-0024日本'
      },
      {
        id: '4-5',
        type: 'shopping',
        title: '三宅一生',
        location: '梅田',
        address: '大阪府大阪市北區梅田 1-13-13 5F'
      },
      {
        id: '4-6',
        time: '19:00',
        type: 'entertainment',
        title: 'Yesung 簽名會',
        location: '中崎',
        address: '日本〒530-0016 Osaka, Kita Ward, Nakazaki, 1-chome-10-10 ソレイユ中崎 1f'
      },
      {
        id: '4-7',
        time: '20:00',
        type: 'transport',
        title: '前往京都',
        location: '京都'
      },
      {
        id: '4-8',
        time: '21:30',
        type: 'hotel',
        title: 'Check in',
        location: '知恩院和順會館',
        note: '全部行李一起搭計程車前往住宿'
      }
    ]
  },
  {
    date: '5月8日',
    weekday: '週五',
    location: '京都/名古屋',
    weather: { temp: '21°C', condition: 'sunny' },
    items: [
      {
        id: '5-13',
        type: 'hotel',
        title: '名古屋金山附樓名鐵酒店',
        location: '名古屋市中區金山1-11-13',
        address: '愛知縣名古屋市中區金山1-11-13'
      },
      {
        id: '5-1',
        time: '05:00',
        type: 'entertainment',
        title: '早課',
        location: '知恩院'
      },
      {
        id: '5-2',
        time: '10:00',
        type: 'hotel',
        title: 'Check out',
        location: '知恩院和順會館'
      },
      {
        id: '5-3',
        time: '10:30',
        type: 'transport',
        title: '租電動腳踏車',
        location: 'KYOTO ECO TRIP',
        address: '〒601-8001 京都市南區東九條室町58號',
        transport: '搭計程車從知恩院抵達此處',
        insights: {
          image: 'https://ais-dev-6gtbk2s7phqx535atkpa3f-370747766189.asia-northeast1.run.app/input_file_0.png',
          plan: 'EA型 (2400日圓) x 2輛 x 1天 = 4800日圓\n夜間時段還車 (400日圓) x 2輛 = 800日圓\n總共是 5600日圓',
          tips: '6點關店，所以我們可以幫您存放行李到當天晚上6點。如果您想租腳踏車到10點的話，可以利用我們店門前或京都站附近的行李寄放箱。'
        }
      },
      {
        id: '5-4',
        time: '11:00',
        type: 'sightseeing',
        title: '御金神社 / 晴明神社',
        location: '京都市'
      },
      {
        id: '5-5',
        time: '13:30',
        type: 'food',
        title: '午餐',
        location: 'Tempura Kyorinsen',
        reservationCode: 'A466FC',
        note: '花之課程 (10道天婦羅)'
      },
      {
        id: '5-6',
        type: 'food',
        title: '甜點：SHUKA',
        location: 'Kyoto',
        address: '日本〒604-8856 Kyoto, Nakagyo Ward, Mibunishitakecho, 3-1 斗六屋西隣り'
      },
      {
        id: '5-7',
        type: 'shopping',
        title: 'Graphpaper kyoto',
        location: 'Kyoto',
        address: '88-1 Daikokucho, Nakagyo Ward, Kyoto, 604-8073日本'
      },
      {
        id: '5-8',
        type: 'shopping',
        title: '新風館 traveler\'s notebook factory',
        location: '京都市中京區烏丸通姊小路下ル場之町586-2外'
      },
      {
        id: '5-9',
        type: 'shopping',
        title: 'IN URADERA',
        location: 'Kyoto',
        address: '日本〒604-8042 Kyoto, Nakagyo Ward, Nakanocho, 577-2'
      },
      {
        id: '5-10',
        type: 'shopping',
        title: 'In Sanjoten',
        location: 'Kyoto',
        address: '日本〒604-8082 Kyoto, Nakagyo Ward, Benkeishiicho, 48 1F'
      },
      {
        id: '5-11',
        type: 'food',
        title: '晚餐：京肴 ふくや',
        location: 'Kyoto',
        address: '日本〒604-8332 Kyoto, Nakagyo Ward, Hashinishicho, 666-1 N.エステートモア三條 1F'
      },
      {
        id: '5-12',
        time: '19:00',
        type: 'transport',
        title: '前往住宿',
        location: '名古屋'
      }
    ]
  },
  {
    date: '5月9日',
    weekday: '週六',
    location: '名古屋',
    weather: { temp: '22°C', condition: 'sunny' },
    items: [
      {
        id: '6-14',
        type: 'hotel',
        title: '名古屋金山附樓名鐵酒店',
        location: '名古屋市中區金山1-11-13',
        address: '愛知縣名古屋市中區金山1-11-13'
      },
      {
        id: '6-1',
        time: '09:30',
        type: 'transport',
        title: '前往犬山',
        location: '犬山',
        transport: '名古屋站搭乘電車'
      },
      {
        id: '6-2',
        type: 'sightseeing',
        title: '犬山城 / 三光稻荷神社 / 針綱神社',
        location: '愛知縣犬山市',
        address: 'Kitakoken-65-2 Inuyama, Aichi 484-0082日本',
        insights: {
          tips: '三光稻荷：愛心繪馬與洗錢石；針綱：保佑親子健康'
        }
      },
      {
        id: '6-3',
        type: 'food',
        title: '香味茶寮 壽俵屋 犬山井上邸',
        location: '犬山市',
        address: '愛知縣犬山市大字犬山西古券6',
        insights: {
          mustEat: ['酒粕醃漬烤魚', '守口漬茶泡飯', '奈良漬小菜', '守口漬醬烤五平餅'],
          tips: '主打日式定食，可品嚐酒粕醃漬烤魚、守口漬茶泡飯與奈良漬小菜。更可以加點或外帶超人氣的守口漬醬烤五平餅'
        }
      },
      {
        id: '6-4',
        type: 'food',
        title: '漬處 壽俵屋 犬山庵',
        location: '犬山市',
        address: '愛知縣犬山市大字犬山西古券15',
        insights: {
          tips: '以茶點、輕食為主，提供守口漬冰淇淋與週末限定的守口漬稻荷壽司，享用時還能欣賞庭園，氣氛優雅放鬆'
        }
      },
      {
        id: '6-5',
        type: 'food',
        title: '肉兵衛',
        location: '犬山市',
        address: '愛知縣犬山市大字犬山東古券675',
        insights: {
          mustEat: ['飛騨牛握壽司'],
          tips: '把大蝦餅當盤子，把飛騨牛握壽司放在上面'
        }
      },
      {
        id: '6-6',
        type: 'food',
        title: '犬山牛太郎',
        location: '犬山市',
        address: '愛知縣犬山市大山東古券70',
        insights: {
          mustEat: ['飛騨牛握壽司'],
          tips: '提供飛騨牛握壽司，並可依喜好搭配哇沙米、蒜味或生薑調味，是品嚐和牛原汁原味的最高 CP 值選擇'
        }
      },
      {
        id: '6-7',
        type: 'shopping',
        title: 'Cocotomo 茶屋 犬山城下町店',
        location: '犬山市',
        address: '愛知縣犬山市犬山北古券甲98-1',
        insights: {
          mustBuy: ['米製年輪蛋糕']
        }
      },
      {
        id: '6-8',
        type: 'food',
        title: '山田五平餅店',
        location: '犬山市',
        address: '犬山市犬山東古券776'
      },
      {
        id: '6-9',
        type: 'food',
        title: 'クシ卡ツとなまる',
        location: '犬山市',
        address: '愛知縣犬山市犬山西古券12-1'
      },
      {
        id: '6-10',
        type: 'shopping',
        title: '犬山革工房',
        location: '犬山市',
        address: '愛知縣犬山市東古券677'
      },
      {
        id: '6-11',
        time: '15:00',
        type: 'transport',
        title: '離開犬山',
        location: '犬山',
        note: '最晚這個時間點要離開，才能趕上演唱會'
      },
      {
        id: '6-12',
        time: '16:30',
        type: 'entertainment',
        title: '演唱會：SUPER JUNIOR-YESUNG LIVE TOUR',
        location: 'Niterra日本特殊陶業市民會館',
        note: '開場'
      },
      {
        id: '6-13',
        time: '17:30',
        type: 'entertainment',
        title: '演唱會：SUPER JUNIOR-YESUNG LIVE TOUR',
        location: 'Niterra日本特殊陶業市民會館',
        note: '開演'
      }
    ]
  },
  {
    date: '5月10日',
    weekday: '週日',
    location: '名古屋/桃園',
    weather: { temp: '20°C', condition: 'cloudy' },
    items: [
      {
        id: '7-1',
        time: '12:20',
        type: 'flight',
        title: '機票：名古屋-桃園',
        location: '名古屋機場一航廈',
        transport: 'CI155',
        note: '中華航空'
      }
    ]
  }
];

export const INFO_DATA = {
  flights: [
    { id: 'f1', carrier: 'Peach', flightNo: 'MM24', from: 'TPE', to: 'KIX', time: '05/04 09:30' },
    { id: 'f2', carrier: 'China Airlines', flightNo: 'CI155', from: 'NGO', to: 'TPE', time: '05/10 12:20' }
  ],
  hotels: [
    { id: 'h1', name: '大阪麗嘉皇家酒店', address: '大阪府大阪市北區中之島5-3-68', phone: '06-6448-1121' },
    { id: 'h2', name: '知恩院和順會館', address: '京都市東山區林下町400-2', phone: '075-205-5013' },
    { id: 'h3', name: '名古屋金山附樓名鐵酒店', address: '愛知縣名古屋市中區金山1-11-13', phone: '052-324-3434' }
  ],
  emergency: [
    { name: '警察局', number: '110' },
    { name: '救護車/火警', number: '119' },
    { name: '台北駐日經濟文化代表處', number: '03-3280-7811' },
    { 
      name: '台北駐大阪經濟文化辦事處', 
      number: '090-8794-4568',
      address: '日本〒530-0005 Osaka, Kita Ward, Nakanoshima, 2 Chome-3-18 中之島フェスティバルタワー17及19樓',
      note: '漫遊撥打：+81-90-8794-4568'
    },
    { 
      name: '訪日外國人醫療&急難熱線', 
      number: '050-3816-2787',
      note: '24小時對應(英/中/韓)，生病受傷或發生事故時可撥打。'
    }
  ]
};
