const PingPong = ({ TextContent, Photo, reverse }) => {
  const PingPongContent = () => {
    return (
      <>
        <div className="ping-pong__text-container">
          <TextContent />
        </div>
        <div className="ping-pong__image-container">
          <Photo />
        </div>
      </>
    );
  };
  if (reverse) {
    return (
      <div className="ping-pong">
        <PingPongContent />
      </div>
    );
  } else {
    return (
      <div className="ping-pong ping-pong--reverse">
        <PingPongContent />
      </div>
    );
  }
};

export default PingPong;
