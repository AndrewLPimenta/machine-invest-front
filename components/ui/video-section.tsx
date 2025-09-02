import React from 'react'
import YouTube from 'react-youtube'

const videos = [
  {
    id: 'NMTmXh4855c',
    title: 'Introdução aos Investimentos',
    description: 'Conceitos básicos para quem está começando a investir',
    duration: '15 min',
  },
  {
    id: 'y2sBkIX72-g',
    title: 'Tesouro Direto',
    description: 'Como investir em títulos públicos com segurança',
    duration: '12 min',

  },
  {
    id: 'kHJC3ioC-4o',
    title: 'CDB e Poupança',
    description: 'Comparando opções de renda fixa',
    duration: '18 min',
    
  },
  {
    id: 'lYAfnDorzo0',
    title: 'Fundos de Investimento',
    description: 'Entendendo fundos conservadores',
    duration: '25 min',
  },
  {
    id: 'in0XbfQEm2A',
    title: 'Planejamento Financeiro',
    description: 'Definindo metas e estratégias',
    duration: '30 min',
    
  },
]

export default function VideoSection() {
  const opts = {
    height: '400px',
    width: '800px',
    gap: '2rem',
    playerVars: {
      autoplay: 0,
    },
  }

  return (
    <div className="flex flex-wrap justify-center md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video) => (
        <div key={video.id} className={`p-4 rounded-lg bg-background/50`}>
          <YouTube videoId={video.id} opts={opts} />
          <h3 className="font-semibold mt-2">{video.title}</h3>
          <p className="text-sm text-muted-foreground">{video.description}</p>
          <span className="text-xs text-muted-foreground">{video.duration}</span>
        </div>
      ))}
    </div>
  )
}
