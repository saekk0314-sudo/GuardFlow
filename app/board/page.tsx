'use client';
import { useState } from 'react';

export default function AssignmentBoard() {
  const [sites] = useState([
    { id: 1, name: '新宿駅前工事', required: 5, assigned: 3 },
    { id: 2, name: '渋谷ビル解体', required: 3, assigned: 0 },
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {/* 左: 不足現場 */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="font-bold mb-4">不足現場一覧</h2>
        {sites.map(site => (
          <div key={site.id} className="border-b p-2 hover:bg-gray-50 cursor-pointer">
            {site.name} ({site.assigned}/{site.required})
          </div>
        ))}
      </div>
      
      {/* 中央: 現場詳細 */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="font-bold mb-4">現場詳細</h2>
        {/* 詳細情報レンダリング */}
      </div>

      {/* 右: AI候補 */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="font-bold mb-4">AI推奨候補</h2>
        {/* ランキング順に隊員表示 */}
      </div>
    </div>
  );
}
