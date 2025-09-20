import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Tambahkan ini
import judulgame2 from "../components/img/judulgame.png";
import backgroundMusic from "../components/music/home.ogg";
import ButtonMute from "../components/ButtonMusic";
import ButtonInfo from "../components/ButtonInfo";
import ButtonFull from "../components/ButtonFull";
import Preloader from "../components/preloader";
import "../App.css";

const Home = () => {
  const [showRotateMessage, setShowRotateMessage] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); // ✅ untuk redirect

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleMuteToggle = () => {
    console.log("Mute button clicked");
  };

  const checkOrientation = () => {
    if (window.matchMedia("(orientation: portrait)").matches) {
      setShowRotateMessage(true);
    } else {
      setShowRotateMessage(false);
    }
  };

  const handleFullscreenChange = () => {
    setIsFullscreen(!!document.fullscreenElement);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Failed to enable fullscreen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.error(`Failed to exit fullscreen mode: ${err.message}`);
      });
    }
  };

  useEffect(() => {
    document.title = "Adu Jagoan Inyong - Home";
    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    setIsFullscreen(!!document.fullscreenElement);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {showRotateMessage && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 text-center text-2xl text-white">
              Please rotate your device
            </div>
          )}
          <div className="bg-game relative flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat">
            <audio id="background-audio" src={backgroundMusic} autoPlay loop />
            <div className="mx-auto flex h-full w-full max-w-7xl flex-row items-center justify-center gap-0 p-4 portrait:hidden lg:gap-8 lg:p-8">
              <div className="flex flex-1 items-center justify-center">
                <img
                  src={judulgame2}
                  alt="Adu Jagoan Inyong"
                  className="judul-game-animation z-10 lg:w-[1200px] sm:max-w-sm md:max-w-md lg:max-w-2xl lg:mt-[-350px] md:mt-[-250px] sm:mt-[-150px]" // ✅ digeser ke atas
                />
              </div>
              <div className="flex-none">
                <div className="papan-container flex sm:h-[580px] sm:w-[260px] md:h-[640px] md:w-[290px] lg:h-[800px] lg:w-[400px] flex-col items-center justify-between bg-contain bg-top bg-no-repeat lg:pt-36 md:px-10 md:pb-32 md:pt-20">
                  <div className="flex w-full flex-col items-center lg:mt-44 lg:gap-3 lg:px-8 md:px-2 md:gap-4 md:mt-32 sm:gap-2 sm:px-12 sm:mt-44">
                    <input
                      type="text"
                      placeholder="Player 1"
                      className="w-full rounded-full border-4 border-[#7c512a] bg-[#f8e5c8] px-5 py-3 text-center lg:text-xl md:text-sm sm:text-sm text-lg font-semibold text-[#7C512A] shadow-inner transition duration-200 placeholder:text-[#a3794d] focus:border-[#c78855] focus:bg-[#fff9f0] focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Player 2"
                      className="w-full rounded-full border-4 border-[#7c512a] bg-[#f8e5c8] px-5 py-3 text-center lg:text-xl md:text-sm sm:text-sm text-lg font-semibold text-[#7C512A] shadow-inner transition duration-200 placeholder:text-[#a3794d] focus:border-[#c78855] focus:bg-[#fff9f0] focus:outline-none"
                    />
                    <button
                      onClick={() => navigate("/game")} // ✅ redirect ke /game
                      className="sm:mt-1 sm:w-2/3 md:w-3/4 lg:w-4/5 
  cursor-[url('/src/components/img/tunjuk.png'),auto] 
  border-[4px] border-[#7c512a] 
  bg-gradient-to-b from-[#9ae647] to-[#63b821] 
  text-white lg:text-lg md:text-sm font-bold uppercase tracking-wider 
  md:px-8 sm:px-6 lg:px-10 py-2.5 rounded-[25px] 
  shadow-[inset_0_0_0_2px_white,0_6px_0_0_#5a4b3d,0_8px_12px_rgba(0,0,0,0.4)] 
  transition-all duration-100 ease-in 
  [text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] 
  hover:translate-y-[-2px] hover:shadow-[inset_0_0_0_2px_white,0_4px_0_0_#5a4b3d,0_6px_10px_rgba(0,0,0,0.5)] 
  active:translate-y-[2px] active:shadow-[inset_0_0_0_2px_white,0_2px_0_0_#5a4b3d]"
                    >
                      Mulai
                    </button>
                  </div>
                  <div className="flex items-center justify-center lg:mb-1 lg:gap-5 md:gap-1 md:mb-4 sm:gap-0 sm:mb-32">
                    <ButtonInfo />
                    <ButtonMute onClick={handleMuteToggle} />
                    <ButtonFull isFullscreen={isFullscreen} onClick={toggleFullscreen} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
