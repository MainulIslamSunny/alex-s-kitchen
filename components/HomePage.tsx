'use client';


import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import AddItemForm from '../components/AddItemForm';
import FoodItemCard from '../components/FoodItemCard';
import { useAppContext, AppProvider } from '../components/store';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  const handleAddItem = (name: string, details: string, imageUrl: string) => {
    dispatch({ type: 'ADD_ITEM', name, details, imageUrl });
  };

  const handleEditItem = (id: number) => {
    const item = state.items.find(item => item.id === id);
    if (!item) return;

    const newName = prompt('Enter new name:', item.name) || item.name;
    const newDetails = prompt('Enter new details:', item.details) || item.details;
    const newImageUrl = prompt('Enter new image URL:', item.imageUrl) || item.imageUrl;

    dispatch({ type: 'EDIT_ITEM', id, name: newName, details: newDetails, imageUrl: newImageUrl });
  };

  const handleDeleteItem = (id: number) => {
    dispatch({ type: 'DELETE_ITEM', id });
  };

  return (
    <>
      <Header />
      <main className="flex-grow">
        <Container className="mt-8">
          <Typography variant="h3" component="h1" className="text-center mb-8">
            Here is your Item
          </Typography>
          <Button variant="contained" color="primary" onClick={() => setIsAddFormOpen(true)} className="hover:bg-blue-500">
            Add Item
          </Button>
          <AddItemForm open={isAddFormOpen} onClose={() => setIsAddFormOpen(false)} onAdd={handleAddItem} />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {state.items.map(item => (
              <FoodItemCard
                key={item.id}
                id={item.id}
                name={item.name}
                details={item.details}
                imageUrl={item.imageUrl}
                onEdit={handleEditItem}
                onDelete={handleDeleteItem}
              />
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

const HomePageWithProvider: React.FC = () => (
  <AppProvider>
    <HomePage />
  </AppProvider>
);

export default HomePageWithProvider;

