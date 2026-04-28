import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GenAIPortfolio from './components/GenAIPortfolio';
import ContentPortfolio from './components/ContentPortfolio';
import QAPortfolio from './components/QAPortfolio';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gen-ai" element={<GenAIPortfolio />} />
        <Route path="/content" element={<ContentPortfolio />} />
        <Route path="/qa" element={<QAPortfolio />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}
