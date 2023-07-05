import React from 'react';
import Box01 from './Box01';

function BgBox(props) {
  return (
    <div>
      <Box01 mainPos01={0} mainPos02={0} BGCOLOR={"#ff00ff"}/>
      <Box01 mainPos01={300} mainPos02={0} BGCOLOR={"#000"}/>
      <Box01 mainPos01={0} mainPos02={300} BGCOLOR={"#000"}/>
      <Box01 mainPos01={300} mainPos02={300} BGCOLOR={"#ff0"}/>
      <Box01 mainPos01={150} mainPos02={150} BGCOLOR={"#00ff00"}/>
    </div>
  );
}

export default BgBox;