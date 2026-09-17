import React, { useState } from 'react';
import {
  ExternalLink,
  RotateCcw,
  ArrowLeft,
  Sparkles,
  Gift,
  HelpCircle,
  MessageCircle,
  Trophy,
  CheckCircle2,
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { TourosLogo } from './TourosLogo';

interface RouletteViewProps {
  onBackToMenu: () => void;
}

export const RouletteView: React.FC<RouletteViewProps> = ({ onBackToMenu }) => {
  const ROULETTE_URL = 'https://roleta-de-pr-mios-touros-burguer.ai.studio/';
  const [iframeKey, setIframeKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const getWhatsAppRedeemLink = () => {
    const text = 'Olá! Acabei de girar a Roleta de Prêmios Touros Burguer e gostaria de validar meu prêmio no pedido!';
    return `https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6" id="roulette-page-container">
      {/* Top Navigation Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-[#e8dbcb] shadow-sm">
        <button
          type="button"
          onClick={onBackToMenu}
          className="inline-flex items-center gap-2 text-[#7c2d12] hover:text-[#ea580c] font-bold text-sm transition-colors cursor-pointer"
          id="back-to-menu-btn"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Cardápio</span>
        </button>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={handleRefresh}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#e8dbcb] hover:bg-[#faf7f2] text-xs font-semibold text-[#553322] transition-colors cursor-pointer"
            title="Recarregar a Roleta"
            id="refresh-roulette-btn"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Recarregar</span>
          </button>

          <a
            href={ROULETTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold transition-all shadow-xs"
            id="open-roulette-new-tab-btn"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Abrir em Nova Aba</span>
          </a>
        </div>
      </div>

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#8d3a14] via-[#a24317] to-[#732d0d] text-white rounded-2xl p-5 sm:p-6 shadow-md relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="shrink-0 bg-[#240c04] p-1.5 rounded-full border-2 border-[#f5c242] shadow-md hidden sm:block">
              <TourosLogo size={64} bordered={false} />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 bg-[#f5c242] text-[#451a03] text-xs font-black uppercase px-2.5 py-0.5 rounded-full mb-1.5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 fill-[#451a03]" />
                Promoção Oficial Touros
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wide font-brand">
                Roleta de Prêmios Touros Burguer
              </h2>
              <p className="text-amber-100/90 text-sm mt-1 max-w-xl">
                Gire a roleta e ganhe prêmios instantâneos para comemorar com o melhor lanche e pizza da cidade!
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppRedeemLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md flex items-center gap-2 shrink-0 transition-transform active:scale-95"
            id="redeem-whatsapp-banner-btn"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Validar Prêmio no WhatsApp</span>
          </a>
        </div>

        {/* Decorative background circle */}
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />
      </div>

      {/* Embedded Roleta Frame */}
      <div className="bg-white rounded-2xl border-2 border-[#8d3a14]/30 shadow-lg overflow-hidden relative">
        {isLoading && (
          <div className="absolute inset-0 bg-[#faf7f2]/90 backdrop-blur-xs flex flex-col items-center justify-center p-6 z-20">
            <div className="w-12 h-12 border-4 border-[#ea580c] border-t-transparent rounded-full animate-spin mb-4" />
            <p className="font-extrabold text-[#7c2d12] text-base">
              Carregando Roleta de Prêmios Touros Burguer...
            </p>
            <p className="text-xs text-[#8d3a14] mt-1">
              Prepare sua sorte para ganhar brindes deliciosos!
            </p>
          </div>
        )}

        <iframe
          key={iframeKey}
          src={ROULETTE_URL}
          title="Roleta de Prêmios Touros Burguer"
          onLoad={() => setIsLoading(false)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-[720px] sm:h-[820px] border-0 bg-[#faf7f2]"
          id="touros-roleta-iframe"
        />
      </div>

      {/* Como Funciona & Resgate do Prêmio */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-[#e8dbcb] shadow-xs flex items-start gap-3">
          <div className="p-2.5 rounded-lg bg-orange-100 text-[#ea580c] shrink-0 font-black text-sm">
            1
          </div>
          <div>
            <h4 className="font-bold text-[#7c2d12] text-sm">Gire a Roleta</h4>
            <p className="text-xs text-[#553322] mt-0.5 leading-relaxed">
              Dê play no botão central da roleta e aguarde a indicação da sua premiação.
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-[#e8dbcb] shadow-xs flex items-start gap-3">
          <div className="p-2.5 rounded-lg bg-amber-100 text-amber-800 shrink-0 font-black text-sm">
            2
          </div>
          <div>
            <h4 className="font-bold text-[#7c2d12] text-sm">Guarde seu Prêmio</h4>
            <p className="text-xs text-[#553322] mt-0.5 leading-relaxed">
              Tire um print da tela do resultado para apresentar ao nosso atendimento.
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-[#e8dbcb] shadow-xs flex items-start gap-3">
          <div className="p-2.5 rounded-lg bg-emerald-100 text-emerald-800 shrink-0 font-black text-sm">
            3
          </div>
          <div>
            <h4 className="font-bold text-[#7c2d12] text-sm">Peça pelo WhatsApp</h4>
            <p className="text-xs text-[#553322] mt-0.5 leading-relaxed">
              Mande a mensagem com o prêmio no momento de fechar o seu pedido de burger ou pizza!
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA to return to Burgers or call WhatsApp */}
      <div className="bg-[#fff7ed] border border-[#ea580c]/30 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <Gift className="w-8 h-8 text-[#ea580c] shrink-0" />
          <div>
            <h5 className="font-bold text-[#7c2d12] text-sm">
              Já conquistou seu prêmio na roleta?
            </h5>
            <p className="text-xs text-[#8d3a14]">
              Aproveite para escolher os hambúrgueres artesanais e pizzas no cardápio!
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onBackToMenu}
            className="px-4 py-2 bg-white border border-[#ea580c] text-[#ea580c] hover:bg-orange-50 rounded-lg text-xs font-bold transition-colors cursor-pointer"
          >
            Ver Cardápio
          </button>
          <a
            href={getWhatsAppRedeemLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#ea580c] hover:bg-[#c2410c] text-white rounded-lg text-xs font-black uppercase transition-colors shadow-xs"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
