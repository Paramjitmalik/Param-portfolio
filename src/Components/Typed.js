import React from 'react';
import Typewriter from  'typewriter-effect';

const Typed = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ['Software Developer', 'FRONT END Developer','BACK END Developer'],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed:30,
        }}
      />
    </div>
  )
}

export default Typed
