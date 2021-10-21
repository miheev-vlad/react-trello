import React from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: #fafafa;
`

const App: React.FC = () => {
  return (
    <AppWrapper>
      Trello App
    </AppWrapper>
  );
}

export default App;
