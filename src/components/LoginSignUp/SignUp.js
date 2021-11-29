import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from '@firebase/auth';
import { auth } from '../TeamPage/firbase-config';
import "./LoginSignUp.scss";

const SignUp = () => {
    // const [curUser, setCurUser] = useState();
    // onAuthStateChanged(auth, (currentUser) => console.log(currentUser.email));

    const onFinish = async ({ password, username }) => {
        try {
            const user = await createUserWithEmailAndPassword(auth, username, password);
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <Form
            name="normal_login"
            className="login-form form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Sign Up
                </Button>
                Or <Link to='/'>SignIn</Link>
            </Form.Item>
        </Form>
    );
};

export default SignUp;