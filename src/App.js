import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyNav from './components/MyNav'
import NewsFeed from './components/NewsFeed'
import Profile from './components/Profile'

const App = () => (
  <BrowserRouter>
    <Container fluid>
      <MyNav />
      <Container>
        <Routes>
          <Route path="/" element={<NewsFeed />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Container>
    </Container>
  </BrowserRouter>
)
export default App
