import AuthorizationForm from "./AuthorizationForm";

function Login(props) {
  return (
    <AuthorizationForm
      onSubmit={props.onSubmit}
      title="Вход"
      button="Войти"
      capture=""
    />
  );
}

export default Login;
