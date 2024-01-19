import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { Button, TextField } from '@mui/material';


const LoginForm = () => {
  const dispatch = useDispatch();
  const handleLogin = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    dispatch(
      login({
        email,
        password,
      })
    );
  };

  return (
    <div>
      
      <form onSubmit={handleLogin}
      >
        <TextField
          label="EMAIL"
          variant="outlined"
          name="email"
          type="email"
          id="login-email"
        ></TextField>

        <TextField
          label="PASSWORD"
          variant="outlined"
          name="password"
          type="password"
          id="login-password"
        ></TextField>
        <Button type="submit">Log in</Button>
      </form>
      </div>
  );
};

export default LoginForm;
