/**
 * Primary in-page CTA. Native hash navigation (works without JS);
 * scroll-margin on sections accounts for the sticky nav.
 */
const Button = ({ text, className, targetId = "work" }) => {
  return (
    <a href={`#${targetId}`} className={`${className ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="" aria-hidden="true" />
        </div>
      </div>
    </a>
  );
};

export default Button;
