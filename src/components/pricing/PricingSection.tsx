'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const PricingSection = () => {
  return (
    <section id="planos" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-montserrat font-bold mb-4 text-gray-900"
          >
            Planos e Preços
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
          >
            Escolha o plano perfeito para você. Comece gratuitamente e faça upgrade conforme suas necessidades.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 flex flex-col h-full"
          >
            <div className="p-8 pb-4">
              <h3 className="text-2xl font-montserrat font-bold mb-2 text-gray-900">Plano Gratuito</h3>
              <p className="text-gray-700 mb-6">Perfeito para uso casual</p>
              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-montserrat font-bold text-gray-900">R$0</span>
                <span className="text-gray-600 ml-2">/ grátis para sempre</span>
              </div>
              <a 
                href="https://wa.me/+55XXXXXXXXXX?text=Quero%20usar%20o%20plano%20gratuito" 
                className="block w-full py-3 px-6 text-center bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg transition-colors shadow-md border border-white/30 hover:shadow-xl"
              >
                <span className="text-white font-bold">Começar Agora</span>
              </a>
            </div>
            
            <div className="p-8 pt-4 bg-white border-t border-gray-100 flex-1">
              <p className="font-bold text-gray-900 mb-4 text-lg">O que está incluído:</p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Conversão de vídeos para MP3</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Até 5 conversões por dia</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Qualidade de áudio padrão</span>
                </li>
                <li className="flex items-center">
                  <FaTimesCircle className="text-gray-400 mr-3 flex-shrink-0" size={18} />
                  <span className="text-gray-500">Sem prioridade na fila</span>
                </li>
                <li className="flex items-center">
                  <FaTimesCircle className="text-gray-400 mr-3 flex-shrink-0" size={18} />
                  <span className="text-gray-500">Conversão com marca d&apos;água de áudio</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-purple-600 flex flex-col h-full relative"
          >
            <div className="absolute top-5 right-5 bg-yellow-400 px-4 py-1 rounded-full text-sm font-bold shadow-md border border-white ring-2 ring-yellow-400 ring-opacity-50">
              <span className="text-gray-900 font-bold">POPULAR</span>
            </div>
            
            <div className="p-8 pb-4">
              <h3 className="text-2xl font-montserrat font-bold mb-2 text-gray-900">Plano Premium</h3>
              <p className="text-gray-700 mb-6">Para os verdadeiros amantes de música</p>
              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-montserrat font-bold text-purple-600">R$9,90</span>
                <span className="text-gray-600 ml-2">/ mês</span>
              </div>
              <a 
                href="https://wa.me/+55XXXXXXXXXX?text=Quero%20assinar%20o%20plano%20premium" 
                className="block w-full py-3 px-6 text-center bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg transition-colors shadow-md border border-white/30 hover:shadow-xl"
              >
                <span className="text-white font-bold">Assinar Agora</span>
              </a>
            </div>
            
            <div className="p-8 pt-4 bg-white border-t border-gray-100 flex-1">
              <p className="font-bold text-gray-900 mb-4 text-lg">Tudo do plano gratuito, mais:</p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Conversões ilimitadas</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Qualidade de áudio premium (320kbps)</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Prioridade na fila de conversão</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Sem marca d&apos;água de áudio</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Suporte prioritário</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            <span className="font-semibold text-gray-900">Satisfação garantida:</span> Cancele a qualquer momento. Se não estiver satisfeito com o serviço dentro de 7 dias, devolvemos seu dinheiro.
          </p>
          <a 
            href="#faq" 
            className="text-purple-600 hover:text-purple-500 font-bold inline-flex items-center gap-1 transition-colors"
          >
            Perguntas frequentes sobre nossos planos
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
