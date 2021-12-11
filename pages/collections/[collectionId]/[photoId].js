import _ from "lodash";
import { DateTime } from "luxon";
import Link from "next/link";
import { useRouter } from "next/router";

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
        <PageBody>
          <div className="photo-hero__content">
            <div className="photo-hero__image-container">
              <Photograph
                imageId={photo.id}
                resolution="1000"
                zoomResolution="1000"
                collection={parentCollection.id}
                caption={photo.caption}
                priority={true}
              />
            </div>
            <div className="photo-hero__text-container">
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
            </div>
          </div>
          <div className="single-column">
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
