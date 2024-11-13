import { useState } from "react";
import Login from "../LoginForm/Login";
import Registration from "../RegisterFrom/Registration";

function Form() {
    const [isLogin, setIsLogin] = useState(false);
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div className="login-y">
            <div className="loginbox">
                
                <div className="loginmain">
                    {showLogin ? (
                        <Login setIsLogin={setIsLogin} setShowLogin={setShowLogin} />
                    ) : (
                        <Registration setShowLogin={setShowLogin} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Form;
