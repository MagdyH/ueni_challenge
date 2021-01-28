import React, { useMemo } from 'react';
import Timeline from './components/TimeLine';
import { DateTime } from 'luxon';
import ControlsBar from './components/ControlsBar/ControlsBar';
import styled from 'styled-components';
import Loader from './components/Loader';

const Root = styled.div`
  padding: 2rem;
`;

const StyledControlBar = styled(ControlsBar)`
  margin: 2rem 0;
`;

function App() {
  const timeLineStart = useMemo(() => DateTime.local().set({ minute: 0, hour: 0, second: 0, millisecond: 0 }), []);

  return (
    <Root className="App">
      <StyledControlBar timeLineStart={timeLineStart}/>
      <Timeline timeLineStart={timeLineStart}>
        {/*<Loader loading={loading} />*/}
      </Timeline>
    </Root>
  );
}

export default App;
