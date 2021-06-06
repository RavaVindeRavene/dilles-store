import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import{Link} from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function RegisterScreen(props){
    const [name, setName]= useState('');
     const [email, setEmail]= useState('');
     const [password, setPassword]=useState('');
     const [confirmPassword, setConfirmPassword]=useState('');

     const redirect = props.location.search? props.location.search.split('=')[1]: '/';

     const userRegister = useSelector((state)=> state.userRegister);
     const {userInfo, loading, error} = userRegister;

     const dispatch=useDispatch();
    const submitHandler= (e)=>{
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Ievadītās paroles nesakrīt');
        }else {
           dispatch(register(name, email, password)); 
        }
        
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
                    <h1> Reģistrēties</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor= "name">Vārds</label>
                    <input type="text" id="name" placeholder="Enter name" required 
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
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
                    <label htmlFor= "confirmPassword">Apstiprināt paroli</label>
                    <input type="password" id="confirmPassword" placeholder="Enter confirm password" required 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit"> Reģistrēties</button>
                </div>
                <div>
                    <label></label>
                    <div>
                        Jau ir lietotāja profils? {'  '}
                        <Link to={`/signin?redirect=${redirect}`}> Pierakstīties</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}