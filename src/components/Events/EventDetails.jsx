import { Link, Outlet, useParams } from 'react-router-dom';

import Header from '../Header.jsx';
import { useQuery } from '@tanstack/react-query';
import { fetchEvent } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EventDetails() {
  const { id } = useParams();

  console.log(id);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['event', { eventId: id }],
    queryFn: ({ signal }) => {
      return fetchEvent({ id, signal });
    },
  });

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
            <button>Delete</button>
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
