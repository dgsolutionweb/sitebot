'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

// FAQ items data
const faqItems = [
  {
    question: "Como o YouTube MP3 Bot funciona?",
    answer: "Nosso bot é muito simples de usar. Basta enviar o link do vídeo do YouTube para nosso número no WhatsApp e o bot automaticamente irá converter e enviar o arquivo MP3 para você em alguns segundos."
  },
  {
    question: "É necessário criar uma conta para usar o bot?",
    answer: "Não! Essa é uma das principais vantagens do nosso serviço. Você não precisa criar conta, baixar aplicativos ou acessar websites. Tudo acontece diretamente no WhatsApp que você já usa."
  },
  {
    question: "Qual é a qualidade do áudio convertido?",
    answer: "Oferecemos até 320kbps de qualidade de áudio MP3, que é considerada qualidade profissional. O plano gratuito oferece qualidade padrão, enquanto o plano premium garante sempre a melhor qualidade possível."
  },
  {
    question: "Posso baixar playlists inteiras de uma vez?",
    answer: "Sim! Com o plano premium, você pode enviar links de playlists do YouTube e o bot irá converter e enviar todas as músicas para você. Esta funcionalidade não está disponível no plano gratuito."
  },
  {
    question: "O serviço funciona para qualquer tipo de vídeo?",
    answer: "Sim, nosso bot pode converter praticamente qualquer vídeo do YouTube em arquivo MP3, desde que o conteúdo não viole os termos de serviço do YouTube ou nossas políticas de uso."
  },
  {
    question: "Como faço para cancelar minha assinatura premium?",
    answer: "Cancelar é simples! Basta enviar a mensagem 'Cancelar assinatura' para o bot no WhatsApp e seguir as instruções. Você pode cancelar a qualquer momento sem taxas adicionais."
  }
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-montserrat font-bold mb-4 text-gray-900"
          >
            Perguntas Frequentes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
          >
            Tire suas dúvidas sobre o YouTube MP3 Bot e comece a baixar suas músicas agora mesmo.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
              >
                <span className="font-bold text-lg text-gray-900">{item.question}</span>
                <FaChevronDown 
                  className={`text-gray-900 transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180' : ''}`}
                />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700">{item.answer}</p>
              </div>
            </div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-900 text-white p-8 rounded-2xl max-w-3xl mx-auto shadow-xl border border-gray-700">
            <h3 className="text-2xl font-montserrat font-bold mb-4">Ainda tem dúvidas?</h3>
            <p className="mb-6">
              Entre em contato diretamente conosco no WhatsApp para suporte prioritário. Estamos sempre prontos para ajudar!
            </p>
            <a 
              href="https://wa.me/+5517991129386?text=Tenho%20uma%20dúvida%20sobre%20o%20YouTube%20MP3%20Bot" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all border border-white/30 hover:shadow-xl"
            >
              <span>Fale com o Suporte</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
