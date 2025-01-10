"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send } from 'lucide-react'

type Message = {
  text: string;
  isUser: boolean;
}

export function SecurityChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm your personal security assistant. How can I help you today?", isUser: false }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages(prev => [...prev, { text: input, isUser: true }])
      setInput('')
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "I'm processing your request. I'll get back to you shortly with personalized security advice.", isUser: false }])
      }, 1000)
    }
  }

  return (
    <Card className="card-gradient card-shadow h-[400px] flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center">
          <MessageCircle className="mr-2" />
          Security Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow overflow-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.isUser ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${message.isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
              {message.text}
            </span>
          </div>
        ))}
      </CardContent>
      <div className="p-4 border-t flex">
        <Input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your security question..."
          className="flex-grow mr-2"
        />
        <Button onClick={handleSend}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  )
}

