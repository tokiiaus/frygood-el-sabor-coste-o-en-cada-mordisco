import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
const plans = [
  {
    name: "Carrito Express",
    price: "$15M COP",
    description: "Ideal para eventos y ferias",
    features: ["Carrito móvil Frygood", "Manual de marca", "Insumos iniciales", "Capacitación 1 día"],
    highlight: false
  },
  {
    name: "Local Estándar",
    price: "$45M COP",
    description: "Tu propio punto de sabor costeño",
    features: ["Mobiliario completo", "Marketing digital 3 meses", "Sistema de pedidos", "Asesoría de local"],
    highlight: true
  },
  {
    name: "Master Franquicia",
    price: "$120M COP",
    description: "Lidera una ciudad entera",
    features: ["Derechos territoriales", "Cocina oculta central", "Soporte 24/7", "Exclusividad de zona"],
    highlight: false
  }
];
export function PricingTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={cn(
            "relative p-8 rounded-4xl transition-all duration-300 border-2",
            plan.highlight 
              ? "bg-frygood-orange text-white border-frygood-orange scale-105 shadow-2xl z-10" 
              : "bg-white text-foreground border-frygood-cream hover:border-frygood-yellow"
          )}
        >
          {plan.highlight && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-frygood-yellow text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
              Más Popular
            </div>
          )}
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2 font-display">{plan.name}</h3>
            <p className={cn("text-sm", plan.highlight ? "text-orange-100" : "text-muted-foreground")}>
              {plan.description}
            </p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-bold">{plan.price}</span>
            <span className="text-sm opacity-80 ml-1">Inversión</span>
          </div>
          <ul className="space-y-4 mb-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <Check className={cn("w-4 h-4 shrink-0", plan.highlight ? "text-frygood-yellow" : "text-frygood-orange")} />
                {feature}
              </li>
            ))}
          </ul>
          <Button 
            className={cn(
              "w-full font-bold py-6 rounded-2xl",
              plan.highlight ? "bg-frygood-yellow hover:bg-white text-black" : "bg-black text-white hover:bg-frygood-orange"
            )}
          >
            Saber Más
          </Button>
        </div>
      ))}
    </div>
  );
}