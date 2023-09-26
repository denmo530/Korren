import React, { useCallback, useState } from 'react';
import { getSession, signOut } from 'next-auth/react';
import { NextPageContext } from 'next';
import { Review } from '@prisma/client';
import axios from 'axios';
import useCurrentUser from '@/hooks/useCurrentUser';
import ReviewCard from '@/components/ReviewCard';
import useUserReviews from '@/hooks/useUserReviews';
import styles from '@/styles/Profile.module.css';
import Carousel from '@/components/Carousel';
import ProfilePosts from '@/components/ProfilePosts';
import ProfileInfo from '@/components/ProfileInfo';

export async function getServerSideProps(context: NextPageContext) {
  // Check if available session exist otherwise redirect to login page - /auth
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
}

export default function Profile() {
  // State
  const [selectedOption, setSelectedOption] = useState<string>('Posts');

  // get user with our own created hook
  const { data: user } = useCurrentUser();
  const { data: reviews, error, isLoading, mutate } = useUserReviews();

  const toggleOption = useCallback(
    (option: string) => {
      setSelectedOption(option);
    },
    [setSelectedOption]
  );

  return (
    <div className={styles.container}>
      <div className={styles.sideMenu}>
        <h3>Dashboard</h3>
        <span>{user?.email}</span>
        <div
          className={styles.option}
          onClick={() => toggleOption('Posts')}
          style={{
            backgroundColor: selectedOption === 'Posts' ? 'rgba(200, 210, 209, 0.4)' : '#ffff'
          }}>
          Posts
        </div>
        <div
          className={styles.option}
          onClick={() => toggleOption('Account')}
          style={{
            backgroundColor: selectedOption === 'Account' ? 'rgba(200, 210, 209, 0.4)' : '#ffff'
          }}>
          Account
        </div>
      </div>
      <div className={styles.reviewsContainer}>
        {/* <h3>{selectedOption}</h3> */}
        <div className={styles.accountInfo}>
          {selectedOption === 'Posts' ? <h1>Post History</h1> : <h1>My Account</h1>}
        </div>
        <div className={styles.content}>
          {selectedOption === 'Posts' ? (
            <ProfilePosts isLoading={isLoading} reviews={reviews} />
          ) : (
            <ProfileInfo
              user={user}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              totalReviews={reviews?.length}
            />
          )}
        </div>
      </div>
    </div>
  );
}
