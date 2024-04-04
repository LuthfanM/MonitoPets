import React from "react";
import styled from "styled-components";

interface customleftstyles {
  top?: string;
  beforeLeft?: string;
  beforeRotate?: string;
  beforeRight?: string;
  bgImage?: string;
  width?: string;
  scaleX?: string;
  scaleY?: string;
  translateX?: string;
}

interface LeftSectionProps {
  customleftstyles: customleftstyles;
}

const LeftSection = styled.div<LeftSectionProps>`
  position: relative;
  opacity: 1;
  display: flex;
  flex-basis: 40%;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    top: ${({ customleftstyles }) => customleftstyles.top || "20%"};
    width: ${({ customleftstyles }) => customleftstyles.width || "200%"};
    right: ${({ customleftstyles }) => customleftstyles.beforeRight || "0"};
    bottom: 0;
    left: ${({ customleftstyles }) => customleftstyles.beforeLeft || "0"};
    background-image: ${({ customleftstyles }) =>
      `url(${
        customleftstyles.bgImage
          ? "/images/rectangles/" + customleftstyles.bgImage + ".png"
          : "/images/rectangles/rect_1.png"
      })`};
    background-size: cover;
    transform: ${({ customleftstyles }) =>
      [
        customleftstyles.beforeRotate
          ? `rotate(${customleftstyles.beforeRotate})`
          : "",
        customleftstyles.translateX
          ? `translateX(${customleftstyles.translateX})`
          : "",
          customleftstyles.scaleX ? `scaleX(${customleftstyles.scaleX})` : "",
          customleftstyles.scaleY ? `scaleY(${customleftstyles.scaleY})` : "",
      ]
        .filter(Boolean)
        .join(" ")};
    z-index: 2;
    border-radius: 20px;
  }

  img {
    max-width: 100%;
  }
`;

const LeftSections = ({
  customleftstyles,
  children,
}: {
  customleftstyles: customleftstyles;
  children: React.JSX.Element;
}) => {
  return (
    <LeftSection customleftstyles={customleftstyles || {}}>
      {children}
    </LeftSection>
  );
};

export type { customleftstyles };
export { LeftSections };
