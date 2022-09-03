import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useDispatch } from 'react-redux';
import { textMarked, helpClick, closeHelpClick } from "./redux/markdownPreviewer/markdownPreviewerSlice"
import { useSelector } from "react-redux"


function App() {
  const inputText = useSelector((state) => state.markdownPreviewer.inputText)
  const [markdown, setMarkdown] = useState(inputText)
  const dispatch = useDispatch()
  const [isHelp, setisHelp] = useState(true)
  const [counter, setCounter] = useState(2)
  useEffect(() => {
    dispatch(textMarked(markdown))
  }, [markdown])
  useEffect(() => {
    if (counter % 2 === 0) {
      setisHelp(true)
    } else {
      setisHelp(false)
    }
  }, [counter])
  const buttonClick = () => {
    dispatch(helpClick())
    setCounter(counter + 1)
  }
  const closeButtonClick = () => {
    dispatch(closeHelpClick())
    setCounter(counter + 1)
  }
  console.log(inputText)
  return (
    <div className="App">
      <div style={{textAlign:"center"}}>Markdown Previewer</div>
      <div style={{marginLeft:"16rem"}}>
        <div className='textareadiv'>
          <textarea value={inputText} onChange={e => setMarkdown(e.target.value)} />
        </div>
        <div className='markdowndiv'>
          <ReactMarkdown children={inputText} />
        </div>
        {isHelp === true ? <button onClick={buttonClick}>?</button> : <button onClick={closeButtonClick}>?</button>}
      </div>
    </div>
  );
}

export default App;
