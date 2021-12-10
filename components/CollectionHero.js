import Photograph from "./Photograph";
import PageBody from "./PageBody";

const CollectionHero = ({
  imageId,
  photoCaption,
  collection,
  collectionTitle,
  CollectionIntro,
  collectionDateRange,
}) => {
  let styles = {
    backgroundImage: `url("/hero-bg-02.svg")`,
    height: "20rem",
  };

  return (
    <div className="collection-hero">
      <div className="collection-hero__background" style={styles} />
      <div className="collection-hero__title-container">
        <h4 className="collection-hero__subtitle">Collection</h4>
        <h2 className="collection-hero__title">{collectionTitle}</h2>
        <p className="collection-hero__date-range">{collectionDateRange}</p>
      </div>
      <PageBody>
        <div className="collection-hero__content">
          <div className="collection-hero__text-container">
            <CollectionIntro />
          </div>
          <div className="collection-hero__image-container">
            <Photograph
              imageId={imageId}
              resolution="1000"
              zoomResolution="1000"
              collection={collection}
              caption={photoCaption}
              priority={true}
            />
          </div>
        </div>
      </PageBody>
    </div>
  );
};

export default CollectionHero;
