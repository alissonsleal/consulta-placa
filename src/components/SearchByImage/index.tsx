import React, { useState } from 'react';
import { VscLoading } from 'react-icons/vsc';
import { createWorker } from 'tesseract.js';

import { Container } from './styles';

const SearchByImage = ({ dataSource: source }: any) => {
  let searchDone = false;
  const [carPlateImage, setCarPlateImage] = useState('');

  const worker = createWorker({
    logger: (m) => console.log(m), // dev mode
  });

  async function getTextFromImage(img: string) {
    if (searchDone === false) {
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
      await worker.setParameters({
        tessedit_char_whitelist: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      });
      const {
        data: { text },
      } = await worker.recognize(img);

      await worker.terminate();
      setCarPlateImage(text);
      console.log(text);
      searchDone = true;
      return text;
    }
  }
  getTextFromImage(source);
  return (
    <Container>
      {source && !carPlateImage && <VscLoading size={32} />}
      {carPlateImage && <p>{carPlateImage}</p>}
    </Container>
  );
};

export default SearchByImage;
//ocr.space api key = ab2e0ca8f188957
