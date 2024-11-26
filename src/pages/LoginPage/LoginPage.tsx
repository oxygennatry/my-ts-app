import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { RegStyle } from '../Registration/Registration.style';
import { yupResolver } from '@hookform/resolvers/yup';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';


interface ILoginForm {
  email: string;
  password: string;
}


const loginFormSchema = yup.object().shape({
  email: yup.string().email('Неправильный формат email').required('Обязательное поле'),
  password: yup.string().required('Обязательное поле').min(6, 'Пароль должен содержать не менее 6 символов'),
});

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onLoginSubmit: SubmitHandler<ILoginForm> = async (data) => {
    try {
     
    //   console.log('Вход выполнен:', data);
      navigate("/"); 
    } catch (error) {
      console.error('Ошибка при входе:', error);
    }
  };

  return (
    <>
    <RegStyle>
      <Header />
      <div className="body">
        <div className="container">
          <h2>Вход</h2>
          <form onSubmit={handleSubmit(onLoginSubmit)}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  type="email"
                  placeholder="Email"
                  {...field}
                  className={errors.email ? 'error' : ''}
                />
              )}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  type="password"
                  placeholder="Пароль"
                  {...field}
                  className={errors.password ? 'error' : ''}
                />
              )}
            />
            {errors.password && <p className="error-message">{errors.password.message}</p>}

            <button type="submit" className='RegButton'>Войти</button>
          </form>
          <div className="register-link">
            <a onClick={() => navigate("/registration-page")}>Нет аккаунта?</a>
          </div>
        </div>
      </div>
    </RegStyle>
    <Footer/>
    </>
  );
};

export default LoginPage;
