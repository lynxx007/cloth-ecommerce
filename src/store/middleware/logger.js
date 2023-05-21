export const customLoggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action)
    }
    console.log('type :', action.type);
    console.log('payload :', action.payload);
    console.log('current state :', store.getState());

    next(action)

    console.log('new state :', store.getState());
}
