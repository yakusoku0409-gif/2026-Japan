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
}

export const ITINERARY_DATA: DayPlan[] = [
  {
    date: '5月4日',
    weekday: '週日',
    location: '大阪',
    weather: { temp: '18°C', condition: 'sunny' },
    items: [
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
        id: '1-4',
        type: 'food',
        title: '可樂餅 中村屋',
        location: '大阪府大阪市北區天神橋2-3-21',
        address: '大阪府大阪市北區天神橋2-3-21',
        insights: {
          mustEat: ['原味可樂餅'],
          tips: '天神橋筋商店街的人氣老店。'
        }
      },
      {
        id: '1-5',
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
        id: '1-6',
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
      },
      {
        id: '1-7',
        type: 'hotel',
        title: '大阪麗嘉皇家酒店 Vignette Collection',
        location: '大阪府大阪市北區中之島5-3-68',
        address: '大阪府大阪市北區中之島5-3-68',
        transport: '京阪電車 中之島站 2號出口旁 / JR大阪站有免費接駁車',
        note: '每隔15分鐘一班，乘車時間約15分鐘。'
      }
    ]
  },
  {
    date: '5月5日',
    weekday: '週一',
    location: '大阪',
    weather: { temp: '20°C', condition: 'cloudy' },
    items: [
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
        note: '咲き誇る時を待つの'
      },
      {
        id: '2-4',
        type: 'hotel',
        title: '大阪麗嘉皇家酒店 Vignette Collection',
        location: '大阪府大阪市北區中之島5-3-68',
        address: '大阪府大阪市北區中之島5-3-68'
      }
    ]
  },
  {
    date: '5月6日',
    weekday: '週二',
    location: '大阪',
    weather: { temp: '19°C', condition: 'sunny' },
    items: [
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
        title: '大鳥大社附近隨便吃',
        location: '大鳥大社附近'
      },
      {
        id: '3-3',
        time: '13:00',
        type: 'transport',
        title: '住吉大社',
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
        title: '大阪燒 千房',
        location: '大阪府大阪市中央區道頓堀1-5-5',
        address: '大阪府大阪市中央區道頓堀1-5-5',
        insights: {
          mustEat: ['道頓堀燒', '千房燒'],
          mustOrder: ['千房燒', '蔥燒'],
          tips: '大阪燒名店，道頓堀店氣氛熱鬧。'
        }
      },
      {
        id: '3-6',
        type: 'hotel',
        title: '大阪麗嘉皇家酒店 Vignette Collection',
        location: '大阪府大阪市北區中之島5-3-68',
        address: '大阪府大阪市北區中之島5-3-68'
      }
    ]
  },
  {
    date: '5月7日',
    weekday: '週三',
    location: '京都',
    weather: { temp: '17°C', condition: 'rainy' },
    items: [
      {
        id: '4-1',
        time: '09:10',
        type: 'transport',
        title: '搭乘 あをによし 前往京都',
        location: '大阪難波站',
        transport: '近鐵奈良線/京都線',
        note: '已經先買好特急券+座位券，到時候刷icoca進站。'
      },
      {
        id: '4-2',
        time: '11:00',
        type: 'transport',
        title: '租腳踏車 KYOTO ECO TRIP',
        location: '京都站 八條西口',
        transport: '電動腳踏車一日2400+夜間還車400+車輛運送1000',
        note: '可以吃完晚餐再還車。'
      },
      {
        id: '4-3',
        time: '11:30',
        type: 'food',
        title: '中餐：neuf creperie',
        location: '京都市中京區',
        insights: {
          mustEat: ['法式薄餅'],
          tips: '隱藏在巷弄間的美味薄餅店。'
        }
      },
      {
        id: '4-4',
        type: 'food',
        title: 'Stumptown Coffee Roasters',
        location: 'Ace Hotel Kyoto 1F',
        address: '京都市中京區車屋町245-2 Ace Hotel Kyoto 1F'
      },
      {
        id: '4-5',
        type: 'sightseeing',
        title: '清水寺 / 御金神社 / 晴明神社',
        location: '京都市',
        insights: {
          story: '清水寺是京都最古老的寺院；御金神社祈求財運；晴明神社祭祀安倍晴明。',
          tips: '這三個點距離較遠，建議善用腳踏車。'
        }
      },
      {
        id: '4-6',
        type: 'shopping',
        title: '新風館 traveler\'s notebook factory',
        location: '京都市中京區烏丸通姊小路下ル場之町586-2',
        address: '京都市中京區烏丸通姊小路下ル場之町586-2',
        insights: {
          mustBuy: ['京都限定筆記本', '印章'],
          tips: '位於新風館內，文具控必訪。'
        }
      },
      {
        id: '4-7',
        time: '19:00',
        type: 'food',
        title: 'Ito Okashi',
        location: '京都市中京區',
        address: '京都市中京區',
        insights: {
          mustEat: ['季節限定料理'],
          tips: '精緻的日式料理。'
        }
      },
      {
        id: '4-8',
        type: 'hotel',
        title: '知恩院和順會館',
        location: '京都市東山區林下町400-2',
        address: '京都市東山區林下町400-2',
        note: 'Check in 15:00, Check out 10:00, 門禁 23:00'
      }
    ]
  },
  {
    date: '5月8日',
    weekday: '週四',
    location: '京都/名古屋',
    weather: { temp: '21°C', condition: 'sunny' },
    items: [
      {
        id: '5-1',
        time: '05:00',
        type: 'sightseeing',
        title: '早課：知恩院',
        location: '知恩院',
        insights: {
          story: '知恩院是淨土宗的總本山，早課氛圍莊嚴。',
          tips: '清晨 05:00 開始，需早起。'
        }
      },
      {
        id: '5-2',
        time: '11:00',
        type: 'shopping',
        title: '因幡藥師手作市集',
        location: '因幡堂 (平等寺)',
        note: '時間 9:00-15:00',
        insights: {
          mustBuy: ['手作工藝品', '小點心'],
          tips: '每月8日舉辦，非常熱鬧。'
        }
      },
      {
        id: '5-3',
        time: '13:30',
        type: 'food',
        title: 'Tempura Kyorinsen',
        location: 'Tempura Kyorinsen',
        reservationCode: 'A466FC',
        note: '花之課程 (10道天婦羅)',
        insights: {
          mustEat: ['現炸天婦羅'],
          tips: '高級天婦羅料理，務必準時。'
        }
      },
      {
        id: '5-4',
        time: '15:00',
        type: 'sightseeing',
        title: '大山崎山莊美術館',
        location: 'アサヒグループ大山崎山荘美術館',
        note: '安藤忠雄建築',
        insights: {
          story: '由老建築與安藤忠雄設計的新館組成，收藏莫內《睡蓮》。',
          tips: '從阪急大山崎站步行約10分鐘。'
        }
      },
      {
        id: '5-5',
        type: 'hotel',
        title: '名古屋金山附樓名鐵酒店',
        location: '名古屋市中區金山1-11-13',
        address: '愛知縣名古屋市中區金山1-11-13',
        note: '名鐵イン名古屋金山アネックス'
      }
    ]
  },
  {
    date: '5月9日',
    weekday: '週五',
    location: '名古屋',
    weather: { temp: '22°C', condition: 'sunny' },
    items: [
      {
        id: '6-1',
        time: '16:30',
        type: 'entertainment',
        title: '演唱會：SUPER JUNIOR-YESUNG LIVE TOUR',
        location: 'Niterra日本特殊陶業市民會館',
        note: '17:30 開演'
      },
      {
        id: '6-2',
        type: 'hotel',
        title: '名古屋金山附樓名鐵酒店',
        location: '名古屋市中區金山1-11-13',
        address: '愛知縣名古屋市中區金山1-11-13'
      }
    ]
  },
  {
    date: '5月10日',
    weekday: '週六',
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
    { name: '台北駐日經濟文化代表處', number: '03-3280-7811' }
  ]
};
