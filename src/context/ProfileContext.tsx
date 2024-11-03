import React, { createContext, useState, useEffect, ReactNode } from "react";
import { dummyData, fetchUserData } from "../requests";
import { DataContextType, IUserData } from "../interfaces";

const defaultProfileData: DataContextType = {
  data: dummyData,
};
const ProfileContext = createContext<DataContextType>(defaultProfileData);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  //I've used dummyData as my default because the data is mocked anyway and it didn't make sense to create another object with default data
  
  const [data, setData] = useState<IUserData>(dummyData);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const result = await fetchUserData();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };
    getUserData();
  }, []);

  return (
    <ProfileContext.Provider value={{ data }}>
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext };
