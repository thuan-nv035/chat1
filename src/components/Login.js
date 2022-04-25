import React, {useEffect,useState} from 'react';
import {signInWithEmailAndPassword} from'firebase/auth'
import {db,auth} from "../firebase";

function Login(props) {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [errEmail,setErrEmail]=useState('')
    const [errPassword,setErrPassword]=useState('')

    const login = async(e) =>{
        e.preventDefault();
        if (!email ) {
            setErrEmail('không được để trắng email')
            return;
        }else if (!/\S+@\S+\.\S+/.test(email) ) {
            setErrEmail('nhập đúng email')
            return;
        }else if(!password){
            setErrPassword('không được để trắng password')
            return;
        }
        // beginlive@gmail.com
        try{
            const resp = await signInWithEmailAndPassword(auth,email,password);
            sessionStorage.setItem('user',JSON.stringify(resp.user));
            alert('dang nhap thanh cong')
        }catch(e){
            alert('Tại bạn ngu nên bạn không đăng nhập được ahihi ^_^ ');
        }
            
    }
    return (
        <div>
            <div className="font-sans">
                <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                    <div className="relative sm:max-w-sm w-full">
                        <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                        <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                        <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                            <label className="text-3xl block mt-3 text-gray-700 text-center font-semibold">
                                Login
                            </label>
                            <form method="" action="" className="mt-10" onSubmit={login}>
                                <div>
                                    <input type="text" onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" className="focus:outline-none focus:ring focus:border-yellow-500 mt-1 pl-4 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                        <p className="error font-semibold text-red-600">{errEmail} </p>
                                </div>
                                <div className="mt-7">
                                    <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password"
                                           className="mt-1 focus:outline-none focus:ring focus:border-yellow-500 pl-4 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                        <p className="error font-semibold text-red-600">{errPassword}</p>
                                </div>
                                <div className="mt-7">
                                    <button type="submit" onClick={login} className="bg-blue-500 w-full  py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Login
                                    </button>
                                </div>
                                <div className="mt-7">
                                    <div className="flex justify-center items-center">
                                        <label className="mr-2">Do you have an account?</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;