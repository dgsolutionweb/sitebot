'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaYoutube } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center bg-gray-900 overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-600 via-red-600 to-gray-900 opacity-90 z-0"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-green-600 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-600 opacity-30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center relative z-10">
        {/* Left side - Text content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-white mb-10 md:mb-0"
        >
          <div className="inline-flex items-center bg-gray-800/50 px-4 py-2 rounded-full mb-6 border border-white/30 shadow-md">
            <FaYoutube className="text-red-600 mr-2" size={20} />
            <span className="text-sm font-bold text-white">YouTube MP3 Bot</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-6 leading-tight text-white">
            Baixe suas <span className="text-green-600">músicas favoritas</span> direto no WhatsApp
          </h1>
          
          <p className="text-xl mb-8 text-white max-w-xl font-medium leading-relaxed">
            Converta vídeos do YouTube para MP3 de alta qualidade em segundos, sem apps, sem sites complicados, direto no seu WhatsApp.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="https://wa.me/+5517991129386"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-full inline-flex items-center justify-center gap-2 shadow-lg border border-white/30 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp size={24} className="text-white" />
              <span className="text-white font-bold">COMEÇAR AGORA</span>
            </motion.a>
            
            <motion.a
              href="#como-funciona"
              className="bg-gray-800/50 hover:bg-gray-700/50 text-white font-bold py-4 px-8 rounded-full inline-flex items-center justify-center border border-white/50 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-bold">SAIBA MAIS</span>
            </motion.a>
          </div>
          
          <div className="mt-10 flex items-center text-white">
            <div className="flex -space-x-2 mr-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white shadow-md"></div>
              <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white shadow-md"></div>
              <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white shadow-md"></div>
            </div>
            <p className="text-base text-white font-medium">
              <span className="font-bold text-white">+10.000</span> pessoas já estão usando
            </p>
          </div>
        </motion.div>
        
        {/* Right side - Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, rotate: 4 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-xs md:max-w-sm">
            {/* Moldura gradiente ao redor do telefone */}
            <div className="absolute -inset-1.5 rounded-[40px] bg-gradient-to-r from-green-600 to-purple-600 opacity-30 blur-md"></div>
            
            {/* Phone frame */}
            <div className="relative rounded-[40px] bg-gray-900 border-4 border-gray-800 shadow-2xl overflow-hidden pt-6 pb-8">
              {/* Speaker e camera simulados */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-700 rounded"></div>
              <div className="absolute top-2 left-[calc(50%+40px)] w-2 h-2 bg-gray-700 rounded-full"></div>

              {/* WhatsApp chat interface */}
              <div className="h-full bg-gray-100 overflow-hidden rounded-b-[36px]">
                {/* WhatsApp header */}
                <div className="bg-green-600 text-white px-4 py-3 flex items-center">
                  <div className="w-8 h-8 bg-white rounded-full mr-3 flex items-center justify-center">
                    <span className="text-green-600 text-xs font-bold">MP3</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">YouTube MP3 Bot</p>
                    <p className="text-xs text-white">Online agora</p>
                  </div>
                </div>
                
                {/* Chat messages */}
                <div className="p-3 h-full space-y-3 bg-[url('/whatsapp-bg.png')] bg-repeat bg-contain">
                  {/* Bot welcome message */}
                  <div className="bg-white rounded-lg p-2 px-3 max-w-[80%] shadow-sm ml-0">
                    <p className="text-sm text-gray-900 font-medium">
                      Olá! Envie um link do YouTube para converter para MP3! 🎵
                    </p>
                    <p className="text-xs text-gray-500 text-right">10:30</p>
                  </div>
                  
                  {/* User message */}
                  <div className="bg-[#dcf8c6] rounded-lg p-2 px-3 max-w-[80%] shadow-sm ml-auto">
                    <p className="text-sm text-gray-900 font-medium">
                      https://youtu.be/example
                    </p>
                    <p className="text-xs text-gray-500 text-right">10:31</p>
                  </div>
                  
                  {/* Bot processing message */}
                  <div className="bg-white rounded-lg p-2 px-3 max-w-[80%] shadow-sm ml-0">
                    <p className="text-sm text-gray-900 font-medium">
                      Convertendo seu vídeo para MP3... ⏳
                    </p>
                    <p className="text-xs text-gray-500 text-right">10:31</p>
                  </div>
                  
                  {/* Bot done message */}
                  <div className="bg-white rounded-lg p-2 px-3 max-w-[80%] shadow-sm ml-0">
                    <p className="text-sm text-gray-900 font-medium">
                      Aqui está sua música! ✅
                    </p>
                    <div className="mt-2 bg-gray-200 rounded p-2 flex items-center border border-gray-300">
                      <div className="w-8 h-8 bg-gray-400 rounded mr-2 flex-shrink-0 flex items-center justify-center">
                        <span className="text-white text-xs">🎵</span>
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-xs font-bold text-gray-900 truncate">Música Convertida.mp3</p>
                        <p className="text-xs text-gray-600">3.5 MB - MP3</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 text-right">10:32</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
