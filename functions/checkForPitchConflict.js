export const checkForPitchConflict = (activities, newActivity) => {
  for (const activity of activities) {
    if (newActivity.id === activity.id) continue;
    if (
      newActivity.activityDate === activity.activityDate &&
      newActivity.activityTime === activity.activityTime &&
      newActivity.activityPitch === activity.activityPitch
    ) {
      return true;
    }
  }
  return false;
};
