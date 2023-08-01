import { User } from "@prisma/client";
import React from "react";
import styles from "@/styles/Profile.module.css";
import { signOut } from "next-auth/react";

interface ProfileInfoProps {
  user: User;
  selectedOption: string;
  setSelectedOption: (selection: string) => void;
  totalReviews: number;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  user,
  selectedOption,
  setSelectedOption,
  totalReviews,
}) => {
  return (
    <div className={styles.wrapper}>
      <p>
        Signed in as:{" "}
        {
          <span style={{ fontWeight: 500, color: "#da6a00" }}>
            {user?.name || `${user?.firstName} ${user?.lastName}`}
          </span>
        }
      </p>

      <p>
        You have made{" "}
        {
          <span
            style={{
              textDecoration: "underline",
              color: "#68904d",
              fontSize: "large",
              cursor: "pointer",
            }}
            onClick={() => setSelectedOption("Posts")}
          >
            {totalReviews}
          </span>
        }{" "}
        reviews!
      </p>
      <button className={styles.btn} onClick={() => signOut()}>
        Sign out
      </button>
    </div>
  );
};

export default ProfileInfo;
