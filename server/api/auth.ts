export default defineEventHandler((event)=>{
    const params = getQuery(event);

    return {
        authorized: true,
        user: params.user
    }
})