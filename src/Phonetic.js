import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="phonetic ">
        <ReactAudioPlayer
          src={props.phonetic.audio}
          controls
          className="player"
        />
        <div className="text">{props.phonetic.text}</div>
      </div>
    );
  } else {
    return <div className="text">{props.phonetic.text}</div>;
  }
}
