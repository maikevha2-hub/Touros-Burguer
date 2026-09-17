import React from 'react';
import { Phone, Instagram, Flame, Smartphone, FileText, Share2, Check, Gift } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { AppViewMode } from '../types';
import { TourosLogo } from './TourosLogo';

interface HeaderProps {
  viewMode: AppViewMode;
  setViewMode: (mode: AppViewMode) => void;
}

export const Header: React.FC<HeaderProps> = ({ viewMode, setViewMode }) => {
  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Touros Burger & Pizza - Cardápio',
        text: 'Confira o cardápio da Touros Burger & Pizza!',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <header className="bg-[#8d3a14] text-white shadow-md no-print" id="main-header">
      {/* Top micro bar */}
      <div className="bg-[#6b2c0f] px-4 py-1.5 text-xs text-[#fed7aa] flex flex-wrap justify-between items-center gap-2 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold tracking-wide">DELIVERY ABERTO</span>
          <span className="hidden sm:inline">• Peça já pelo WhatsApp</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de fazer um pedido no Touros Burger & Pizza.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            id="header-whatsapp-link"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="font-semibold">{RESTAURANT_INFO.whatsapp}</span>
          </a>
          <a
            href={RESTAURANT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors hidden sm:flex"
            id="header-instagram-link"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>{RESTAURANT_INFO.instagram}</span>
          </a>
          <button
            onClick={handleShare}
            className="flex items-center gap-1 hover:text-white transition-colors text-xs ml-1"
            title="Compartilhar Cardápio"
            id="share-menu-button"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copiado!' : 'Compartilhar'}</span>
          </button>
        </div>
      </div>

      {/* Main Brand Section */}
      <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Real Mascot Logo Image */}
          <div className="relative shrink-0 flex items-center justify-center">
            <TourosLogo size={84} className="border-2 border-[#ea580c] shadow-lg" />
          </div>

          <div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide text-white uppercase drop-shadow-sm font-brand">
                Touros Burger & Pizza
              </h1>
            </div>
            <p className="text-amber-100/90 text-sm sm:text-base font-medium mt-1">
              Hambúrgueres Artesanais • Pizzas de Forno • Porções Especiais
            </p>
          </div>
        </div>

        {/* View Mode Toggle Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 bg-[#6b2c0f]/90 p-1.5 rounded-xl border border-[#b45309]/50 shadow-inner flex-wrap justify-center">
          <button
            type="button"
            onClick={() => setViewMode('digital')}
            className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              viewMode === 'digital'
                ? 'bg-amber-500 text-[#431407] shadow-md'
                : 'text-amber-100 hover:text-white hover:bg-[#8d3a14]/60'
            }`}
            id="view-mode-digital-btn"
          >
            <Smartphone className="w-4 h-4" />
            <span>Cardápio Digital</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('print')}
            className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              viewMode === 'print'
                ? 'bg-amber-500 text-[#431407] shadow-md'
                : 'text-amber-100 hover:text-white hover:bg-[#8d3a14]/60'
            }`}
            id="view-mode-print-btn"
          >
            <FileText className="w-4 h-4" />
            <span>Folheto Impresso</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('roleta')}
            className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs sm:text-sm font-black transition-all cursor-pointer ${
              viewMode === 'roleta'
                ? 'bg-[#ea580c] text-white shadow-md ring-2 ring-amber-300'
                : 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-200 hover:text-white hover:bg-orange-500/40 border border-amber-400/40'
            }`}
            id="view-mode-roleta-btn"
          >
            <Gift className="w-4 h-4 text-amber-300" />
            <span>🎰 Roleta de Prêmios</span>
          </button>
        </div>
      </div>

      {/* Delivery Highlights Banner */}
      <div className="bg-[#faf7f2] border-y-2 border-[#8d3a14] py-2.5 px-4 text-[#261b14] shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="text-xl">🛵</span>
            <div>
              <span className="font-extrabold text-[#8d3a14] tracking-wide text-xs sm:text-sm uppercase">
                {RESTAURANT_INFO.deliveryBadgeTitle}
              </span>
              <p className="text-xs text-[#553322] font-semibold">
                {RESTAURANT_INFO.deliveryBadgeSubtitle}
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de fazer um pedido.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#8d3a14] hover:bg-[#7c2d12] text-white px-4 py-2 rounded-lg font-bold text-xs sm:text-sm shadow transition-colors shrink-0"
            id="banner-order-whatsapp-btn"
          >
            <Phone className="w-4 h-4 text-emerald-300" />
            <span>Fazer Pedido no WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};
