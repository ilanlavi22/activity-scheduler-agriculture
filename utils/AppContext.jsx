'use client';
import { createContext, useState } from 'react';
import { getTodayDate } from '@/utils/dates';

export const ActivitiesContext = createContext('');

export const ActivitiesProvider = ({ children }) => {
  const [activity, setActivity] = useState({
    activityDate: getTodayDate(),
    activityTime: '',
    activityType: '',
    activityPitch: '',
    activityUser: '',
  });

  const [activities, setActivities] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const removeItem = (id) => {
    const filterActivities = activities.filter((item) => item.id !== id);
    setActivities(filterActivities);
    return filterActivities;
  };

  const editItem = (id) => {
    setIsEditing(true);
    setEditId(id);
    const findActivity = activities.find((item) => item.id === id);
    setActivity({
      activityDate: findActivity.activityDate,
      activityTime: findActivity.activityTime,
      activityTypeId: findActivity.activityTypeId,
      activityPitch: findActivity.activityPitch,
      activityUser: findActivity.activityUser,
    });
    return findActivity;
  };

  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        setActivities,
        removeItem,
        isEditing,
        setIsEditing,
        editItem,
        editId,
        setEditId,
        activity,
        setActivity,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
