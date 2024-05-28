import React, { useState } from "react";
import "./Authorization.scss"; // Ensure the correct path to your SCSS file
import Button from "../../components/Button";
import Input from "../../components/Input/Input";

const Authorization = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement your authentication logic here
    console.log(email, password);
  };

  return (
    <div className="authorization-container">
      <form onSubmit={handleSubmit} className="authorization-form">
        <h2>Login</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Authorization;
