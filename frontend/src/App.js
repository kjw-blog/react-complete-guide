import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import EventsPage from './pages/Events';
import EventDetailPage from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/events', element: <EventsPage /> },
      { path: '/events/:eventId', element: <EventDetailPage /> },
      { path: '/events/new', element: <NewEventPage /> },
      { path: '/events/:eventId/edit', element: <EditEventPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// Challenge / Exercise

// 1. 새(더미) 페이지 구성요소 5개 추가 (내용은 단순한 <h1> 요소일 수 있음) O
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. 이 다섯 페이지에 대한 라우팅 및 경로 정의 추가 O
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. 모든 페이지 구성요소 위에 <MainNavigation> 구성요소를 추가하는 루트 레이아웃 추가 O
// 4. 메인 내비게이션에 올바르게 작동 링크를 추가합니다. O
// 5. 활성 시 내비게이션의 링크가 활성화되면 "활성" 클래스를 수신하는지 확인하십시오. O
// 6. 더미 이벤트 목록을 Events 페이지로 출력합니다
//    모든 목록 항목에는 해당 EventDetailPage에 대한 링크가 포함되어야 합니다
// 7. EventDetail 페이지에서 선택한 이벤트의 ID를 출력합니다
// BONUS: all /events... 페이지 구성요소 위에 <EventNavigation> 구성요소를 추가하는 다른 (nested) 레이아웃 경로 추가
