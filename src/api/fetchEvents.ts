import axios from "axios";
import { TimeEvent } from "../types/TimeEvent";

function fetchEvents() {
  return axios.get<TimeEvent[]>(`${process.env.PUBLIC_URL}/events.json`);
}

export default fetchEvents;
