import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Объёмные буквы для кофейни",
    category: "Объёмные буквы с подсветкой",
    image: "/placeholder.jpg",
    description:
      "Золотые объёмные буквы из акрила с тёплой LED-подсветкой для уютной кофейни. Высота букв 40 см, монтаж на фасад. Работа заняла 5 дней от замера до установки.",
    tags: ["Акрил", "LED-подсветка", "Фасадный монтаж"],
  },
  {
    title: "Световой короб для салона красоты",
    category: "Световые вывески",
    image: "/placeholder.jpg",
    description:
      "Двусторонний световой короб с плёночной аппликацией. Работает круглосуточно, виден с 50 метров. Алюминиевая рама, матовая подложка, равномерная подсветка.",
    tags: ["Световой короб", "Алюминий", "Двусторонний"],
  },
  {
    title: "Навигационная система для БЦ",
    category: "Таблички и навигация",
    image: "/placeholder.jpg",
    description:
      "Полная навигационная система для бизнес-центра: указатели этажей, таблички на офисы, напольные стенды. Единый стиль в корпоративных цветах заказчика.",
    tags: ["Нержавеющая сталь", "Акрил", "Система навигации"],
  },
  {
    title: "Стенды для выставки",
    category: "Стенды и баннеры",
    image: "/placeholder.jpg",
    description:
      "Комплект из 6 roll-up стендов и 2 арок для участия в отраслевой выставке. Яркая печать, лёгкий монтаж, компактная транспортировка в сумках-чехлах.",
    tags: ["Roll-up", "Печать", "Выставочные конструкции"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши работы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Несколько примеров из наших последних проектов — смотрите, что мы умеем делать для бизнеса разного масштаба.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
