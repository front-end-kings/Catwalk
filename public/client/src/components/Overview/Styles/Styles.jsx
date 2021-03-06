import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Styles = ( {product, newStyle} ) => {
  const { styles, currentStyle } = product;
  const { name, photos } = currentStyle;
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);

  const sortImages = () => {
    const sortedImages = styles.map(style => {
      return style.photos[0].thumbnail_url;
    })
    setImages(sortedImages);
  }
  useEffect(() => {
    sortImages();
  }, [styles])

  useEffect(() => {
    setCurrent(0);
  }, [styles])

  return (
    <Container className="styles-section">
      <Row>
        <p><strong>Style > </strong>{name}</p>
      </Row>
      <Row className="style-images">
        {images.length && images.map((image, index) => (
          <Col xs={3} key={index} className="style-images-col">
            <Image alt="Style" src={image || 'https://i.stack.imgur.com/l60Hf.png'} onClick={() => {
              newStyle(index);
              setCurrent(index);
            }}  style={{ transform: index === current && 'scale(1.2)' }} className="style-img" roundedCircle fluid/>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Styles;