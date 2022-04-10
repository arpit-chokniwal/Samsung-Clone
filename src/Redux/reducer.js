import { COMPARE_DATA } from "./actionType";

const initial = {compare:[]};
export const reducer = (store=initial,{type,payload})=>{

    switch(type){
        case COMPARE_DATA:
            return {...store, compare:payload};
        default:
            return store;
    }
}