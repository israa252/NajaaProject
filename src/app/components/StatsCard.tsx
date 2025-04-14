// components/StatsCard.tsx
interface StatsCardProps {
    title: string
    value: number
    icon: string
  }
  
  export default function StatsCard({ title, value, icon }: StatsCardProps) {
    return (
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <div className="text-3xl">{icon}</div>
        <div className="text-xl font-bold mt-2">{value}</div>
        <div className="text-gray-600">{title}</div>
      </div>
    )
  }
  