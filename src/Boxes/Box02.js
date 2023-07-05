import React from 'react';

function Box02(props) {
  return (
    <div className='box02' style={{
      left: props.subPos01,
      top: props.subPos02,
      backgroundColor: props.BGCOLOR
    }}>
    </div>
  );
}

export default Box02;