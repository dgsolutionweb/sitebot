'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-montserrat font-bold mb-4 text-white"
          >
            O que você pode fazer com nosso bot 🤖
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Acesse uma variedade de recursos incríveis diretamente no seu WhatsApp,
            sem precisar instalar nenhum app ou criar contas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-600 to-red-500 p-8 rounded-2xl shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            <h3 className="text-2xl font-montserrat font-bold mb-4 text-white relative z-10">Conversão Rápida</h3>
            <p className="text-white/90 mb-6 relative z-10">
              Converta qualquer vídeo do YouTube para MP3 em segundos, com qualidade de áudio excepcional.
            </p>
            <ul className="space-y-3 relative z-10">
              <li className="flex items-center">
                <FaCheckCircle className="text-white mr-2 flex-shrink-0" />
                <span className="text-white">Resultados em segundos</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-white mr-2 flex-shrink-0" />
                <span className="text-white">Qualidade de áudio de 320kbps</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-white mr-2 flex-shrink-0" />
                <span className="text-white">Funciona com qualquer vídeo</span>
              </li>
            </ul>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-600 to-green-500 p-8 rounded-2xl shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            <h3 className="text-2xl font-montserrat font-bold mb-4 text-white relative z-10">Fácil de Usar</h3>
            <p className="text-white/90 mb-6 relative z-10">
              Simplesmente envie o link do YouTube para o nosso bot no WhatsApp e receba seu MP3 instantaneamente.
            </p>
            <ul className="space-y-3 relative z-10">
              <li className="flex items-center">
                <FaCheckCircle className="text-white mr-2 flex-shrink-0" />
                <span className="text-white">Sem cadastros complicados</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-white mr-2 flex-shrink-0" />
                <span className="text-white">Interface familiar do WhatsApp</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-white mr-2 flex-shrink-0" />
                <span className="text-white">Compartilhe direto com amigos</span>
              </li>
            </ul>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-600 to-purple-500 p-8 rounded-2xl shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            <h3 className="text-2xl font-montserrat font-bold mb-4 text-white relative z-10">Premium Features</h3>
            <p className="text-white/90 mb-6 relative z-10">
              Desbloqueie recursos avançados com nossa assinatura premium a um preço acessível.
            </p>
            <ul className="space-y-3 relative z-10">
              <li className="flex items-center">
                <FaCheckCircle className="text-white mr-2 flex-shrink-0" />
                <span className="text-white">Conversões ilimitadas</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-white mr-2 flex-shrink-0" />
                <span className="text-white">Download de playlists inteiras</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-white mr-2 flex-shrink-0" />
                <span className="text-white">Prioridade na fila de conversão</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="https://wa.me/+55XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all border border-white/30 hover:shadow-xl"
          >
            <span className="text-white font-bold">Experimentar agora</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
