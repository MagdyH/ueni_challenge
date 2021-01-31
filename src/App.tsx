import React, { useMemo } from 'react';
import Timeline from './components/TimeLine';
import { DateTime } from 'luxon';
import ControlsBar from './components/ControlsBar/ControlsBar';
import styled from 'styled-components';
import Loader from './components/Loader';
import Event from './components/Event';
import { TimeEvent } from './types/TimeEvent';
import SelectedTime from './components/SelectedTime/SelectedTime';
import useEventsContextValue, { EventsContextData } from './hooks/useEventsContextValue';

const Root = styled.div`
  padding: 2rem;
`;

const StyledControlBar = styled(ControlsBar)`
  margin: 2rem 0;
`;

export const eventsContextDefaultValue: EventsContextData = {
  events: [],
  loading: true,
  selectedEnd: DateTime.local(),
  selectedStart: DateTime.local(),
  fetchEventsdata: () => { },
  setEvents: () => { },
  setSelectedEnd: () => { },
  setSelectedStart: () => { }
}

export const EventContext = React.createContext<EventsContextData>(eventsContextDefaultValue);

function App() {
  const timeLineStart = useMemo(() => DateTime.local().set({ minute: 0, hour: 0, second: 0, millisecond: 0 }), []);
  const { events, loading, selectedStart, selectedEnd, setEvents, fetchEventsdata, setSelectedEnd, setSelectedStart } = useEventsContextValue();

  return (
    <Root className="App">
      <EventContext.Provider value={{
        events,
        loading,
        selectedEnd,
        selectedStart,
        setEvents,
        fetchEventsdata,
        setSelectedEnd,
        setSelectedStart
      }}>

        <StyledControlBar timeLineStart={timeLineStart} />
        <Timeline timeLineStart={timeLineStart} >
          <SelectedTime timeLineStart={timeLineStart} />
          {events.length > 0 ? events.map((event: TimeEvent) => (
            <Event key={event.id + event.start} item={event} timeLineStart={timeLineStart} />
          ))
            : <Loader loading={loading} />
          }
        </Timeline>
      </EventContext.Provider>
    </Root>
  );
}

export default App;
