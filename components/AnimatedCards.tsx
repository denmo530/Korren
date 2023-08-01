import { NextPage } from "next";
import React from "react";
import AnimatedCard from "./AnimatedCard";
import styles from "../styles/AnimatedCard.module.css";
import useDorms from "@/hooks/useDorms";
import Link from "next/link";

type Dorm = {
  label: string;
  value: string;
  distanceToCampus: string;
  distanceToCenter: string;
  image?: string;
  adress: string;
  description: string;
};

const AnimatedCardRow: NextPage = () => {
  const { getAll } = useDorms();
  const dorms = getAll().sort(() => 0.5 - Math.random());

  return (
    <div className={styles.container}>
      {dorms.map((dorm: Dorm) => (
        <Link
          href={{
            pathname: "/dorms/[name]",
            query: { name: dorm.label.toLowerCase() },
          }}
          key={dorm.value}
        >
          <AnimatedCard
            src={dorm.image || "Placeholder img"}
            alt={dorm.label}
            title={dorm.label}
            message={dorm.description}
            key={dorm.value}
          />
        </Link>
      ))}
    </div>
  );
};

export default AnimatedCardRow;
