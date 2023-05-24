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
import { Route, Routes } from 'react-router';
import Home from './Home';
import About from './About';
import Nav from './Nav';
import ContentDetails from './ContentDetails';
import UseReducer from './components/useReducer/UseReducer';
import { useSelector } from 'react-redux';

//parent component
function App() {
 // const count = useSelector(state => state.counter.count)
  const {count} = useSelector(state => state.counter)
  return (
    <div className="App">
      {/* <UseReducer></UseReducer> */}
      <h2>The count from App is: {count}</h2>
      <Counter></Counter>
    </div>
  );
}

export default App;
