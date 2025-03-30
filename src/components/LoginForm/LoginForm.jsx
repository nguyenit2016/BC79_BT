import { useForm } from "react-hook-form";
import React from 'react';
import { loginService } from '../../api/loginService';
import { useDispatch } from 'react-redux';
import { setUserAction } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const disPatch = useDispatch();
    const navigate = useNavigate();

  const onSubmit = (data) => {
    loginService(data).then((result) => {
      disPatch(setUserAction(result.data.content));
      navigate("/");
      const userJson = JSON.stringify(result.data.content);
      localStorage.setItem("USER", userJson);
  }).catch((err) => {
      console.log(err);
  });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg text-white">
        <h2 className="text-2xl font-bold text-center mb-4 text-purple-400">Đăng Nhập</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input 
              type="text"
              {...register("taiKhoan", { required: "Email là bắt buộc" })}
              className="w-full p-2 border border-gray-600 rounded mt-1 bg-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-300">Mật khẩu</label>
            <input
              type="password"
              {...register("matKhau", { required: "Mật khẩu là bắt buộc" })}
              className="w-full p-2 border border-gray-600 rounded mt-1 bg-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <button 
            type="submit" 
            className="w-full bg-purple-700 text-white p-2 rounded mt-4 hover:bg-purple-800 transition duration-300"
          >
            Đăng nhập
          </button>
        </form>
        <p className="text-center mt-4 text-gray-300">
          Chưa có tài khoản? <a href="/register" className="text-blue-400 hover:underline">Đăng ký</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
