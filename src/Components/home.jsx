import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    const email = location.state?.email;

    return (
        <h1>Hello <br />{email}</h1>
    );
};

export default Home;