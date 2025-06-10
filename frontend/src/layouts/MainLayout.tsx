import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Wrapper } from "../components/styles/Wrapper.styled";

const MainLayout = () => {
	return (
		<>
			<Navbar />
			<Wrapper>
				<Outlet />
			</Wrapper>
			<Footer />
		</>
	);
};

export default MainLayout;
