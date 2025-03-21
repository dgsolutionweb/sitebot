'use client';

import { motion } from 'framer-motion';
import { FaLink, FaWhatsapp, FaHeadphones } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-montserrat font-bold mb-4 text-gray-900"
          >
            Como Funciona
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto"
          >
            Baixe suas músicas favoritas do YouTube em apenas 3 passos simples, sem precisar instalar aplicativos ou criar contas.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Passo 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center shadow-md">
              <FaLink className="text-4xl text-green-600" />
            </div>
            <h3 className="text-2xl font-montserrat font-bold mb-3 text-gray-900">Passo 1</h3>
            <p className="text-gray-700">
              Copie o link do vídeo do YouTube que deseja converter para MP3.
            </p>
            
            <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 mx-auto max-w-xs">
              <div className="p-3">
                <div className="bg-gray-100 rounded p-3">
                  <p className="text-sm text-gray-900 font-medium">https://youtu.be/exemplo</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Passo 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center shadow-md">
              <FaWhatsapp className="text-4xl text-green-600" />
            </div>
            <h3 className="text-2xl font-montserrat font-bold mb-3 text-gray-900">Passo 2</h3>
            <p className="text-gray-700">
              Cole o link no chat do nosso bot no WhatsApp e envie a mensagem.
            </p>
            
            <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 mx-auto max-w-xs">
              <div className="p-3">
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm text-gray-900 font-medium">https://youtu.be/exemplo</p>
                  <p className="text-xs text-gray-500 text-right mt-1">14:22 ✓✓</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Passo 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center shadow-md">
              <FaHeadphones className="text-4xl text-green-600" />
            </div>
            <h3 className="text-2xl font-montserrat font-bold mb-3 text-gray-900">Passo 3</h3>
            <p className="text-gray-700">
              Receba seu arquivo MP3 pronto para ouvir ou compartilhar.
            </p>
            
            <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 mx-auto max-w-xs">
              <div className="p-3">
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm text-gray-900 font-medium">Aqui está sua música! ✅</p>
                  <div className="mt-2 bg-white rounded p-2 flex items-center border border-gray-300">
                    <div className="w-8 h-8 bg-gray-300 rounded mr-2 flex-shrink-0 flex items-center justify-center">
                      <span className="text-gray-700">🎵</span>
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs font-bold text-gray-900 truncate">Música.mp3</p>
                      <p className="text-xs text-gray-600">3.2 MB - MP3</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 text-right mt-1">14:23</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a 
            href="https://wa.me/+5517991129386"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all border border-white/30 hover:shadow-xl"
          >
            <span className="text-white font-bold">Começar Agora</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
