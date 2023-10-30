import { create } from 'zustand';

type State = {
  email: string,
  firstName: string,
  lastName: string
}

type Action = {
  setUser: (userData: State) => void
  removeUser: (userData: State) => void
}


const useStore = create<State & Action>((set) => ({
    email: '',
    firstName: '',
    lastName: '',
    setUser: (userData) => set(() => ({ 
        email: userData.email, 
        firstName: userData.firstName, 
        lastName: userData.lastName 
    })),
    removeUser: () => set(() => ({ 
        email: '', 
        firstName: '', 
        lastName: '' 
    })),
}));

export default useStore;
