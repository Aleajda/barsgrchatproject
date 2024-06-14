import './App.css';
import Login from './components/auth/Login';
import { Route, Routes} from 'react-router-dom';
import Main from './components/main/Main';
import Registration from './components/auth/Registration';
import { initializeApp } from './redux/appReduser';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { Loader } from 'semantic-ui-react';

function App(props) {

  useEffect(() =>{
    props.initializeApp();
  },[])
  if (!props.initialized){
    return <Loader/>
  }
  return (
    <Routes>
      <Route path="/main" element={<Main/>} />
      <Route path="" element={<Main/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/registration" element={<Registration/>}/>
    </Routes>
  );
}

let mapStateToProps = (state) => ({
  initialized: state.App.initialized
})

export default connect(mapStateToProps,{initializeApp})(App);

