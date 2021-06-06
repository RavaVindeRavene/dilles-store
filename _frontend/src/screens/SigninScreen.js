import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import{Link} from 'react-router-dom';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function SigninScreen(props){
     const [email, setEmail]= useState('');
     const [password, setPassword]=useState('');

     const redirect = props.location.search? props.location.search.split('=')[1]: '/';

     const userSignin = useSelector((state)=> state.userSignin);
     const {userInfo, loading, error} = userSignin;

     const dispatch=useDispatch();
    const submitHandler= (e)=>{
        e.preventDefault();
        dispatch(signin(email, password));
    };
    useEffect(()=> {
        if (userInfo){
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo] );
    return (
        <div>
            <form className="form" onSubmit={submitHandler}> 
                <div>
                    <h1> Pierakstīties</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor= "email">E-pasts</label>
                    <input type="email" id="email" placeholder="Enter email" required 
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor= "password">Parole</label>
                    <input type="password" id="password" placeholder="Enter password" required 
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit"> Ieiet</button>
                </div>
                <div>
                    <label></label>
                    <div>
                        Jauns klients? {'  '}
                        <Link to={`/register?redirect=${redirect}`}> Izveidot profilu</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}