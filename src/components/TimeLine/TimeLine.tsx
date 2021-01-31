import React, { useCallback, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { calculateWidthValue } from '../../utils/index';
import { last } from 'lodash';
import { DateTime } from 'luxon';
import calculateNewInterval from './utils';
import {EventContext} from '../../App';

interface RootProps {
  width: number;
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: auto;
`;

const Content = styled.div<RootProps>`
  position: relative;
  height: 100px;
  background: #f0f0f0;
  width: ${({width}) => width}px;
`;

interface TimeLineProps {
  timeLineStart: DateTime;
}

const TimeLine: React.FC<TimeLineProps> = ({ children, timeLineStart }) => {
  const { events, selectedStart, selectedEnd, setSelectedStart, setSelectedEnd, fetchEventsdata } = useContext(EventContext);

  useEffect(()=>{
    fetchEventsdata();
  },[fetchEventsdata])

  const contentRef = useRef<HTMLDivElement| null>(null);
  const width = calculateWidthValue(timeLineStart, DateTime.fromISO(last(events)?.end ?? ""));


  const onClick = useCallback((e: React.MouseEvent) => {
    const { start, end } = calculateNewInterval(timeLineStart, selectedStart, selectedEnd, contentRef.current!, e.clientX);

    // TODO: set new states
    setSelectedEnd(end);
    setSelectedStart(start);
  },[timeLineStart, selectedStart, selectedEnd, setSelectedEnd, setSelectedStart])

  return (
    <Root>
      <Content ref={contentRef} width={width} onClick={onClick}>{children}</Content>
    </Root>
  )
}

export default TimeLine;
