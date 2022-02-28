/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, FormGroup, Input } from 'reactstrap';

const Images = () => {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const { files } = e.target;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'dev_setups');
    setLoading(true);
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/donappppp/image/upload',
      {
        method: 'POST',
        body: data,
      },
    );
    const file = await res.json();
    console.log(res);
    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <Container>
      <h1>Subiendo imagenes</h1>
      <FormGroup>
        <Input type="file" name="file" onChange={uploadImage} />
      </FormGroup>
    </Container>
  );
};

export default Images;
