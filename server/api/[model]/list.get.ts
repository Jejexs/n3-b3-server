export default defineEventHandler((event) => {
    const people = []

    const limit = 30

    for (let i = 0; i < limit; i++) {
        const person = {
            fullName: $faker.person.fullName(),
            bio: $faker.person.bio(),
            firstName: $faker.person.firstName(),
            gender: $faker.person.gender(),
            zodiacSign: $faker.person.zodiacSign(),
            Croco: $faker.animal.crocodilia()
        }
        people.push(person)
    }

    return { people }
})

// export default defineEventHandler((event) => {
//     const { count } = getQuery(event)

//     const countAsNumber = parseInt(count) || 1
//     const persons = []

//     for (const i of [countAsNumber]) {
//         persons.push({
//             name: $faker.person.fullName(),
//             gender: $faker.person.gender(),

//         })
//     }
//     return { countAsNumber, persons }

// });