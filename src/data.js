import g1 from './assets/auto/geely1.jpg'
import g2 from './assets/auto/geely2.jpg'
import mz from './assets/auto/mazda.jpg'
import audi1 from './assets/auto/audiA6.jpg'
import audi2 from './assets/auto/audiA62.jpg'
import blue1 from './assets/auto/blue1.jpg'
import blue2 from './assets/auto/blue2.jpg'
import part1 from './assets/auto/part1.jpg'
import part2 from './assets/auto/part2.jpg'
const data = [
    {
        title: "Geely",
        description: "Восстановление геометрии кузова, лакокрасочного покрытия.",
        imageBefore: g1,
        imageAfter: g2,
    },
    {
        title: "Mazda",
        description: "Полировка кузова.",
        imageBefore: mz,
        imageAfter: null,
    },
    {
        title: "Audi A6",
        description: "Кузовной ремонт, рихтовка.",
        imageBefore: audi1,
        imageAfter: audi2,
    },
    {
        title: "Ford Eclipse",
        description: "Рихтовка, покраска.",
        imageBefore: part1,
        imageAfter: part2,
    },
    {
        title: "Chevrolet lacetti.",
        description: "Рихтовка, покраска.",
        imageBefore: blue1,
        imageAfter: blue2,
    }

]

export default data