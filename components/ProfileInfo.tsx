import { User } from '@prisma/client';
import React from 'react';
import { signOut } from 'next-auth/react';
import styles from '@/styles/Profile.module.css';

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
  totalReviews
}) => {
  return (
    <div className={styles.wrapper}>
      <p>
        Signed in as:{' '}
        <span style={{ fontWeight: 500, color: '#da6a00' }}>
          {user?.name || `${user?.firstName} ${user?.lastName}`}
        </span>
      </p>

      <p>
        You have made{' '}
        {
          <button
            type="button"
            style={{
              textDecoration: 'underline',
              color: '#68904d',
              fontSize: 'large',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: 0,
              outline: 'inherit'
            }}
            onClick={() => setSelectedOption('Posts')}>
            {totalReviews}
          </button>
        }{' '}
        reviews!
      </p>
      <button type="button" className={styles.btn} onClick={() => signOut()}>
        Sign out
      </button>
    </div>
  );
};

export default ProfileInfo;
