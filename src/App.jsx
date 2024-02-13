import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/layout/Root';
import Home from './routes/Home';
import Hunt from './routes/Hunt';
import About from './routes/About';
import Decipher from './routes/Decipher';

import NotFound from './routes/NotFound';
import Decode from './routes/Decode';
import FinalProblem from './routes/FinalProblem';
import MissMe from './routes/MissMe';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'discover', element: <Hunt /> },
      { path: 'decipher', element: <Decipher /> },
      { path: 'decode', element: <Decode /> },
      { path: 'final-problem', element: <FinalProblem /> },
      { path: 'about', element: <About /> },
      { path: 'dead-end', element: <NotFound /> },
    ],
  },
  { path: 'miss-me', element: <MissMe />, errorElement: <NotFound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
