import React, { useCallback, useState } from "react";
import axios from "axios";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import { signIn } from "next-auth/react";
import Modal from "./Modal";
import Header from "../Header";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import FooterContent from "../FooterContent";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const router = useRouter();

  const loginModal = useLoginModal();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callBack) => {
      setIsLoading(false);

      if (callBack?.ok) {
        toast.success("Logged in!");
        router.refresh();
        loginModal.onClose();
      }

      if (callBack?.error) {
        toast.error(callBack.error);
      }
    });
  };

  const bodyContent = (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
