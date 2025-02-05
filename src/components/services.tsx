import { useState } from "react"

export function Services() {
    const [openService, setOpenService] = useState<string | null>(null)

    const services = [
        {
            id: "nail-therapy",
            title: "Цвяхотерапія",
            content: (
                <>
                    <p className="mb-4">Ми працюємо з твоїм запитом, обговорюємо його, шукаємо корінь проблеми і відповідно працюємо з ним, щоб ефективно і правильно його вирішити. За потреби використовую МАК-карти, щоб побачити проблему зі сторони підсвідомості.</p>
                    <p className="mb-4">Після чого, я пояснюю тобі, як правильно встати на дошку Садху, яка реакція буде в організмі, що означає соботаж мозку, як з ним працювати, про перші хвилини болю і відповідаю на твої питання стосовно всього процесу.</p>
                    <p className="mb-4">За потреби погружаємося в медитацію для розслаблення.</p>
                    <p className="mb-4">Після успішного подолання больового порогу, ми йдемо в терапію. Я ставлю питання, стосовно твоєї проблеми, ми відслідковуємо реакцію тіла, які ділянки дають про себе знати, на що звернути увагу і що це означає, окрім цього, звертаємо увагу і розбираємо твої думки - чому саме про це ти почала думати.</p>
                    <div className="mt-4">
                        <p className="font-semibold">Вартість - 299 PLN.</p>
                        <p>Тривалість - 2 години.</p>
                    </div>
                </>
            )
        },
        {
            id: "lila",
            title: "Трансформаційна гра Ліла",
            content: "Опис трансформаційної гри та її впливу на особистісний розвиток"
        },
        {
            id: "matrix",
            title: "Розбір матриці Долі",
            content: "Пояснення процесу розбору матриці та його значення"
        }
    ]

    return (
        <section id="services" className="py-12">
            <div>
                <h2 className="text-3xl font-bold mb-8">Мої послуги</h2>
                <div className="space-y-4">
                    {services.map((service) => (
                        <div key={service.id} className="border border-gray-200 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setOpenService(openService === service.id ? null : service.id)}
                                className="w-full p-6 bg-gray-50 flex justify-between items-center hover:bg-gray-100 transition-colors"
                            >
                                <h3 className="text-xl font-semibold">{service.title}</h3>
                                <svg
                                    className={`w-6 h-6 transform transition-transform ${
                                        openService === service.id ? "rotate-180" : ""
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                    openService === service.id ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                                }`}
                            >
                                <div className="p-6 text-gray-600">{service.content}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
  
  