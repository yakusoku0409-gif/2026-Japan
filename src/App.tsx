import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  MapPin, 
  Navigation, 
  Utensils, 
  ShoppingBag, 
  Plane, 
  Music, 
  Bus, 
  Hotel, 
  Info, 
  Phone, 
  ChevronRight, 
  Sun, 
  Cloud, 
  CloudRain,
  ExternalLink,
  Heart,
  Star,
  Ticket
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ITINERARY_DATA, INFO_DATA, ItineraryItem, DayPlan } from './data/itinerary';

// --- Components ---

const WeatherIcon = ({ condition }: { condition: string }) => {
  switch (condition) {
    case 'sunny': return <Sun className="w-5 h-5 text-orange-400" />;
    case 'cloudy': return <Cloud className="w-5 h-5 text-gray-400" />;
    case 'rainy': return <CloudRain className="w-5 h-5 text-blue-400" />;
    default: return <Sun className="w-5 h-5" />;
  }
};

const TypeIcon = ({ type }: { type: ItineraryItem['type'] }) => {
  const className = "w-5 h-5";
  switch (type) {
    case 'flight': return <Plane className={className} />;
    case 'hotel': return <Hotel className={className} />;
    case 'food': return <Utensils className={className} />;
    case 'sightseeing': return <MapPin className={className} />;
    case 'transport': return <Bus className={className} />;
    case 'shopping': return <ShoppingBag className={className} />;
    case 'entertainment': return <Music className={className} />;
    default: return <Star className={className} />;
  }
};

