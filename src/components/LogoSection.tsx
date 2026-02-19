import { motion } from 'framer-motion';

const logos = [
  { id: 1, name: 'AICTE', src: '/elevate2026/All_India_Council_for_Technical_Education_logo.png' },
  { id: 2, name: 'DST', src: '/elevate2026/dst-logo1.jpg.png' },
  { id: 3, name: 'DST-NIDHI', src: '/elevate2026/DST-NIDHI_Original-Logo-V_1.png' },
  { id: 4, name: 'IDEALAB', src: '/elevate2026/idealab.png' },
  { id: 5, name: 'IIC', src: '/elevate2026/IIC-LOGO.jpg.png' },
  { id: 6, name: 'Partner 1', src: '/elevate2026/images (1).png' },
  { id: 7, name: 'Partner 2', src: '/elevate2026/images.png' },
  { id: 9, name: 'SRAJAN', src: '/elevate2026/SRAJAN__3_.jpg-removebg-preview.png' },
];

const LogoSection = () => {
  return (
    <section className="py-12 bg-background/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Our <span className="text-gradient">Partners</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We proudly collaborate with distinguished organizations and institutions committed to excellence and innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-4 md:gap-6 overflow-x-auto py-4"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex-shrink-0"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-lg shadow-md border border-border/20 flex items-center justify-center p-3 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback placeholder if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-primary/10 to-primary/20 rounded flex items-center justify-center text-primary font-semibold text-xs">
                        ${logo.name}
                      </div>
                    `;
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoSection;
