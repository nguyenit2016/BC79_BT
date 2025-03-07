import React from 'react';
import { Button, Form, Input, message } from 'antd';
import { loginService } from '../../api/loginService';
import { useDispatch } from 'react-redux';
import { setUserAction } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const disPatch = useDispatch();
    const navigate = useNavigate();
    const handlLogin = (user) => {
        loginService(user).then((result) => {
            disPatch(setUserAction(result.data.content));
            navigate("/");
            message.success("Dang nhap thanh cong");
            const userJson = JSON.stringify(result.data.content);
            localStorage.setItem("USER", userJson);
        }).catch((err) => {
            console.log(err);
        });
    };

    const onFinish = (values) => {
        handlLogin(values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                taiKhoan: "mafia",
                matKhau: "8386"
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="taiKhoan"
                rules={[
                    {
                        required: true,
                        message: 'Nhập tài khoản!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="matKhau"
                rules={[
                    {
                        required: true,
                        message: 'Nhập mật khẩu!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
};
export default LoginPage;