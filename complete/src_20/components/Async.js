import { useEffect, useState } from 'react';

const Async = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/info', {
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_HEARTH_STONE_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_HEARTH_STONE_HOST,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setClasses(data.classes);
      });
  }, []);

  return (
    <div>
      <ul>
        {classes.map((job) => (
          <li key={job}>{job}</li>
        ))}
      </ul>
    </div>
  );
};

export default Async;
