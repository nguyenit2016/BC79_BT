import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Register Data:", data);
    alert("Đăng ký thành công!");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg text-white">
        <h2 className="text-2xl font-bold text-center mb-4 text-purple-400">Đăng Ký</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-300">Tên</label>
            <input 
              type="text" 
              {...register("name", { required: "Tên là bắt buộc" })} 
              className="w-full p-2 border border-gray-600 rounded mt-1 bg-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input 
              type="email" 
              {...register("email", { required: "Email là bắt buộc" })} 
              className="w-full p-2 border border-gray-600 rounded mt-1 bg-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-300">Mật khẩu</label>
            <input 
              type="password" 
              {...register("password", { required: "Mật khẩu là bắt buộc" })} 
              className="w-full p-2 border border-gray-600 rounded mt-1 bg-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-300">Xác nhận mật khẩu</label>
            <input 
              type="password" 
              {...register("confirmPassword", { 
                validate: value => value === watch("password") || "Mật khẩu không khớp" 
              })} 
              className="w-full p-2 border border-gray-600 rounded mt-1 bg-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
            />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
          </div>
          <button 
            type="submit" 
            className="w-full bg-purple-700 text-white p-2 rounded mt-4 hover:bg-purple-800 transition duration-300"
          >
            Đăng ký
          </button>
        </form>
        <p className="text-center mt-4 text-gray-300">
          Đã có tài khoản? <a href="/login" className="text-blue-400 hover:underline">Đăng nhập</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
