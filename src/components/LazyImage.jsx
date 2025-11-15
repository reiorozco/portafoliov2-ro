import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const LazyImage = ({
  src,
  alt,
  className = "",
  placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23111' width='400' height='300'/%3E%3C/svg%3E",
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const actualSrc = img.dataset.src;

            if (actualSrc) {
              // Create a new image to preload
              const tempImg = new Image();
              tempImg.onload = () => {
                setImageSrc(actualSrc);
                setIsLoaded(true);
              };
              tempImg.src = actualSrc;

              // Stop observing once loaded
              observer.unobserve(img);
            }
          }
        });
      },
      {
        rootMargin: "50px", // Start loading 50px before image enters viewport
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      data-src={src}
      alt={alt}
      className={`${className} ${isLoaded ? "opacity-100" : "opacity-50"} transition-opacity duration-300`}
      {...props}
    />
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default LazyImage;
