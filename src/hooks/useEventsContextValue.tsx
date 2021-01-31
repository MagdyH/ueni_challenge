import { useCallback, useState } from 'react';
import { DateTime } from 'luxon';
import fetchEvents from '../api/fetchEvents';
import {TimeEvent} from '../types/TimeEvent';

export interface EventsContextData {
    events: TimeEvent[],
    loading: boolean,    
    selectedEnd:DateTime,
    selectedStart:DateTime,
    fetchEventsdata: () => void,
    setEvents:(events:TimeEvent[]) => void
    setSelectedEnd: (selectedEnd:DateTime) => void,
    setSelectedStart: (selectedEnd:DateTime) => void,
  }

function useEventsContextValue(): EventsContextData {
    const [events, setEvents] = useState<TimeEvent[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedStart, setSelectedStart] = useState<DateTime>(DateTime.local().plus({ minute: 0 }));
    const [selectedEnd, setSelectedEnd] = useState<DateTime>(DateTime.local().plus({ minutes: 60 }));
  
    const fetchEventsdata = useCallback(() => {
      fetchEvents()
        .then((data) => {
          setEvents(data.data);
        })
        .finally(() => {
            setLoading(false);
          })
    }, [setEvents]); 
  
    return {
      events,
      loading,
      selectedEnd,
      selectedStart,
      fetchEventsdata,
      setEvents,
      setSelectedEnd,
      setSelectedStart
    }
  }

  export default useEventsContextValue;