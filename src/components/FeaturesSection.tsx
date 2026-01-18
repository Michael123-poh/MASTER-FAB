import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Calculator, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Phone,
    title: 'Appelez-Nous',
    description: 'Assistance disponible 24/7 pour vos projets',
  },
  {
    icon: Calculator,
    title: 'Devis Gratuit',
    description: 'Évaluation précise des coûts pour votre budget',
  },
  {
    icon: CheckCircle,
    title: 'Livraison Rapide',
    description: 'Réalisation et livraison dans les meilleurs délais',
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 -mt-32 z-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-0"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`feature-card text-center ${
                index === 1 ? 'md:-translate-y-4' : ''
              }`}
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-xl uppercase tracking-wider mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
