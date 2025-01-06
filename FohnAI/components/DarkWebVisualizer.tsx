"use client"

import React, { useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye } from 'lucide-react'

export function DarkWebVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        const width = canvas.width
        const height = canvas.height

        const drawNode = (x: number, y: number, size: number, color: string) => {
          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fillStyle = color
          ctx.fill()
        }

        const drawLine = (x1: number, y1: number, x2: number, y2: number) => {
          ctx.beginPath()
          ctx.moveTo(x1, y1)
          ctx.lineTo(x2, y2)
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
          ctx.stroke()
        }

        const animate = () => {
          ctx.clearRect(0, 0, width, height)
          
          // Draw some random nodes and connections
          for (let i = 0; i < 20; i++) {
            const x = Math.random() * width
            const y = Math.random() * height
            drawNode(x, y, 2, 'rgba(255, 255, 255, 0.7)')
            
            if (i > 0) {
              const prevX = Math.random() * width
              const prevY = Math.random() * height
              drawLine(x, y, prevX, prevY)
            }
          }
          
          // Draw a "threat" node
          const threatX = width / 2 + Math.sin(Date.now() / 1000) * 50
          const threatY = height / 2 + Math.cos(Date.now() / 1000) * 50
          drawNode(threatX, threatY, 5, 'rgba(255, 0, 0, 0.8)')
          
          requestAnimationFrame(animate)
        }
        
        animate()
      }
    }
  }, [])

  return (
    <Card className="card-gradient card-shadow">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Eye className="mr-2" />
          Dark Web Activity Monitor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <canvas 
          ref={canvasRef} 
          width={300} 
          height={200} 
          className="w-full bg-black rounded-md"
        />
      </CardContent>
    </Card>
  )
}

