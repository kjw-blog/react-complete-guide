import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

import Header from '../Header.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['event', { eventId: id }],
    queryFn: ({ signal }) => {
      return fetchEvent({ id, signal });
    },
  });

  const { mutate, isPending: deleteIsPending } = useMutation({
    mutationFn: () => {
      return deleteEvent({ id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['events']);
      navigate('..');
    },
  });

  const deleteHandler = () => {
    if (confirm('삭제하시겠습니까?')) {
      mutate();
    }
  };

  let content = '아무것도 없음.';

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="오류 남."
        message={error.info?.message || '오류 내용임'}
      />
    );
  }

  if (data) {
    const { title, description, date, time, image, location } = data;

    const src = 'http://localhost:3000/' + image;

    content = (
      <article id="event-details">
        <header>
          <h1>{title}</h1>
          <nav>
            <button onClick={deleteHandler} disabled={deleteIsPending}>
              {deleteIsPending ? '삭제중...' : 'Delete'}
            </button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={src} alt="" />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>
                {date} @ {time}
              </time>
            </div>
            <p id="event-details-description">{description}</p>
          </div>
        </div>
      </article>
    );
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {content}
    </>
  );
}
