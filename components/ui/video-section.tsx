"use client"

import React, { useState } from "react"
import YouTube from "react-youtube"

const videos = [
  { id: "NMTmXh4855c", title: "Introdução aos Investimentos", description: "Conceitos básicos para quem está começando a investir", duration: "8 min" },
  { id: "y2sBkIX72-g", title: "Tesouro Direto", description: "Como investir em títulos públicos com segurança", duration: "12 min" },
  { id: "kHJC3ioC-4o", title: "CDB e Poupança", description: "Comparando opções de renda fixa", duration: "17 min" },
  { id: "lYAfnDorzo0", title: "Fundos de Investimento", description: "Entendendo fundos conservadores", duration: "4 min" },
  { id: "in0XbfQEm2A", title: "Planejamento Financeiro", description: "Definindo metas e estratégias", duration: "17 min" },
]

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(videos[0].id) // vídeo ativo inicial
  const opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 }, // autoplay ativado ao trocar de vídeo
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Player principal */}
      <div className="w-full rounded-lg overflow-hidden shadow-lg">
        <YouTube videoId={activeVideo} opts={opts} className="w-full" />
      </div>

      {/* Grid de vídeos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className={`flex flex-col bg-white dark:bg-gray-900 border rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden ${
              activeVideo === video.id ? "border-primary" : "border-gray-200 dark:border-gray-700"
            }`}
          >
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
              <p className="text-sm text-muted-foreground mb-2 flex-1">{video.description}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-muted-foreground">{video.duration}</span>
                <button
                  onClick={() => setActiveVideo(video.id)}
                  className="px-3 py-1 text-sm text-white bg-primary rounded hover:bg-primary/90 transition-colors"
                >
                  Assistir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
