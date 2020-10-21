import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  width: 948px;
  height: 480px;
  padding: 35px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* I've took from Adobe XD */
  border-radius: 20px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #cde0e2;
  border-radius: 20px;
  opacity: 1;
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) 18px/11px
      var(--unnamed-font-family-fira-sans);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-000000);
    text-align: left;
    font: normal normal normal 18px/11px Fira Sans;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    &:nth-child(2) {
      font: var(--unnamed-font-style-normal) normal
        var(--unnamed-font-weight-normal) 18px/11px
        var(--unnamed-font-family-fira-sans);
      letter-spacing: var(--unnamed-character-spacing-0);
      color: var(--unnamed-color-c2c2c2);
      text-align: right;
      font: normal normal normal 18px/11px Fira Sans;
      letter-spacing: 0px;
      color: #c2c2c2;
      opacity: 1;
    }
  }
`;

export const ButtonStyled = styled.button`
  width: 74px;
  height: 74px;
  border-radius: 50%;
  border-style: none;
  background: var(--unnamed-color-00aee0) 0% 0% no-repeat padding-box;
  background: #00aee0 0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const TurnStyled = styled.button`
  background-color: transparent;
  border-width: 0;
  color: #f24556;
  display: flex;
  align-items: center;
  img {
    width: 16px;
    height: 21px;
    margin-right: 9.57px;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextStyled = styled.div`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    38px/46px var(--unnamed-font-family-ibm-plex-serif);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-f24556);
  text-align: left;
  font: normal normal bold 38px/46px IBM Plex Serif;
  letter-spacing: 0px;
  color: #f24556;
  opacity: 1;
`;

export const SecondsStyled = styled.span`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) / 14px
    var(--unnamed-font-family-fira-sans);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-000000);
  text-align: left;
  font: normal normal normal 16px/14px Fira Sans;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.61;
`;

export const SuperContainer = styled.div`
  .flip-container {
    display: inline-block;
    width: 300px;
    height: 200px;
    perspective: 1000px;
  }

  .flipper {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  #switch {
    display: none;
  }

  #switch:checked ~ .flip-container .flipper {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .back {
    transform: rotateY(180deg);
  }
`;
