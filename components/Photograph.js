import Image from "next/image";
import { useState } from "react";

const Photograph = ({
  imageId,
  resolution,
  collection,
  caption,
  zoomResolution,
  priority,
  colorPop,
}) => {
  const [zoomOpen, setZoomOpen] = useState(false);
  let filename = `${imageId}_${resolution}x${resolution}.jpg`;
  let pathname = `/image-collections/${collection}/${resolution}x${resolution}/${filename}`;

  const Caption = ({ text }) => {
    if (text) {
      return <p className="photo__caption">{text}</p>;
    } else {
      return null;
    }
  };

  const ZoomImage = () => {
    if (zoomResolution) {
      return (
        <>
          <div
            className="photo__zoom-overlay"
            onClick={() => setZoomOpen(false)}
            style={zoomStyles}
          ></div>
          <div className="photo__zoom-image-container" style={zoomStyles}>
            <img
              className="photo__zoom-image"
              src={pathname}
              alt="example image"
            />
          </div>
        </>
      );
    } else {
      return null;
    }
  };

  const handleClick = () => {
    if (zoomResolution) {
      setZoomOpen(true);
    }
  };

  const zoomStyles = {
    visibility: zoomOpen ? "visible" : "hidden",
  };

  const colorPopBackground = (colorPop) => {
    switch (colorPop) {
      case "blue":
        return 'url("/bg-tex-blue.svg")';
      case "gold":
        return 'url("/bg-tex-gold.svg")';
      case "red":
        return 'url("/bg-tex-red.svg")';
      default:
        return "none";
    }
  };

  const colorPopStyles = {
    position: "absolute",
    top: "-5%",
    left: "-5%",
    width: "40%",
    height: "40%",
    borderRadius: "50%",
    zIndex: -1,
    pointerEvents: "none",
    background: colorPopBackground(colorPop),
  };

  return (
    <>
      <div className="photo__container">
        <div className="photo">
          <div className="photo__color-pop" style={colorPopStyles} />
          <Image
            className="photo__image"
            src={pathname}
            alt="example image"
            layout="responsive"
            width={resolution}
            height={resolution}
            onClick={handleClick}
            priority={priority}
          />
        </div>
        <Caption text={caption} />
      </div>
      <ZoomImage />
    </>
  );
};

export default Photograph;
