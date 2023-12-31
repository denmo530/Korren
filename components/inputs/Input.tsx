import React, { useRef } from 'react';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';
import styles from '@/styles/Input.module.css';

interface InputProps {
  id: string;
  label?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({ id, label, type, register, disabled, errors, required }) => {
  const inputField = useRef<HTMLInputElement>(null);

  const inputStyle = {
    opacity: disabled ? 0.7 : 1,
    cursor: disabled ? 'not-allowed' : 'cursor',
    borderColor:
      inputField.current === document.activeElement && errors[id]
        ? 'rgb(253 164 175)'
        : errors[id]
        ? 'rgb(253 164 175)'
        : '#cbd5e0'
  };

  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        disabled={disabled}
        autoComplete="new-password"
        className={styles.input}
        id={id}
        type={type}
        placeholder=" "
        {...register(id, { required })}
        style={inputStyle}
      />
    </div>
  );
};

export default Input;
