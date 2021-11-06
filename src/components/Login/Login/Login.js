import React from "react";
import useAuth from "../../hooks/useAuth";
import { Button } from "react-bootstrap";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div>
      <h1 className="text-success my-5">
        Ple<span className="text-warning">ase</span>{" "}
        <span className="text-danger">
          Sign<span className="text-primary">In</span>
        </span>
      </h1>
      <Button onClick={signInUsingGoogle} variant="outline-primary">
        Sign in with Google
      </Button>
    </div>
  );
};

export default Login;
