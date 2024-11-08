import React from 'react';
import styled from 'styled-components';

interface ImageProps {
  src: string;
  alt: string; 
  width?: number; 
  height?: number; 
  className?: string; 
}

const StyledImage = styled.img`
  width: ${(props) => props.width && `${props.width}px`};
  height: ${(props) => props.height && `${props.height}px`};
`;

export const Image = ({ src, alt, width, height, className }: ImageProps) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

