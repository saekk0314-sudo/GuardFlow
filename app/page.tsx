'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const [staffs, setStaffs] = useState<any[]>([])

  useEffect(() => {
    loadStaffs()
  }, [])

  async function loadStaffs() {
    const { data, error } = await supabase
      .from('staffs')
      .select('*')

    if (error) {
      console.error(error)
      return
    }

    setStaffs(data || [])
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">
        GuardFlow Cloud
      </h1>

      <div className="mt-6 space-y-2">
        {staffs.map((staff) => (
          <div
            key={staff.id}
            className="border rounded-lg p-3"
          >
            {staff.staff_no} - {staff.name}
          </div>
        ))}
      </div>
    </main>
  )
}