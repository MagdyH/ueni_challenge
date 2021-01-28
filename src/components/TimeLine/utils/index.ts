import { DateTime } from "luxon";
import { MINUTE_TO_PIXEL_RATIO } from "../../../constants";

interface Response {
    start: DateTime;
    end: DateTime;
}

export function calculateNewInterval(
    timeLineStart: DateTime,
    originalStart: DateTime,
    originalEnd: DateTime,
    timeLineElement: HTMLDivElement,
    clickPageXCoordinate: number
): Response {
    const originalDuration = originalEnd.diff(originalStart).as("minutes");
    const timeLineScreenOffset = timeLineElement.getBoundingClientRect().left;
    const clickTimeLineCoordinate = clickPageXCoordinate - timeLineScreenOffset;
    const start = timeLineStart.plus({ minutes: clickTimeLineCoordinate / MINUTE_TO_PIXEL_RATIO });

    return {
        start,
        end: start.plus({ minutes: originalDuration })
    }
}

export default calculateNewInterval;
