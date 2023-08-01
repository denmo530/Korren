import React from "react";
import Image from "next/image";
import styles from "@/styles/Avatar.module.css";
import { useRouter } from "next/navigation";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  const router = useRouter();
  return (
    <Image
      className={styles.avatar}
      height={35}
      width={35}
      alt="Avatar"
      src={src || "/images/placeholder.jpg"}
      onClick={() => router.push("/profile")}
    />
  );
};

export default Avatar;
