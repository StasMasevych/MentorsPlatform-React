import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { getLiveClass } from "../context/PlatformActions";

import { liveClassesArray } from "../data/data-courses/data-liveClasses";
import { PlatformContext } from "../context/PlatformContext";

export default function LiveClass() {
  const { singleLiveClass, dispatch } = useContext(PlatformContext);
  const params = useParams();

  useEffect(() => {
    const LiveClassObject = getLiveClass(params.name, liveClassesArray);

    dispatch({ type: "GET_LIVE-CLASS", payload: LiveClassObject });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div>
        <img src={singleLiveClass.image} alt="live-class"></img>
      </div>
    </div>
  );
}
