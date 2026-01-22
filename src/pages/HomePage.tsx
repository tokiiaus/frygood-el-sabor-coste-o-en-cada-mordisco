import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, MapPin, Instagram, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { FoodCard } from '@/components/ui/FoodCard';
import { PricingTable } from '@/components/PricingTable';
import { PapaIcon, PataconIcon, PalmIcon } from '@/components/illustrations/ColombianIcons';
const BEST_SELLERS = [
  {
    title: "Papa Rellena 'La Reina'",
    description: "Papa crujiente rellena de carne desmechada premium, arroz y el secreto de la casa.",
    price: "$4.500",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop",
    tag: "Favorito"
  },
  {
    title: "Patacón con Todo",
    description: "Patacón pisao gigante con suero costeño, queso rallado y carne en posta.",
    price: "$12.000",
    image: "https://images.unsplash.com/photo-1599307767316-776533bb941c?q=80&w=800&auto=format&fit=crop",
    tag: "Nuevo"
  },
  {
    title: "Combo Familiar",
    description: "10 frituras mixtas acompañadas de nuestra famosa salsa de ajo y ají dulce.",
    price: "$35.000",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=800&auto=format&fit=crop"
  }
];
export function HomePage() {
  return (
    <div className="min-h-screen bg-background selection:bg-frygood-yellow selection:text-black">
      <ThemeToggle className="fixed top-4 right-4 z-50" />
      {/* Navigation */}
      <header className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-lg border-b border-frygood-cream">
        <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black font-display text-frygood-orange tracking-tighter">FRYGOOD</span>
            <ChefHat className="w-6 h-6 text-frygood-yellow" />
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-sm">
            <a href="#menu" className="hover:text-frygood-orange transition-colors">Menú</a>
            <a href="#franchise" className="hover:text-frygood-orange transition-colors">Franquicias</a>
            <a href="#locations" className="hover:text-frygood-orange transition-colors">Ubicaciones</a>
            <Button size="sm" className="bg-black text-white rounded-full px-6">Pide Ya</Button>
          </div>
        </nav>
      </header>
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute top-20 left-[10%] w-24 h-24 opacity-20">
            <PapaIcon className="w-full h-full" />
          </div>
          <div className="absolute bottom-20 right-[10%] w-32 h-32 opacity-20">
            <PataconIcon className="w-full h-full" />
          </div>
          <div className="absolute top-40 right-10 w-48 h-48 opacity-10">
            <PalmIcon className="w-full h-full" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-8xl font-black font-display leading-[0.9] tracking-tighter text-frygood-orange">
                  EL SABOR COSTEÑO EN CADA <span className="text-frygood-yellow underline decoration-frygood-red decoration-wavy">MORDISCO</span>
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-2xl text-muted-foreground font-medium"
              >
                Crujientes, doraditos y rellenos de pura felicidad. La experiencia definitiva del frito caribeño llega a tu mesa.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button size="lg" className="bg-frygood-yellow hover:bg-frygood-orange text-black font-bold h-16 px-8 rounded-2xl text-lg shadow-xl shadow-frygood-yellow/20">
                  Explorar Menú <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-black font-bold h-16 px-8 rounded-2xl text-lg hover:bg-black hover:text-white transition-all">
                  Ser Franquiciado
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Featured Products */}
        <section id="menu" className="py-20 bg-frygood-cream/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="space-y-4">
                <Badge className="bg-frygood-orange text-white">Nuestras Joyas</Badge>
                <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">Los Más <span className="text-frygood-orange">Votados</span></h2>
                <p className="text-muted-foreground max-w-md">Seleccionados por nuestros clientes como los favoritos indiscutibles del Caribe.</p>
              </div>
              <Button variant="link" className="text-frygood-orange font-bold text-lg">Ver todo el menú →</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BEST_SELLERS.map((item, index) => (
                <FoodCard key={index} {...item} />
              ))}
            </div>
          </div>
        </section>
        {/* Franchise Section */}
        <section id="franchise" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl md:text-6xl font-bold font-display">Únete a la Familia <span className="text-frygood-orange">Frygood</span></h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Lleva el sabor del Caribe a tu ciudad con un modelo de negocio probado, rentable y delicioso.
              </p>
            </div>
            <PricingTable />
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black font-display text-white tracking-tighter">FRYGOOD</span>
                <ChefHat className="w-6 h-6 text-frygood-yellow" />
              </div>
              <p className="text-gray-400 text-sm">
                Comprometidos con la tradición y el sabor real de la costa colombiana. Fritos hechos con amor desde 2018.
              </p>
              <div className="flex gap-4">
                <Button size="icon" variant="secondary" className="rounded-full bg-white/10 hover:bg-frygood-orange">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-full bg-white/10 hover:bg-frygood-orange">
                  <Phone className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Explora</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Nuestro Menú</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Combos Familiares</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Salsas Secretas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Eventos Especiales</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Compañía</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Nuestra Historia</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ser Franquiciado</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trabaja con Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sostenibilidad</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Contacto</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-frygood-yellow" />
                  Barranquilla, Colombia
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-frygood-yellow" />
                  +57 300 000 0000
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-xs">
            <p>© {new Date().getFullYear()} Frygood SAS. Todos los derechos reservados. Diseñado con sabrosura.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}