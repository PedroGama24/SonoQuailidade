import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CheckCircle, ShieldCheck, Star } from "lucide-react"; // Import icons

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <h1 className="text-xl font-bold">Sono de Qualidade</h1>
        <nav className="hidden md:flex space-x-4 items-center">
          <a href="#beneficios" className="hover:underline">Benefícios</a>
          <a href="#sobre" className="hover:underline">Sobre o Guia</a>
          <a href="#depoimentos" className="hover:underline">Depoimentos</a>
          <a href="#comprar">
            <Button variant="secondary" size="sm">Quero Dormir Melhor!</Button>
          </a>
        </nav>
        {/* Add mobile menu button here if needed */}
      </header>

      {/* Hero Section */}
      <section id="hero" className="w-full flex flex-col md:flex-row items-center justify-center text-center md:text-left py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Cansado de Rolar na Cama? Descubra Como Ter um Sono Profundo e Reparador HOJE!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Aprenda técnicas simples e comprovadas para adormecer rápido, manter o sono e acordar revigorado todos os dias com nosso guia completo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#comprar">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto shadow-lg transform hover:scale-105 transition-transform duration-200">
                Sim, Quero Dormir Melhor Agora!
              </Button>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500 flex items-center justify-center md:justify-start">
            <ShieldCheck className="w-4 h-4 inline-block mr-1 text-green-600" />
            Garantia de satisfação de 30 dias ou seu dinheiro de volta
          </p>
        </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            {/* Use Next.js Image component for optimization */}
            <Image 
              src="/hero-image.png" 
              alt="Pessoa dormindo tranquilamente - Guia Sono de Qualidade" 
              width={500} // Adjust width for the new image
              height={350} // Adjust height for the new image aspect ratio
              className="rounded-lg shadow-lg mx-auto" 
              priority // Load image faster as it's in the hero section
            />
          </div>
      </section>

      {/* Introduction/Pain Point Section */}
      <section id="dor" className="w-full py-16 px-4 md:px-8 lg:px-16 text-center bg-white">
         <h3 className="text-3xl font-bold text-gray-800 mb-4">Suas Noites Têm Sido Assim?</h3>
         <p className="text-lg text-gray-600 max-w-3xl mx-auto">
           Você se revira na cama por horas sem conseguir dormir? Acorda cansado mesmo após uma noite inteira? A falta de sono está afetando seu humor, sua produtividade e sua saúde? Você não está sozinho. Milhões de adultos sofrem com a insônia e seus efeitos devastadores. Mas existe uma solução natural e eficaz...
         </p>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">Recupere Sua Vida com um Sono de Qualidade</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Melhora da Saúde Mental</h4>
            <p className="text-gray-600">Diga adeus à ansiedade noturna e à névoa mental matinal. Aprenda técnicas para acalmar sua mente antes de dormir e acorde com clareza e bom humor.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
             <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Aumento da Produtividade</h4>
            <p className="text-gray-600">Transforme suas manhãs sonolentas em dias cheios de energia e foco. Um sono reparador melhora sua concentração, memória e capacidade de resolver problemas.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
             <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Fortalecimento Imunológico</h4>
            <p className="text-gray-600">Durma bem e fortaleça suas defesas naturais. O sono de qualidade ajuda seu corpo a combater infecções e inflamações, mantendo você mais saudável.</p>
          </div>
        </div>
      </section>

      {/* About the Guia Section */}
      <section id="sobre" className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Seu Plano Passo a Passo Para Noites Tranquilas</h3>
          <p className="text-lg text-gray-600 mb-8">Dentro deste guia prático, você não encontrará apenas teoria, mas uma técnica de ação comprovado. Descubra:</p>
          <ul className="list-disc list-inside text-left text-gray-700 space-y-2 max-w-2xl mx-auto mb-8">
            <li>A técnica de relaxamento de 5 minutos que induz ao sono rapidamente.</li>
            <li>Como criar o ambiente perfeito no seu quarto (e os erros comuns que você pode estar cometendo).</li>
            <li>As rotinas noturnas usadas por especialistas para sinalizar ao seu corpo que é hora de descansar.</li>
            <li>Alimentos e bebidas surpreendentes que sabotam seu sono (e o que comer para dormir melhor).</li>
            <li>Estratégias comprovadas para lidar com pensamentos acelerados e preocupações na hora de dormir.</li>
          </ul>
          {/* Authority Section */}
          <div className="bg-purple-50 p-6 rounded-lg mt-10 border border-purple-200">
             <h4 className="text-xl font-semibold text-gray-800 mb-2">Criado por Especialistas</h4>
             <p className="text-gray-700">Criado por especialistas em sono e bem-estar, este guia compila anos de pesquisa e práticas comprovadas para oferecer a você uma solução real e duradoura para a insônia.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">O Que Dizem Nossos Leitores Satisfeitos?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
            </div>
            <p className="text-gray-600 italic mb-4">"Este Guia transformou meu sono e minha saúde mental. Depois de aplicar as técnicas, adormeço mais rápido e acordo muito mais disposto. Recomendo!"</p>
            <p className="font-semibold text-gray-800">- Carlos M.</p> {/* Use initials or first name + initial for privacy */}
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
             <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
            </div>
            <p className="text-gray-600 italic mb-4">"Sofria com ansiedade na hora de dormir. As estratégias de relaxamento do guia foram um divisor de águas. Finalmente consigo desligar a mente e descansar."</p>
            <p className="font-semibold text-gray-800">- Ana Silva</p>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
             <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
            </div>
            <p className="text-gray-600 italic mb-4">"Conteúdo prático e fácil de aplicar. Notei diferença já na primeira semana. Valeu cada centavo!"</p>
            <p className="font-semibold text-gray-800">- J. Pereira</p>
          </div>
        </div>
      </section>

      {/* Offer/CTA Section */}
      <section id="comprar" className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-purple-100 to-white text-center">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Pronto Para Transformar Suas Noites?</h3>
          <p className="text-lg text-gray-700 mb-6">Adquira seu acesso imediato ao Guia Sono de Qualidade e todos os bônus inclusos!</p>
          <div className="mb-6">
            <p className="text-sm text-gray-500 line-through">De R$ 75,80</p>
            <p className="text-4xl font-bold text-purple-600 mb-2">Por Apenas R$ 11,90</p>
            <p className="text-gray-600">(Pagamento único, sem assinaturas)</p>
          </div>
          <ul className="text-left text-gray-700 space-y-2 mb-6 list-disc list-inside">
            <li>Guia Completo </li>
            <li>Bônus: Diário do Sono (Template)</li>
            <li>Bônus: Acesso Vitalício a Atualizações</li>
          </ul>
          <a href="https://pay.kiwify.com.br/ONRt3cr" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white w-full shadow-lg transform hover:scale-105 transition-transform duration-200">
              GARANTIR MEU ACESSO AGORA por R$ 11,90
            </Button>
          </a>
          <div className="mt-6 flex flex-col items-center">
            <div className="flex items-center justify-center bg-gray-100 p-3 rounded-lg border border-gray-300 w-full max-w-md">
              <ShieldCheck className="w-8 h-8 text-green-600 mr-3 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-800">Sua Satisfação Garantida!</p>
                <p className="text-sm text-gray-600">Você tem 30 dias para testar. Se não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas.</p>
              </div>
            </div>
             <p className="mt-4 text-xs text-gray-500">Compra Segura | Acesso Imediato</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white p-8 text-center">
        <div className="mb-4">
          <a href="#beneficios" className="px-2 hover:underline">Benefícios</a> |
          <a href="#sobre" className="px-2 hover:underline">Sobre o Guia</a> |
          <a href="#depoimentos" className="px-2 hover:underline">Depoimentos</a> |
          {/* Create these pages later */}
          <a href="/politica-privacidade" className="px-2 hover:underline">Política de Privacidade</a> |
          <a href="/termos-uso" className="px-2 hover:underline">Termos de Uso</a>
        </div>
        <p>&copy; 2025 Sono de Qualidade. Todos os direitos reservados.</p>
        <p className="text-sm text-gray-400 mt-2">Contato: contato@sonodequalidade.com.br</p> {/* Replace with actual email */}
      </footer>
    </main>
  );
}

