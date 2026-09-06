import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Full Stack Engineer · Open to remote roles</p>
        </div>

        <div className="socials">
          {socialImgs.map((socialImg) => (
            <a
              key={socialImg.name}
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
              href={socialImg.url}
            >
              <img src={socialImg.imgPath} alt="" aria-hidden="true" />
              <span>
                {socialImg.name === "github" ? "GitHub" : "LinkedIn"}
              </span>
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
