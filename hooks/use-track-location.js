import { useState, useContext } from "react";
import { ACTION_TYPES, StoreContext } from "../pages/_app.js";

const useTrackLocation = () => {
  const [locationErrorMsg, setLocationErrorMsg] = useState("");
  const [isFinding, setIsFinding] = useState(false);
  // const [latlong, setLatlong] = useState("");

  const { dispatch } = useContext(StoreContext);

  const success = (position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    // setLatlong(`${lat},${long}`);
    dispatch({
      type: ACTION_TYPES.SET_LAT_LONG,
      payload: { latlong: `${lat},${long}` },
    });
    setLocationErrorMsg("");
    setIsFinding(false);
  };

  const error = () => {
    setLocationErrorMsg("Unable to retrieve your location");
    setIsFinding(false);
  };

  const handleTrackLocation = () => {
    setIsFinding(true);
    if (!navigator.geolocation) {
      setLocationErrorMsg("Geolocation is not supported by  your browser");
      setIsFinding(false);
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return {
    // latlong,
    handleTrackLocation,
    locationErrorMsg,
    isFinding,
  };
};

export default useTrackLocation;
