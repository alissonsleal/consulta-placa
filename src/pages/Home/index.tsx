import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import api from '../../services/api';
import CarInfo from '../../components/CarInfo';

import { Container } from './styles';

interface CarProps {
  ano: string;
  chassi: string;
  cor: string;
  marca: string;
  modelo: string;
  municipio: string;
  uf: string;
  placa: string;
}

const Home: React.FC = () => {
  const [carPlate, setCarPlate] = useState('');
  const [carInfo, setCarInfo] = useState<CarProps>();

  const handleSubmit = async () => {
    try {
      const response = await api.get(`${carPlate}/json`);
      console.log(response.data);
      setCarInfo(response.data);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <Container>
      <h1>Consulta-Placa</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          name="carPlate"
          onChange={(event) => setCarPlate(event.target.value)}
          value={carPlate}
          placeholder="Insira a placa do carro"
          pattern="^[a-zA-Z]{3}[0-9][A-Za-z0-9][0-9]{2}$"
          data-valid-example="ABC1234"
          required
        />
        <button type="submit" onClick={handleSubmit}>
          <FiSearch size={14} />
          Search
        </button>
      </form>

      {carInfo && <CarInfo data={carInfo} />}
    </Container>
  );
};

export default Home;
