// hooks/useInvestment.ts
import { useState, useCallback } from 'react';
import { useAuth } from '@/contexts/auth-context';

/**
 * Hook genérico para fazer requisições autenticadas com controle de loading e erros.
 */
export const useInvestment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const fetchWithAuth = useCallback(async <T>(
    fetchFunction: () => Promise<T>
  ): Promise<T | null> => {
    if (!user?.token) {
      setError('Usuário não autenticado');
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await fetchFunction();
      return result;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }, [user]);

  return { 
    fetchWithAuth, 
    loading, 
    error,
    isAuthenticated: !!user?.token
  };
};
