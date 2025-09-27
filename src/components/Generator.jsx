import React, { useState } from 'react';
// Импорт Tone.js для генерации музыки
// import * as Tone from 'tone';

const Generator = () => {
  const [genre, setGenre] = useState('ambient');
  const [duration, setDuration] = useState(60);
  const [intensity, setIntensity] = useState(5);

  return (
    <div>
      <h2>Генерация музыки</h2>
      <select value={genre} onChange={e => setGenre(e.target.value)}>
        <option value="ambient">Ambient</option>
        <option value="lofi">Lo-Fi</option>
        <option value="classic">Классика</option>
        <option value="electronic">Электроника</option>
      </select>
      <input type="number" value={duration} onChange={e => setDuration(e.target.value)} min={10} max={600} />
      <input type="range" value={intensity} onChange={e => setIntensity(e.target.value)} min={1} max={10} />
      <button>Сгенерировать</button>
    </div>
  );
};

export default Generator;