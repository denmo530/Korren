import React, { useCallback } from 'react';
import { signIn } from 'next-auth/react';
// Icons
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import styles from '@/styles/ModalFooter.module.css';
import useRegisterModal from '@/hooks/useRegisterModal';
import useLoginModal from '@/hooks/useLoginModal';

interface FooterContentProps {
  login?: boolean;
}

const FooterContent: React.FC<FooterContentProps> = ({ login }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const toggleRegister = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const toggleLogin = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal]);

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.authIcon}
        onClick={() => signIn('google', { callbackUrl: '/profile' })}>
        <FaGoogle size={40} />
      </button>
      <button
        type="button"
        className={styles.authIcon}
        onClick={() => signIn('facebook', { callbackUrl: '/profile' })}>
        <FaFacebook size={40} />
      </button>
      <button
        type="button"
        className={styles.authIcon}
        onClick={() => signIn('github', { callbackUrl: '/profile' })}>
        <FaGithub size={40} />
      </button>
      <div className={styles.accountExist}>
        <div>{login ? 'First time using Korren?' : 'Already have an Account?'}</div>
        <button
          type="button"
          className={styles.logInBtn}
          onClick={login ? toggleRegister : toggleLogin}>
          {login ? 'Create an Account' : 'Log in'}
        </button>
      </div>
    </div>
  );
};

export default FooterContent;
