'use client';

import React from 'react';
import { Input } from '../../ui';
import { ClearButton, ErrorText, RequiredSymbol } from '..';
import { useFormContext } from 'react-hook-form';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}
export const FormInput: React.FC<Props> = ({ className, name, label, required, ...props }) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const error = errors[name]?.message as string;

  const onClickClear = () => {
    setValue(name, '', {shouldValidate: true});
  };

  return (
    <div className={className}>
      {label && (
        <p className='font-medium mb-2'>
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className='relative'>
        <Input className='h-12 text-md' {...register(name)} {...props} />

        {value && <ClearButton onClick={onClickClear} />}
      </div>

      {error && <ErrorText text={error} className='mt-2' />}
    </div>
  );
};
