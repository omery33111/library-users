"use client";

import { UserPost } from '@/app/models/User';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import UserFormGroup from './UserFormGroup';

interface PostUserProps {
  onClose: () => void;
  user: UserPost;
  onSave: (data: UserPost) => void;
}

const PostUser: React.FC<PostUserProps> = ({ onClose, user, onSave }) => {
  const methods = useForm<UserPost>({
    defaultValues: user,
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<UserPost> = (data) => {
    onSave({ ...user, ...data });
    onClose();
  };

  return (
    <div className = "add-user-section">
      <h3>Add New User</h3>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <UserFormGroup user={user} onClose={onClose} />
        </form>
      </FormProvider>
    </div>
  );
};

export default PostUser;
