import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Leaf, 
  MapPin, 
  Phone, 
  Clock, 
  ArrowRight, 
  Check, 
  Menu, 
  X, 
  Star, 
  Trash2, 
  Plus, 
  Minus, 
  Heart,
  MessageCircle,
  Award,
  ShieldCheck,
  TrendingUp,
  Instagram
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from './assets/logo.jpg';
import maniyeDomatesiImg from './assets/maniye_domatesi.png';
import bahceFasulyesiImg from './assets/bahce_fasulyesi.png';
import bahceKabagiImg from './assets/bahce_kabagi.png';
import karakovanBaliImg from './assets/karakovan_bali.png';
import tarlaCilekImg from './assets/tarla_cilek.png';

// Mock Products Data
const PRODUCTS = [
  {
    id: 3,
    name: "Ata Tohumu Maniye Domatesi",
    category: "Ata Tohumu",
    price: 80,
    unit: "Kg",
    rating: 5,
    image: maniyeDomatesiImg,
    description: "Safranbolu'nun asırlık ata tohumu maniye domatesi. İnce kabuklu, bol sulu, etli ve eşsiz kokusuyla tam bir geleneksel lezzet."
  },
  {
    id: 5,
    name: "Ata Tohumu Çalı Fasulyesi",
    category: "Ata Tohumu",
    price: 90,
    unit: "Kg",
    rating: 4.9,
    image: bahceFasulyesiImg,
    description: "Bahçemizde ata tohumundan yetiştirdiğimiz kılçıksız, taze ve sulu çalı fasulyesi."
  },
  {
    id: 7,
    name: "Ata Tohumu Bahçe Kabağı",
    category: "Ata Tohumu",
    price: 70,
    unit: "Kg",
    rating: 4.8,
    image: bahceKabagiImg,
    description: "Geleneksel ata tohumlarımızdan yetiştirilen, taze ve ince kabuklu leziz bahçe kabağı."
  },
  {
    id: 8,
    name: "Ata Tohumu Tarla Salatalığı",
    category: "Ata Tohumu",
    price: 60,
    unit: "Kg",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&q=80&w=800",
    description: "Çıtır çıtır yapısı ve yoğun kokusuyla bahçemizden taze toplanan ata tohumu salatalık."
  },
  {
    id: 9,
    name: "Ata Tohumu Körpe Ispanak",
    category: "Ata Tohumu",
    price: 75,
    unit: "Kg",
    rating: 5,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=800",
    description: "Hiçbir yapay gübre kullanılmadan ata tohumu ile yetiştirilen çıtır ve taze bahçe ıspanağı."
  },
  {
    id: 1,
    name: "Karakovan Çiçek Balı",
    category: "Bal & Reçel",
    price: 380,
    unit: "Kg",
    rating: 5,
    image: karakovanBaliImg,
    description: "Hasbahçem kovanlarından tamamen doğal yöntemlerle elde edilmiş, katkısız süzme çiçek balı."
  },
  {
    id: 2,
    name: "Gezen Tavuk Yumurtası",
    category: "Yumurta & Süt",
    price: 150,
    unit: "30 Adet",
    rating: 5,
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmmCNkhou6Tf7f0zFZiyyxpuEIiZBnNDNyAk17XYeZ4NrzW_g2pIQ1lR7Z5x3i_DqcVNXavGFGKhDKbyvKZEFX5__vlGQYpMhZ90NvRmB8NLwB0GPT--wYrKLwoKcMlW2VIGUhdDfWswUTO=w800",
    description: "Bahçemizde özgürce dolaşan, doğal yemlerle beslenen tavuklarımızın günlük taze yumurtaları."
  },
  {
    id: 4,
    name: "Ev Yapımı Çilek Reçeli",
    category: "Bal & Reçel",
    price: 140,
    unit: "660 gr",
    rating: 4.9,
    image: tarlaCilekImg,
    description: "Bahçemizden toplanan taze çilekler ve pancar şekeri ile odun ateşinde pişirilen katkısız reçel."
  },
  {
    id: 6,
    name: "Köy Tereyağı",
    category: "Yumurta & Süt",
    price: 290,
    unit: "Kg",
    rating: 5,
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkct6DwjbvnfR2ZsILieEPakK5aMndv-8SZxhxtpbbe-nxIT8JN8L7rQPZNObYVvuhJ7DWk57utpnFk5CNHHrFR_uWnzS0Ypc6U2a1nqTolTZUPmYmtTh-zt8gPTMLI0-8bzPLwHInUKHpI=w800",
    description: "Geleneksel yayık yöntemi ile taze inek sütünden elde edilen hakiki tuzsuz köy tereyağı."
  }
];

