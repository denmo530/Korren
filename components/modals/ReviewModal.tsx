import React, { useMemo, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import styles from '@/styles/ReviewModal.module.css';
import useReviewModal from '@/hooks/useReviewModal';
import Modal from './Modal';
import Header from '../Header';
import Input from '../inputs/Input';
import DormSelect from '../inputs/DormSelect';
import StarRating from '../inputs/StarRating';
import ImageUpload from '../inputs/ImageUpload';

enum STEPS {
  DORM = 0,
  TITLE = 1,
  COMMENT = 2,
  RATING = 3,
  IMAGES = 4
}
const ReviewModal = () => {
  const router = useRouter();
  const reviewModal = useReviewModal();

  const [step, setStep] = useState<STEPS>(STEPS.DORM);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      comment: '',
      rating: null,
      dormId: '',
      imageSrc: ''
    }
  });

  const dormId = watch('dormId');
  const rating = watch('rating');
  const imageSrc = watch('imageSrc');

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    });
  };

  const handleBack = () => {
    setStep((value) => value - 1);
  };

  const handleNext = () => {
    setStep((value) => value + 1);
  };

  const submitHandler: SubmitHandler<FieldValues> = async (data) => {
    if (step !== STEPS.IMAGES) {
      handleNext();
      return;
    }
    setIsLoading(true);

    try {
      await axios.post('/api/reviews', data);
      toast.success('Review created!');
      router.refresh();
      reset();
      setStep(STEPS.DORM);
      reviewModal.onClose();
    } catch (error) {
      toast.error('Something went wrong, try again!');
    } finally {
      setIsLoading(false);
    }
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.IMAGES) return 'Create Review';

    return 'Next';
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.DORM) return undefined;

    return 'Back';
  }, [step]);

  // First step - Select Dorm
  let bodyContent = (
    <div className={styles.bodyContainer}>
      <Header title="Dorm selection" subtitle="Pick a dorm which you want to review" />
      <DormSelect value={dormId} onChange={(value) => setCustomValue('dormId', value)} />
    </div>
  );

  if (step === STEPS.TITLE) {
    bodyContent = (
      <div className={styles.bodyContainer}>
        <Header title="Write a title for your review" />
        <div>
          <Input
            id="title"
            label="Title"
            type="text"
            register={register}
            disabled={isLoading}
            errors={errors}
            required
          />
        </div>
      </div>
    );
  }

  if (step === STEPS.COMMENT) {
    bodyContent = (
      <div className={styles.bodyContainer}>
        <Header
          title="Write a descriptive review of your dorm"
          subtitle="Tell the world what you think of your dorm!"
        />
        <div>
          <Input
            id="comment"
            type="text"
            register={register}
            errors={errors}
            disabled={isLoading}
            label="Review"
            required
          />
        </div>
      </div>
    );
  }

  if (step === STEPS.RATING) {
    bodyContent = (
      <div className={styles.bodyContainer}>
        <Header
          title="What rating do you give this dorm?"
          subtitle="Select a fair rating for the dorm"
        />
        <StarRating value={rating} onChange={(value) => setCustomValue('rating', value)} />
      </div>
    );
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className={styles.bodyContainer}>
        <Header title="Add some photos of your dorm" subtitle="You can upload up to 5 images!" />
        <ImageUpload value={imageSrc} onChange={(value) => setCustomValue('imageSrc', value)} />
      </div>
    );
  }

  return (
    <Modal
      title="Review"
      isOpen={reviewModal.isOpen}
      onClose={reviewModal.onClose}
      onSubmit={handleSubmit(submitHandler)}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.DORM ? undefined : handleBack}
      body={bodyContent}
    />
  );
};

export default ReviewModal;
