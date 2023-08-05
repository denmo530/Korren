import React, { useCallback } from 'react';
import { AiFillEdit, AiOutlineLogin } from 'react-icons/ai';
import useLoginModal from '@/hooks/useLoginModal';
import useCurrentUser from '@/hooks/useCurrentUser';
import Avatar from '@/components/navbar/Avatar';
import useReviewModal from '@/hooks/useReviewModal';
import MenuItem from './MenuItem';

const UserMenu = () => {
  const loginModal = useLoginModal();
  const reviewModal = useReviewModal();

  const { data: user } = useCurrentUser();

  const onReview = useCallback(() => {
    if (!user) return loginModal.onOpen();

    return reviewModal.onOpen();
  }, [user, loginModal, reviewModal]);

  return (
    <div className="flex flex-row items-center gap-6">
      <MenuItem title="Review" onClick={onReview} icon={<AiFillEdit size={24} />} />
      {user ? (
        <Avatar src={user?.image} />
      ) : (
        <MenuItem title="Sign in" onClick={loginModal.onOpen} icon={<AiOutlineLogin size={24} />} />
      )}
    </div>
  );
};

export default UserMenu;
