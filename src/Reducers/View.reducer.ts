import { Dispatch } from "react";
import { VIEW, View } from "../Actions/View.action";

export const ViewReducer = (state: number = 1, action: View) => {
    switch(action.type){
        case VIEW: return state = action.payload
        default:
            return state;
    }
}
