import { Modal } from "antd";

export const modalError = (message) => {
    Modal.error({
        title: 'Error',
        content: message,
        maskClosable: true,
        visible: false
    });
};

export const welcomeModal = (name) => {
    let secondsToGo = 3;
    const modal = Modal.success({
        title: 'your account has Successfully created',
        content: `Welcome ${name}`,
    });
    const timer = setInterval(() => {
        secondsToGo -= 1;
    }, 1000);
    setTimeout(() => {
        clearInterval(timer);
        modal.destroy();
    }, secondsToGo * 1000);
};