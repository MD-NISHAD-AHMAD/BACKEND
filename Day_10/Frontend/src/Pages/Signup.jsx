import { useState } from "react";
import axios from "axios";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("email:", email);
  console.log("password:", password);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:7300/signup", {
      email,
      password,
    })
    .then((res) => {
      console.log("Response:", res.data);
    })
    .catch((err) => {
      console.log("Error:", err);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        placeholder="enter your email..."
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <label htmlFor="pass">Password</label>
      <input
        id="pass"
        type="text"
        placeholder="enter your password..."
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
};