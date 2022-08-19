import React from "react";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";

const AuthenticationPage = ({ isLogin }) => { 

  return (
    <>
        <div className="sign-up-container">
            <div className="sign-up-row">
                <div className="sign-up-column">
                    <div className="call-to-action-container text-content">
                        <div className="call-to-action">
                            <h1>Affiliate Galore</h1>
                            <p>Get access to 10,000 affiliate programs for free</p>
                        </div>
                        <div style={{marginTop: "75px", fontSize: "1.1rem"}}>
                            <em>"If you want to <u>make a money online</u>, you need to <u>bookmark this site!</u>"</em>
                            <p>David Yorke - Content Creator</p>
                        </div>
                    </div>
                </div>
                <div className="sign-up-column form">
                    { isLogin ? <LogInForm/> : <SignUpForm />}
                </div>
            </div>
        </div>
    </>
  )
}

export default AuthenticationPage;