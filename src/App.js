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
import Main from './components/Main';
import TestSass from './components/TestSass/TestSass';
import Student from './components/Student';
import Teacher from './components/Teacher';
import Effect from './components/useEffect/Effect';
import Photos from './components/photo/Photo';
import EffectLayout from './components/useEffect/EffectLayout';
import Login from './components/login/Login';
import UserList from './components/userList/UserList';
import UseRef from './components/useRef/UseRef';
import StopWatch from './components/stopWatch/StopWatch';
import Input from './components/input/Input';
import UseMemo from './components/useMemo/UseMemo';
import UseCallback from './components/useCallback/UseCallback';
import Form from './components/form/Form';
import Form2 from './components/form/Form2';
import SignUpForm from './components/form/SignUpForm';
import SignUpFormV2 from './components/form/SignUpFormV2';
import SignUpFormHook from './components/form/SignUpFormHook';
import Form1 from './components/form/Form1';

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
      {/* <YoutubeItem image="https://webaffiliatevn.com/wp-content/uploads/2020/08/IMGLOGO_Primary_CMYK_Blue_Rel_webready.jpg" avatar="https://webaffiliatevn.com/wp-content/uploads/2020/08/IMGLOGO_Primary_CMYK_Blue_Rel_webready.jpg" title="a"></YoutubeItem> */}
      {/* <YoutubeList></YoutubeList> */}
      {/* <Button>Xac nhan</Button> */}
      {/* <Counter></Counter> */}
      {/* <Person style="red" name="Quần jean" type="Skinny" color ="Đen" size = "L">Person1</Person> */}
      {/* <Person name="Váy" type="váy công chúa" color ="Trắng" size = "M">Person2</Person> */}
      {/* <Header></Header>
      <Footer></Footer>
      <Main></Main> */}
      {/* <TestSass></TestSass> */}
      {/* <Student></Student> */}
      {/* <Teacher/> */}
      {/* <Main/> */}
      {/* <Counter></Counter> */}
      {/* <Effect></Effect> */}
      {/* <Photos></Photos> */}
      {/* <EffectLayout></EffectLayout> */}
      {/* <Login></Login> */}
      {/* <UserList></UserList> */}
      {/* <UseRef></UseRef> */}
      {/* <StopWatch></StopWatch> */}
      {/* <Input></Input> */}
      {/* <UseMemo></UseMemo> */}
      {/* <UseCallback></UseCallback> */}
      {/* <Form></Form> */}
      {/* <Form2></Form2> */}
      <SignUpForm></SignUpForm>
      {/* <SignUpFormV2></SignUpFormV2> */}
      {/* <SignUpFormHook></SignUpFormHook> */}
      {/* <Form1></Form1> */}
    </div>
  );
}

export default App;
