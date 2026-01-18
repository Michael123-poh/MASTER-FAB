import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Box, Layers, Ruler, Sparkles, Settings } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Découpe Laser',
    description: 'Découpe de haute précision sur tous types de métaux avec finition parfaite.',
  },
  {
    icon: Box,
    title: 'Pliage CNC',
    description: 'Pliage numérique contrôlé pour des angles précis et répétables.',
  },
  {
    icon: Layers,
    title: 'Découpe Acier',
    description: 'Traitement de l\'acier de toutes épaisseurs avec rapidité.',
  },
  {
    icon: Ruler,
    title: 'Fabrication Sur Mesure',
    description: 'Réalisation de pièces personnalisées selon vos spécifications exactes.',
  },
  {
    icon: Sparkles,
    title: 'Découpe Inox',
    description: 'Expertise dans la découpe d\'acier inoxydable pour applications variées.',
  },
  {
    icon: Settings,
    title: 'Prototypage Rapide',
    description: 'Du concept à la réalité en un temps record pour vos prototypes.',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      {/* Watermark */}
      <div className="watermark-text left-1/2 -translate-x-1/2 top-1/4">
        SERVICES
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            Nos <span className="text-primary">Services</span>
          </h2>
          <p className="section-subtitle">
            Master-Fab SARL - Fabrication Métallique
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="card-industrial p-8 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(245,166,35,0.1)]">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">
                      {service.title.split(' ').map((word, i) => (
                        <span key={i}>
                          {i === 0 ? <span className="text-primary">{word}</span> : ` ${word}`}
                        </span>
                      ))}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
