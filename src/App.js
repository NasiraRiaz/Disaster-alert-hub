import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'leaflet/dist/leaflet.css';
import DemoPage from './pages/DemoPage';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import DisasterHelpPage from './pages/DisasterHelpPage';
import AlertsPage from './pages/AlertsPage';
import AdminNotificationListener from './components/AdminNotificationListener';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <div className="App">
      <AdminNotificationListener />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/demo" element={<DemoPage />} /> 
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/alerts"
          element={
            <ProtectedRoute>
              <AlertsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/disaster-help"
          element={
            <ProtectedRoute>
              <DisasterHelpPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;