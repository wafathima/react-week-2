import { createContext,useContext,useState } from 'react';

const ThemeContext=createContext()

function ThemeProvider({children}){
const [theme,setTheme]=useState("light");

const toggleTheme=()=>{
    setTheme(theme==="light"? "dark" : "light");
};
return (
    <ThemeContext.Provider  value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
);
}
function ThemedButton(){
    const {theme,toggleTheme}=useContext(ThemeContext);
    return (
        <button 
        onClick={toggleTheme}
        style={{backgroundColor:theme==="light"? "white":"black",
            color:theme==="light"? "black": "white",
            padding:"10px 20px",
            margin:"10px"
        }}
        >
         Current Theme: {theme} (click to change)   
        </button>
    );
}
function App(){
    return (
        <ThemeProvider>
            <h1>useContext Example</h1>
            <ThemedButton/>
        </ThemeProvider>
    );
}
export default App;