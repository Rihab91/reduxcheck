import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid4 } from "uuid";
const todoSlice=createSlice ({
    // creation d'un reducer
    name :"todo",
    // state initial sans update
    initialState:[
        {description :"descrip" , id: uuid4() ,isDone :false},
        { description :"todo2" , id: uuid4() ,isDone :false},

    ],
    reducers:{
        add:(state , action)=>
    //  state.map(el=>el.id=="122333")
    // tabelau howa tableau l9dim m3ah nzidou descr
    [...state,{dscription :action.payload ,
    id:uuid4(),
    isDone :false }],
    check:(state,action)=>state.map(el=>(el.id==action.payload.id)?{...el,isDone:!el.isDone}:el)
        
    }
});
export default todoSlice.reducer
export const{add ,check}=todoSlice.actions
