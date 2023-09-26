import { useRouteLoaderData } from 'react-router-dom';

const NewEventPage = () => {
  const data = useRouteLoaderData('event-detail');

  console.log('new에도 들어오니?', data);

  return <h1>NewEventPage</h1>;
};

export default NewEventPage;
