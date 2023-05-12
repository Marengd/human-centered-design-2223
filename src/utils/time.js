const timeToMillis = (time) => {
    const [hours, minutes, seconds] = time.split(':');
    const [wholeSeconds, milliseconds] = seconds.split('.');
    const totalMilliseconds =
      parseInt(hours, 10) * 3600000 +
      parseInt(minutes, 10) * 60000 +
      parseInt(wholeSeconds, 10) * 1000 +
      (milliseconds ? parseInt(milliseconds, 10) : 0);
  
    return totalMilliseconds;
};
  
export { timeToMillis };
