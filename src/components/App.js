import React,{ useEffect, useState } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setImageUrl(data.message);
    }
    fetchData();
  }, []);

  return (
    <div>
        <p>Loading..</p>
      {imageUrl && <img src={imageUrl} alt="Random Dog" />}
    </div>
  );
}
export default App