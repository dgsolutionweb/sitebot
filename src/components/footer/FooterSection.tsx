'use client';

import React from 'react';
import { FaWhatsapp, FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - About */}
          <div>
            <h3 className="font-montserrat font-bold text-2xl mb-4">YouTube MP3 Bot</h3>
            <p className="text-gray-100 mb-6 leading-relaxed">
              A maneira mais rápida e fácil de converter seus vídeos favoritos do YouTube em arquivos MP3 de alta qualidade, direto pelo WhatsApp.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/+5517991129386" className="text-green-600 hover:text-white transition-colors">
                <FaWhatsapp size={24} className="shadow-sm hover:shadow-md" />
              </a>
              <a href="#" className="text-red-600 hover:text-white transition-colors">
                <FaYoutube size={24} className="shadow-sm hover:shadow-md" />
              </a>
              <a href="https://www.instagram.com/dgsolutionweb" className="text-purple-600 hover:text-white transition-colors">
                <FaInstagram size={24} className="shadow-sm hover:shadow-md" />
              </a>
              <a href="https://twitter.com/dgsolutionweb" className="text-blue-500 hover:text-white transition-colors">
                <FaTwitter size={24} className="shadow-sm hover:shadow-md" />
              </a>
              <a href="https://www.facebook.com/dgsolutionweb" className="text-blue-700 hover:text-white transition-colors">
                <FaFacebook size={24} className="shadow-sm hover:shadow-md" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-200 hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#como-funciona" className="text-gray-200 hover:text-white transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#features" className="text-gray-200 hover:text-white transition-colors">Recursos</a>
              </li>
              <li>
                <a href="#planos" className="text-gray-200 hover:text-white transition-colors">Planos</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-200 hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">Termos de Uso</a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">Política de Privacidade</a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">Política de Cookies</a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">Política de Reembolso</a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">Contato</h3>
            <p className="text-gray-200 mb-4">
              Dúvidas ou sugestões? Entre em contato conosco:
            </p>
            <a 
              href="https://wa.me/+5517991129386" 
              className="inline-flex items-center gap-2 bg-green-600 px-4 py-2 rounded-full text-white font-bold hover:bg-green-500 transition-all shadow-sm hover:shadow-md border border-white/10"
            >
              <FaWhatsapp size={20} />
              Fale Conosco
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} YouTube MP3 Bot. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-200 hover:text-white text-sm transition-colors">
              Mapa do Site
            </a>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-gray-200 hover:text-white text-sm transition-colors">
              Acessibilidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
