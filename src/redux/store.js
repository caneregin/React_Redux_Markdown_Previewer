import { configureStore } from "@reduxjs/toolkit";
import markdownPreviewerSlice from "./markdownPreviewer/markdownPreviewerSlice";

export const store = configureStore({
    reducer:{
        markdownPreviewer: markdownPreviewerSlice
    },
})