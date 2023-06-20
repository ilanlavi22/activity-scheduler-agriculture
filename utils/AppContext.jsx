'use client';
import { useContext, createContext, useState, useEffect } from 'react';
import getWeather from '@/lib/getWeather';

// Create a context object
export const ActivitiesContext = createContext('');
export const WeatherContext = createContext('');

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  return (
    <ActivitiesContext.Provider value={{ activities, setActivities }}>
      {children}
    </ActivitiesContext.Provider>
  );
};
