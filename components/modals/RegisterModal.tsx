import React, { useState } from 'react';
import axios from 'axios';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import useRegisterModal from '@/hooks/useRegisterModal';
import Modal from './Modal';
import Header from '../Header';
import Input from '../inputs/Input';
import FooterContent from '../FooterContent';

const RegisterModal = () => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      name: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post('/api/register', data)
      .then(() => {
        toast.success('Registered!');
        registerModal.onClose();
        signIn('credentials', {
          ...data,
          redirect: false
        })
          .then((callBack) => {
            setIsLoading(false);

            if (callBack?.ok) {
              toast.success('Logged in!');
              router.refresh();
            }

            if (callBack?.error) {
              toast.error(callBack.error);
            }
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        toast.error('Something went wrong!');
      })
      .finally(() => setIsLoading(false));
  };

  const bodyContent = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Header title="Welcome to Korren" subtitle="Create an account" />
      <Input
        type="text"
        id="firstName"
        label="First name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        type="text"
        id="lastName"
        label="Last name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
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
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={<FooterContent />}
    />
  );
};

export default RegisterModal;
