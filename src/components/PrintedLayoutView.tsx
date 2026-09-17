import React, { useState } from 'react';
import { Printer, Eye, ChevronRight, ChevronLeft } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { TourosLogo } from './TourosLogo';

export const PrintedLayoutView: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<'all' | '1' | '2' | '3'>('all');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-6 px-2 sm:px-4 bg-[#ede7df] min-h-screen">
      {/* Control bar for printed replica */}
      <div className="max-w-4xl mx-auto mb-6 bg-white p-4 rounded-xl shadow-md border border-[#d8c6b2] flex flex-wrap items-center justify-between gap-3 no-print">
        <div>
          <h2 className="font-extrabold text-[#7c2d12] text-base sm:text-lg flex items-center gap-2">
            <Eye className="w-5 h-5 text-[#8d3a14]" />
            <span>Visualização do Cardápio Impresso Original (3 Páginas A4)</span>
          </h2>
          <p className="text-xs text-[#634832] mt-0.5">
            Fiel à diagramação do folheto gráfico original. Ideal para leitura ou impressão.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <div className="bg-[#faf7f2] p-1 rounded-lg border border-[#d8c6b2] flex text-xs font-bold">
            <button
              onClick={() => setSelectedPage('all')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                selectedPage === 'all' ? 'bg-[#8d3a14] text-white shadow-xs' : 'text-[#634832] hover:text-[#8d3a14]'
              }`}
              id="print-tab-all"
            >
              Todas (1, 2 e 3)
            </button>
            <button
              onClick={() => setSelectedPage('1')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                selectedPage === '1' ? 'bg-[#8d3a14] text-white shadow-xs' : 'text-[#634832] hover:text-[#8d3a14]'
              }`}
              id="print-tab-1"
            >
              Pág. 1 (Burgers)
            </button>
            <button
              onClick={() => setSelectedPage('2')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                selectedPage === '2' ? 'bg-[#8d3a14] text-white shadow-xs' : 'text-[#634832] hover:text-[#8d3a14]'
              }`}
              id="print-tab-2"
            >
              Pág. 2 (Pizzas)
            </button>
            <button
              onClick={() => setSelectedPage('3')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                selectedPage === '3' ? 'bg-[#8d3a14] text-white shadow-xs' : 'text-[#634832] hover:text-[#8d3a14]'
              }`}
              id="print-tab-3"
            >
              Pág. 3 (Doces/Bebidas)
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 bg-[#8d3a14] hover:bg-[#7c2d12] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold shadow transition-all cursor-pointer"
            id="print-action-button"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Imprimir / PDF</span>
          </button>
        </div>
      </div>

      <div className="max-w-[850px] mx-auto space-y-8">
        {/* ================= PÁGINA 1 ================= */}
        {(selectedPage === 'all' || selectedPage === '1') && (
          <div
            className="bg-[#faf7f2] text-[#261b14] p-5 sm:p-7 shadow-xl border border-[#d8c6b2] rounded-lg relative overflow-hidden page-break"
            style={{ minHeight: '1050px' }}
            id="printed-page-1"
          >
            {/* Header center with Real Logo */}
            <div className="text-center border-b-2 border-[#e0cfb8] pb-2 mb-2">
              <TourosLogo size={92} className="mx-auto mb-1 border-2 border-[#8d3a14]" alt="Touros Burger Logo" />
              <h1 className="text-2xl font-black text-[#8d3a14] uppercase tracking-wider font-brand">
                Touros Burger & Pizza
              </h1>
              <p className="text-xs text-[#7c2d12] font-semibold">Cardápio Oficial Delivery</p>
            </div>

            {/* Delivery badge */}
            <div className="bg-white border-1.5 border-[#8d3a14] p-2 text-center rounded-md mb-2">
              <h4 className="text-[#8d3a14] text-xs sm:text-sm uppercase font-black tracking-wide">
                🛵 ATENDIMENTO EXCLUSIVO VIA DELIVERY 📦
              </h4>
              <p className="text-[#553322] text-[11px] font-bold">
                Peça no conforto da sua casa • Entregas rápidas e embalagens térmicas
              </p>
            </div>

            {/* Section bar: Hambúrgueres */}
            <div className="bg-[#8d3a14] rounded px-2.5 py-1 text-center my-2">
              <span className="text-white text-xs sm:text-sm font-extrabold uppercase tracking-wide">
                🍔 Hambúrgueres Artesanais
              </span>
            </div>

            {/* 2 columns burgers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-left">
              {/* Col Left */}
              <div className="space-y-1.5">
                {[
                  { name: 'Cheese Salada', price: 'R$ 23,90', desc: 'Pão brioche, hambúrguer de carne, muçarela, alface, tomate e maionese temperada.' },
                  { name: 'Burguer Nutella', price: 'R$ 21,00', desc: 'Pão brioche, muçarela, Nutella e banana.' },
                  { name: 'Cheese Burguer', price: 'R$ 24,90', desc: 'Pão brioche, hambúrguer de carne, muçarela, calabresa, alface, tomate e maionese temperada.' },
                  { name: 'Cheese Tourada', price: 'R$ 25,90', desc: 'Pão brioche, hambúrguer de carne, muçarela, calabresa, barbecue, ovo, alface, tomate e maionese temperada.' },
                  { name: 'Cheese Bacon', price: 'R$ 27,90', desc: 'Pão brioche, hambúrguer de carne, muçarela, bacon, barbecue, alface, tomate e maionese temperada.' },
                  { name: 'Tropical Burguer', price: 'R$ 28,90', desc: 'Pão brioche, hambúrguer de carne, bacon, cheddar, abacaxi, barbecue e alface.' },
                  { name: 'Cheese Cowboy', price: 'R$ 26,90', desc: 'Pão brioche, hambúrguer de carne, muçarela, salsicha, ovo, bacon, cebola, alface, tomate e maionese temperada.' },
                  { name: 'Cheddar Burguer', price: 'R$ 31,90', desc: 'Pão brioche, hambúrguer de carne, muçarela, cheddar, bacon, ovo, cebola caramelizada, alface, tomate e maionese temperada.' },
                  { name: 'Country Burguer', price: 'R$ 31,90', desc: 'Pão brioche, hambúrguer de carne, muçarela, bacon, provolone, picles, onion rings, alface, tomate e maionese temperada.' },
                  { name: 'Cavalgada Burguer', price: 'R$ 31,90', desc: 'Pão brioche, hambúrguer de carne, muçarela, bacon, calabresa, salsicha, ovo, cebola, alface, tomate e maionese temperada.' },
                  { name: 'West Burguer', price: 'R$ 31,90', desc: 'Pão brioche, hambúrguer de carne, queijo muçarela, cebola crispy, queijo gorgonzola, bacon, picles e maionese temperada.' },
                ].map((b, i) => (
                  <div key={i} className="pb-1 border-b border-dotted border-[#e8dbcb]">
                    <div className="flex justify-between items-baseline font-bold text-xs">
                      <span className="text-[#7c2d12] uppercase font-black">{b.name}</span>
                      <span className="text-[#9a3412] whitespace-nowrap ml-1 font-black">{b.price}</span>
                    </div>
                    <p className="text-[10px] text-[#4e3b30] leading-tight mt-0.5">{b.desc}</p>
                  </div>
                ))}
              </div>

              {/* Col Right */}
              <div className="space-y-1.5 sm:border-l sm:border-[#e8dbcb] sm:pl-4">
                {[
                  { name: 'Texano Burguer', price: 'R$ 32,90', desc: 'Pão brioche, hambúrguer de carne, muçarela, bacon, cheddar, lombo defumado, calabresa, barbecue, alface, tomate e maionese temperada.' },
                  { name: 'Festa do Laço', price: 'R$ 32,90', desc: 'Pão brioche, hambúrguer de carne, muçarela, calabresa, ovo, frango desfiado, catupiry, alface, tomate e maionese temperada.' },
                  { name: 'Pepperoni Burguer', price: 'R$ 32,90', desc: 'Pão brioche, hambúrguer de carne, muçarela, catupiry, picles, pepperoni, alface e tomate.' },
                  { name: 'Mr. Queijo Burguer', price: 'R$ 32,90', desc: 'Pão brioche, hambúrguer de carne, queijo muçarela derretido empanado, bacon, barbecue, alface, tomate e maionese temperada.' },
                  { name: 'Uai Burguer', price: 'R$ 32,90', desc: 'Pão brioche, hambúrguer de carne, queijo provolone, doce de leite e bacon.' },
                  { name: 'Garlic Burguer', price: 'R$ 34,90', desc: 'Pão brioche, hambúrguer de carne, queijo cheddar, alho frito, cebola caramelizada e maionese temperada.' },
                  { name: 'NYC Burguer', price: 'R$ 36,90', desc: 'Pão brioche, hambúrguer de carne, queijo provolone, bacon, salame, mix de pimentas com cebola, queijo parmesão e maionese temperada.' },
                  { name: 'Melt Burguer', price: 'R$ 38,90', desc: 'Pão brioche, hambúrguer de carne, queijo provolone, queijo coalho tostado com mel, bacon, banana da terra frita e maionese temperada.' },
                  { name: 'Rancho Burguer', price: 'R$ 42,90', desc: 'Pão brioche, hambúrguer de carne, queijo provolone, bacon, barbecue, onion rings, queijo empanado com goiabada e maionese temperada.' },
                  { name: 'Touros Burguer (02 carnes)', price: 'R$ 43,90', desc: 'Pão brioche, 02 hambúrgueres de carne, muçarela, bacon, calabresa, cheddar, ovo, onion rings, alface, tomate e maionese temperada.' },
                  { name: 'Cheese Cavalo (03 carnes)', price: 'R$ 47,90', desc: 'Pão brioche, 03 hambúrgueres de carne, muçarela, bacon, ovo, catupiry empanado, cebola caramelizada, alface, tomate e maionese temperada.' },
                ].map((b, i) => (
                  <div key={i} className="pb-1 border-b border-dotted border-[#e8dbcb]">
                    <div className="flex justify-between items-baseline font-bold text-xs">
                      <span className="text-[#7c2d12] uppercase font-black">{b.name}</span>
                      <span className="text-[#9a3412] whitespace-nowrap ml-1 font-black">{b.price}</span>
                    </div>
                    <p className="text-[10px] text-[#4e3b30] leading-tight mt-0.5">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section Bar: Hot Dog & Porções */}
            <div className="bg-[#8d3a14] rounded px-2.5 py-1 text-center my-3">
              <span className="text-white text-xs sm:text-sm font-extrabold uppercase tracking-wide">
                🌭 Hot Dog & Porções da Casa
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-left">
              {/* Left: Dogão */}
              <div>
                <div className="pb-1 border-b border-dotted border-[#e8dbcb]">
                  <div className="flex justify-between items-baseline font-bold text-xs">
                    <span className="text-[#7c2d12] uppercase font-black">Dogão Tradicional</span>
                    <span className="text-[#9a3412] font-black">R$ 14,00</span>
                  </div>
                  <p className="text-[10px] text-[#4e3b30] leading-tight mt-0.5">
                    Pão, queijo muçarela, milho, salsicha, ketchup, maionese, batata palha e molho especial.
                  </p>
                </div>
              </div>

              {/* Right: Porções */}
              <div className="sm:border-l sm:border-[#e8dbcb] sm:pl-4 space-y-1">
                {[
                  { name: 'Batata Tradicional', price: 'P(150g) R$ 15,00 | G(350g) R$ 23,00' },
                  { name: 'Batata Crinkle', price: 'P R$ 17,00 | G R$ 30,00' },
                  { name: 'Calabresa Acebolada', price: 'P(200g) R$ 25,00 | G(400g) R$ 35,00' },
                  { name: 'Frango a Passarinho', price: 'P(300g) R$ 25,00 | G(700g) R$ 45,00' },
                  { name: 'Iscas de Filé Acebolada', price: 'P(250g) R$ 35,00 | G(550g) R$ 65,00' },
                  { name: 'Nuggets de Frango', price: '(200g) R$ 15,00' },
                ].map((p, i) => (
                  <div key={i} className="flex justify-between items-baseline border-b border-dashed border-[#e2d3c1] pb-0.5 text-[11px]">
                    <span className="font-bold text-[#7c2d12] uppercase">{p.name}</span>
                    <span className="text-[#9a3412] font-extrabold whitespace-nowrap ml-1">{p.price}</span>
                  </div>
                ))}
                <div className="bg-[#fff2e8] border border-[#ea580c] p-1.5 rounded flex justify-between items-center text-xs font-bold text-[#9a3412]">
                  <span>💥 Combo Misto (Batata P + Calabresa P)</span>
                  <span className="font-black">R$ 38,00</span>
                </div>
              </div>
            </div>

            <div className="text-center text-[10px] text-[#8c7362] border-t border-[#e0cfb8] pt-2 mt-4">
              Touros Burger & Pizza • Página 1/3 • Imagens meramente ilustrativas.
            </div>
          </div>
        )}

        {/* ================= PÁGINA 2 ================= */}
        {(selectedPage === 'all' || selectedPage === '2') && (
          <div
            className="bg-[#faf7f2] text-[#261b14] p-5 sm:p-7 shadow-xl border border-[#d8c6b2] rounded-lg relative overflow-hidden page-break"
            style={{ minHeight: '1050px' }}
            id="printed-page-2"
          >
            {/* Header compact with Real Logo */}
            <div className="flex items-center justify-between border-b-2 border-[#e0cfb8] pb-2 mb-2">
              <div className="flex items-center gap-2">
                <TourosLogo size={58} className="border-2 border-[#8d3a14] shrink-0" alt="Touros Burger Logo" />
                <div>
                  <h2 className="text-base font-black text-[#8d3a14] uppercase tracking-wide font-brand">
                    Touros Burger & Pizza
                  </h2>
                  <p className="text-[10px] text-[#7c2d12] font-bold">🛵 ATENDIMENTO EXCLUSIVO VIA DELIVERY</p>
                </div>
              </div>
              <div className="text-right text-[11px] font-bold text-[#7c2d12]">
                WhatsApp: (69) 98147-6726
              </div>
            </div>

            {/* Pizza size container */}
            <div className="grid grid-cols-2 bg-white border-1.5 border-[#d8c6b2] rounded-md p-2 mb-2 divide-x divide-dashed divide-[#d8c6b2]">
              <div className="flex items-center justify-center gap-3 pr-2">
                <svg width="40" height="40" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="46" fill="#d9822b" stroke="#8d3a14" strokeWidth="4"/>
                  <circle cx="50" cy="50" r="37" fill="#f4b236"/>
                  <circle cx="35" cy="35" r="6" fill="#a82315"/>
                  <circle cx="65" cy="35" r="6" fill="#a82315"/>
                  <circle cx="50" cy="68" r="6" fill="#a82315"/>
                  <line x1="50" y1="13" x2="50" y2="87" stroke="#8d3a14" strokeWidth="2.5"/>
                  <line x1="17.9" y1="31.5" x2="82.1" y2="68.5" stroke="#8d3a14" strokeWidth="2.5"/>
                  <line x1="17.9" y1="68.5" x2="82.1" y2="31.5" stroke="#8d3a14" strokeWidth="2.5"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs font-black text-[#7c2d12] uppercase">PIZZA MÉDIA (M)</div>
                  <div className="text-[10px] text-[#634832] font-semibold">🍕 6 Fatias • 30 cm</div>
                  <div className="text-sm font-black text-[#9a3412]">R$ 50,00</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pl-2">
                <svg width="44" height="44" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="46" fill="#d9822b" stroke="#8d3a14" strokeWidth="4"/>
                  <circle cx="50" cy="50" r="37" fill="#f4b236"/>
                  <circle cx="34" cy="30" r="5" fill="#a82315"/>
                  <circle cx="66" cy="30" r="5" fill="#a82315"/>
                  <circle cx="50" cy="72" r="5" fill="#a82315"/>
                  <line x1="50" y1="13" x2="50" y2="87" stroke="#8d3a14" strokeWidth="2.5"/>
                  <line x1="13" y1="50" x2="87" y2="50" stroke="#8d3a14" strokeWidth="2.5"/>
                  <line x1="23.8" y1="23.8" x2="76.2" y2="76.2" stroke="#8d3a14" strokeWidth="2.5"/>
                  <line x1="23.8" y1="76.2" x2="76.2" y2="23.8" stroke="#8d3a14" strokeWidth="2.5"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs font-black text-[#7c2d12] uppercase">PIZZA GRANDE (G)</div>
                  <div className="text-[10px] text-[#634832] font-semibold">🍕 8 Fatias • 35 cm</div>
                  <div className="text-sm font-black text-[#9a3412]">R$ 62,00</div>
                </div>
              </div>
            </div>

            {/* Section bar Pizza */}
            <div className="bg-[#8d3a14] rounded px-2.5 py-1 text-center mb-2">
              <span className="text-white text-xs sm:text-sm font-extrabold uppercase tracking-wide">
                🍕 Pizza
              </span>
              <span className="text-[#ffeedd] text-xs font-semibold ml-2">
                • Média (M - 6 Fatias) R$ 50,00 | Grande (G - 8 Fatias) R$ 62,00
              </span>
            </div>

            {/* 38 Savory pizzas grid in 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-left text-xs">
              {/* Col Left: 19 pizzas */}
              <div className="space-y-1">
                {[
                  { name: 'Marguerita', desc: 'Molho de tomate, muçarela, manjericão, tomate e orégano.' },
                  { name: 'Frango com Catupiry', desc: 'Molho de tomate, muçarela, frango desfiado, catupiry e orégano.' },
                  { name: 'Calabresa', desc: 'Molho de tomate, muçarela, calabresa, cebola, azeitona e orégano.' },
                  { name: 'Bacon', desc: 'Molho de tomate, muçarela, bacon, azeitona e orégano.' },
                  { name: 'Lombo Defumado', desc: 'Molho de tomate, muçarela, lombo e orégano.' },
                  { name: 'Calabacon', desc: 'Molho de tomate, muçarela, calabresa, bacon, cebola, azeitona e orégano.' },
                  { name: 'Calabresa Especial', desc: 'Molho de tomate, muçarela, calabresa, cheddar, cebola, azeitona e orégano.' },
                  { name: 'Lombo com Catupiry', desc: 'Molho de tomate, muçarela, lombo, catupiry e orégano.' },
                  { name: 'Bacon Especial', desc: 'Molho de tomate, muçarela, bacon, catupiry e orégano.' },
                  { name: 'Frango com Bacon', desc: 'Molho de tomate, muçarela, frango desfiado, bacon e orégano.' },
                  { name: 'Cinco Queijos', desc: 'Molho de tomate, muçarela, orégano, provolone, gorgonzola, cheddar e catupiry.' },
                  { name: 'Moda da Casa', desc: 'Molho de tomate, muçarela, presunto, frango, calabresa, catupiry, milho e orégano.' },
                  { name: 'Americana', desc: 'Molho de tomate, muçarela, bacon, calabresa, ovos, cebola e orégano.' },
                  { name: 'Don Camillo', desc: 'Molho de tomate, muçarela, presunto, calabresa, tomate, creme de leite e orégano.' },
                  { name: 'Presuntada', desc: 'Molho de tomate, muçarela, presunto e orégano.' },
                  { name: 'Quatro Queijos', desc: 'Molho de tomate, muçarela, provolone, parmesão, catupiry e orégano.' },
                  { name: 'Espanhola', desc: 'Molho de tomate, presunto, muçarela, calabresa, cebola e orégano.' },
                  { name: 'Champignon', desc: 'Molho de tomate, muçarela, champignon e orégano.' },
                  { name: 'Canadense', desc: 'Molho de tomate, muçarela, champignon, lombo, palmito, catupiry e orégano.' },
                ].map((pz, i) => (
                  <div key={i} className="pb-0.5 border-b border-dotted border-[#e8dbcb]">
                    <span className="font-extrabold text-[#7c2d12] uppercase block text-[11px]">{pz.name}</span>
                    <span className="text-[#4e3b30] text-[9.5px] leading-tight block">{pz.desc}</span>
                  </div>
                ))}
              </div>

              {/* Col Right: 19 pizzas */}
              <div className="space-y-1 sm:border-l sm:border-[#e8dbcb] sm:pl-4">
                {[
                  { name: 'Mineira', desc: 'Molho de tomate, muçarela, catupiry, milho verde e orégano.' },
                  { name: 'Tropical', desc: 'Molho de tomate, muçarela, frango, milho, ervilha, ovos, catupiry e orégano.' },
                  { name: 'Carioca', desc: 'Molho de tomate, muçarela, milho, palmito, catupiry e orégano.' },
                  { name: 'Calabresa Suprema', desc: 'Molho de tomate, muçarela, calabresa, parmesão e catupiry.' },
                  { name: 'Strogonoff de Carne', desc: 'Molho de tomate, muçarela, strogonoff de carne e batata palha.' },
                  { name: 'Havaiana Lombo', desc: 'Molho de tomate, muçarela, lombo, abacaxi e orégano.' },
                  { name: 'Havaiana Bacon', desc: 'Molho de tomate, muçarela, bacon, abacaxi e orégano.' },
                  { name: 'Muçarela', desc: 'Molho de tomate, muçarela e orégano.' },
                  { name: 'Alho e Óleo', desc: 'Molho de tomate, muçarela, alho, azeite de oliva e orégano.' },
                  { name: 'Frango', desc: 'Molho de tomate, muçarela, frango desfiado e orégano.' },
                  { name: 'Mexicana', desc: 'Molho de tomate, muçarela, calabresa, pimentão, orégano e pimenta calabresa.' },
                  { name: 'Napolitana', desc: 'Molho de tomate, muçarela, queijo parmesão, tomates e orégano.' },
                  { name: 'Paulista', desc: 'Molho de tomate, muçarela, ervilha, palmito, milho, azeitona e orégano.' },
                  { name: 'Toscana', desc: 'Molho de tomate, muçarela, calabresa, ovo e orégano.' },
                  { name: 'Cheddar', desc: 'Molho de tomate, muçarela, cheddar e orégano.' },
                  { name: 'Milho com Bacon', desc: 'Molho de tomate, muçarela, orégano, milho e bacon.' },
                  { name: 'Palmito', desc: 'Molho de tomate, muçarela, ovo, palmito, azeitona e orégano.' },
                  { name: 'Portuguesa', desc: 'Molho de tomate, muçarela, presunto, ovo, pimentão, cebola, azeitona e orégano.' },
                  { name: 'Pepperoni', desc: 'Molho de tomate, muçarela, pepperoni, cebola e orégano.' },
                ].map((pz, i) => (
                  <div key={i} className="pb-0.5 border-b border-dotted border-[#e8dbcb]">
                    <span className="font-extrabold text-[#7c2d12] uppercase block text-[11px]">{pz.name}</span>
                    <span className="text-[#4e3b30] text-[9.5px] leading-tight block">{pz.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center text-[10px] text-[#8c7362] border-t border-[#e0cfb8] pt-2 mt-4">
              Touros Burger & Pizza • Página 2/3 • Preços: Média (M - 6 Fatias) R$ 50,00 | Grande (G - 8 Fatias) R$ 62,00.
            </div>
          </div>
        )}

        {/* ================= PÁGINA 3 ================= */}
        {(selectedPage === 'all' || selectedPage === '3') && (
          <div
            className="bg-[#faf7f2] text-[#261b14] p-5 sm:p-7 shadow-xl border border-[#d8c6b2] rounded-lg relative overflow-hidden page-break"
            style={{ minHeight: '1050px' }}
            id="printed-page-3"
          >
            {/* Header compact with Real Logo */}
            <div className="flex items-center justify-between border-b-2 border-[#e0cfb8] pb-2 mb-3">
              <div className="flex items-center gap-2">
                <TourosLogo size={58} className="border-2 border-[#8d3a14] shrink-0" alt="Touros Burger Logo" />
                <div>
                  <h2 className="text-base font-black text-[#8d3a14] uppercase tracking-wide font-brand">
                    Touros Burger & Pizza
                  </h2>
                  <p className="text-[10px] text-[#7c2d12] font-bold">🛵 ATENDIMENTO EXCLUSIVO VIA DELIVERY</p>
                </div>
              </div>
              <div className="text-right text-[11px] font-bold text-[#7c2d12]">
                WhatsApp: (69) 98147-6726
              </div>
            </div>

            {/* Section: Pizzas Doces Padrão */}
            <div className="bg-[#8d3a14] rounded px-2.5 py-1 text-center mb-2">
              <span className="text-white text-xs sm:text-sm font-extrabold uppercase tracking-wide">
                🍫 Pizzas Doces Padrão
              </span>
              <span className="text-[#ffeedd] text-xs font-semibold ml-2">
                • Média (M - 6 Fatias) R$ 52,00 | Grande (G - 8 Fatias) R$ 65,00
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-left mb-3">
              <div className="space-y-1">
                {[
                  { name: 'Beijinho', desc: 'Creme de leite, muçarela, chocolate branco e coco ralado.' },
                  { name: 'Prestígio', desc: 'Creme de leite, muçarela, chocolate preto e coco ralado.' },
                  { name: 'Confete', desc: 'Creme de leite, muçarela, chocolate preto ou branco e confete.' },
                  { name: 'Banana', desc: 'Creme de leite, muçarela, banana, açúcar de confeiteiro e canela.' },
                ].map((d, i) => (
                  <div key={i} className="pb-0.5 border-b border-dotted border-[#e8dbcb]">
                    <span className="font-extrabold text-[#7c2d12] uppercase block text-[11px]">{d.name}</span>
                    <span className="text-[#4e3b30] text-[9.5px] block">{d.desc}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-1 sm:border-l sm:border-[#e8dbcb] sm:pl-4">
                {[
                  { name: 'Chocolate Branco', desc: 'Creme de leite, muçarela e chocolate branco.' },
                  { name: 'Chocolate Preto', desc: 'Creme de leite, muçarela e chocolate preto.' },
                  { name: 'Romeu e Julieta', desc: 'Creme de leite, muçarela e goiabada.' },
                  { name: 'Paçoca', desc: 'Creme de leite, muçarela e paçoca.' },
                ].map((d, i) => (
                  <div key={i} className="pb-0.5 border-b border-dotted border-[#e8dbcb]">
                    <span className="font-extrabold text-[#7c2d12] uppercase block text-[11px]">{d.name}</span>
                    <span className="text-[#4e3b30] text-[9.5px] block">{d.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Pizzas Doces Especiais */}
            <div className="bg-[#8d3a14] rounded px-2.5 py-1 text-center mb-2">
              <span className="text-white text-xs sm:text-sm font-extrabold uppercase tracking-wide">
                ⭐ Pizzas Doces Especiais
              </span>
              <span className="text-[#ffeedd] text-xs font-semibold ml-2">
                • Média (M - 6 Fatias) R$ 54,00 | Grande (G - 8 Fatias) R$ 68,00
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-left mb-2">
              <div className="space-y-1">
                {[
                  { name: 'Nutella c/ Morango', desc: 'Creme de leite, muçarela, Nutella e morangos.' },
                  { name: 'Abacaxi com Coco', desc: 'Leite condensado, muçarela, abacaxi e coco ralado.' },
                  { name: 'Banana com Nutella', desc: 'Creme de leite, muçarela, banana e Nutella.' },
                ].map((d, i) => (
                  <div key={i} className="pb-0.5 border-b border-dotted border-[#e8dbcb]">
                    <span className="font-extrabold text-[#7c2d12] uppercase block text-[11px]">{d.name}</span>
                    <span className="text-[#4e3b30] text-[9.5px] block">{d.desc}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-1 sm:border-l sm:border-[#e8dbcb] sm:pl-4">
                {[
                  { name: 'Ovomaltine', desc: 'Creme de leite, muçarela e chocolate polvilhado com Ovomaltine.' },
                  { name: 'Floresta Negra', desc: 'Creme de leite, muçarela, chocolate ao leite e chocolate branco.' },
                ].map((d, i) => (
                  <div key={i} className="pb-0.5 border-b border-dotted border-[#e8dbcb]">
                    <span className="font-extrabold text-[#7c2d12] uppercase block text-[11px]">{d.name}</span>
                    <span className="text-[#4e3b30] text-[9.5px] block">{d.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center text-[11px] text-[#8d3a14] font-black my-2">
              * Observação: Escolha até 2 sabores em 1 pizza. Vamos pedir pizza? *
            </div>

            {/* Section: Bebidas Geladas */}
            <div className="bg-[#8d3a14] rounded px-2.5 py-1 text-center mb-2">
              <span className="text-white text-xs sm:text-sm font-extrabold uppercase tracking-wide">
                🥤 Bebidas Geladas
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-left mb-3">
              <div className="space-y-1">
                {[
                  { name: 'Refrigerante Lata', price: 'R$ 7,00' },
                  { name: 'Refrig. Lata Zero', price: 'R$ 7,00' },
                  { name: 'H2OH!', price: 'R$ 8,00' },
                  { name: 'Coca-Cola 600ml', price: 'R$ 10,00' },
                  { name: 'Guaraná 600ml', price: 'R$ 8,00' },
                  { name: 'Coca-Cola 1L', price: 'R$ 12,00' },
                  { name: 'Coca-Cola Café', price: 'R$ 6,00' },
                ].map((b, i) => (
                  <div key={i} className="flex justify-between items-baseline border-b border-dashed border-[#e2d3c1] pb-0.5 text-xs">
                    <span className="font-bold text-[#7c2d12] uppercase">{b.name}</span>
                    <span className="text-[#9a3412] font-black">{b.price}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-1 sm:border-l sm:border-[#e8dbcb] sm:pl-4">
                {[
                  { name: 'Refrigerante 1L', price: 'R$ 10,00' },
                  { name: 'Coca-Cola 2L', price: 'R$ 15,00' },
                  { name: 'Suco Del Valle Lata', price: 'R$ 9,00' },
                  { name: 'Água S/ Gás', price: 'R$ 4,00' },
                  { name: 'Água C/ Gás', price: 'R$ 4,50' },
                  { name: 'Redbull Lata', price: 'R$ 14,00' },
                ].map((b, i) => (
                  <div key={i} className="flex justify-between items-baseline border-b border-dashed border-[#e2d3c1] pb-0.5 text-xs">
                    <span className="font-bold text-[#7c2d12] uppercase">{b.name}</span>
                    <span className="text-[#9a3412] font-black">{b.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contato Box */}
            <div className="bg-white border-1.5 border-[#8d3a14] p-3 rounded-md text-center my-3">
              <div className="font-black text-xs sm:text-sm text-[#8d3a14] uppercase tracking-wide">
                📢 SINAIS DE FUMAÇA & PEDIDOS
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-[#261b14] mt-1">
                📱 WhatsApp: {RESTAURANT_INFO.whatsapp} &nbsp;•&nbsp; 📸 Instagram: {RESTAURANT_INFO.instagram}
              </div>
            </div>

            <div className="text-center text-[10px] text-[#8c7362] border-t border-[#e0cfb8] pt-2 mt-4">
              Touros Burger & Pizza • Página 3/3 • Cardápio Completo Delivery © 2026.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