// Instagram Feed Mock Data
const INSTAGRAM_POSTS = [
  { id: 1, image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWma7ORtogJ1d4ca3dtZGFeI7ZJ6GNvfLe6NZCcAtCOkweiG06st7QxmqGNCD7g7Wu7KX8qyyXsd6SiURzmbCBjfqrM1MPgayxsyR-vo4vTxYGh4whC_pytUCSpM2-DjmBHnMLvJAiRxma8S=w600", likes: 248, comments: 12 },
  { id: 2, image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmpu1gnwP6N3xiERBzVXkSpCSFo4Tyja3ZjHM-gMXATFO59MQmJpX6Rs71OyVcLI4kIqbV0Nrl9oU6UIn6nuiL6A2CxjceBIXTnXMKbmehtAdek38USU9-KUDf9JAcK4V7HgXqmmpqKzj4O=w600", likes: 185, comments: 8 },
  { id: 3, image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlV7s8NQjsWb_9DFbMq3sp_xtbopyf1NN-shqp0F3O8L3jWUoSC0YnL5HNXVoK8JwJI2PTjbKSuCILLZ1wL-00kHAIOuV5eed8UlvfIgnXWwWE5e1BUOWHjvDpaBdlMBd7ekHzvvZYwtz_e=w600", likes: 320, comments: 24 },
  { id: 4, image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmRF2H7879a47LTFZDwmkPcJx0D9Fz2g2tcHvgVvk_4OcT3JwrV_RfWSmW9K-tWDkTIZRzU3mz4c5s7yQJ6QLzDebjfKFZa9c-y3fOc2H9hezMPgSmx00uyQlQf2ZEetbcHlkPjUatT5Ykn=w600", likes: 412, comments: 37 },
  { id: 5, image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWns-NgkATgIiw7zqTuts-VuOEuto6lpWAySJaQjK-9EApW2FPCtYEAl2Mg0a32E8-bydID2ADAdv7tiXdZoOue_4JHZDk4AKAo9hJoawOPqyzKbR7oVzdni5ztW-XT79GnCuXVoMTmKAi-3=w600", likes: 295, comments: 19 },
  { id: 6, image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGNjGzeDVEnHcsTMVWyVor04WPf6oUDhrLtg7UY5GWCI6HagoJz33NnIGCFJRc3OVTQhX-J2rFURwduFxarj42itVQ-U5-uCX7r9IChmh0z-pTXL5nEslZMkUyTpB9GdQ_ohmSxCNzWWrY=w600", likes: 354, comments: 15 }
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle header background transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, amount) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + amount;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      });
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const sendWhatsAppOrder = () => {
    const phone = "905322954183"; // Hasbahçem WhatsApp No
    let message = `*Hasbahçem Doğal Tarım Ürünleri Siparişi*\n\nMerhaba, bahçenizden aşağıdaki doğal ürünleri sipariş etmek istiyorum:\n\n`;
    
    cart.forEach(item => {
      message += `• *${item.name}* - ${item.quantity} ${item.unit}\n`;
    });
    
    message += `\nAdres ve teslimat detaylarımı bu mesajın ardından ileteceğim. Teşekkürler!`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  const categories = ["Tümü", "Bal & Reçel", "Yumurta & Süt", "Ata Tohumu", "Sebze & Meyve"];

  const filteredProducts = selectedCategory === "Tümü" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary-100 selection:text-primary-900 overflow-x-hidden">
      
      {/* Dynamic Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-warm-50/95 shadow-md py-3 glass' : 'bg-black/25 py-4 glass-dark border-b border-white/5'
      }`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src={logoImg} 
              alt="Hasbahçem Logo" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-md border border-white/20 transition-transform group-hover:scale-105" 
            />
            <div>
              <span className={`text-xl md:text-2xl font-semibold tracking-tight block font-serif transition-colors duration-300 ${
                scrolled ? 'text-primary-900' : 'text-white'
              }`}>
                Hasbahçem
              </span>
              <span className={`text-[10px] md:text-xs uppercase tracking-widest font-semibold block -mt-1 transition-colors duration-300 ${
                scrolled ? 'text-sage-500' : 'text-primary-100/90'
              }`}>
                %100 Doğal Tarım
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            <a 
              href="#hikayemiz" 
              className={`transition-colors ${scrolled ? 'text-sage-800 hover:text-primary-600' : 'text-white/90 hover:text-white'}`}
            >
              Hikayemiz
            </a>
            <a 
              href="#urunler" 
              className={`transition-colors ${scrolled ? 'text-sage-800 hover:text-primary-600' : 'text-white/90 hover:text-white'}`}
            >
              Ürünlerimiz
            </a>
            <a 
              href="#instagram" 
              className={`transition-colors ${scrolled ? 'text-sage-800 hover:text-primary-600' : 'text-white/90 hover:text-white'}`}
            >
              Çiftlikten Kareler
            </a>
            <a 
              href="#iletisim" 
              className={`transition-colors ${scrolled ? 'text-sage-800 hover:text-primary-600' : 'text-white/90 hover:text-white'}`}
            >
              İletişim
            </a>
          </nav>

          {/* Utility Buttons */}
          <div className="flex items-center gap-4">
            
            {/* Basket Button */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2.5 rounded-full transition-all group ${
                scrolled ? 'hover:bg-primary-50 text-primary-900' : 'hover:bg-white/10 text-white'
              }`}
              aria-label="Sepetim"
            >
              <ShoppingBag className="w-6 h-6 group-hover:scale-105 transition-transform" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full transition-colors md:hidden ${
                scrolled ? 'hover:bg-sage-100 text-primary-900' : 'hover:bg-white/10 text-white'
              }`}
              aria-label="Menü"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slide-down */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[68px] left-0 right-0 bg-warm-50 z-30 shadow-lg border-b border-sage-100 py-6 px-4 flex flex-col gap-4 text-center text-sage-800 font-semibold md:hidden"
          >
            <a href="#hikayemiz" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary-600 p-2">Hikayemiz</a>
            <a href="#urunler" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary-600 p-2">Ürünlerimiz</a>
            <a href="#instagram" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary-600 p-2">Çiftlikten Kareler</a>
            <a href="#iletisim" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary-600 p-2">İletişim</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWma7ORtogJ1d4ca3dtZGFeI7ZJ6GNvfLe6NZCcAtCOkweiG06st7QxmqGNCD7g7Wu7KX8qyyXsd6SiURzmbCBjfqrM1MPgayxsyR-vo4vTxYGh4whC_pytUCSpM2-DjmBHnMLvJAiRxma8S=w1600" 
            alt="Hasbahçem Organik Çiftlik" 
            className="w-full h-full object-cover scale-105 filter brightness-[0.80] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-50 via-warm-50/20 to-black/45" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs md:text-sm font-semibold uppercase tracking-widest text-primary-100 shadow-sm animate-float">
              <Leaf className="w-4 h-4 text-primary-200 fill-primary-200" />
              Doğadan Sofranıza Doğallık
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight font-serif drop-shadow-md text-white leading-tight">
              🌿 Toprağın Bereketi, <span className="text-primary-200 block sm:inline">Hasbahçem</span> 🌿
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-warm-50/95 font-medium drop-shadow max-w-2xl mx-auto leading-relaxed">
              👩‍🌾 “Kendin Topla” konseptiyle; doğanın içinde, dalından taze sebzeleri kendi ellerinizle toplamanın keyfini yaşayın.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#urunler" 
                className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2 group"
              >
                Taze Ürünleri Keşfet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#hikayemiz" 
                className="w-full sm:w-auto bg-black/20 hover:bg-black/35 border border-white/20 text-white font-medium px-8 py-4 rounded-full transition-all hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                Hikayemizi Oku
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Badges */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-full max-w-4xl px-4 hidden lg:grid grid-cols-3 gap-6">
          <div className="bg-white/95 rounded-2xl p-4 flex items-center gap-4 shadow-xl border border-sage-100/50 glass">
            <div className="bg-primary-50 p-3 rounded-xl text-primary-600">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sage-900 text-sm">%100 Doğal Üretim</h3>
              <p className="text-xs text-sage-500">Katkı maddesi ve koruyucu içermez</p>
            </div>
          </div>
          
          <div className="bg-white/95 rounded-2xl p-4 flex items-center gap-4 shadow-xl border border-sage-100/50 glass">
            <div className="bg-primary-50 p-3 rounded-xl text-primary-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sage-900 text-sm">Doğal Tarım & Yerli</h3>
              <p className="text-xs text-sage-500">Yerel & yerli üretim garantisi</p>
            </div>
          </div>

          <div className="bg-white/95 rounded-2xl p-4 flex items-center gap-4 shadow-xl border border-sage-100/50 glass">
            <div className="bg-primary-50 p-3 rounded-xl text-primary-600">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sage-900 text-sm">Günlük Taze Hasat</h3>
              <p className="text-xs text-sage-500">Aynı gün kargo ve dağıtım</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hikayemiz Section */}
      <section id="hikayemiz" className="py-20 bg-warm-100 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Section */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWld5ORj9p4avjzMqNspKYP6siXBfLpRFhoe9SXtcqj-FZ38f0wOFlRhMdlnQ-mdWPF7UYvO9x5_G2rM8m-czdLIbfdfE7WbVw8uwKHQmnb3ucTiH5sehtANVEOnssTTXPTJTcIefLwWIL7V=w800" 
                  alt="Çiftlik ve Doğal Yaşam" 
                  className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                
                {/* Floating Experience Box */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg flex items-center gap-4 border border-white/40 glass">
                  <span className="text-4xl md:text-5xl font-extrabold text-primary-600 font-serif">15+</span>
                  <div className="border-l border-sage-200 pl-4">
                    <h4 className="font-extrabold text-sage-900 text-sm">Yıllık Bahçe Deneyimi</h4>
                    <p className="text-xs text-sage-500">Toprak aşkıyla büyüyen geleneksel aile çiftliği.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-primary-600 font-bold uppercase tracking-widest text-xs block">Biz Kimiz?</span>
                <h2 className="text-3xl md:text-4xl font-semibold text-primary-900 font-serif leading-tight">
                  Hasbahçem'in Topraktan Sofranıza Uzanan Hikayesi
                </h2>
              </div>

              <p className="text-sage-700 text-sm md:text-base leading-relaxed">
                Her şey bir hayalle başladı; çocuklarımıza tamamen katkısız, mevsiminde ve toprak ananın sunduğu en saf haliyle gıdalar yedirebilmek. Bu amaçla çıktığımız yolda, ailemizin bahçesinde yetiştirdiğimiz doğal tarım ürünlerimizi zamanla sizlerin de sofralarına ulaştırmaya karar verdik.
              </p>

              <p className="text-sage-700 text-sm md:text-base leading-relaxed">
                Kovanlarımızdaki arıların ürettiği şifalı ballardan; meşhur Safranbolu maniye domatesi, taze çalı fasulyesi, çıtır tarla salatalığı, körpe ıspanak ve kabak gibi genetiği korunmuş ata tohumlarımızdan yetiştirdiğimiz yerel sebzelere kadar her üründe doğallığı, temiz tarım ilkelerini ve geleneksel tatları koruyoruz. Hiçbir katkı maddesi, yapay gübre veya koruyucu kimyasal kullanmadan üretim yapıyoruz.
              </p>

              {/* USP Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="bg-primary-100 p-1.5 rounded-full text-primary-600">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-sage-800">Katkısız Köy Ürünleri</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary-100 p-1.5 rounded-full text-primary-600">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-sage-800">Doğal Arıcılık & Tarım</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary-100 p-1.5 rounded-full text-primary-600">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-sage-800">Geleneksel Odun Ateşi Pişirim</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary-100 p-1.5 rounded-full text-primary-600">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-sage-800">Çevre Dostu Sürdürülebilir Tarım</span>
                </div>
              </div>

              {/* Call to action */}
              <div className="pt-4">
                <a 
                  href="#urunler" 
                  className="inline-flex items-center gap-2 bg-primary-950 hover:bg-primary-900 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
                >
                  Ürünlerimizi İnceleyin
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ürünlerimiz Section */}
      <section id="urunler" className="py-20 bg-warm-50 relative organic-pattern">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-primary-600 font-bold uppercase tracking-widest text-xs">Bahçe Ürünleri</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-900 font-serif">
              Taze ve Doğal Ürünlerimiz
            </h2>
            <p className="text-sage-600 text-sm md:text-base">
              Katkısız ve tamamen doğal yöntemlerle yetiştirilmiş ürünlerimizi sipariş sepetine ekleyebilir, doğrudan WhatsApp ile siparişinizi oluşturabilirsiniz.
            </p>
          </div>

          {/* Categories Tab list */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white hover:bg-primary-50 text-sage-700 border border-sage-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={product.id}
                  className="bg-white rounded-3xl overflow-hidden border border-sage-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden bg-sage-50">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 text-primary-700 font-bold px-3 py-1 rounded-full text-xs tracking-wider uppercase border border-sage-100 glass">
                      {product.category}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6 flex flex-col flex-grow space-y-4">
                    <div className="space-y-1">
                      {/* Rating */}
                      <div className="flex gap-1 items-center text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                        <span className="text-xs text-sage-400 font-medium ml-1">({product.rating})</span>
                      </div>
                      
                      <h3 className="font-semibold text-primary-900 text-lg md:text-xl font-serif">
                        {product.name}
                      </h3>
                      <p className="text-sage-500 text-xs md:text-sm line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Price and Add button */}
                    <div className="flex justify-between items-center pt-2 mt-auto">
                      <div>
                        <span className="text-base font-bold text-sage-600 block">
                          Birim: {product.unit}
                        </span>
                      </div>

                      <button
                        onClick={() => addToCart(product)}
                        className="bg-primary-600 hover:bg-primary-700 text-white font-bold p-3 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center gap-1 group-hover:scale-105 text-sm"
                      >
                        <Plus className="w-4 h-4" />
                        Sepete Ekle
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Instagram Feed / Çiftlik Yaşamı Section */}
      <section id="instagram" className="py-20 bg-warm-100 relative">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2 text-primary-600 font-bold uppercase tracking-widest text-xs">
                <Instagram className="w-4 h-4" />
                @hasbahcemoffical
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-900 font-serif">
                Instagram'da Hasbahçem
              </h2>
              <p className="text-sage-600 text-sm">
                Bahçemizdeki doğal hayatı, hasat anlarımızı ve güncel hikayelerimizi Instagram hesabımız üzerinden takip edin.
              </p>
            </div>
            <div>
              <a 
                href="https://www.instagram.com/hasbahcemoffical/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-primary-50 text-primary-900 font-bold px-6 py-3 rounded-full border border-sage-200 shadow-sm transition-all"
              >
                <Instagram className="w-5 h-5 text-rose-600" />
                Sayfamızı Ziyaret Et
              </a>
            </div>
          </div>

          {/* Grid of posts */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {INSTAGRAM_POSTS.map((post) => (
              <a 
                key={post.id}
                href="https://www.instagram.com/hasbahcemoffical/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group aspect-square rounded-2xl overflow-hidden shadow-sm block bg-sage-50"
              >
                <img 
                  src={post.image} 
                  alt="Hasbahçem Instagram Paylaşımı" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay details on hover */}
                <div className="absolute inset-0 bg-primary-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white text-sm font-semibold">
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-5 h-5 fill-current text-red-500" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-5 h-5 fill-current text-blue-400" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* Müşteri Yorumları Section */}
      <section className="py-20 bg-warm-50 organic-pattern">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-primary-600 font-bold uppercase tracking-widest text-xs">Müşteri Yorumları</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-900 font-serif">
              Sofralardan Gelen Yorumlar
            </h2>
            <p className="text-sage-500 text-sm">
              Hasbahçem lezzetlerini tadan değerli müşterilerimizin samimi görüşleri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl border border-sage-100 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sage-700 text-sm md:text-base italic leading-relaxed">
                  "Çocuklarıma hazır gıda yedirmemeye özen gösteriyorum. Hasbahçem'in ata tohumu maniye domatesi, taze fasulyesi ve diğer taze sebzelerini güvenle kullanıyorum. Kokusu ve tadı harika."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-sage-100">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center font-bold text-primary-800">
                  AY
                </div>
                <div>
                  <h4 className="font-bold text-sage-900 text-sm">Ayşe Yılmaz</h4>
                  <span className="text-xs text-sage-400 font-medium">İstanbul</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl border border-sage-100 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sage-700 text-sm md:text-base italic leading-relaxed">
                  "Arıcılık sertifikalarını inceleyip güvenerek çiçek balı sipariş ettim. Şimdiye kadar yediğim en iyi doğal bal diyebilirim. Gezen tavuk yumurtaları da son derece taze."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-sage-100">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center font-bold text-primary-800">
                  MK
                </div>
                <div>
                  <h4 className="font-bold text-sage-900 text-sm">Mustafa Kaya</h4>
                  <span className="text-xs text-sage-400 font-medium">Ankara</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl border border-sage-100 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sage-700 text-sm md:text-base italic leading-relaxed">
                  "Çilek ve kayısı reçelleri tek kelimeyle efsane! Annemin köyde odun ateşinde yaptığı reçellerle tamamen aynı. Hızlı teslimat için ayrıca teşekkür ederim."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-sage-100">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center font-bold text-primary-800">
                  SD
                </div>
                <div>
                  <h4 className="font-bold text-sage-900 text-sm">Selin Demir</h4>
                  <span className="text-xs text-sage-400 font-medium">İzmir</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim & Detaylar Section */}
      <section id="iletisim" className="py-20 bg-warm-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-2">
                <span className="text-primary-600 font-bold uppercase tracking-widest text-xs block">İletişim</span>
                <h2 className="text-3xl md:text-4xl font-semibold text-primary-900 font-serif">
                  Bizimle İletişime Geçin
                </h2>
                <p className="text-sage-600 text-sm">
                  Ürünlerimiz, toptan alım veya çiftliğimizi ziyaret etmekle ilgili her türlü sorunuz için bize ulaşabilirsiniz.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-sage-200/60 flex gap-4 items-start shadow-sm">
                  <div className="bg-primary-100 text-primary-700 p-3 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sage-900 text-sm">Çiftlik Adresi</h4>
                    <a 
                      href="https://maps.app.goo.gl/rEw2YFUadLHxmg786" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary-600 hover:text-primary-700 hover:underline text-xs mt-1 block font-semibold"
                    >
                      Safranbolu, Karabük (Yol Tarifi Al ↗)
                    </a>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-sage-200/60 flex gap-4 items-start shadow-sm">
                  <div className="bg-primary-100 text-primary-700 p-3 rounded-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sage-900 text-sm">Telefon & WhatsApp Hattı</h4>
                    <p className="text-sage-500 text-xs mt-1">+90 532 295 41 83</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-sage-200/60 flex gap-4 items-start shadow-sm">
                  <div className="bg-primary-100 text-primary-700 p-3 rounded-xl">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sage-900 text-sm">Çalışma Saatleri</h4>
                    <p className="text-sage-500 text-xs mt-1">Her Gün: 08:30 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-sage-100 shadow-lg">
              <h3 className="text-xl font-semibold text-primary-900 font-serif mb-6">
                Bize Mesaj Gönderin
              </h3>
              
              <form onSubmit={(e) => { e.preventDefault(); alert('Mesajınız başarıyla iletildi. En kısa sürede geri dönüş yapacağız.'); }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-sage-700 uppercase">Adınız Soyadınız</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full bg-warm-50 border border-sage-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-xl px-4 py-3 text-sm text-sage-900 outline-none transition-colors"
                      placeholder="Ahmet Yılmaz"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-sage-700 uppercase">Telefon Numaranız</label>
                    <input 
                      type="tel" 
                      required 
                      className="w-full bg-warm-50 border border-sage-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-xl px-4 py-3 text-sm text-sage-900 outline-none transition-colors"
                      placeholder="05xx xxx xx xx"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-sage-700 uppercase">E-posta Adresiniz</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full bg-warm-50 border border-sage-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-xl px-4 py-3 text-sm text-sage-900 outline-none transition-colors"
                    placeholder="ahmet@example.com"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-sage-700 uppercase">Mesajınız</label>
                  <textarea 
                    rows={4} 
                    required 
                    className="w-full bg-warm-50 border border-sage-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-xl px-4 py-3 text-sm text-sage-900 outline-none transition-colors resize-none"
                    placeholder="Sormak istediğiniz soruları buraya yazabilirsiniz..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Gönder
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-950 text-white/80 py-12 border-t border-primary-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            
            {/* Branding Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-primary-600 p-1.5 rounded-full text-white">
                  <Leaf className="w-4 h-4" />
                </div>
                <span className="text-lg font-extrabold tracking-tight text-white font-serif">
                  Hasbahçem
                </span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                Asırlık deneyim ve toprak sevgisiyle harmanlanan lezzetleri taptaze sofranıza sunuyoruz. Sağlığınız bizim önceliğimizdir.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Hızlı Erişim</h4>
              <ul className="space-y-2 text-xs text-white/70">
                <li><a href="#hikayemiz" className="hover:text-white transition-colors">Hikayemiz</a></li>
                <li><a href="#urunler" className="hover:text-white transition-colors">Doğal Ürünlerimiz</a></li>
                <li><a href="#instagram" className="hover:text-white transition-colors">Instagram Çiftlik Galerisi</a></li>
                <li><a href="#iletisim" className="hover:text-white transition-colors">Bizimle İletişim</a></li>
              </ul>
            </div>

            {/* Production Standards */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Üretim Standartlarımız</h4>
              <ul className="space-y-2 text-xs text-white/70">
                <li>Doğal Tarım Yöntemleri</li>
                <li>Geleneksel Doğal Arıcılık</li>
                <li>İyi Tarım Uygulamaları</li>
              </ul>
            </div>

            {/* Social Medias */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Sosyal Medya</h4>
              <p className="text-xs text-white/60">
                Çiftlik hayatı güncellemeleri için sosyal medyada bizimle kalın.
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://www.instagram.com/hasbahcemoffical/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full text-white transition-all shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Hasbahçem. Tüm Hakları Saklıdır.</p>
            <p className="flex items-center gap-1.5">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
              <span>by</span>
              <a href="https://eradijital.com" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold text-white/60 hover:text-white transition-colors">eradijital.com</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Slide-out Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black z-50"
            />

            {/* Sidebar content */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[450px] bg-warm-50 z-50 shadow-2xl flex flex-col border-l border-sage-100"
            >
              {/* Header */}
              <div className="p-6 border-b border-sage-100 flex justify-between items-center bg-white">
                <div className="flex items-center gap-2 text-primary-900">
                  <ShoppingBag className="w-5 h-5 text-primary-600" />
                  <span className="font-extrabold text-lg font-serif">Sipariş Sepetim</span>
                  <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full font-bold">
                    {cartItemCount}
                  </span>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-full hover:bg-sage-100 text-sage-500 hover:text-sage-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-grow overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col justify-center items-center text-center space-y-4 text-sage-400 py-12">
                    <ShoppingBag className="w-16 h-16 stroke-[1.2] text-sage-300" />
                    <div>
                      <p className="font-bold text-sage-600">Sepetiniz Boş</p>
                      <p className="text-xs mt-1">Bahçemizin taze ve organik ürünlerinden ekleyin.</p>
                    </div>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="bg-primary-50 text-primary-700 font-bold px-5 py-2.5 rounded-full text-xs hover:bg-primary-100 transition-colors"
                    >
                      Alışverişe Başla
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div 
                      key={item.id} 
                      className="bg-white p-4 rounded-2xl border border-sage-100 flex gap-4 items-center shadow-sm relative group"
                    >
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-16 h-16 rounded-xl object-cover bg-sage-50"
                      />
                      
                      <div className="flex-grow space-y-1 pr-6">
                        <h4 className="font-bold text-primary-900 text-sm md:text-base leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-xs text-sage-400 font-semibold">
                          Birim: {item.unit}
                        </p>
                        
                        {/* Quantity controls */}
                        <div className="flex items-center gap-3 pt-1">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="bg-sage-100 hover:bg-sage-200 text-sage-700 p-1.5 rounded-lg transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-sm font-bold text-sage-800 w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="bg-sage-100 hover:bg-sage-200 text-sage-700 p-1.5 rounded-lg transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Delete button */}
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-rose-500 hover:text-rose-700 p-2 hover:bg-rose-50 rounded-xl transition-all"
                        aria-label="Sil"
                      >
                        <Trash2 className="w-4.5 h-4.5" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Checkout / Footer */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-sage-100 bg-white space-y-4">
                  <button
                    onClick={sendWhatsAppOrder}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2.5 text-sm sm:text-base group"
                  >
                    <MessageCircle className="w-5 h-5 text-white fill-current group-hover:scale-110 transition-transform" />
                    WhatsApp ile Siparişi Tamamla
                  </button>

                  <p className="text-[10px] text-sage-400 text-center leading-relaxed">
                    Siparişiniz WhatsApp sohbetine aktarılacaktır. Ödeme ve gönderim bilgilerinizi satıcı ile sohbet üzerinden kararlaştırabilirsiniz.
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
