import React,{useEffect,useState} from 'react'
import BearList from './component/BearList';
import inputForm from './components/inputForm';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import {BearActions,AuthActions} from './redux/store';
import LoginForm from './components/LoginForm';

axios.defaults.withCredentlals = true 

export default () => {

 const [loading, setloading] = useState(true);
 const auth = useSelector (state => state.Auth);
 const actions = bindActionCreators({...BearActions, ...AuthActions }, useDispatch());

 useEffect(() => {
  actions.getLoginStatus().then(rss = setLoading(false));

 if (loading)
  return "loading..."

 if (auth.accessToken && !auth.psuInfo)
  return(
   <div>
    <LoginForm />
   </div>
)
 return (
  <div>
   <h2>Bears</h2>
   <BearList/>
   <inputForm/>
   <button onClick={() => actlons.logout()}>Logout</button> 
  </div>
)
 }
