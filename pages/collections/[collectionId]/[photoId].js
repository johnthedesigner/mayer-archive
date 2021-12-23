import _ from "lodash";
import { DateTime } from "luxon";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

import Header from "../../../components/Header";
import PageBody from "../../../components/PageBody";
import Photograph from "../../../components/Photograph";
import photos from "../../../photos.json";

export async function getStaticPaths() {
  const paths = [];
  _.each(photos.collections, (collection) => {
    _.each(collection.photos, (photo) => {
      paths.push({
        params: {
          collectionId: collection.id,
          photoId: photo.id,
        },
      });
    });
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

const PhotoDetail = () => {
  const router = useRouter();
  const { collectionId, photoId } = router.query;
  const parentCollection = _.find(photos.collections, { id: collectionId });
  const photo = _.find(parentCollection.photos, { id: photoId });

  // Capture Mouse Position and use it to show a loupe
  const photoEl = useRef(null);
  const [showLoupe, setShowLoupe] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const updateMousePosition = (ev) => {
    // console.log({ x: ev.clientX, y: ev.clientY });
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);
  let photoPosition = {
    x: photoEl.current ? photoEl.current.getBoundingClientRect().x : 0,
    y: photoEl.current ? photoEl.current.getBoundingClientRect().y : 0,
  };
  let relativePosition = {
    x: mousePosition.x - photoPosition.x,
    y: mousePosition.y - photoPosition.y,
  };
  const loupeScale = 0.5;
  let photoWidth = photoEl.current
    ? photoEl.current.getBoundingClientRect().width
    : 0;
  let loupeWidth = photoWidth * loupeScale;
  const loupeResolution = 1000;
  let filename = `${photoId}_${loupeResolution}x${loupeResolution}.jpg`;
  let pathname = `/image-collections/${collectionId}/${loupeResolution}x${loupeResolution}/${filename}`;
  const loupeStyles = {
    display: showLoupe ? "block" : "none",
    position: "fixed",
    top: mousePosition.y - loupeWidth / 2,
    left: mousePosition.x - loupeWidth / 2,
    width: `${loupeWidth}px`,
    height: `${loupeWidth}px`,
    backgroundImage: `url("${pathname}")`,
    backgroundPosition: `left ${
      relativePosition.x * -2 + loupeWidth / 2
    }px top ${relativePosition.y * -2 + loupeWidth / 2}px`,
    backgroundSize: `${photoWidth * 2}px ${photoWidth * 2}px`,
    backgroundRepeat: "no-repeat",
    borderRadius: "50%",
    border: ".125rem solid black",
    zIndex: 1000,
    pointerEvents: "none",
    boxShadow: "0 .5rem 1rem rgba(0,0,0,.4",
  };

  // Header banner styles
  let headerStyles = {
    backgroundImage: `url("/hero-bg-04.svg")`,
    height: "10rem",
  };

  return (
    <>
      <Header color="gold" />
      <div className="photo-hero">
        <div className="photo-hero__background" style={headerStyles} />
        <div className="photo-hero__content">
          <div className="loupe" style={loupeStyles}></div>
          <div
            className="photo-hero__image-container"
            onMouseEnter={() => setShowLoupe(true)}
            onMouseLeave={() => setShowLoupe(false)}
          >
            <Photograph
              photoRef={photoEl}
              imageId={photo.id}
              resolution="1000"
              zoomResolution="1000"
              collection={parentCollection.id}
              caption={photo.caption}
              priority={true}
            />
          </div>
          <div className="photo-hero__text-container"></div>
        </div>
        <PageBody>
          <div className="single-column">
            <p>
              From Collection:{" "}
              <Link href={`/collections/${parentCollection.id}`}>
                <a title={parentCollection.label}>{parentCollection.label}</a>
              </Link>
            </p>
            <h3>{photo.caption}</h3>
            <p>
              <em>
                Developed:{" "}
                {DateTime.fromISO(photo.dateDeveloped).toLocaleString(
                  DateTime.DATE_MED
                )}
              </em>
            </p>
            {_.map(photo.description, (paragraph, index) => {
              return <p key={index}>{paragraph}</p>;
            })}
            <p>
              Fusce gravida consectetur ipsum, eu malesuada ipsum convallis
              quis. Phasellus quis tellus a neque ultrices semper pellentesque
              vel nunc. Aenean hendrerit at nulla ac suscipit. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>
        </PageBody>
      </div>
    </>
  );
};

export default PhotoDetail;
