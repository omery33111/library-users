"use client";

import Button from '@mui/joy/Button';
import { Container } from '@mui/material';
import { useState } from 'react';
import CardUsers from '../users/CardUsers';
import PostUser from '../users/PostUser';
import { UserGet } from '@/app/models/User';


const MainContent = ({ searchQuery }: { searchQuery: string }) => {
  const [showForm, setShowForm] = useState(false);
  const [localUsers] = useState<UserGet[]>([]);

  const handleAddUserClick = () => {
    setShowForm(!showForm);
  };

  return (
    <Container maxWidth="xl" style = {{minHeight: "100vh"}}>
      <div style = {{display: "flex", justifyContent: "space-between", marginBottom: "1vh"}}>
        <h2>Users</h2>
            <Button variant="solid" size='sm' onClick={handleAddUserClick} style = {{alignItems: "center", backgroundColor: "#213555"}}>
              Add user
            </Button>
      </div>

      {showForm && (
        <PostUser user={{ name: { title: '', first: '', last: '' }, email: '', location: { country: '', city: '', street: { name: '', number: 0 } } }}
                  onClose={() => setShowForm(false)}
                  onSave={(data) => {
                    console.log('Saved User:', data);
                  }}
                  localUsers={localUsers}/>
        )}
      
      <CardUsers searchQuery={searchQuery} />
      
    </Container>
  )
}

export default MainContent