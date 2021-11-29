import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { signOut, onAuthStateChanged, signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../firbase-config';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const SignIn = () => {
    const navigate = useNavigate();
    const [curUser, setCurUser] = useState();

    onAuthStateChanged(auth, (currentUser) => setCurUser(currentUser));

    const onFinish = async ({ password, username }) => {
        try {
            const user = await signInWithEmailAndPassword(auth, username, password);
            navigate('home');
        } catch (error) {
            console.log(error.message);
        }
    };

    const logOut = async () => await signOut(auth);

    return (
        <>
            <button onClick={logOut}>{curUser?.email}</button>
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
                            message: 'Please Input your Password!',
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
                        Sign In
                    </Button>
                    Or <Link to='signUp'>SignUp</Link>
                </Form.Item>
            </Form>
        </>
    );
};

export default SignIn;