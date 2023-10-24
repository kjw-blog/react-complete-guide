import { useEffect, useState } from 'react';

const Async = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/info', {
      headers: {
        'X-RapidAPI-Key': '1bd1c03dd7mshfade42ba08a6f7ap1504cbjsn6c0e6b8e6670',
        'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
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
