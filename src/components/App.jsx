import ClickHandler from './ClickHandler';
import Counter from './Counter';
import { Navbar, Search } from './Navbar'
import { ParentComponent } from "./ParentComponent";
import SimpleForm from './SimpleForm';

const App = ()=>{
    return (<>
    <Navbar />
    <Search />
    <ParentComponent/>
    <Counter />
    <ClickHandler/>
    <SimpleForm />
    </>)
}

export default App