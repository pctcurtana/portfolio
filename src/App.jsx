import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Hero from './components/Hero'
import Contact from './components/Contact'

function App() {

  return (
    <div className="text-[#55d2ba] bg-gray-900 min-h-screen">
      <Router>
        <Header/>
          <main> 
            <Routes>
              <Route path ="/" element = {<Hero/>}/>
              <Route path ="/projects" element = {<Projects/>}/>
              <Route path ="/contact" element = {<Contact/>}/>
            </Routes>
          </main>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
