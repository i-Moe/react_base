import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="nav" bg="blue.500" px={4}>
      <Flex justifyContent="space-between" alignItems="center">
        {/* Logo */}
        <Box>
          <Link to="/">
            <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
              My Website
            </span>
          </Link>
        </Box>

        {/* Hamburger Menu */}
        <IconButton
          display={{ base: 'block', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          variant="ghost"
        />

        {/* Navigation Links */}
        <Flex
          alignItems="center"
          justifyContent={{ base: 'center', md: 'flex-end' }}
          display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
          w={{ base: 'full', md: 'auto' }}
        >
          <Box>
            <ul>
              <li>
                <Link to="/" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/faq" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>
                  FAQ
                </Link>
              </li>
            </ul>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;



// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/faq">FAQ</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
