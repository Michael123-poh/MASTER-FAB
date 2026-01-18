import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-welding.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Welding sparks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Watermark Text */}
      <div className="watermark-text left-0 top-1/2 -translate-y-1/2">
        MASTER-FAB
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-32 pb-40 flex items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-primary font-heading text-lg uppercase tracking-[0.3em] mb-4"
          >
            Précision & Excellence
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold uppercase leading-tight mb-8"
          >
            <span className="text-foreground">Découpe Laser</span>
            <span className="text-primary"> & </span>
            <br />
            <span className="text-foreground">Pliage CNC</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#services" className="btn-blue">
              Nos Services
            </a>
            <a href="#about" className="btn-outline-blue">
              Contactez-Nous
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Spark Effects */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary rounded-full"
        animate={{
          y: [0, -30, 0],
          opacity: [1, 0.5, 1],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [1, 0.3, 1],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-primary rounded-full"
        animate={{
          y: [0, -40, 0],
          opacity: [1, 0.4, 1],
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
      />
    </section>
  );
};

export default HeroSection;
