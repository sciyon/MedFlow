import { useDispatch, useSelector, useStore } from 'react-redux'
import type { AppDispatch, AppStore, RootState } from './store'
import { jwtDecode } from 'jwt-decode';

export const decodeJwt = (token: string) => {
  try {
    const decoded = jwtDecode<any>(token);
    return decoded.userId;
  } catch (error) {
    console.error('Error decoding JWT', error);
    return null;
  }
};


export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()