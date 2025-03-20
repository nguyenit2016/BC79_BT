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
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Đăng Ký</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm font-medium">Tên</label>
          <input type="text" {...register("name", { required: "Tên là bắt buộc" })} className="w-full p-2 border rounded mt-1" />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium">Email</label>
          <input type="email" {...register("email", { required: "Email là bắt buộc" })} className="w-full p-2 border rounded mt-1" />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium">Mật khẩu</label>
          <input type="password" {...register("password", { required: "Mật khẩu là bắt buộc" })} className="w-full p-2 border rounded mt-1" />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium">Xác nhận mật khẩu</label>
          <input type="password" {...register("confirmPassword", { validate: value => value === watch("password") || "Mật khẩu không khớp" })} className="w-full p-2 border rounded mt-1" />
          {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
        </div>
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded mt-4">Đăng ký</button>
      </form>
      <p className="text-center mt-4">Đã có tài khoản? <a href="/login" className="text-blue-600">Đăng nhập</a></p>
    </div>
  );
};

export default RegisterForm;
