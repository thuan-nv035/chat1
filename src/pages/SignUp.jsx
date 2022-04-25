import React, { useState } from 'react'
import { useUserAuth } from "../context/UserAuthContext";
import { Link } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { signUp } = useUserAuth();
    const [error, setError] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
             alert("Dang ky thanh cong")
            
        } catch (err) {
            setError(err.message);
        }
    };
    return (
      
            <div className="login">
                <h1 className="login__loginTitle">Đăng ký tài khoản</h1>
                {/* {error && <Alert variant="danger">{error}</Alert>} */}

                <div>
                    <div className="login__wrapper__right">
                        <input type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
                        <input type="Password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <button className="login__wrapper__right__submit" type="Submit" onClick={handleSubmit}>Đăng ký</button>
                        <div className="p-4 box mt-3 text-center">
                            Don't have an account? <Link to="/login">Đăng nhập</Link>
                        </div>
                    </div>
                </div>

            </div>
      
    )
}

export default Signup