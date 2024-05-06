export default defineEventHandler((event) => {

    const { count } = getQuery(event)

    const countAsNumber = parseInt(count) || 1
    const books = []

    for (let i = 0; i < countAsNumber; i++) {
        books.push(
            {
                author: $faker.person.fullName(),
                bio: $faker.person.bio(),
                price: $faker.number.hex(255),
                proverb: $faker.hacker.phrase(),
            }
        )
    }

    return { countAsNumber, books }

});