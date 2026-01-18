import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import geraldImage from '@/assets/gerald-portrait.jpg';
import aboutWeldingImage from '@/assets/about-welding.jpg';

const benefits = [
  'Précision de découpe au dixième de millimètre',
  'Pliage CNC avec contrôle numérique avancé',
  '5 ans d\'expérience et d\'expertise technique',
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-foreground">
      {/* Watermark */}
      <div className="watermark-text left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-background/[0.03]">
        ABOUT
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Images */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 lg:right-0 z-20 w-48 md:w-64 border-4 border-primary shadow-xl"
            >
              <img
                src={geraldImage}
                alt="Gerald Evans"
                className="w-full"
              />
            </motion.div>

            {/* Decorative border */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute top-8 left-8 w-full max-w-md h-full border-2 border-primary -z-10"
            />
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-12"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-2">
              <span className="text-primary">Notre</span>
              <span className="text-background"> Histoire</span>
            </h2>
            <p className="text-background/60 uppercase tracking-[0.3em] text-sm mb-8">
              5 Ans d'Excellence
            </p>

            <div className="space-y-4 text-background/70 text-sm leading-relaxed mb-8">
              <p>
                Depuis 5 ans, Master-Fab SARL s'est imposé comme le leader de la découpe laser
                et du pliage CNC au Cameroun. Notre mission est de travailler avec
                précision et efficacité pour transformer vos idées en réalité.
              </p>
              <p>
                Grâce à notre expertise et nos équipements de pointe, nous accompagnons
                nos clients dans tous leurs projets métalliques, dépassant systématiquement
                leurs attentes en termes de qualité et de délais.
              </p>
            </div>

            <h3 className="font-heading text-xl uppercase tracking-wider text-background mb-4">
              Pourquoi <span className="text-primary">Nous Choisir</span>
            </h3>

            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 text-background/80"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
