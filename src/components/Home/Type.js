import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Full Stack Developer',
          'Software Developer',
          'AI Developer',
          'Frontend Developer',
          'Backend Developer',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
