const Hero = ({ children, background, height }) => {
  let styles = {
    backgroundImage: `url("/${background}")`,
    height: height ? height : "10rem",
  };
  return (
    <div className="hero" style={styles}>
      {children}
    </div>
  );
};

export default Hero;
