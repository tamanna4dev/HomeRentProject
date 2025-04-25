import React from 'react';
import { FavoritesProvider } from '../src/screen/FavoritesContext';  
import StackNavigation from '../src/Navigation/StackNavigation'

export default function _layout() {
  return (
    <FavoritesProvider>
      <StackNavigation />
    </FavoritesProvider>
  );
}
