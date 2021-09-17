import React from "react"; 
import Input from "../shared/Input";

const LoginModal = () => {
  return (
    <div className="Modal">
      <form onSubmit={this.props.onSubmit} className="ModalForm">
        <Input id="name" type="text" placeholder="Jack-Edward Oliver" />
        <Input id="username" type="email" placeholder="mrjackolai@gmail.com" />
        <Input id="password" type="password" placeholder="password" />
        <button>
          Log in <i className="fa fa-fw fa-chevron-right"></i>
        </button>
      </form>
    </div>
  );
};

export default LoginModal;
