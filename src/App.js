import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { connectWalletHandler } from './store/ethSlice';
import LoadingCat from './pages/LoadingCat';

const Landing = React.lazy(() => import('./pages/Landing'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const About = React.lazy(() => import('./pages/About'));

const App = () => {
  const dispatch = useDispatch();

  if (window.ethereum) {
    window.ethereum.on('accountsChanged', () => dispatch(connectWalletHandler()));
    window.ethereum.on('chainChanged', () => {
      window.location.reload();
    });
  }

  return (
    <Suspense fallback={<LoadingCat />}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/test" element={<LoadingCat />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
