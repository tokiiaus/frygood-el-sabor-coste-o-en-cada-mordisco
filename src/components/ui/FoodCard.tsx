import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
interface FoodCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
}
export function FoodCard({ title, description, price, image, tag }: FoodCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="overflow-hidden border-none shadow-xl bg-white rounded-4xl group">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {tag && (
            <Badge className="absolute top-4 left-4 bg-frygood-red hover:bg-frygood-red text-white border-none px-3 py-1">
              {tag}
            </Badge>
          )}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-sm">
            <Star className="w-4 h-4 fill-frygood-yellow text-frygood-yellow" />
          </div>
        </div>
        <CardContent className="p-6 space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold font-display text-foreground">{title}</h3>
            <span className="text-lg font-bold text-frygood-orange">{price}</span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
          <Button className="w-full bg-frygood-yellow hover:bg-frygood-orange text-black font-bold rounded-2xl transition-colors group">
            <ShoppingCart className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            Pedir Ahora
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}