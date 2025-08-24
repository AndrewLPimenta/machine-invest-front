'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useAuth } from '@/contexts/auth-context';

interface Opcao {
  id: number;
  texto: string;
}

interface Pergunta {
  id: number;
  texto: string;
  opcoes: Opcao[];
}

interface Resultado {
  idPerfil: 1 | 2 | 3;
}

interface User {
  id: number;
  resultados?: Resultado[];
}

export default function FormularioPage() {
  const { user, updateUser } = useAuth();
  const router = useRouter();
  const [perguntas, setPerguntas] = useState<Pergunta[]>([]);
  const [respostas, setRespostas] = useState<{ [key: number]: number }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const carregarFormulario = async () => {
      try {
        // Redireciona se já tiver resultado
        if (user.resultados?.length) {
          const perfilId = user.resultados[0].idPerfil;
          router.push(
            perfilId === 1
              ? '/investimentos/conservador'
              : perfilId === 2
              ? '/investimentos/moderado'
              : '/investimentos/arrojado'
          );
          return;
        }

        const res = await axios.get('http://localhost:3001/api/formulario/1');
        setPerguntas(res.data.perguntas || []);
      } catch (err) {
        alert('Erro ao carregar formulário.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    carregarFormulario();
  }, [user, router]);

  const handleChange = (perguntaId: number, opcaoId: number) => {
    setRespostas(prev => ({ ...prev, [perguntaId]: opcaoId }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.keys(respostas).length !== perguntas.length) {
      alert('Você precisa responder todas as perguntas antes de enviar.');
      return;
    }

    try {
      await axios.post('http://localhost:3001/api/respostas', {
        idUsuario: user?.id,
        respostas: Object.entries(respostas).map(([idPergunta, idOpcao]) => ({
          idPergunta: Number(idPergunta),
          idOpcao: Number(idOpcao),
        })),
      });

      await axios.post('http://localhost:3001/api/resultado/calcular', {
        idUsuario: user?.id,
      });

      const perfilRes = await axios.get(`http://localhost:3001/api/usuario/${user?.id}`);
      const usuarioAtualizado: User = { ...user, resultados: [perfilRes.data] };
      updateUser(usuarioAtualizado);

      const perfilId = usuarioAtualizado.resultados[0]?.idPerfil;
      router.push(
        perfilId === 1
          ? '/investimentos/conservador'
          : perfilId === 2
          ? '/investimentos/moderado'
          : '/investimentos/arrojado'
      );
    } catch (err: any) {
      alert(err.response?.data?.error || 'Erro ao enviar respostas');
    }
  };

  if (!user) return <p>Carregando usuário...</p>;
  if (loading) return <p>Carregando formulário...</p>;
  if (!perguntas.length) return <p>Não há perguntas disponíveis.</p>;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', background: '#f5f5f5' }}>
      <h2 style={{ color: '#333' }}>Responda o formulário</h2>
      <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        {perguntas.map(pergunta => (
          <div key={pergunta.id} className="pergunta" style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>{pergunta.texto}</label>
            {pergunta.opcoes.map(opcao => (
              <label key={opcao.id} style={{ display: 'block' }}>
                <input
                  type="radio"
                  name={`pergunta_${pergunta.id}`}
                  value={opcao.id}
                  checked={respostas[pergunta.id] === opcao.id}
                  onChange={() => handleChange(pergunta.id, opcao.id)}
                  style={{ marginRight: '8px' }}
                />
                {opcao.texto}
              </label>
            ))}
          </div>
        ))}
        <button type="submit" style={{ padding: '10px 20px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Enviar respostas
        </button>
      </form>
    </div>
  );
}
