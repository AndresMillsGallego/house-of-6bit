import React, { SetStateAction, useState } from "react";
import { useEffect, Dispatch } from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import EasterEggAudio from "/EasterEggAudio.mp3";
import MeTalking1 from "../../assets/me_talking1.png";
import MeNormal2 from "../../assets/me_normal2.png";
import MeHoldingSomething1 from "../../assets/MeHoldingSomething4.png";
import MeHoldingSomething2 from "../../assets/MeHoldingSomethingTalking3.png";

import "./assets/EasterEgg.css";

type EasterEggPropTypes = {
  isFound: boolean;
  setIsFound: Dispatch<SetStateAction<boolean>>;
  easterEggAudio: HTMLAudioElement;
};

const EasterEgg = (props: EasterEggPropTypes) => {
  const { isFound, setIsFound, easterEggAudio } = props;

  const [modalImage, setModalImage] = useState(MeHoldingSomething1);

  const modalImages = [
    MeHoldingSomething2,
    MeNormal2,
    MeTalking1,
    MeNormal2,
    MeTalking1,
    MeHoldingSomething1,
  ];

  const cycleImages = () => {
    for (let i = 1; i < modalImages.length; i++) {
      setTimeout(() => {
        const index = i === 1 ? i - 1 : i;
        setModalImage(modalImages[index]);
      }, i * 7500);
    }
  };

  const handleClose = () => {
    easterEggAudio.pause();
    setIsFound(false);
    setModalImage(MeHoldingSomething1);
  };

  useEffect(() => {
    if (isFound) {
      easterEggAudio.play();
      cycleImages();
      setTimeout(() => {
        setIsFound(false);
      }, 60000);
    }
  }, [isFound]);

  return (
    <div>
      <Modal show={isFound} onHide={handleClose}>
        <ModalHeader closeButton>...You Found ME 🥳</ModalHeader>
        <ModalBody>
          <div id="modal-body-div">
            <img src={modalImage} alt="Me Talking" />
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EasterEgg;
