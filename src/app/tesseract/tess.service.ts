import { environment } from 'src/environments/environment';
import * as Tesseract from 'tesseract.js';

export const test = async (url: string): Promise<string> => {

  console.log(environment.TESSDATA_PREFIX);
  // console.log('Creating worker...')
  const worker = await Tesseract.createWorker({
  });
  // console.log('Done!')
  // console.log('Loading language...')
  await worker.loadLanguage('eng');
  // console.log('Done!')
  // console.log('Initializing language...')
  await worker.initialize('eng');
  // console.log('Done!')
  // await worker.setParameters({
  //   tessedit_pageseg_mode: Tesseract.PSM.SPARSE_TEXT,

  // })
  // console.log('Recognizing text...');
  const { data: { text } } = await worker.recognize(url);
  // console.log('Done!')
  console.log(text);
  await worker.terminate();
  return text;
};