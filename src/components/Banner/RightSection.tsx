import styled from "styled-components";

interface customrightstyles {
  beforeLeft?: string;
  beforeRotate?: string;
  beforeRight?: string;
  scaleX?: string;
  scaleY?: string
}

interface RightSectionProps {
  customrightstyles: customrightstyles;
}

const RightSection = styled.div<RightSectionProps>`
  position: relative;
  flex-basis: 60%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  &::before {    
    content: "";
    position: absolute;
    top: 0;
    right: ${({ customrightstyles }) => customrightstyles.beforeRight || "0"};
    bottom: 0;
    left: ${({ customrightstyles }) => customrightstyles.beforeLeft || "10%"};
    background-image: url("/images/rectangles/rect_9.svg");
    background-size: cover;
    background-position: center;
    transform: ${
      ({ customrightstyles }) => [
        customrightstyles.beforeRotate ? `rotate(${customrightstyles.beforeRotate})` : '',
        customrightstyles.scaleX ? `scaleX(${customrightstyles.scaleX})` : '',
        customrightstyles.scaleY ? `scaleY(${customrightstyles.scaleY})` : '',        
      ].filter(Boolean).join(' ')
    };
    border-radius: 20px;
  }
`;


export type { customrightstyles };
export { RightSection };
