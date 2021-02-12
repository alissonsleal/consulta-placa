import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
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
  useEffect(() => {
    ReactGA.initialize(`${process.env.REACT_APP_GOOGLE_TRACKING}`);
    ReactGA.pageview('/');
  }, []);

  const [carPlate, setCarPlate] = useState('');
  const [carInfo, setCarInfo] = useState<CarProps>();

  const handleSubmit = async () => {
    try {
      const response = await api.get(`${carPlate}/json`);
      setCarInfo(response.data);

      ReactGA.event({
        category: 'Button',
        action: 'User searched a license plate',
      });
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
        <label htmlFor="car-plate">Insira a placa do carro</label>
        <input
          type="text"
          name="carPlate"
          onChange={(event) => setCarPlate(event.target.value)}
          value={carPlate}
          id="car-plate"
          placeholder="Insira a placa do carro"
          pattern="^[a-zA-Z]{3}[0-9][A-Za-z0-9][0-9]{2}$"
          data-valid-example="ABC1234"
          required
        />
        <button type="submit" onClick={handleSubmit}>
          <FiSearch size={14} />
          Procurar
        </button>
      </form>

      {carInfo && <CarInfo data={carInfo} />}
      {!carInfo && (
        <p>
          Consulte a placa de qualquer veículo no Brasil de forma rápida, fácil
          e sem propagandas. Funciona com placas antigas e também com as do
          Mercosul.
        </p>
      )}
    </Container>
  );
};

export default Home;
