import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const DashboardLayout: React.FC<childrenProps> = ({ children }) => {

    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default DashboardLayout;