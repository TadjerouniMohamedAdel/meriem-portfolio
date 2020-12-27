import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="App">
        <Header />
        <Main>
            <Home />
            <AboutMe/>
            <Skills />
            <Work />
            <Contacts />
        </Main>
        <Footer />
    </div>
  );
}

export default App;
