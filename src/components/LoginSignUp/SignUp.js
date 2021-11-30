import { Form, Input, Button, Checkbox, Modal } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from '@firebase/auth';
import { auth } from '../../firebase/firebase-config';
import "./LoginSignUp.scss";
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, modalMessage, showModal } from '../../Redux/modalSlice';

const SignUp = () => {
    // const [curUser, setCurUser] = useState();
    // onAuthStateChanged(auth, (currentUser) => console.log(currentUser.email));
    const dispatch = useDispatch();
    const { message, boolean } = useSelector(state => state.modal);

    const onFinish = async ({ password, username }) => {
        try {
            const user = await createUserWithEmailAndPassword(auth, username, password);
            console.log(user);
        } catch (error) {
            dispatch(modalMessage(error.message));
            dispatch(showModal());
        }
    };

    return (
        <>
            <Modal title="Error" visible={boolean} onOk={() => dispatch(hideModal())}
                onCancel={() => dispatch(hideModal())}>
                {message}
            </Modal>
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