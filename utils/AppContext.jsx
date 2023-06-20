'use client';
import { useContext, createContext, useState, useEffect } from 'react';

// Create a context object
export const ActivitiesContext = createContext('');
export const UserContext = createContext('');

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  return (
    <ActivitiesContext.Provider value={{ activities, setActivities }}>
      {children}
    </ActivitiesContext.Provider>
  );
};
