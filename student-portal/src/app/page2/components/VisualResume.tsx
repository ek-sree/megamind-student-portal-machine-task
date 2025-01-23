"use client";

import { CirclePlay, Pause } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const VisualResume = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }, []);

  const handlePlayPause = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleReady = (event) => {
    playerRef.current = event.target;
  };

  const handleWatchFullVideo = () => {
    window.open(
      "https://www.youtube.com/embed/gyFaBZ_BQhc?si=T_-8__CN9WiK9539",
      "_blank"
    );
  };

  

  return (
    <section className="max-h-[30rem]">
      <h1 className="text-slate-800 font-semibold text-3xl flex justify-center mt-7">
        Video Resume
      </h1>
      <div className="flex justify-center">
        <div className="relative pt-[56.25%] w-[68rem] mt-7">
          <iframe
            id="player"
            className="absolute top-0 left-0 w-full h-[27rem] rounded-2xl"
            src="https://www.youtube.com/embed/gyFaBZ_BQhc?si=T_-8__CN9WiK9539"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => {
              const player = new window.YT.Player("player", {
                events: {
                  onReady: handleReady,
                },
              });
            }}
          ></iframe>
        </div>
      </div>
      <div className="relative flex justify-end mt-4 gap-4">
        <button
          onClick={handlePlayPause}
          className="absolute bottom-[30rem] right-[29rem] px-2 py-2 text-white rounded-full shadow-lg hover:bg-gray-900"
        >
          {isPlaying ? (
            <Pause className="text-slate-300" />
          ) : (
            <CirclePlay className="text-slate-300" />
          )}
        </button>
        <button
          onClick={handleWatchFullVideo}
          className="absolute bottom-[30rem] right-[17rem] px-6 py-2 border border-slate-400 text-white hover:text-slate-900 rounded-2xl shadow-lg hover:bg-slate-300"
        >
          Watch Full Video
        </button>
      </div>
    </section>
  );
};

export default VisualResume;
