import React from 'react';
import { Card, CardContent, Typography, IconButton, CardMedia } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface FoodItemCardProps {
  id: number;
  name: string;
  details: string;
  imageUrl: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const bgColors = [
  'bg-red-200',
  'bg-green-200',
  'bg-blue-200',
  'bg-yellow-200',
  'bg-purple-200',
];

const FoodItemCard: React.FC<FoodItemCardProps> = ({ id, name, details, imageUrl, onEdit, onDelete }) => {
  const bgColor = bgColors[id % bgColors.length];

  return (
    <Card className={`mb-4 ${bgColor}`}>
      {imageUrl && <CardMedia component="img" height="140" image={imageUrl} alt={name} />}
      <CardContent className="flex flex-col">
        <div className="flex justify-between items-center">
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <div>
            <IconButton onClick={() => onEdit(id)} color="primary">
              <EditIcon className="hover:text-blue-500" />
            </IconButton>
            <IconButton onClick={() => onDelete(id)} color="secondary">
              <DeleteIcon className="hover:text-red-500" />
            </IconButton>
          </div>
        </div>
        <Typography variant="body2" color="textSecondary">
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FoodItemCard;
