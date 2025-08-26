"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill = "transparent",
  blur = 8,
  speed = "fast",
  waveOpacity = 0.5,
  fadeDuration = 2000,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  fadeDuration?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  let w: number, h: number, nt: number, i: number, x: number, ctx: any, canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getSpeed = () => (speed === "fast" ? 0.002 : 0.001);

  const getPrimaryColors = () => {
    if (typeof window === "undefined") return [];
    const style = getComputedStyle(document.documentElement);
    return [
      style.getPropertyValue("--color-primary-100")?.trim() ,
      style.getPropertyValue("--color-primary-300")?.trim() || "#156d6dff",
      style.getPropertyValue("--color-primary-500")?.trim() || "#00fcfc",
      style.getPropertyValue("--color-primary-600")?.trim() || "#00fcfc25",
      style.getPropertyValue("--color-primary-700")?.trim() || "#00fcfc54",
    ];
  };

  const [waveColors, setWaveColors] = useState<string[]>([]);
  useEffect(() => {
    setWaveColors(colors ?? getPrimaryColors());
  }, [colors]);

  const init = () => {
    canvas = canvasRef.current;
    if (!canvas) return;
    ctx = canvas.getContext("2d");
    if (!ctx) return;

    w = (ctx.canvas.width = window.innerWidth);
    h = (ctx.canvas.height = window.innerHeight);
    ctx.filter = `blur(${blur}px)`;
    nt = 0;

    window.onresize = function () {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    render();
  };

  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const render = () => {
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const alpha = Math.min(elapsed / fadeDuration, 1) * waveOpacity;

      ctx.clearRect(0, 0, w, h);
      ctx.globalAlpha = alpha;
      drawWave(5);

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (waveColors.length > 0) init();
    return () => cancelAnimationFrame(animationId);
  }, [waveColors]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        style={{ ...(isSafari ? { filter: `blur(${blur}px)` } : {}) }}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
