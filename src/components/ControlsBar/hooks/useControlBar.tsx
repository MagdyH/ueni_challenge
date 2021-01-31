import { DateTime } from "luxon";
import { Moment } from "moment";
import { useContext, useEffect, useState } from "react";
import {EventContext} from '../../../App';
import { TimeEvent } from "../../../types/TimeEvent";

interface Response {
  start: DateTime,
  end: DateTime,
  nameFilterValue: null | string;
  nameFilterOptions: Array<string>;
  onStartChange: (value: Moment | string) => void;
  onEndChange: (value: Moment | string) => void;
  onFilterChange: (value: string | null) => void;
}

function useControlsBar(): Response {
  const { events, selectedEnd, selectedStart, setSelectedEnd, setSelectedStart, setEvents, fetchEventsdata } = useContext(EventContext);
  const start = selectedStart;
  const end = selectedEnd;
  const [nameFilterOptions, SetNameFilterOptions] = useState<string[]>([]);
  const [nameFilterValue, SetNameFilterValue] = useState<string | null>('');
  

  useEffect(()=>{
    let optionEvents = events.filter((option:TimeEvent,index:number,arr:TimeEvent[])=> 
        arr.findIndex(item => item.name === option.name) === index);
    let optionNames = optionEvents.map((option) => (option.name));

    SetNameFilterOptions(optionNames);
  },[events]);

  const onStartChange = (value: Moment | string) => {
    var startDate = new Date(value.toString());
    let start = DateTime.fromJSDate(startDate);
    setSelectedStart(start);  
  }

  const onEndChange = (value: Moment | string) =>{
    var endDate = new Date(value.toString());
    let end = DateTime.fromJSDate(endDate);
    setSelectedEnd(end); 
  }

  const onFilterChange = (value: string | null) =>{  
    var filteredEvents = events.filter((event:TimeEvent) => event.name === value);
    if(filteredEvents.length > 0){
      SetNameFilterValue(filteredEvents[0].name);
      setEvents(filteredEvents);
    } else {
      SetNameFilterValue('');
      fetchEventsdata();
    }
  }

  return {
    start,
    end,
    nameFilterValue,
    nameFilterOptions,
    onStartChange,
    onEndChange,
    onFilterChange
  }
}

export default useControlsBar;
