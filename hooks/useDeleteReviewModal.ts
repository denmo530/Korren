import { create } from 'zustand';

interface DeleteReviewModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useDeleteReviewModal = create<DeleteReviewModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));

export default useDeleteReviewModal;
