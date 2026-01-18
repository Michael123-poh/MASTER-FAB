import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import tigWelding from '@/assets/tig-welding.jpg';
import migWelding from '@/assets/mig-welding.jpg';
import stickWelding from '@/assets/stick-welding.jpg';

const galleryItems = [
  {
    image: tigWelding,
    title: 'TIG Welding',
    description: 'Providing full-service mobile welding to all of San Diego and the surrounding areas.',
    size: 'large',
  },
  {
    image: migWelding,
    title: 'MIG Welding',
    description: 'We bring everything needed, including a generator to power our electric welders.',
    size: 'small',
  },
  {
    image: stickWelding,
    title: 'Stick Welding',
    description: 'We can help you with any kind of welding. Welding Repair or Replace an alloy.',
    size: 'medium',
  },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Watermark */}
      <div className="watermark-text left-1/2 -translate-x-1/2 top-1/4">
        GALLERY
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
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="section-subtitle">
            Weldo Metal Fabrication
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Item */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="md:row-span-2 gallery-card group"
          >
            <img
              src={galleryItems[0].image}
              alt={galleryItems[0].title}
              className="w-full h-full min-h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent flex flex-col justify-end p-6">
              <h3 className="font-heading text-2xl uppercase tracking-wider text-primary-foreground mb-2">
                {galleryItems[0].title}
              </h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                {galleryItems[0].description}
              </p>
            </div>
          </motion.div>

          {/* Medium Items */}
          {galleryItems.slice(1).map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: (index + 1) * 0.15, duration: 0.6 }}
              className="gallery-card group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="font-heading text-xl uppercase tracking-wider text-primary-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                <button className="btn-outline-gold self-start text-xs py-2 px-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Read more
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
