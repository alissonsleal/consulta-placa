import React, { useState } from 'react';
import { VscLoading } from 'react-icons/vsc';
import { createWorker } from 'tesseract.js';

import { Container } from './styles';

const SearchByImage = ({ dataSource: source }: any) => {
  const [carPlateImage, setCarPlateImage] = useState('');
  const [oldSource, setOldSource] = useState('');
  const [functionRan, setFunctionRan] = useState(false);

  const worker = createWorker({
    logger: (m) => console.log(m), // dev mode
  });

  async function getTextFromImage(img: string) {
    setFunctionRan(true);
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
    setOldSource(source);
    console.log(text);
    return text;
  }

  !functionRan && getTextFromImage(source);
  return (
    <Container>
      {source !== oldSource && <VscLoading size={32} />}
      {source === oldSource && carPlateImage && <p>{carPlateImage}</p>}
    </Container>
  );
};

export default SearchByImage;
//ocr.space api key = ab2e0ca8f188957
