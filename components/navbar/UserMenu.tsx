import React, { useCallback } from "react";
import styles from "@/styles/Navbar.module.css";
import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";
import Avatar from "@/components/navbar/Avatar";
import useReviewModal from "@/hooks/useReviewModal";
import { AiFillEdit } from "react-icons/ai";

const UserMenu = () => {
  const loginModal = useLoginModal();
  const reviewModal = useReviewModal();

  const { data: user } = useCurrentUser();

  const onReview = useCallback(() => {
    if (!user) return loginModal.onOpen();

    reviewModal.onOpen();
  }, [user, loginModal, reviewModal]);

  return (
    <div className={styles.userMenu}>
      <div
        className={styles.buttons}
        style={{ backgroundColor: "#68904d", color: "white" }}
        onClick={onReview}
      >
        <AiFillEdit size={20} />
        <span style={{ marginLeft: "5px" }}>Review</span>
      </div>
      {user ? (
        <Avatar src={user?.image} />
      ) : (
        <div
          onClick={loginModal.onOpen}
          className={styles.buttons}
          style={{
            backgroundColor: "#da6a00",
            color: "white",
          }}
        >
          <span>Sign in</span>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
