import React, { useEffect, useState } from "react";
import "./login.scss";
import LoginModal from "./LoginModal";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

function Login() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMounted(false);
  };

  return (
    <div className="App">
      <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {mounted && <LoginModal onSubmit={(e) => handleSubmit} />}
      </CSSTransitionGroup>
    </div>
  );
}

export default Login;
