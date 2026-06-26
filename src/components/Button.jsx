/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section with id `targetId`
 * (default "work"), with a small offset from the top for visual placement.
 */

const Button = ({ text, className, targetId = "work" }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault(); // Stop the link from jumping instantly

        const target = document.getElementById(targetId);

        if (target) {
          const offset = window.innerHeight * 0.15; // Leave a bit of space at the top

          // Calculate how far down the page we need to scroll
          const top =
            target.getBoundingClientRect().top + window.scrollY - offset;

          // Scroll smoothly to that position
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`} // Add base + extra class names
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="Down arrow icon" />
        </div>
      </div>
    </a>
  );
};

export default Button;
