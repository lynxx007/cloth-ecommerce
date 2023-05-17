import { createAction } from "../../util/reducer/reducer"
import { USER_ACTION_TYPE } from "./user.type"


export const setCurrentUser = (user) => {
    return createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user)
}