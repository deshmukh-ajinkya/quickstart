import Activity from '../components/activity/activity';
import Dashboard from '../components/dashboard/dashboard';
import Group from '../components/group/group';
import Messages from '../components/messages/messages';
import Root from '../components/root/root';
import { TRouteType } from '../types';

export const privateRoutes: TRouteType[] = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      { path: 'activity', element: <Activity /> },
      { path: 'group', element: <Group /> },
      { path: 'messages', element: <Messages /> }
    ]
  }
];
