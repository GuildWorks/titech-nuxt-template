import moment from "moment";

export const convertDateToString = value =>
  moment(String(value)).format("YYYY/MM/DD HH:mm");
