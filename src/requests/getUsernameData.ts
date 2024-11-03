import { IUserData } from "../interfaces";
import profilePicture from "../images/Avatar.svg";
import bus from "../images/Bus.svg";
import grocery from "../images/Groceries.svg";
import publicT from "../images/Public_transport.svg";

export const dummyData: IUserData = {
  fullName: "Charles Robbie",
  username: "Andrei",
  address: "New York, USA",
  spentMonth: 682.543,
  currency: "$",
  newClients: 321,
  earnings: 350.405,
  activity: 540.57,
  totalSpentAmount: 3752.9,
  progress: "+2,45",
  profilePicture: profilePicture,
  projects: 28,
  following: 76,
  followers: 643,
  monthlySpent: [
    { day: "1", totalSpent: 50 },
    { day: "2", totalSpent: 70 },
    { day: "3", totalSpent: 30 },
    { day: "4", totalSpent: 90 },
    { day: "5", totalSpent: 20 },
    { day: "6", totalSpent: 60 },
    { day: "7", totalSpent: 80 },
    { day: "8", totalSpent: 40 },
    { day: "9", totalSpent: 10 },
    { day: "10", totalSpent: 55 },
    { day: "11", totalSpent: 65 },
    { day: "12", totalSpent: 85 },
    { day: "13", totalSpent: 45 },
    { day: "14", totalSpent: 15 },
    { day: "15", totalSpent: 75 },
    { day: "16", totalSpent: 25 },
    { day: "17", totalSpent: 95 },
    { day: "18", totalSpent: 35 },
    { day: "19", totalSpent: 50 },
    { day: "20", totalSpent: 70 },
    { day: "21", totalSpent: 30 },
    { day: "22", totalSpent: 90 },
    { day: "23", totalSpent: 20 },
    { day: "24", totalSpent: 60 },
    { day: "25", totalSpent: 80 },
    { day: "26", totalSpent: 40 },
    { day: "27", totalSpent: 10 },
    { day: "28", totalSpent: 55 },
    { day: "29", totalSpent: 65 },
    { day: "30", totalSpent: 85 },
  ],
  yearlySpent: [
    { mon: "Jan", totalSpent: 403 },
    { mon: "Feb", totalSpent: 302.4 },
    { mon: "Mar", totalSpent: 200 },
    { mon: "Apr", totalSpent: 280.2 },
    { mon: "May", totalSpent: 180 },
    { mon: "Jun", totalSpent: 232 },
    { mon: "Jul", totalSpent: 490.3 },
    { mon: "Aug", totalSpent: 100 },
    { mon: "Sep", totalSpent: 290 },
    { mon: "Oct", totalSpent: 482.5 },
    { mon: "Nov", totalSpent: 682.5 },
    { mon: "Dec", totalSpent: 110 },
  ],
  transactions: [
    { name: "Public Transport", date: 1600732800000, icon: bus },
    { name: "Grocery Store", date: 1600387200000, icon: grocery },
    { name: "Public Transport", date: 1600732800000, icon: publicT },
    { name: "Theater", date: 1599091200000, icon: grocery },
  ],
  todayCalendar: [
    { name: "Meet w/ Simmmple", from: 1730725200000, to: 1730728800000 },
    { name: "Fitness Training", from: 1730728800000, to: 1730732400000 },
    { name: "Reading Time", from: 1730732400000, to: 1730736000000 },
    { name: "Work Meeting", from: 1730736000000, to: 1730734200000 },
  ],
};

export const fetchUserData = async (): Promise<IUserData> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyData), 500);
  });
};
