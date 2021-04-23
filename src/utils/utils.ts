const formatTime = (minutes: number, remainingSeconds: number): string => {
  return `${minutes < 10 ? 0 : ""}${minutes}:${
    remainingSeconds < 10 ? 0 : ""
  }${remainingSeconds}`;
};
export const displayTimeLeft = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = formatTime(minutes, remainingSeconds);

  return formattedTime;
};
