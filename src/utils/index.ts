import { MINUTE_TO_PIXEL_RATIO } from "../constants";
import { DateTime } from "luxon";
import { TimeEvent } from "../types/TimeEvent";

export function calculateLeftValue(timeLineStart: DateTime, selectedStart: DateTime) {
    return selectedStart.diff(timeLineStart).as("minutes") * MINUTE_TO_PIXEL_RATIO
}

export function calculateWidthValue(selectedStart: DateTime, selectedEnd: DateTime) {
    return selectedEnd.diff(selectedStart).as("minutes") * MINUTE_TO_PIXEL_RATIO;
}

export function isIntervalFree(events: TimeEvent[], intervalStart: DateTime, intervalEnd: DateTime): boolean {
  // TODO: implement the algorithm. You can rely on events being sorted.
}
