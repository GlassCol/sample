import Article from './components/Article';
import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <Header title = 'World' />
      <Section />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
