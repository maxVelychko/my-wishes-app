
const initialState = {
    wishes: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "READ_FETHCHED_WISHES":
            return Object.assign({}, state, {
                wishes: [ ...action.payload.wishes ],
            });
        case "WISH_CHANGED":
            const wish = action.payload.wish;
            const index = state.wishes.findIndex(item => item.key === wish.key);

            state.wishes[index] = wish;
            return Object.assign({}, state, {
                wishes: [ ...state.wishes ],
            });
        case "ADD_WISH":
            // const articlesWithKeys = action.articles.map((article, index) => ({  ...article, key: `${index}` }));
            return Object.assign({}, state, {
                wishes: [ ...state.wishes, ...[action.payload.wish] ],
            });
        default:
            return state;
    }
};