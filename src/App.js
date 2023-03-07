import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './Banner';
import Content from './Content';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Card></Card>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
