'use client';

import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const DemoSection = () => {
  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-montserrat font-bold mb-4 text-gray-900"
          >
            Veja o Bot em Ação
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
          >
            Confira como é simples e rápido converter vídeos do YouTube para MP3 usando nosso bot no WhatsApp.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Screenshots */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transform rotate-3 hover:rotate-0 transition-transform">
                <div className="bg-green-600 text-white px-3 py-2 text-xs font-bold">
                  <span>Passo 1: Envie o Link</span>
                </div>
                <div className="p-2">
                  <div className="bg-gray-100 rounded p-3">
                    <p className="text-sm text-gray-900 font-medium">https://youtu.be/example</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transform -rotate-2 hover:rotate-0 transition-transform">
                <div className="bg-green-600 px-3 py-2 text-xs font-bold">
                  <span className="text-white">Passo 2: Processando</span>
                </div>
                <div className="p-2">
                  <div className="bg-gray-100 rounded p-3">
                    <p className="text-sm text-gray-900 font-medium">Convertendo seu vídeo... ⏳</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transform -rotate-3 hover:rotate-0 transition-transform">
                <div className="bg-green-600 px-3 py-2 text-xs font-bold">
                  <span className="text-white">Passo 3: Receba o MP3</span>
                </div>
                <div className="p-2">
                  <div className="bg-gray-100 rounded p-3">
                    <p className="text-sm text-gray-900 font-medium">Aqui está sua música! ✅</p>
                    <div className="mt-2 bg-white rounded p-2 flex items-center border border-gray-300">
                      <div className="w-8 h-8 bg-gray-500 rounded mr-2 flex-shrink-0 flex items-center justify-center">
                        <span className="text-white text-xs">🎵</span>
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-xs font-bold text-gray-900 truncate">Música.mp3</p>
                        <p className="text-xs text-gray-600">3.5 MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Video demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-xl border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-16 bg-gray-900/50 backdrop-blur-sm rounded-full">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <FaPlay className="text-white ml-2" size={30} />
                  </motion.button>
                </div>
                <p className="absolute bottom-6 text-center text-white font-bold text-xl shadow-black drop-shadow-lg">
                  Demonstração do YouTube MP3 Bot
                </p>
              </div>
            </div>
            <p className="mt-4 text-center text-gray-900 font-medium">
              Clique no vídeo acima para ver uma demonstração completa
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-800 mb-6 max-w-3xl mx-auto">
            <span className="font-semibold text-gray-900">Sem complicações:</span> Nosso bot é projetado para ser o mais simples possível. Envie qualquer link do YouTube e receba seu MP3 em segundos.
          </p>
          <a 
            href="https://wa.me/+5517991129386"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all border border-white/30 hover:shadow-xl"
          >
            <span className="text-white font-bold">Experimentar agora</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
