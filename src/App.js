import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './Content';
import Toggle from './components/toggle/Toggle';
import State from './components/state/State';
import YoutubeItem from './components/youtube/YoutubeItem';
import YoutubeList from './components/youtube/YoutubeList';
import Button from './components/button/Button';
import Counter from './components/count/Counter';
import Person from './components/person/Person';

//parent component
function App() {
  return (
    <div className="App">
      {/* children component */}
      {/* <Header></Header>
      <Banner></Banner>
      <Card></Card>
      <Content></Content>
      <Footer></Footer> */}
      {/* <Toggle></Toggle>
      <State></State> */}
      <YoutubeItem image="https://webaffiliatevn.com/wp-content/uploads/2020/08/IMGLOGO_Primary_CMYK_Blue_Rel_webready.jpg" title="a"></YoutubeItem>
      <YoutubeList></YoutubeList>
      <Button>Xac nhan</Button>
      <Counter></Counter>
      <Person name="Quần jean" type="Skinny" color ="Đen" size = "L">Person1</Person>
      <Person name="Váy" type="váy công chúa" color ="Trắng" size = "M">Person2</Person>
     
    </div>
  );
}

export default App;
