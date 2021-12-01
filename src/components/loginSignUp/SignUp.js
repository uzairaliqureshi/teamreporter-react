import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged } from '@firebase/auth';
import { auth } from '../../firebase/firebase-config';
import "./loginSignUp.scss";
import { modalError, welcomeModal } from '../../utilities';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setCurUser } from '../../redux/curUserSlice';
import { useNavigate } from 'react-router';

const SignUp = () => {
    const navigate = useNavigate();
    const { user } = useSelector(state => state.curUser);
    const dispatch = useDispatch();

    onAuthStateChanged(auth, (currentUser) => dispatch(setCurUser(currentUser?.email)));

    const onFinish = async ({ password, Email }) => {
        try {
            await createUserWithEmailAndPassword(auth, Email, password);
            navigate('home');
            welcomeModal(user);
        } catch (error) {
            modalError(error.message);
        }
    };


    return (
        <>
            <Form
                name="normal_login"
                className="login-form form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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
                    <Button style={{ marginRight: "2vw" }} type="primary" htmlType="submit" className="login-form-button">
                        Sign Up
                    </Button>
                    <Link to='/'>
                        <Button htmlType="submit" className="login-form-button">
                            Sign In
                        </Button>
                    </Link>
                </Form.Item>
            </Form>
        </>
    );
};

export default SignUp;