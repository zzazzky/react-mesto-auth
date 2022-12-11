function AuthorizationForm(props) {
  return (
    <div className="authorization">
      <form
        className="authorization__form"
        name="login-form"
        noValidate
        onSubmit={props.onSubmit}
      >
        <h1 className="authorization__title">{props.title}</h1>
        <input
          className="authorization__input"
          type="email"
          placeholder="Email"
          name="authorization-email"
        />
        <input
          className="authorization__input"
          type="password"
          placeholder="Пароль"
          name="authorization-password"
        />
        <button className="authorization__button button">{props.button}</button>
      </form>
      <p className="authorization__capture">{props.capture}</p>
    </div>
  );
}

export default AuthorizationForm;
