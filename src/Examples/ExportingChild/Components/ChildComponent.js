import React from 'react';
import styled from 'styled-components';

const StyledChildComponent = styled.div`
  color: red;
`

function ChildComponent() {
  return (
    <StyledChildComponent>
      I'm the child and this text is red originally.
    </StyledChildComponent>
  );
}

export { StyledChildComponent }
export default ChildComponent;
