import { ICalendar } from "./ICalendar";
import { IMonthlyChart, IYearlyChart } from "./ICharts";
import { ITransactions } from "./ITransactions";

export interface IUserData {
  fullName?: string;
  username?: string;
  address?: string;
  spentMonth?: number;
  currency?: string;
  newClients?: number;
  earnings?: number;
  activity?: number;
  totalSpentAmount?: number;
  projects?: number;
  following?: number;
  followers?: number;
  progress?: string;
  monthlySpent?: Array<IMonthlyChart>;
  yearlySpent?:Array<IYearlyChart>;
  profilePicture?: string;
  transactions?: Array<ITransactions>;
  todayCalendar?: Array<ICalendar>;
  toggleSidebar?: () => void;
}

export interface DataContextType {
  data: IUserData;
}
