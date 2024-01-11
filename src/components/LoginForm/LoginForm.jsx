import { useDispatch } from "react-redux";
import { login } from '../../redux/auth/operations';



const LoginForm = () => {

const dispatch = useDispatch()

const handleLogin = event => {
  event.preventDefault()
  const email = event.target.email.value;
    const password = event.target.password.value;
    dispatch (
      login({
        email,
        password,
      })
    )
}

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="login-email">Email</label>
        <input name="email" type="email" id="login-email"></input>
        <label htmlFor="login-password">Password</label>
        <input name="password" type="password" id="login-password"></input>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
