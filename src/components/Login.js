import AuthorizationForm from "./AuthorizationForm";

function Login(props) {
  return (
    <AuthorizationForm
      onAuthorizate={props.onAuthorizate}
      title="Вход"
      button="Войти"
      capture=""
    />
  );
}

export default Login;
