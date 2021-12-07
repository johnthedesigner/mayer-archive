import Image from "next/image";
import { useState } from "react";

const Photograph = ({
  imageId,
  resolution,
  collection,
  caption,
  zoomResolution,
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

  return (
    <>
      <div className="photo-container">
        <div className="photo">
          <Image
            className="photo__image"
            src={pathname}
            alt="example image"
            layout="responsive"
            width={resolution}
            height={resolution}
            onClick={handleClick}
          />
        </div>
        <Caption text={caption} />
      </div>
      <ZoomImage />
    </>
  );
};

export default Photograph;
