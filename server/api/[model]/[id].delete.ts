export default defineEventHandler((event) => {

    const { id, model } = getRouterParams(event);

    return { id, model, deleted: 'true' }


}
);