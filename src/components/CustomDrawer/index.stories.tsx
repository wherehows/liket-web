import { GENRES } from "@/utils/const";
import "react-spring-bottom-sheet/dist/style.css";
import CustomDrawer from "../CustomDrawer";
import {
  DateCalendar,
  LocalizationProvider,
  MultiSectionDigitalClock,
  YearCalendar,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Button from "../Button";
import { useRef } from "react";

export const Index = {
  render: () => {
    return (
      <CustomDrawer open>
        <div className="center text-h2">지역</div>
        <ul className="mb-[48px]">
          {GENRES.map((GENRE) => {
            return (
              <li key={GENRE} className="bottom-sheet-list">
                <button className="bottom-sheet-button">{GENRE}</button>
              </li>
            );
          })}
        </ul>
      </CustomDrawer>
    );
  },
};

export const YearCalendarIndex = {
  render: function Render() {
    const selectedYearRef = useRef<number>(new Date().getFullYear() - 1);

    return (
      <CustomDrawer open>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <YearCalendar
            onChange={(value) =>
              (selectedYearRef.current = dayjs(value).year())
            }
            minDate={dayjs("1924")}
            maxDate={dayjs("2023")}
          />
        </LocalizationProvider>
        <div className="flex h-[98px] px-[24px]">
          <Button height={48} fullWidth onClick={() => {}}>
            확인
          </Button>
        </div>
      </CustomDrawer>
    );
  },
};

export const CalendarIndex = {
  render: function Render() {
    return (
      <CustomDrawer open>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            onChange={(value) => {
              console.log(dayjs(value));
            }}
          />
        </LocalizationProvider>
        <div className="flex h-[98px] px-[24px]">
          <Button height={48} fullWidth onClick={() => {}}>
            확인
          </Button>
        </div>
      </CustomDrawer>
    );
  },
};

export const TimeIndex = {
  render: () => {
    return (
      <CustomDrawer open>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MultiSectionDigitalClock />
        </LocalizationProvider>
        <div className="flex h-[98px] px-[24px]">
          <Button height={48} fullWidth onClick={() => {}}>
            확인
          </Button>
        </div>
      </CustomDrawer>
    );
  },
};

const meta = {
  title: "components/Drawer",
};

export default meta;
