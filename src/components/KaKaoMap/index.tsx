"use client";

import { ReactNode, useEffect } from "react";

interface KaKaoMapProps {
  children: ReactNode;
}

declare const window: {
  kakao: any;
} & Window;

const { lng, lat } = {
  lng: 127.0495556,
  lat: 37.514575,
};

const KaKaoMap = ({ children }: KaKaoMapProps) => {
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
        // TODO: 지도 이동과 관련한 상세 로직 구현
        // window.kakao.maps.event.addListener(res, "dragend", (data) =>
        //   console.log("1", res.getBounds())
        // );
        // window.kakao.maps.event.addListener(res, "zoom_changed", (data) =>
        //   console.log("2", res.getBounds())
        // );
      });
    };

    $mapScript.addEventListener("load", onLoadMap);
  }, []);

  return (
    <div id="map" className="grow relative w-[100%]">
      {children}
    </div>
  );
};

export default KaKaoMap;
