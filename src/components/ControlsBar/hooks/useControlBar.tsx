import { DateTime } from "luxon";
import { Moment } from "moment";

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

}

export default useControlsBar;
