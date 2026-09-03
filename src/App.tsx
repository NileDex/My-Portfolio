import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Web2Page from './pages/Web2Page';
import Web3Page from './pages/Web3Page';
import CommunityPage from './pages/CommunityPage';
import AchievementsPage from './pages/AchievementsPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/web2" element={<Web2Page />} />
        <Route path="/web3" element={<Web3Page />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
