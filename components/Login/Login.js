import React from "react";
import styles from "./Login.module.scss";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const loginCredential = { email, password };

    const url =
      "https://clothingshop-serverside.onrender.com/api/v1/user/login";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginCredential),
    })
      .then((res) => res.json())
      .then((userData) => {
        // setUserInformation(data);
        localStorage.setItem("user_info", JSON.stringify(userData.data));
        router.push("/second_index_page");
      });
  };
  return (
    <div className={styles.login_section}>
      {/* Login Form */}
      <form onSubmit={handleLogin} className={styles.login_form}>
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
