export function Process() {
    const steps = [
      {
        number: "1",
        title: "Формуємо запит",
        description: "Консультуємося та визначаємо Ваш запит для розкриття проблеми.",
      },
      {
        number: "2",
        title: "Аналізуємо",
        description: "В вашому випадку - проводимо необхідний аналіз спільно з вами.",
      },
      {
        number: "3",
        title: "Інструктаж",
        description: "В процесі, Вам будуть надані чіткі інструкції для дій.",
      },
      {
        number: "4",
        title: "Трансформація проблеми",
        description: "Спільно працюємо над трансформацією проблеми.",
      },
      {
        number: "5",
        title: "Час змін",
        description: "Обговорюємо процес після завершення сеансу.",
      },
    ]
  
    return (
      <section id="process" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Що ви отримаєте від зустрічей?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {steps.map((step) => (
              <div key={step.number} className="p-6 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-[#9399FA] text-white rounded-full flex items-center justify-center mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  