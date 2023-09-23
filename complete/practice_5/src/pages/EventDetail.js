import { useParams } from 'react-router-dom';

const EventDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>이벤트 상세 페이지</h1>
      <p>{params.eventId}</p>
    </>
  );
};

export default EventDetailPage;
