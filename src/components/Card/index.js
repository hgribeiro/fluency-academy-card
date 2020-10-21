/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import api from '../../service/api';
import {
  TurnStyled,
  ButtonStyled,
  Container,
  CardHeader,
  CardBody,
  TextStyled,
  SecondsStyled,
  SuperContainer,
} from './styles';

import PlayIcon from '../../assets/Shape.svg';
import TurnIcon from '../../assets/Card_flip-button.svg';

function Card() {
  const [audioText, setAudioText] = useState({
    text: '',
    audio: '',
  });
  const [currentCard, setcurrentCard] = useState();
  const [currentAudioDuration, setCurrentAudioDuration] = useState();
  const [play, setPlay] = useState('false');
  const [switchCard, setSwitchCard] = useState(false);

  useEffect(() => {
    async function loadCard() {
      const response = await api.get(`/webapi/v2/decks/10/cards`);

      const vetor = response.data.data[0].notes[0].field.split('"');
      const textView = vetor[0].split('<');
      setAudioText({
        text: textView[0],
        audio: vetor[5],
      });
    }
    loadCard();
  }, []);
  const toSecods = (timeOfTheAudio) => {
    const timeArray = timeOfTheAudio.toString().split('');
    setCurrentAudioDuration(`00:0${timeArray[0]}`);
  };
  return (
    <SuperContainer>
      <input type="checkbox" id="switch" checked={switchCard} />
      <div className="flip-container">
        <div className="flipper">
          <div className="front">
            <Container>
              <CardHeader>
                <TurnStyled type="button" onClick={() => setSwitchCard(true)}>
                  <img src={TurnIcon} alt="play player" /> Virar carta
                </TurnStyled>
                <span>
                  <span>A </span>
                  <span>\ </span>
                  <span> B</span>
                </span>
              </CardHeader>
              <CardBody>
                <TextStyled>{audioText.text}</TextStyled>
                <div>
                  <div>
                    <SecondsStyled>{currentAudioDuration}</SecondsStyled>
                    {/* <img src={} alt='audio' /> */}
                  </div>
                  {audioText.audio !== '' && (
                    <ReactPlayer
                      // controls="true"
                      playing={play}
                      url={audioText.audio}
                      onEnded={() => setPlay(false)}
                      onPause={() => setPlay(false)}
                      width="0"
                      height="0"
                      onDuration={(totalTime) => toSecods(totalTime)}
                    />
                  )}
                  {/* {audioText.audio !== '' && <source src={audioText.audio} />} */}{' '}
                  <ButtonStyled
                    type="button"
                    onClick={() =>
                      play === true ? setPlay(false) : setPlay(true)
                    }
                  >
                    {' '}
                    <img src={PlayIcon} alt="play player" />
                  </ButtonStyled>
                </div>
              </CardBody>
            </Container>
          </div>
          <div className="back">
            <Container>
              <CardHeader back>
                <TurnStyled type="button" onClick={() => setSwitchCard(false)}>
                  <img src={TurnIcon} alt="play player" /> Virar carta
                </TurnStyled>
                <span>
                  <span>A </span>
                  <span>\ </span>
                  <span> B</span>
                </span>
              </CardHeader>
              <CardBody>
                <TextStyled>{audioText.text}</TextStyled>
                <div>
                  <div>
                    <SecondsStyled>{currentAudioDuration}</SecondsStyled>
                    {/* <img src={} alt='audio' /> */}
                  </div>
                  {audioText.audio !== '' && (
                    <ReactPlayer
                      // controls="true"
                      playing={play}
                      url={audioText.audio}
                      onEnded={() => setPlay(false)}
                      onPause={() => setPlay(false)}
                      width="0"
                      height="0"
                      onDuration={(totalTime) => toSecods(totalTime)}
                    />
                  )}
                  {/* {audioText.audio !== '' && <source src={audioText.audio} />} */}{' '}
                  <ButtonStyled
                    type="button"
                    onClick={() =>
                      play === true ? setPlay(false) : setPlay(true)
                    }
                  >
                    {' '}
                    <img src={PlayIcon} alt="play player" />
                  </ButtonStyled>
                </div>
              </CardBody>
            </Container>
          </div>
        </div>
      </div>
    </SuperContainer>
  );
}

export default Card;
