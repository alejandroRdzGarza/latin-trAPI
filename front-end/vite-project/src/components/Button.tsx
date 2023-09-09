import Button from '@mui/material/Button';
import { useState } from 'react';

interface Data {
    _id: string,
    frase: string,
    cancion: string,
    autor: string
}

async function fetchData(): Promise<Data | null> {
  try {
    const response = await fetch('http://localhost:4000/api/frase/random');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

function MyButton() {
  const [fetchedData, setFetchedData] = useState<Data | null>(null);

  async function handleButtonClick() {
    const data = await fetchData();
    setFetchedData(data);
  }

  return (
    <div>
      <Button variant='contained' onClick={handleButtonClick}>Random</Button>
      {fetchedData && (
        <div>
            <h2>Dumb lyric of the day</h2>
            <h3>{JSON.stringify(fetchedData.frase, null, 2)}</h3>
            <h3>{JSON.stringify(fetchedData.cancion, null, 2)}</h3>
            <h3>{JSON.stringify(fetchedData.autor, null, 2)}</h3>
        </div>
      )}
    </div>
  );
}

export default MyButton;
