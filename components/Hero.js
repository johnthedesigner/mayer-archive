const Hero = ({ children, background }) => {
  let styles = {
    backgroundImage: `url("/${background}")`,
  };
  return (
    <div className="hero" style={styles}>
      {children}
    </div>
  );
};

export default Hero;
