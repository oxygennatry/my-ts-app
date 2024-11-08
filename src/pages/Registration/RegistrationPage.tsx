import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { RegStyle } from './Registration.style'; 
import { yupResolver } from '@hookform/resolvers/yup';
import { Header } from '../../components/Header/Header';


interface IRegistrationForm {
  username: string;
  email: string;
  password: string;
  phone: string;
}

const registrationFormSchema = yup.object().shape({
  username: yup.string().required('Обязательное поле'),
  email: yup.string().email('Неправильный формат email').required('Обязательное поле'),
  password: yup
    .string()
    .required('Обязательное поле')
    .min(6, 'Пароль должен содержать не менее 6 символов'),
  phone: yup
    .string()
    .required('Обязательное поле')
    .matches(/^\+?[0-9]{10,15}$/, 'Некорректный номер телефона'),
});

const RegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      phone: '',
    },
  });

  const onRegisterSubmit: SubmitHandler<IRegistrationForm> = async (data) => {
    try {
      
      // console.log('Форма отправлена:', data); 
      navigate("/"); 
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
      
    }
  };

  return (
    
    <RegStyle>
      <Header/>
      
      <div className="body">
        <div className="container">
          <h2>Регистрация</h2>
          <form onSubmit={handleSubmit(onRegisterSubmit)}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  placeholder="Имя пользователя"
                  {...field}
                  className={errors.username ? 'error' : ''}
                />
              )}
            />
            {errors.username && (
              <p className="error-message">{errors.username.message}</p>
            )}

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
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}

            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input
                  type="tel"
                  placeholder="Номер телефона"
                  {...field}
                  className={errors.phone ? 'error' : ''}
                />
              )}
            />
            {errors.phone && <p className="error-message">{errors.phone.message}</p>}

            <button type="submit">Зарегистрироваться</button>
          </form>
          <div className="register-link">
            <a href="#">Уже есть аккаунт? Войдите</a>
          </div>
        </div>
      </div>
    </RegStyle>
  );
};

export default RegistrationPage;