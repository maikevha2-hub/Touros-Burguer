import React from 'react';
import { Phone, Instagram, MapPin, Clock, Heart, Gift } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { TourosLogo } from './TourosLogo';

interface FooterProps {
  onGoToRoulette?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onGoToRoulette }) => {
  return (
    <footer className="bg-[#261b14] text-[#faf7f2] border-t-4 border-[#8d3a14] pt-10 pb-20 sm:pb-12 px-4 no-print mt-12" id="main-footer">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Info */}
        <div className="space-y-3">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <TourosLogo size={44} className="border border-amber-500/50 shrink-0" alt="Touros Burger Logo" />
            <span className="text-xl font-extrabold uppercase tracking-wide font-brand text-[#fed7aa]">
              Touros Burger & Pizza
            </span>
          </div>
          <p className="text-xs text-amber-100/70 leading-relaxed">
            Hambúrgueres artesanais na brasa, pizzas com massa fresca e recheios generosos,
            porções crocantes e bebidas bem geladas entregues diretamente na sua casa.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 justify-center md:justify-start">
            <span className="inline-block bg-[#8d3a14] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {RESTAURANT_INFO.deliveryBadgeTitle}
            </span>
            {onGoToRoulette && (
              <button
                type="button"
                onClick={onGoToRoulette}
                className="inline-flex items-center gap-1.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                id="footer-roleta-btn"
              >
                <Gift className="w-3.5 h-3.5 text-amber-300" />
                <span>🎰 Roleta de Prêmios</span>
              </button>
            )}
          </div>
        </div>

        {/* Contact & Orders */}
        <div className="space-y-3">
          <h4 className="text-sm font-black uppercase tracking-wider text-[#fed7aa]">
            📢 Pedidos & Contato
          </h4>
          <ul className="space-y-2 text-xs text-amber-100/85">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>WhatsApp: <strong>{RESTAURANT_INFO.whatsapp}</strong></span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
              <span>Instagram: <strong>{RESTAURANT_INFO.instagram}</strong></span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Entregas rápidas em embalagens térmicas lacradas</span>
            </li>
          </ul>
        </div>

        {/* Ordering Notice */}
        <div className="space-y-3">
          <h4 className="text-sm font-black uppercase tracking-wider text-[#fed7aa]">
            🍕 Dica de Pedido
          </h4>
          <p className="text-xs text-amber-100/70 leading-relaxed">
            • Nas pizzas você pode escolher até <strong>2 sabores</strong> no mesmo tamanho!
            <br />
            • Para agilizar seu atendimento no WhatsApp, informe os itens escolhidos e o endereço de entrega com ponto de referência.
          </p>
          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de consultar o cardápio e fazer meu pedido.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow transition-colors"
            id="footer-whatsapp-button"
          >
            <Phone className="w-4 h-4" />
            <span>Chamar no WhatsApp ({RESTAURANT_INFO.whatsapp})</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-[#432d20] mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-amber-100/50 gap-2">
        <p>© 2026 Touros Burger & Pizza. Cardápio Digital para Visualização.</p>
        <p className="flex items-center gap-1">
          Feito com sabor & dedicação
        </p>
      </div>

      {/* Floating Sticky Mobile Order Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-[#8d3a14] border-t border-amber-600/40 p-2.5 z-40 sm:hidden flex items-center justify-between shadow-2xl">
        <div className="text-left text-white pl-2">
          <span className="text-[10px] uppercase font-bold text-amber-200 block">Delivery Touros</span>
          <span className="text-xs font-black">{RESTAURANT_INFO.whatsapp}</span>
        </div>
        <a
          href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Vi o cardápio e quero fazer um pedido.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-extrabold text-xs px-4 py-2 rounded-lg shadow flex items-center gap-1.5 transition-all"
          id="mobile-floating-whatsapp-btn"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Fazer Pedido</span>
        </a>
      </div>
    </footer>
  );
};
