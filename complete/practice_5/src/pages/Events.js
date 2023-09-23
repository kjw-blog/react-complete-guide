import EventsList from '../components/EventsList';

const DUMMY_EVENTS = [
  {
    id: 'event_1',
    image:
      'https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg',
    title: '첫번째 이벤트',
    date: '2023-09-22',
  },
  {
    id: 'event_2',
    image:
      'https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg',
    title: '두번째 이벤트',
    date: '2023-09-23',
  },
  {
    id: 'event_3',
    image:
      'https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg',
    title: '세번째 이벤트',
    date: '2023-09-24',
  },
];

const EventsPage = () => {
  return (
    <main>
      <h1>이벤트 목록 페이지</h1>
      <EventsList events={DUMMY_EVENTS} />
    </main>
  );
};

export default EventsPage;
