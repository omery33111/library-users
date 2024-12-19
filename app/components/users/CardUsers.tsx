"use client";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import { CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import Flag from '../utils/Flag';
import { getUsers } from './usersAPI';
import Loader from '../utils/Loader';
import { useState } from 'react';

const CardUsers = () => {

	const { data: users, isLoading, error } = useQuery({ queryKey: ["users"], queryFn: getUsers });

  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleEditClick = (user: any) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const handleSave = (updatedUser: any) => {
    // Update user locally or send updated data to the server
    console.log("Updated user:", updatedUser);
    setModalOpen(false);
  };

  if (isLoading) return <Loader />;
  if (error instanceof Error) return <p>Error: {error.message}</p>;
  
  return (
    <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", }}>
      {users?.data.map((user, index) => (
        <Card key={index} color="neutral" invertedColors sx={{ width: 320,
                                                              overflow: "auto",
                                                              transition: "transform 0.13s ease-in-out",
                                                              "&:hover": {
                                                                transform: "scale(1.08)",
                                                              },
                                                              boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.06), 0px 0px 5px rgba(0, 0, 0, 0.15)'}}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Avatar src={user.picture.medium} size="lg" />

          </Box>
          <CardContent>
          <Typography level="body-sm" sx={{ alignItems: "center", display: "flex"}}>
            <Flag country={user.location.country} /> {user.location.country}, {user.location.city}, {user.location.street.name} {user.location.street.number}
            </Typography>
            <Typography level="title-lg">
            {user.name.title} {user.name.first} {user.name.last}
            </Typography>
            <Typography level="body-sm" sx={{ alignItems: "center", display: "flex", mt: "auto", transform: "translateY(10px)" }}>
              <MailIcon sx={{ mr: 1 }} />
              {user.email}
            </Typography>
          </CardContent>
          <CardActions buttonFlex="0 1 80px">
            <IconButton variant="outlined" color="neutral" sx={{ mr: "auto" }}>
              <DeleteIcon/>
            </IconButton>
            <Button color="neutral" sx={{gap: "11px"}} onClick={() => handleEditClick(user)}>
              <EditIcon fontSize="small"/>
                Edit
            </Button>
          </CardActions>
        </Card>
      ))}

      {/* {selectedUser && (
        <EditUserModal
          open={isModalOpen}
          onClose={() => setModalOpen(false)}
          user={selectedUser}
          onSave={handleSave}
        />
      )} */}
    </div>
  )
}

export default CardUsers