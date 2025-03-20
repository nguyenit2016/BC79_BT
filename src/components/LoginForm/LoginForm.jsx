import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    alert("Đăng nhập thành công!");
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Đăng Nhập</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email là bắt buộc" })}
            className="w-full p-2 border rounded mt-1"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium">Mật khẩu</label>
          <input
            type="password"
            {...register("password", { required: "Mật khẩu là bắt buộc" })}
            className="w-full p-2 border rounded mt-1"
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">Đăng nhập</button>
      </form>
      <p className="text-center mt-4">Chưa có tài khoản? <a href="/register" className="text-blue-600">Đăng ký</a></p>
    </div>
  );
};

export default LoginForm;
