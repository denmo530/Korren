import React from 'react';
import axios from 'axios';
import { Review } from '@prisma/client';
import { toast } from 'react-hot-toast';
import useUserReviews from '@/hooks/useUserReviews';
import useDeleteReviewModal from '@/hooks/useDeleteReviewModal';
import Header from '../Header';
import Modal from './Modal';

interface DeleteReviewModalProps {
  selectedReviewId: string;
}

const DeleteReviewModal: React.FC<DeleteReviewModalProps> = ({ selectedReviewId }) => {
  const deleteReviewModal = useDeleteReviewModal();
  const { data, error, isLoading, mutate } = useUserReviews();
  const reviews = data as Review[];
  // Behövs detta state?
  //   const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete('/api/reviews/userReviews', {
        data: { reviewId: selectedReviewId }
      });

      const updatedReviews = reviews.filter((review: Review) => review.id !== selectedReviewId);

      // Update the reviews state by triggering a re-fetch
      await mutate(updatedReviews, false).catch((err) => console.error(err));
      toast.success('Review removed!');
      deleteReviewModal.onClose();
    } catch (err) {
      console.error('Delete request failed', err);
      toast.error('Something went wrong!');
    }
  };

  const bodyContent = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Header
        title="Delete Review"
        subtitle="Are you sure you want to remove this review? It will be removed completely!"
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={deleteReviewModal.isOpen}
      title="Delete"
      actionLabel="Delete"
      secondaryAction={deleteReviewModal.onClose}
      secondaryActionLabel="Cancel"
      onClose={deleteReviewModal.onClose}
      body={bodyContent}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteReviewModal;
