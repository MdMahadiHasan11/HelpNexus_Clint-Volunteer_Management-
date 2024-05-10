
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            {/* <DynamicTitle></DynamicTitle> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;