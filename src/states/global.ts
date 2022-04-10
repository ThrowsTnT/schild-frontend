import create from 'zustand/react';

type GlobalStore = {
  uiState: 'default' | 'analyzing' | 'analyzed';
  setUiState: (state: 'default' | 'analyzing' | 'analyzed') => void;
};

export const useGlobalStore = create<GlobalStore>((set) => ({
  uiState: 'default',
  setUiState: (uiState: 'default' | 'analyzing' | 'analyzed') =>
    set((state) => {
      uiState;
    }),
}));
