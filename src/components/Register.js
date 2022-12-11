import AuthorizationForm from "./AuthorizationForm";

function Register(props) {
  return (
    <AuthorizationForm
      onSubmit={props.onSubmit}
      title="Регистрация"
      button="Зарегистрироваться"
      capture="Уже зарегистрированы? Войти"
    />
  );
}

export default Register;
