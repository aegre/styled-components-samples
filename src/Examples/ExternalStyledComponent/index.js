import React from 'react';
import { css } from 'styled-components';
import ParentComponent from './Components/ParentComponent';

const parentOverwrite = css`
  color: blue;
`

const childOverwrite = css`
  color: purple;
`

function ExternalStyledComponent() {
  return (
    <>
      <h2>3. External Styled Component</h2>
      <p>In this approach you create the styled-component outside the main component, passing them via props.</p>

      <h3>Original components</h3>
      <ParentComponent></ParentComponent>

      <h3>Overwritten components</h3>
      <ParentComponent parentOverwrite={parentOverwrite} childOverwrite={childOverwrite}></ParentComponent>
    </>
  );
};

export default ExternalStyledComponent;
