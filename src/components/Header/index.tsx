import { Link } from "react-router-dom";
import { Container } from "../Container";

const Header = () => {
  return (
    <header className="w-full border-b bg-background shadow-md">
      <Container>
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-primary hover:text-accent transition-colors"
        >
          MyApp
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-primary hover:underline transition"
          >
            Home
          </Link>
          <Link
            to="/characters"
            className="text-sm font-medium text-primary hover:underline transition"
          >
            Characters
          </Link>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
