import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useIFrame from "../../../hooks/useIFrame";

const IFrameScore = ({ score, betType, setBetType }) => {
  const { eventId, eventTypeId } = useParams();
  const { iFrameUrl, refetchIFrameUrl } = useIFrame(eventTypeId, eventId);
  const [iframeVideo, setIframeVideo] = useState("");

  useEffect(() => {
    if (betType === "tracker") {
      setIframeVideo(score?.tracker);
    } else if (betType === "video") {
      setIframeVideo(iFrameUrl?.url);
    } else {
      setIframeVideo("");
    }
  }, [betType, score, iFrameUrl]);

  useEffect(() => {
    refetchIFrameUrl();
  }, [eventId, eventTypeId, refetchIFrameUrl]);

  useEffect(() => {
    if (betType === "video") {
      if (!score?.hasVideo) {
        setBetType("live");
      }
    }
  }, [eventId, eventTypeId, score, betType, setBetType]);

  return (
    <>
      {betType === "video" || betType === "tracker" ? (
        <div style={{ gridColumn: "span 1 / span 1" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "auto",
              overflow: "hidden",
              backgroundColor: "transparent",
            }}
          >
            <div
              draggable="false"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflowY: "auto",
                backgroundColor: "transparent",
                position: "relative",
                zIndex: 10,
                transition: "all 0.1s ease-in-out",
              }}
            >
              <div
                onClick={() => setBetType("live")}
                style={{
                  position: "absolute",
                  top: "0.25rem",
                  right: "0.25rem",
                  zIndex: 10,
                  transition: "all 0.3s ease-in-out",
                  transform: "scale(1)",
                  cursor: "pointer",
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = "scale(0.9)";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <svg
                  height="24"
                  width="24"
                  fill="var(--color-quaternary)"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="circle-xmark"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g className="fa-duotone-group">
                    <path
                      fill="currentColor"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                    ></path>
                    <path
                      fill="white"
                      d="M209 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47z"
                    ></path>
                  </g>
                </svg>
              </div>
              {score && score?.tracker !== null && betType === "tracker" && (
                <div
                  style={{
                    width: "100%",
                    overflow: "hidden",
                    height: "125px",
                  }}
                >
                  <iframe
                    id="videoComponent"
                    style={{
                      width: "100%",
                      height: "auto",
                      position: "relative",
                      overflow: "hidden",
                      backgroundColor: "transparent",
                    }}
                    src={iframeVideo}
                    width="100%"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              {score &&
                iFrameUrl?.url &&
                betType === "video" &&
                score?.hasVideo && (
                  <iframe
                    id="videoComponent"
                    style={{
                      width: "100%",
                      maxHeight: "309px",
                      position: "relative",
                      overflow: "hidden",
                      height: "55vw",
                      backgroundColor: "transparent",
                    }}
                    src={iframeVideo}
                    width="100%"
                    allowFullScreen
                  ></iframe>
                )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default IFrameScore;
