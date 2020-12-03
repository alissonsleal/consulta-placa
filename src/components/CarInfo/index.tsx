import React from 'react';

import { Container } from './styles';

const CarInfo = ({ data }: any) => {
  console.log(data);
  return (
    <Container>
      <p>Marca/Modelo: {data.marca}</p>
      <p>Ano: {data.ano}</p>
      <p>Cor: {data.cor}</p>
      <p>Chassi: {data.chassi}</p>
      <p>
        Local: {data.municipio} - {data.uf}
      </p>
    </Container>
  );
};

export default CarInfo;
