
import YouTube from 'react-youtube';

const OverView = () => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <div>
      <YouTube videoId="E2Df6iwT-SA" opts={opts} onReady={_onReady} />
    </div>
  );
};

export default OverView;
