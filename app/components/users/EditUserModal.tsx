"use client";

import { UserPost } from "@/app/models/User";
import { Box, Modal, Typography } from "@mui/material";
import { useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import UserFormGroup from "./UserFormGroup";

interface EditUserModalProps {
  open: boolean;
  onClose: () => void;
  user: UserPost;
  onSave: (updatedUser: UserPost) => void;
}

const EditUserModal: React.FC<EditUserModalProps> = ({ open, onClose, user, onSave }) => {
  const methods = useForm<UserPost>({
    defaultValues: user || {},
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user, reset]);

  const onSubmit: SubmitHandler<UserPost> = (data) => {
    onSave({ ...user, ...data });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "90%",
                  maxWidth: "400px",
                  maxHeight: "90vh",
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                  overflowY: "auto"}}>
        <Typography variant="h6" component="h2">Edit User</Typography>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
          <UserFormGroup user={user} onClose={onClose} />
          </form>
        </FormProvider>
      </Box>
    </Modal>
  );
};

export default EditUserModal;
