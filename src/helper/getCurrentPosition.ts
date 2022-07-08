export function getCurrentPosition(): Promise<PositionType> {
  return new Promise((res) => {
    let lat = 35.754;
    let long = 51.328;
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        lat = latitude;
        long = longitude;
        res({
          lat,
          long,
        });
      });
    } else {
      res({
        lat,
        long,
      });
    }
  });
}
