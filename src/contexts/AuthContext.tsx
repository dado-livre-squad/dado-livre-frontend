import * as SecureStore from 'expo-secure-store';
import { jwtDecode } from 'jwt-decode';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type AuthCtx = {
  email: string | null;
  loading: boolean;
  nome: string | null;
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthCtx>({} as AuthCtx);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  
  const [email, setEmail] = useState<string | null>(null);
  const [nome, setNome] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const token = await SecureStore.getItemAsync('jwt');
        if (token) setEmail(jwtDecode<{ sub: string }>(token).sub);
        if (token) setNome(jwtDecode<{ nome: string }>(token).nome)
      } catch {
        await SecureStore.deleteItemAsync('jwt'); 
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const signIn = async (token: string) => {
    await SecureStore.setItemAsync('jwt', token);
    setEmail(jwtDecode<{ sub: string }>(token).sub);
    setNome(jwtDecode<{ nome: string }>(token).nome);
  };

  const signOut = async () => {
    await SecureStore.deleteItemAsync('jwt');
    setEmail(null);
    setNome(null)
  };

  return (
    <AuthContext.Provider value={{ email, nome, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}