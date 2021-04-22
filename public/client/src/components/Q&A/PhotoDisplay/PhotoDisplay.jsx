/* eslint-disable react/prop-types */
import React from 'react';
import { Image } from 'react-bootstrap';

const photoStyle = {
  height: '100px',
  width: '100px',
};

const PhotoDisplay = ({ pictures }) => (
  <>
    {pictures.map((pic, index) => (
      <a target="_blank" rel="noreferrer" href={pic.url}>
        <Image src={pic.url} style={photoStyle} alt="Thumbnail" key={index} thumbnail />
      </a>
    ))}
  </>
);

export default PhotoDisplay;
