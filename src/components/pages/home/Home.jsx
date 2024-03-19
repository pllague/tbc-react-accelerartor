import Products from '../products/Products';
import Blog from '../../Blog';
import Search from '../../Search';

const Home = () => {
    return (
        <main className="flex flex-col justify-between">
            <Search />
            <Products />
            <Blog />
        </main>
    );
}

export default Home;