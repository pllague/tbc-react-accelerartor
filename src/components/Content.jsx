import Products from './Products';
import Blog from './Blog';

const Content = () => {
    return (
        <main className="flex flex-col justify-between">
            <Products />
            <Blog />
        </main>
    );
}

export default Content;