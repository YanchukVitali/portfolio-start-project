import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Contact} from "./layout/sections/contact/Contact";


function App() {
    return (
        <div className="App">
            <Header></Header>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
        </div>
    );
}

export default App;
