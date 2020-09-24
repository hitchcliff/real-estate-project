import { Dispatch } from "react";

export const ViewAction = (event: number) => async (dispatch: Dispatch<View>) => {
    try {
        dispatch({
            type:  VIEW,
            payload: event 
        })

    } catch (error) {
       console.log("View", error) 
    }
}

export const VIEW = "VIEW"
export interface View {
    type: typeof VIEW,
    payload: number
}