import React, { createContext, useReducer, ReactNode, useContext } from 'react';

interface FoodItem {
  id: number;
  name: string;
  details: string;
  imageUrl: string;
}

interface State {
  items: FoodItem[];
}

type Action =
  | { type: 'ADD_ITEM'; name: string; details: string; imageUrl: string }
  | { type: 'EDIT_ITEM'; id: number; name: string; details: string; imageUrl: string }
  | { type: 'DELETE_ITEM'; id: number };

  const initialState: State = {
    items: [
      { id: 1, name: 'Spaghetti', details: 'Italian pasta with tomato sauce', imageUrl: '/images/spaghetti.jpg' },
      { id: 2, name: 'Sushi', details: 'Japanese rice and fish dish', imageUrl: '/images/sushi.jpg' },
      { id: 3, name: 'Tacos', details: 'Mexican tortilla with meat and vegetables', imageUrl: '/images/tacos.jpg' },
    ],
  };
  

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, { id: state.items.length + 1, name: action.name, details: action.details, imageUrl: action.imageUrl }],
      };
    case 'EDIT_ITEM':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.id ? { ...item, name: action.name, details: action.details, imageUrl: action.imageUrl } : item
        ),
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
      };
    default:
      return state;
  }
};

const AppContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
