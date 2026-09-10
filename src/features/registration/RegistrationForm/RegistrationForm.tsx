import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

import type { FormValues } from "./RegistrationForm.types";

export function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    criteriaMode: "firstError",
  });

  const submitHandler: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  console.log("render");

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label htmlFor="name">Имя:</label>
        <input
          id="name"
          {...register("name", {
            required: "Введите имя",
          })}
        />
        {errors.name && <div>{errors.name.message}</div>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Введите email",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Введите корректный email",
            },
          })}
        />
        {errors.email && <div>{errors.email.message}</div>}
      </div>

      <div>
        <label>Пароль</label>
        <input
          type="password"
          {...register("password", {
            required: "Введите пароль",
            minLength: {
              value: 6,
              message: "Пароль должен содержать минимум 6 символов",
            },
          })}
        />
        {errors.password && <div>{errors.password.message}</div>}
      </div>

      <button type="submit">Отправить</button>
    </form>
  );
}
