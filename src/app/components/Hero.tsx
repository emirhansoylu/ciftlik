import Image from 'next/image';

interface HeroProps {
  title: string;
  description: string;
  ctaText: string;
  galleryText: string;
}

export const Hero = ({ title, description, ctaText, galleryText }: HeroProps) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/ciftlik' : '';

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={`${basePath}/hero-farm.jpg`}
          alt="Çiftliğimizden genel görünüm"
          fill
          priority
          quality={100}
          className="object-cover"
          sizes="100vw"
        />
        {/* Multiple Overlay Layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            {title}<br />
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto drop-shadow-lg">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-accent hover:bg-accent-dark text-white font-bold py-5 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {ctaText}
            </a>
            <a
              href="#gallery-section"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-5 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              {galleryText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}; 