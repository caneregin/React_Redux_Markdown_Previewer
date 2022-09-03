import { createSlice } from "@reduxjs/toolkit";
import { helpdata } from "../../helpdata"

export const markdownPreviewerSlice = createSlice({
    name: "markdownPreviewer",
    initialState: {
        inputText: "",
        help: helpdata
    },
    reducers: {
        textMarked: (state, action) => {
            state.inputText = action.payload
        },
        helpClick: (state, action) => {
            state.inputText = state.help
        },
        closeHelpClick: (state, action) => {
            state.inputText = ""
        }
    }
})
export const { textMarked, helpClick, closeHelpClick } = markdownPreviewerSlice.actions
export default markdownPreviewerSlice.reducer