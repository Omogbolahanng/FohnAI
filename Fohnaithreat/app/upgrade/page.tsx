import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Basic",
    price: "$9.99/month",
    features: [
      "Real-time threat monitoring",
      "Password manager",
      "Dark web scanning",
      "24/7 support",
    ],
  },
  {
    name: "Pro",
    price: "$19.99/month",
    features: [
      "All Basic features",
      "Advanced AI threat analysis",
      "VPN service",
      "Priority support",
      "Family protection (up to 5 users)",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom pricing",
    features: [
      "All Pro features",
      "Dedicated account manager",
      "Custom integrations",
      "Employee security training",
      "Advanced reporting and analytics",
    ],
  },
]

export default function UpgradePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Upgrade Your Plan</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.price}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-4">
                {plan.name === "Enterprise" ? "Contact Sales" : "Upgrade Now"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

