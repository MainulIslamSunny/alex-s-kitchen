import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import { useDropzone } from 'react-dropzone';

interface AddItemFormProps {
  open: boolean;
  onClose: () => void;
  onAdd: (name: string, details: string, imageUrl: string) => void;
}

const AddItemForm: React.FC<AddItemFormProps> = ({ open, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => setImage(acceptedFiles[0]),
    accept: { 'image/*': [] },
  });

  const handleSubmit = () => {
    const imageUrl = image ? URL.createObjectURL(image) : '';
    onAdd(name, details, imageUrl);
    setName('');
    setDetails('');
    setImage(null);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Item</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Details"
          type="text"
          fullWidth
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <div
          {...getRootProps()}
          className="dropzone border-2 border-dashed p-4 text-center my-4 cursor-pointer"
        >
          <input {...getInputProps()} />
          {image ? (
            <p>{image.name}</p>
          ) : (
            <p>Drag 'n' drop an image here, or click to select one</p>
          )}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cancel</Button>
        <Button onClick={handleSubmit} color="primary">Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddItemForm;
