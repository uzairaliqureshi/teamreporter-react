import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged } from '@firebase/auth';
import { auth } from '../../firebase/firebase-config';
import { useNavigate } from 'react-router';
import "./loginSignUp.scss";
import { modalError } from '../../utilities';
import { useDispatch } from 'react-redux';
import { setCurUser } from '../../redux/curUserSlice';

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    onAuthStateChanged(auth, (currentUser) => dispatch(setCurUser(currentUser?.email)));

    const onFinish = async ({ password, username }) => {
        try {
            await signInWithEmailAndPassword(auth, username, password);
            navigate('home');
        } catch (error) {
            modalError(error.message);
        }
    };

    return (
        <>

            <Form
                preserve={false}
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
                    <Button style={{ marginRight: "2vw" }} type="primary" htmlType="submit" className="login-form-button">
                        Sign In
                    </Button>
                    <Link to='signUp'>
                        <Button htmlType="submit" className="login-form-button">
                            Sign Up
                        </Button>
                    </Link>
                </Form.Item>
            </Form>
        </>
    );
};

export default SignIn;