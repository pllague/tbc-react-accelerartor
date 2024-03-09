import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-primary text-white">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="w-full h-[70px] lg:h-[85px] bg-secondary/90 sticky top-0 z-10">
      <div className="w-full h-full flex mx-auto justify-between lg:items-center max-w-[1400px]">
        {/* logo */}
        <a className="w-[40px] h-[40px] lg:w-[80px] lg:h-[80px]" href="/">
          <img src={logo} className="w-full h-full" alt="logo" />
        </a>
        {/* main navigation */}
        <Navigation />
      </div>
    </header>
  );
}

function Navigation() {
  return (
    <nav className="w-full lg:max-w-[600px] lg:bg-transparent ">
      <ul className="flex w-full h-full justify-end items-center text-medium">
        <li className="cursor-pointer pl-[50px]">
          <a
            className="hover:text-light_blue leading-[25px] transition duration-300 ease-linear"
            href="/"
          >
            Home
          </a>
        </li>
        <li className="cursor-pointer pl-[50px]">
          <a
            className="hover:text-light_blue leading-[25px] transition duration-300 ease-linear"
            href="/"
          >
            Menu link
          </a>
        </li>
      </ul>
    </nav>
  );
}

function Content() {
  return (
    <main className="flex flex-col justify-between">
      <Product />
    </main>
  );
}

function Product() {
  const cards = [];

  for (let index = 1; index <= 8; index++) {
    // Push the generated product object into the products array
    cards.push({ id: index, logo, index });
  }

  const cardComponents = cards.map((card) => (
    <Card key={card.id} logo={card.logo} index={card.index} />
  ));

  return (
    <section>
      <div className="w-full py-5 px-5 max-w-[1400px] mx-auto lg:py-10 lg:px-0">
        <h2 className="text-[40px] leading-[25px]">Products</h2>
        <div className="flex flex-wrap justify-center mt-[25px] lg:mt-[65px] gap-[25px] lg:gap-10">
          {cardComponents}
        </div>
      </div>
    </section>
  );
}

function Card({ logo, index }) {
  return (
    <div className="flex flex-col w-[280px] h-[290px] rounded-[10px] border border-light_blue overflow-hidden lg:w-[300px] lg:h-[400px] hover:scale-110 cursor-pointer transition duration-300 ease-linear ">
      <div className="flex h-[140px] w-full mb-[30px] lg:h-[3000px] lg:mb-[40px]">
        <img
          className="w-full h-full object-cover object-center"
          src={logo}
          alt="React"
        />
      </div>
      <div className="flex flex-col h-full px-[18px] lg:px-[22px]">
        <div className="pb-[25px]">
          <h5 className="text-[15px] leading-[24px] lg:text-[18px] lg:leading-[29px]">
            product {index}
          </h5>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-secondary w-full px-10 py-10 mt-5">
      <div className="w-full max-w-[80%] mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-around">
          <div className="flex flex-col gap-5 *:text-[14px] *:leading-[25px] ">
            <span>&copy; 2024 React Accelerator</span>
            <a
              className="hover:text-light_blue transition-all transform duration-300 ease-linear"
              href="/"
            >
              წესები და პირობები
            </a>
            <a
              className="hover:text-light_blue transition-all transform duration-300 ease-linear"
              href="/"
            >
              კონფიდენციალურობის პოლიტიკა
            </a>
          </div>
          <form className="flex h-[65px] bg-white rounded-[100px] items-center p-[5px] overflow-hidden my-auto">
            <input
              className="h-full bg-white bg-no-repeat bg-auto border-0 mb-0 pl-[25px] text-secondary focus:border-transparent focus:outline-none"
              maxLength="100"
              name="email"
              placeholder="Enter your mail"
              type="email"
              required
            />
            <input
              type="submit"
              className="bg-blue-500 hover:bg-light_blue rounded-[32px] py-3 px-10 text-[18px] font-medium cursor-pointer transition-all transform duration-300 ease-linear"
              value="Get our updates"
            />
          </form>
        </div>
      </div>
    </footer>
  );
}

export default App;
