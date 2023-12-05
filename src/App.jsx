import "./App.css"
import CreateArea from "./CreateArea"
import Home from "./Home"
import Nav from "./nav"

function App() {
    return (
        <>
        <Nav />

        <div className="container">
            <form>
            <CreateArea />
            <Home />
            </form>
            </div>
            </>
    )
}

export default App
