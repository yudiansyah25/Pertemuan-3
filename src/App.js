import { Route, Routes } from 'react-router-dom';
import './css/style.css';
import Home from './pages/Home.js';
import CreateMovie from './pages/movie/create';
import Popular from './pages/movie/popular';
import NowPlaying from './pages/movie/nowplaying';
import TopRatedMovie from './pages/movie/toprated';
import Layout from './Layout';
import Detail from './pages/movie/Detail';

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/create" element={<CreateMovie />} />
          <Route path="/movie/popular" element={<Popular />} />
          <Route path="/movie/now" element={<NowPlaying />} />
          <Route path="/movie/top" element={<TopRatedMovie />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
