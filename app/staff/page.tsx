'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function StaffList() {
  const [staffs, setStaffs] = useState<any[]>([]);

  useEffect(() => {
    async function fetchStaffs() {
      const { data } = await supabase.from('staffs').select('*');
      setStaffs(data || []);
    }
    fetchStaffs();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">番号</th>
            <th className="p-2">氏名</th>
            <th className="p-2">状態</th>
          </tr>
        </thead>
        <tbody>
          {staffs.map(s => (
            <tr key={s.id} className="border-b">
              <td className="p-2">{s.staff_number}</td>
              <td className="p-2">{s.name}</td>
              <td className="p-2">{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
