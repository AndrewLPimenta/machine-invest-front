// hooks/useInvestment.ts
import { useState, useCallback } from 'react';
import { investmentService } from '@/service/investmentService';
import { useAuth } from '@/contexts/auth-context';

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

// Uso no componente:
// const { fetchWithAuth, loading, error } = useInvestment();
// const investments = await fetchWithAuth(() => investmentService.getInvestments());