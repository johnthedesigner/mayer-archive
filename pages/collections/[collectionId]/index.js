import Link from "next/link";
import _ from "lodash";
import { useRouter } from "next/router";

import Header from "../../../components/Header";
import Photograph from "../../../components/Photograph";
import PageBody from "../../../components/PageBody";
import CollectionHero from "../../../components/CollectionHero";
import photos from "../../../photos.json";

export async function getStaticPaths() {
  const paths = [];
  _.each(photos.collections, (collection) => {
    paths.push({
      params: {
        collectionId: collection.id,
      },
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
const Collections = () => {
  const router = useRouter();
  const { collectionId } = router.query;
  let collection = _.find(photos.collections, { id: collectionId });
  let thumbnail = _.find(collection.photos, { thumbnail: true });
  // Remove the thumbnail from the rest of the photos in the collection
  let gridPhotos = [...collection.photos];
  _.remove(gridPhotos, { thumbnail: true });

  return (
    <>
      <Header color="gold" />
      <CollectionHero
        imageId={thumbnail.id}
        collection={collection.id}
        collectionTitle={collection.label}
        collectionDateRange="1947 – 1956"
        photoCaption={thumbnail.caption}
        description={collection.description}
      />
      <PageBody>
        <div className="collection-grid">
          {gridPhotos.map((photo, index) => {
            return (
              <Link
                key={photo.id + index}
                href={`/collections/${collection.id}/${photo.id}`}
              >
                <a title={photo.caption}>
                  <div
                    key={`${photo.id}_${index}`}
                    className="collection-grid__item"
                  >
                    <Photograph
                      imageId={photo.id}
                      resolution={1000}
                      collection={collection.id}
                      caption={photo.caption}
                      priority={false}
                      tilt={true}
                    />
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </PageBody>
    </>
  );
};

export default Collections;
