import React from 'react';
import Box02 from './Box02';

function SubBox(props) {
  return (
    <div>
      <Box02 subPos01={0} subPos02={0} BGCOLOR={'#fff'}/>
      <Box02 subPos01={150} subPos02={225} BGCOLOR={'#f00'}/>
      <Box02 subPos01={447} subPos02={150} BGCOLOR={'#00ffff'}/>
      <Box02 subPos01={375} subPos02={72} BGCOLOR={'#0000ff'}/>
      <Box02 subPos01={225} subPos02={297} BGCOLOR={'#fff'}/>
      <Box02 subPos01={75} subPos02={372} BGCOLOR={'#fff'}/>
    </div>
  );
}

export default SubBox;