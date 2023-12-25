// creation d'une store 
import { configureStore } from "@reduxjs/toolkit";
import todoStore from "../redux/slices/todoSlice";
export default configureStore({reducer:{todos:todoStore}})





