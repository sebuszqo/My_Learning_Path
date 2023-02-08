import logo from './logo.svg';
import './App.css';
import {Dialog} from "./components/common/Dialog/Dialog";

function App() {
    return (<>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum dolor doloremque dolorum eligendi
                facilis hic iste molestias nesciunt nulla provident, reiciendis sequi similique voluptatem voluptatum!
                Ab delectus et quae.</p>
            <Dialog title={"Hello there "} body={"Witaj serdecznie na stronie głównej"}/>
            <Dialog><h1>Podaje tutaj wartość którą można odebrać w props.children</h1></Dialog>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum dolor doloremque dolorum eligendi
                facilis hic iste molestias nesciunt nulla provident, reiciendis sequi similique voluptatem voluptatum!
                Ab delectus et quae.</p>
        </>
    );
}

export default App