const TypeLabel = ({ type }: { type: ItineraryItem['type'] }) => {
  const labels: Record<string, string> = {
    flight: '航班',
    hotel: '住宿',
    food: '美食',
    sightseeing: '景點',
    transport: '交通',
    shopping: '購物',
    entertainment: '活動'
  };
  const colors: Record<string, string> = {
    flight: 'bg-blue-50 text-blue-600',
    hotel: 'bg-indigo-50 text-indigo-600',
    food: 'bg-orange-50 text-orange-600',
    sightseeing: 'bg-green-50 text-green-600',
    transport: 'bg-gray-50 text-gray-600',
    shopping: 'bg-pink-50 text-pink-600',
    entertainment: 'bg-purple-50 text-purple-600'
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${colors[type]}`}>
      {labels[type]}
    </span>
  );
};

const ItineraryCard = ({ item }: { item: ItineraryItem; key?: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleNavigate = (e: React.MouseEvent) => {
    e.stopPropagation();
    const query = encodeURIComponent(item.address || item.location);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  const handleCopyCode = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.reservationCode) {
      navigator.clipboard.writeText(item.reservationCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-4 mb-3 shadow-sm border border-gray-100/50"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-1">
          <div className="text-xs font-mono text-gray-400">{item.time || '--:--'}</div>
          <div className={`p-2 rounded-xl bg-opacity-10 ${item.type === 'food' ? 'bg-orange-100' : 'bg-sakura-100'}`}>
            <TypeIcon type={item.type} />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start mb-1">
            <TypeLabel type={item.type} />
            {item.reservationCode && (
              <button 
                onClick={handleCopyCode}
                className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 active:scale-95 transition-transform"
              >
                <Ticket className="w-3 h-3" />
                {copied ? '已複製' : `預約代號: ${item.reservationCode}`}
              </button>
            )}
          </div>
          <h3 className="font-bold text-gray-800 text-base leading-tight mb-1">{item.title}</h3>
          <div className="flex items-center text-xs text-gray-500 gap-1 mb-2">
            <MapPin className="w-3 h-3" />
            <span className="truncate">{item.location}</span>
          </div>

          {item.transport && (
            <div className="bg-gray-50 rounded-lg p-2 text-xs text-gray-600 mb-2 border-l-2 border-gray-200">
              {item.transport}
            </div>
          )}

          <div className="flex gap-2">
            {(item.address || item.location) && (
              <button 
                onClick={handleNavigate}
                className="flex items-center gap-1 text-[11px] font-medium text-sakura-600 bg-sakura-50 px-3 py-1.5 rounded-full hover:bg-sakura-100 transition-colors"
              >
                <Navigation className="w-3 h-3" />
                導航
              </button>
            )}
            {item.insights && (
              <button className="text-[11px] font-medium text-gray-400 px-3 py-1.5 rounded-full border border-gray-100">
                {isExpanded ? '收起攻略' : '查看攻略'}
              </button>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && item.insights && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mt-4 pt-4 border-t border-dashed border-gray-100"
          >
            {item.insights.image && (
              <div className="mb-4 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <img 
                  src={item.insights.image} 
                  alt={item.title} 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}

            {item.insights.story && (
              <div className="mb-3">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Star className="w-3 h-3" /> 景點故事
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{item.insights.story}</p>
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-3 mb-3">
              {item.insights.mustEat && (
                <div>
                  <div className="text-[10px] font-bold text-orange-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Utensils className="w-3 h-3" /> 必吃美食
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.insights.mustEat.map(food => (
                      <span key={food} className="text-[10px] bg-orange-50 text-orange-600 px-1.5 py-0.5 rounded font-bold">
                        {food}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {item.insights.mustOrder && (
                <div>
                  <div className="text-[10px] font-bold text-amber-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Star className="w-3 h-3" /> 必點菜單
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.insights.mustOrder.map(order => (
                      <span key={order} className="text-[10px] bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded font-bold">
                        {order}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {item.insights.mustBuy && (
                <div>
                  <div className="text-[10px] font-bold text-pink-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <ShoppingBag className="w-3 h-3" /> 必買伴手禮
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.insights.mustBuy.map(gift => (
                      <span key={gift} className="text-[10px] bg-pink-50 text-pink-600 px-1.5 py-0.5 rounded font-bold">
                        {gift}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {item.insights.plan && (
              <div className="mb-4 bg-blue-50/50 rounded-xl p-3 border border-blue-100/50">
                <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Ticket className="w-3 h-3" /> 租借方案
                </div>
                <p className="text-xs text-blue-700 whitespace-pre-wrap leading-relaxed">{item.insights.plan}</p>
              </div>
            )}

            {item.insights.tips && (
              <div className="bg-sakura-50/50 rounded-xl p-3">
                <div className="text-[10px] font-bold text-sakura-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Heart className="w-3 h-3" /> 攻略貼士
                </div>
                <p className="text-xs text-sakura-700 whitespace-pre-wrap">{item.insights.tips}</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'info'>('itinerary');
  const [selectedDay, setSelectedDay] = useState(0);

  const currentDay = ITINERARY_DATA[selectedDay];

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-gray-800 font-sans pb-24">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#FDFCF8]/80 backdrop-blur-md px-6 pt-8 pb-4">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">花の盛りは一夜の夢</h1>
            <p className="text-xs text-gray-400 font-medium">2026 大阪・京都・名古屋</p>
          </div>
          <div className="bg-sakura-100 p-2 rounded-2xl">
            <Calendar className="w-6 h-6 text-sakura-500" />
          </div>
        </div>

        {/* Day Selector */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-6 px-6">
          {ITINERARY_DATA.map((day, idx) => (
            <button
              key={day.date}
              onClick={() => setSelectedDay(idx)}
              className={`flex-shrink-0 flex flex-col items-center justify-center w-14 h-16 rounded-2xl transition-all duration-300 ${
                selectedDay === idx 
                ? 'bg-sakura-500 text-white shadow-lg shadow-sakura-200 scale-105' 
                : 'bg-white text-gray-400 border border-gray-100'
              }`}
            >
              <span className="text-[10px] font-medium opacity-80">{day.weekday}</span>
              <span className="text-sm font-bold">{day.date.split('月')[1].replace('日', '')}</span>
            </button>
          ))}
        </div>
      </header>

      <main className="px-6">
        <AnimatePresence mode="wait">
          {activeTab === 'itinerary' ? (
            <motion.div
              key="itinerary"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              {/* Day Info & Weather */}
              <div className="flex justify-between items-center mb-6 bg-white/50 rounded-2xl p-4 border border-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sakura-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-sakura-500" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-800">{currentDay.location}</h2>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{currentDay.date} {currentDay.weekday}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <WeatherIcon condition={currentDay.weather.condition} />
                  <span className="text-sm font-bold text-gray-600">{currentDay.weather.temp}</span>
                </div>
              </div>

              {/* Day Note (Sticky Note) */}
              {currentDay.dayNote && (
                <div className="mb-6 bg-amber-50 rounded-2xl p-4 border border-amber-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-amber-100 transform rotate-45 translate-x-4 -translate-y-4" />
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-amber-100/50 rounded-xl">
                      <ExternalLink className="w-5 h-5 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-amber-900 mb-0.5">{currentDay.dayNote.title}</h3>
                      <p className="text-xs text-amber-700 leading-relaxed mb-2">{currentDay.dayNote.content}</p>
                      {currentDay.dayNote.url && (
                        <a 
                          href={currentDay.dayNote.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-600 bg-white/50 px-3 py-1.5 rounded-lg border border-amber-200/50 active:scale-95 transition-transform"
                        >
                          開啟連結 <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Itinerary List */}
              <div className="relative">
                <div className="absolute left-[21px] top-4 bottom-4 w-px bg-dashed bg-gray-100" />
                {currentDay.items.map((item) => (
                  <ItineraryCard key={item.id} item={item} />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="info"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Flight Info */}
              <section>
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Plane className="w-5 h-5 text-blue-500" /> 航班資訊
                </h2>
                <div className="space-y-3">
                  {INFO_DATA.flights.map(flight => (
                    <div key={flight.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{flight.carrier}</span>
                        <span className="text-sm font-mono font-bold">{flight.flightNo}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-center">
                          <div className="text-xl font-bold">{flight.from}</div>
                          <div className="text-[10px] text-gray-400">Departure</div>
                        </div>
                        <div className="flex-1 flex flex-col items-center px-4">
                          <div className="w-full h-px bg-gray-100 relative">
                            <Plane className="w-3 h-3 text-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90" />
                          </div>
                          <div className="text-[10px] text-gray-400 mt-1">{flight.time}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold">{flight.to}</div>
                          <div className="text-[10px] text-gray-400">Arrival</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Accommodation Info */}
              <section>
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Hotel className="w-5 h-5 text-indigo-500" /> 住宿資訊
                </h2>
                <div className="space-y-3">
                  {INFO_DATA.hotels.map(hotel => (
                    <div key={hotel.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                      <h3 className="font-bold text-gray-800 mb-1">{hotel.name}</h3>
                      <p className="text-xs text-gray-500 mb-3">{hotel.address}</p>
                      <div className="flex gap-2">
                        <a href={`tel:${hotel.phone}`} className="flex-1 flex items-center justify-center gap-2 bg-gray-50 text-gray-600 py-2 rounded-xl text-xs font-medium">
                          <Phone className="w-3 h-3" /> 打電話
                        </a>
                        <button 
                          onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.address)}`, '_blank')}
                          className="flex-1 flex items-center justify-center gap-2 bg-sakura-50 text-sakura-500 py-2 rounded-xl text-xs font-medium"
                        >
                          <Navigation className="w-3 h-3" /> 導航
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Emergency Contacts */}
              <section>
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-red-500">
                  <Phone className="w-5 h-5" /> 緊急聯絡
                </h2>
                <div className="bg-red-50 rounded-2xl p-2 border border-red-100 divide-y divide-red-100">
                  {INFO_DATA.emergency.map((contact) => (
                    <div key={contact.name} className="p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-bold text-red-800">{contact.name}</span>
                        <a href={`tel:${contact.number}`} className="text-sm font-bold text-red-600 flex items-center gap-1">
                          {contact.number} <ChevronRight className="w-4 h-4" />
                        </a>
                      </div>
                      {(contact as any).address && (
                        <p className="text-[10px] text-red-700/70 mb-1 leading-tight">{(contact as any).address}</p>
                      )}
                      {(contact as any).note && (
                        <p className="text-[10px] text-red-600 font-medium italic">{(contact as any).note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-6 left-6 right-6 z-50">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-2 shadow-2xl shadow-sakura-100/50 border border-white flex gap-2">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl transition-all duration-300 ${
              activeTab === 'itinerary' ? 'bg-sakura-500 text-white shadow-lg shadow-sakura-200' : 'text-gray-400'
            }`}
          >
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-bold">行程</span>
          </button>
          <button
            onClick={() => setActiveTab('info')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl transition-all duration-300 ${
              activeTab === 'info' ? 'bg-sakura-500 text-white shadow-lg shadow-sakura-200' : 'text-gray-400'
            }`}
          >
            <Info className="w-5 h-5" />
            <span className="text-sm font-bold">資訊</span>
          </button>
        </div>
      </nav>

      {/* Custom Styles for no-scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .bg-dashed { background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px); background-size: 1px 8px; }
      `}</style>
    </div>
  );
}
