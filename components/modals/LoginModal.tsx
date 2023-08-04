import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import useLoginModal from '@/hooks/useLoginModal';
import Modal from './Modal';
import Header from '../Header';
import Input from '../inputs/Input';
import FooterContent from '../FooterContent';

const LoginModal = () => {
  const router = useRouter();

  const loginModal = useLoginModal();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn('credentials', {
      ...data,
      redirect: false
    })
      .then((callBack) => {
        setIsLoading(false);

        if (callBack?.ok) {
          toast.success('Logged in!');
          router.refresh();
          loginModal.onClose();
        }

        if (callBack?.error) {
          toast.error(callBack.error);
        }
      })
      .catch((err) => console.log(err));
  };

  const bodyContent = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Header title="Welcome back" subtitle="Login to your account" />
      <Input
        type="email"
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        type="password"
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={<FooterContent login />}
    />
  );
};

export default LoginModal;
