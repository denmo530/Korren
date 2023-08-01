import React, { useCallback } from "react";
import styles from "@/styles/ModalFooter.module.css";
import { signIn } from "next-auth/react";
// Icons
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";

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
      <div
        className={styles.authIcon}
        onClick={() => signIn("google", { callbackUrl: "/profile" })}
      >
        <FaGoogle size={40} />
      </div>
      <div
        className={styles.authIcon}
        onClick={() => signIn("facebook", { callbackUrl: "/profile" })}
      >
        <FaFacebook size={40} />
      </div>
      <div
        className={styles.authIcon}
        onClick={() => signIn("github", { callbackUrl: "/profile" })}
      >
        <FaGithub size={40} />
      </div>
      <div className={styles.accountExist}>
        <div>
          {login ? "First time using Korren?" : "Already have an Account?"}
        </div>
        <div
          className={styles.logInBtn}
          onClick={login ? toggleRegister : toggleLogin}
        >
          {login ? "Create an Account" : "Log in"}
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
