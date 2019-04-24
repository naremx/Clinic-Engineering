const INITIAL_STATE = {
    DetailDoc: {},
};

const User_Detail_Doc = ( state = INITIAL_STATE , action ) => {
        switch(action.type){
            case 'DETAIL_DOC' :
                return {
                    ...state,
                    DetailDoc: action.payload
                };
            default:
                return state;
        }
}

export default User_Detail_Doc;