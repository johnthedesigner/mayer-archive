import Header from "../components/Header";
import Hero from "../components/Hero";

const Typography = () => {
  return (
    <>
      <Header color="gold" />
      <Hero background="hero-bg-01.svg">
        <h1 className="hero__title">Typography</h1>
      </Hero>
      <div className="page-body">
        <div className="typography-test">
          <p className="figure-label">Heading 1</p>
          <h1>The quick brown fox jumped over the lazy dog.</h1>
          <hr />
          <p className="figure-label">Heading 2</p>
          <h2>The quick brown fox jumped over the lazy dog.</h2>
          <hr />
          <p className="figure-label">Heading 3</p>
          <h3>The quick brown fox jumped over the lazy dog.</h3>
          <hr />
          <p className="figure-label">Heading 4</p>
          <h4>The quick brown fox jumped over the lazy dog.</h4>
          <hr />
          <p className="figure-label">Heading 5</p>
          <h5>The quick brown fox jumped over the lazy dog.</h5>
          <hr />
          <p className="figure-label">Heading 6</p>
          <h6>The quick brown fox jumped over the lazy dog.</h6>
          <hr />
          <p className="figure-label">Paragraph</p>
          <p>The quick brown fox jumped over the lazy dog.</p>
          <hr />
          <p className="figure-label">Photograph Caption</p>
          <p className="photo__caption">
            The quick brown fox jumped over the lazy dog.
          </p>
        </div>
      </div>
    </>
  );
};
export default Typography;
