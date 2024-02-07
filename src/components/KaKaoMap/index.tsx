"use client";

import { useEffect } from "react";

declare const window: {
  kakao: any;
} & Window;

const { lng, lat } = {
  lng: 127.0495556,
  lat: 37.514575,
};

const KaKaoMap = () => {
  useEffect(() => {
    const $mapScript = document.createElement("script");
    $mapScript.async = false;
    $mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_MAP_API_KEY}&autoload=false`;
    document.head.appendChild($mapScript);

    const onLoadMap = () => {
      window.kakao.maps.load(() => {
        var container = document.getElementById("map");
        var options = {
          center: new window.kakao.maps.LatLng(lat, lng),
          level: 3,
        };

        new window.kakao.maps.Map(container, options);
      });
    };

    $mapScript.addEventListener("load", onLoadMap);
  }, []);

  return <div id="map" className="grow" style={{ width: "100%" }}></div>;
};

export default KaKaoMap;
