import React from 'react';

function Box01(props) {

  return (
    <div className='box01' style={{
      left: props.mainPos01,
      top: props.mainPos02,
      backgroundColor: props.BGCOLOR
    }}>
    </div>
  );
}

export default Box01;