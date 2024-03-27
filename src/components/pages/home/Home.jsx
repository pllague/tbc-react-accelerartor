import Products from '../products/Products';
import Blog from '../blog/Blog';
import Search from '../../Search';

const Home = () => {
    return (
        <main className="flex flex-col justify-between">
            <Search />
            <Products />
            <Blog quantity={5}/>
        </main>
    );
}

export default Home;