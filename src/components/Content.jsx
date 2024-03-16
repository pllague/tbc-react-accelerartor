import Products from './Products';
import Blog from './Blog';
import Search from './Search';

const Content = () => {
    return (
        <main className="flex flex-col justify-between">
            <Search />
            <Products />
            <Blog />
        </main>
    );
}

export default Content;