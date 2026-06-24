export default function Home() {
  const cards = [
    { title: '本日必要人数', value: 420 },
    { title: '配置済人数', value: 388 },
    { title: '不足人数', value: 32 },
    { title: '未了解人数', value: 57 },
    { title: '架電待ち人数', value: 21 },
    { title: '欠員人数', value: 4 },
    { title: '当日依頼件数', value: 12 },
    { title: 'リーダー不足', value: 3 },
    { title: '隊長不足', value: 1 },
    { title: '総交通費', value: '¥98,450' },
    { title: '売上', value: '¥1,250,000' },
    { title: '利益率', value: '28%' },
  ]

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">
        GuardFlow Cloud
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-xl shadow p-4"
          >
            <p className="text-sm text-gray-500">
              {card.title}
            </p>

            <p className="text-2xl font-bold mt-2">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}