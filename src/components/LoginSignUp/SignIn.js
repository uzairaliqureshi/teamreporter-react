import { Form, Input, Button, Checkbox, Modal } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { signOut, onAuthStateChanged, signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../firebase/firebase-config';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import "./LoginSignUp.scss";
import { useDispatch, useSelector } from 'react-redux';
import { modalMessage, hideModal, showModal } from '../../Redux/modalSlice';

const SignIn = () => {
    const navigate = useNavigate();
    const [curUser, setCurUser] = useState();
    const dispatch = useDispatch();
    const { message, boolean } = useSelector(state => state.modal);

    onAuthStateChanged(auth, (currentUser) => setCurUser(currentUser));

    const onFinish = async ({ password, username }) => {
        try {
            const user = await signInWithEmailAndPassword(auth, username, password);
            navigate('home');
        } catch (error) {
            dispatch(modalMessage(error.message));
            dispatch(showModal());
        }
    };

    const logOut = async () => await signOut(auth);

    return (
        <>
            <Modal title="Error" visible={boolean} onOk={() => dispatch(hideModal())}
                onCancel={() => dispatch(hideModal())}>
                {message}
            </Modal>
            {/* <button onClick={logOut}>{curUser?.email}</button> */}
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