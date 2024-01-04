import React, { useState } from "react";
import Constants from "../assets/constants/Constants";
import { useCatSpriteContext } from "../context/CatSpriteContext";

const useCatSprite = () => {
  const { position, setPosition, rotation, setRotation, operations } =
    useCatSpriteContext();

  const showAlert = (message) => {
    window.confirm(message);
  };

  const runLookEvents = (events) => {
    events.forEach((look) => {
      switch (look) {
        case Constants.LOOKS.SAY_HELLO:
          showAlert("Hello!");
          break;
        case Constants.LOOKS.SAY_HELLO_FOR_TWO_SECONDS:
          showAlert("Hello!");
          setTimeout(() => {
            alert("Time's up!");
          }, 2000);
          break;
        case Constants.LOOKS.THINK_HMM:
          showAlert("Hmm...");
          break;
        case Constants.LOOKS.THINK_HMM_FOR_TWO_SECONDS:
          showAlert("Hmm...");
          setTimeout(() => {
            alert("Time's up!");
          }, 2000);
          break;
        default:
          break;
      }
    });
  };

  const onSayHelloClicked = () => {
    const events = operations[Constants.LOOKS.SAY_HELLO_CLICK];
    runLookEvents(events);
    console.log(events);
  };

  const onThinkHmmClicked = () => {
    const events = operations[Constants.LOOKS.THINK_HMM_CLICK];
    runLookEvents(events);
    console.log(events);
  };

  const move10Steps = () => {
    setPosition((prevPosition) => ({
      x: prevPosition.x + 10,
      y: prevPosition.y,
    }));
  };

  const handleRotateClockwise = () => {
    setRotation((prev) => {
      return prev + 15;
    });
  };

  const handleRotateAntiClockwise = () => {
    setRotation((prev) => {
      return prev - 15;
    });
  };

  const runEvents = (operations) => {
    operations.forEach((op) => {
      if (op === Constants.MOTION.MOVE_10_STEPS) {
        move10Steps();
      } else if (op === Constants.MOTION.ANTICLOCk_15_DEG) {
        handleRotateAntiClockwise();
      } else if (op === Constants.MOTION.CLOCK_15_DEG) {
        handleRotateClockwise();
      }
    });
  };

  const onFlagClicked = () => {
    const events = operations[Constants.EVENTS.FLAG_CLICK];
    runEvents(events);
    console.log(events);
  };

  const onSpriteClicked = () => {
    const events = operations[Constants.EVENTS.SPRITE_CLICK];
    runEvents(events);
    console.log(events);
  };

  return {
    position,
    move10Steps,
    handleRotateClockwise,
    handleRotateAntiClockwise,
    onFlagClicked,
    onSpriteClicked,
    onSayHelloClicked,
    onThinkHmmClicked,
  };
};

export default useCatSprite;
