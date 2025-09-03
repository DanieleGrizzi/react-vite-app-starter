import { Route, Routes } from 'react-router';
import Home from './components/home/Home';
import NotFound from './components/not-found/NotFound';

function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
