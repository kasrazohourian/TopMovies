
import { Navbar } from "./components/Navbar"
import { Popular } from "./components/Popular"
import {Tv} from "./components/Tv"
import { Trend } from "./components/trending";
import { Genre } from "./components/Genre";






export function App() {

return(

<>


<Navbar/>
<br />
<Popular/>
<br />
<br />
<br />
<br />
<Tv/>
<br />
<br />
<br />

<Trend/>

<Genre/>

</>

);
}

export default App