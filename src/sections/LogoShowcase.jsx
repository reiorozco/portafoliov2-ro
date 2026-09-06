import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.alt} />
    </div>
  );
};

const LogoShowcase = () => (
  <section className="md:my-20 my-10 relative" aria-label="Teams">
    <p className="text-center text-sm text-blue-50 mb-8">Teams</p>

    <div className="relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-36 md:h-44">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`a-${icon.alt}-${index}`} icon={icon} />
          ))}
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`b-${icon.alt}-${index}`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LogoShowcase;
