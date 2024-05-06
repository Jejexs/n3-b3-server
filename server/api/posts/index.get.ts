export default defineEventHandler((event) => {

    const { count } = getQuery(event)

    const countAsNumber = parseInt(count) || 1
    const persons = []

    for (let i = 0; i < countAsNumber; i++) {
        persons.push(
            {
                title: $faker.person.bio(),
                description: $faker.lorem.paragraph(),
            }
        )
    }

    return { countAsNumber, persons }

});