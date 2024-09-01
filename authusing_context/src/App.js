import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { Page } from '../src/component/Page.js'

function App() {
    const [theme,setTheme] = useState('light');
    return (
      <>
        <ThemeContext.Provider value={theme}>
          <Page />
          <label>
            <input 
            type='checkbox'
            checked={theme === 'dark'}
            onChange={(e)=>{
              setTheme(e.target.checked?'dark':'light')
            }}
            />
            useDarkMode
          </label>
        </ThemeContext.Provider>
      </>
    );
  }

export default App;
