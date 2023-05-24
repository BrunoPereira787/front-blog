import React from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

const Login = () => {
  return (
    <div className="max-w-5xl mx-auto px-10 py-5">
      <form className="flex flex-col gap-4">
        <Input name="email" text="Email" type="email" />
        <Input name="password" text="Senha" type="password" />
        <Button>Entrar</Button>
      </form>
    </div>
  );
};

export default Login;
