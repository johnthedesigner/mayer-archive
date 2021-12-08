import Header from "../components/Header";
import Hero from "../components/Hero";
import Photograph from "../components/Photograph";
import PingPong from "../components/Pingpong";
import PageBody from "../components/PageBody";

const About = () => {
  return (
    <>
      <Header color="red" />
      <Hero background="hero-bg-03.svg" height="10rem">
        <h1 className="hero__title">About the Mayer Archive</h1>
      </Hero>
      <PageBody>
        <PingPong
          TextContent={() => {
            return (
              <>
                <h2>Ralph Mayer</h2>
                <p>
                  <em>1929 – 2011</em>
                </p>
                <p>
                  Fusce gravida consectetur ipsum, eu malesuada ipsum convallis
                  quis. Phasellus quis tellus a neque ultrices semper
                  pellentesque vel nunc. Aenean hendrerit at nulla ac suscipit.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
              </>
            );
          }}
          Photo={() => {
            return (
              <Photograph
                imageId="324_1957-01-13_07"
                resolution="1000"
                zoomResolution="1000"
                collection="the-photographer"
                caption="Lorem ipsum dolor sit amet."
                colorPop="blue"
                priority={true}
              />
            );
          }}
          reverse={true}
        />
        <div className="longform-text">
          <div className="longform-text__side-column">
            <Photograph
              imageId="057_1948-07-12_01"
              resolution="1000"
              zoomResolution="1000"
              collection="the-city"
              caption="Lorem ipsum dolor sit amet."
              colorPop="red"
            />
          </div>
          <div className="longform-text__main-column">
            <h3>Discovering the Negatives</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              convallis bibendum felis, sit amet rhoncus risus iaculis vitae.
              Nullam tortor purus, aliquet id faucibus quis, cursus a lorem.
              Suspendisse molestie nibh sit amet dignissim posuere. Etiam magna
              neque, condimentum condimentum augue id, vehicula mattis lorem.
              Suspendisse ornare urna nunc, a tempor metus fringilla nec. Nullam
              ut dolor ac felis fermentum imperdiet id volutpat enim. In ac
              risus nunc. Praesent rutrum tincidunt dui a iaculis. Sed sit amet
              congue nulla. Fusce a massa ante. Aliquam erat volutpat. Fusce
              laoreet dictum felis, ac tempor tortor. Donec sed quam vel justo
              scelerisque venenatis. Ut aliquam ante id tortor dignissim, sit
              amet semper orci euismod. In tristique sit amet magna ut rhoncus.
              Quisque sed metus vel arcu aliquam convallis eu non ligula.
            </p>
            <p>
              Nullam condimentum ipsum vitae dolor ornare lobortis. Maecenas ut
              eleifend est. In suscipit, elit id blandit aliquam, erat dui
              sodales diam, quis venenatis erat ipsum posuere risus. Aenean quam
              lacus, lobortis in libero a, porttitor lobortis nunc. In dapibus
              est vitae rutrum fermentum. Nulla lacinia ipsum sed elit commodo,
              sed pellentesque sapien laoreet. Donec ipsum risus, lacinia eget
              egestas eu, dapibus eget purus. Aliquam eros metus, varius vel
              nibh ac, scelerisque molestie massa. Vestibulum pharetra sapien
              quis blandit laoreet. Donec ac turpis facilisis, molestie mi ac,
              pretium quam. Etiam eu auctor dui.
            </p>
          </div>
        </div>
        <div className="longform-text">
          <div className="longform-text__side-column">
            <Photograph
              imageId="057_1948-07-12_01"
              resolution="1000"
              zoomResolution="1000"
              collection="the-city"
              caption="Lorem ipsum dolor sit amet."
              colorPop="blue"
            />
            <Photograph
              imageId="232_1952-06-16_03"
              resolution="1000"
              zoomResolution="1000"
              collection="the-city"
              caption="Lorem ipsum dolor sit amet."
              colorPop="gold"
            />
          </div>
          <div className="longform-text__main-column">
            <h3>Discovering the Negatives</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              convallis bibendum felis, sit amet rhoncus risus iaculis vitae.
              Nullam tortor purus, aliquet id faucibus quis, cursus a lorem.
              Suspendisse molestie nibh sit amet dignissim posuere. Etiam magna
              neque, condimentum condimentum augue id, vehicula mattis lorem.
              Suspendisse ornare urna nunc, a tempor metus fringilla nec. Nullam
              ut dolor ac felis fermentum imperdiet id volutpat enim. In ac
              risus nunc. Praesent rutrum tincidunt dui a iaculis. Sed sit amet
              congue nulla. Fusce a massa ante. Aliquam erat volutpat. Fusce
              laoreet dictum felis, ac tempor tortor. Donec sed quam vel justo
              scelerisque venenatis. Ut aliquam ante id tortor dignissim, sit
              amet semper orci euismod. In tristique sit amet magna ut rhoncus.
              Quisque sed metus vel arcu aliquam convallis eu non ligula.
            </p>
            <p>
              Nullam condimentum ipsum vitae dolor ornare lobortis. Maecenas ut
              eleifend est. In suscipit, elit id blandit aliquam, erat dui
              sodales diam, quis venenatis erat ipsum posuere risus. Aenean quam
              lacus, lobortis in libero a, porttitor lobortis nunc. In dapibus
              est vitae rutrum fermentum. Nulla lacinia ipsum sed elit commodo,
              sed pellentesque sapien laoreet. Donec ipsum risus, lacinia eget
              egestas eu, dapibus eget purus. Aliquam eros metus, varius vel
              nibh ac, scelerisque molestie massa. Vestibulum pharetra sapien
              quis blandit laoreet. Donec ac turpis facilisis, molestie mi ac,
              pretium quam. Etiam eu auctor dui.
            </p>
          </div>
        </div>
      </PageBody>
    </>
  );
};
export default About;
