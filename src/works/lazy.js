import { Suspense,lazy } from 'react';

const About=lazy(()=>import("./components/About"))
const Contact=lazy(()=>import("./components/Contact"))
function App(){
    const [page,setPage]=useState(null)
    return (
        <div>
            <h1>lazy component</h1>
            <button onClick={()=>setPage("About")}>About</button>
            <button onClick={()=>setPage("Contact")}>Contact</button>

            <Suspense fallback={<p>Loading...</p>}>
             {page=== "About" && <About/>}
             {page==="Contact"&& <Contact/>}
            </Suspense>
        </div>
    )
}
export default App;
