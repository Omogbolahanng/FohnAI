"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Trophy, Shield } from 'lucide-react'

const securityTasks = [
  { id: 1, task: "Enable Two-Factor Authentication", points: 20 },
  { id: 2, task: "Update Password Strength", points: 15 },
  { id: 3, task: "Complete Security Quiz", points: 10 },
  { id: 4, task: "Review App Permissions", points: 25 },
]

export function SecurityScoreGame() {
  const [score, setScore] = useState(0)
  const [completedTasks, setCompletedTasks] = useState<number[]>([])

  const handleTaskCompletion = (taskId: number, points: number) => {
    if (!completedTasks.includes(taskId)) {
      setScore(prevScore => prevScore + points)
      setCompletedTasks(prevTasks => [...prevTasks, taskId])
    }
  }

  return (
    <Card className="card-gradient card-shadow">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Trophy className="mr-2" />
          Security Score Challenge
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span>Your Score: {score}</span>
            <Shield className={score >= 50 ? "text-success" : "text-muted"} />
          </div>
          <Progress value={(score / 70) * 100} className="w-full" />
        </div>
        <ul className="space-y-2">
          {securityTasks.map((task) => (
            <li key={task.id} className="flex justify-between items-center">
              <span>{task.task}</span>
              <Button 
                size="sm" 
                onClick={() => handleTaskCompletion(task.id, task.points)}
                disabled={completedTasks.includes(task.id)}
              >
                {completedTasks.includes(task.id) ? 'Completed' : `Complete (+${task.points})`}
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

