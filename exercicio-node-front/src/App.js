import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./App.css";
import Axios from "axios";

function App() {
  
  const handleClickLogin = (values) => {
    console.log(values);
    Axios.post("http://localhost:3000/users/auth", {
      username: values.username,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
    });
  };
  
  const handleClickRegistro = (values) => {
    Axios.post("http://localhost:3000/users/register", {
      name: values.name,
      username: values.username,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
    });
  } 

  const validacaoLogin = yup.object().shape({
    username: yup
      .string()
      .email("Não é um username")
      .required("este campo é obrigatório"),
    password: yup
    .string()
    .min(6, "A senha deve ter 6 caracteres")
    .required("este campo é obrigatória"),
  });

  const validacaoRegistro = yup.object().shape({
    name: yup
      .string("Não é um name")
      .required("este campo é obrigatório"),
    username: yup
      .string()
      .email("Não é um username")
      .required("este campo é obrigatório"),
    password: yup
    .string()
    .min(6, "A senha deve ter 6 caracteres")
    .required("este campo é obrigatória"),
    confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas são diferentes")
    .min(6, "A senha deve ter 6 caracteres")
    .required("este campo é obrigatória"),
  });

  return (
    <div className = "container">
      <h1>Login</h1>
      <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validacaoLogin}>
        <Form className="login-form">
          <div className="login-form-group">
            <Field name="username" className="form-field" placeholder="E-mail" />

            <ErrorMessage 
              component="span"
              name="username"
              className="form-error"
            />
          </div>
          <div className="login-form-group">
            <Field name="password" className="form-field" placeholder="Senha" />

            <ErrorMessage 
              component="span"
              name="password"
              className="form-error"
            />
          </div>
          <button className="button" type="submit">Login</button>
        </Form>

      </Formik>
      {/* ///////////////////////////////////////////////////////// */}
      <h1>Cadastro</h1>
      <Formik initialValues={{}} 
        onSubmit={handleClickRegistro} 
        validationSchema={validacaoRegistro}>
        <Form className="login-form">
          <div className="login-form-group">
            <Field name="name" className="form-field" placeholder="Nome" />

            <ErrorMessage 
              component="span"
              name="name"
              className="form-error"
            />
          </div>
          <div className="login-form-group">
            <Field name="username" className="form-field" placeholder="Email" />

            <ErrorMessage 
              component="span"
              name="username"
              className="form-error"
            />
          </div>
          <div className="login-form-group">
            <Field name="password" className="form-field" placeholder="Senha" />

            <ErrorMessage 
              component="span"
              name="password"
              className="form-error"
            />
          </div>
          <div className="login-form-group">
            <Field name="confirmation" className="form-field" placeholder="confirme senha" />

            <ErrorMessage 
              component="span"
              name="confirmation"
              className="form-error"
            />
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </Form>

      </Formik>

    </div>
  );
}

export default App;
//https://github.com/vitorLostadaC/React-JS--Login-Register-MySQL/blob/main/client/src/App.js