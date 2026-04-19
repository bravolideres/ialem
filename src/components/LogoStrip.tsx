import Image from "next/image";

const logos = [
  { src: "/images/logo-fiat.svg", alt: "Fiat", height: 40 },
  { src: "/images/logo-stellantis.svg", alt: "Stellantis", height: 32 },
  { src: "/images/logo-cos.svg", alt: "COS — Rede de Clínicas Odontológicas", height: 44 },
  { src: "/images/logo-cooperavale.svg", alt: "CooperaVale", height: 32 },
  { src: "/images/logo-vitrale.svg", alt: "Vitrale Imóveis", height: 32 },
  { src: "/images/logo-dermae.svg", alt: "Dermaê", height: 32 },
];

export default function LogoStrip() {
  return (
    <section className="social">
      <div className="wrap">
        <div className="social-label">Empresas que confiam na IAlem</div>
        <div className="logos">
          {logos.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={logo.height}
              style={{
                height: `${logo.height}px`,
                width: "auto",
                filter: "brightness(0) invert(1)",
                opacity: 0.6,
                transition: "opacity .3s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
