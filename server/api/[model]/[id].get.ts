export default defineEventHandler((event) => {

    // const id = getRouterParam(event, 'id')
    // const model = getRouterParam(event, 'model')

    const { id, model } = getRouterParams(event)

    const { limit } = getQuery(event)

    const person = $faker.person.fullName()


    return { model, person }
})