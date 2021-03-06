import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";

const ScheduleContext = createContext();

export const ScheduleProvider = ({ children }) => {
  const [schedule, setSchedule] = useState([]);
  const [getSchedule, setGetSchedule] = useState(false);

  useEffect(() => {
    api.get("/scheduling").then((response) => {
      setSchedule(response.data);
    });
  }, [getSchedule]);

  return (
    <ScheduleContext.Provider value={{ schedule, setGetSchedule, getSchedule }}>
      {children}
    </ScheduleContext.Provider>
  );
};

export const useSchedule = () => useContext(ScheduleContext);
