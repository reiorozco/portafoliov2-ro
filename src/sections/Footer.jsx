import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>

        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={socialImg.name + index}
              className="icon"
              target="_blank"
              href={socialImg.url}
            >
              <img src={socialImg.imgPath} alt="social icon" />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Rei Orozco. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
