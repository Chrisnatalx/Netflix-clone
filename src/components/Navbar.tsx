import {
	ButtonGroup,
	Menu,
	MenuButton,
	Box,
	Flex,
	IconButton,
	Image,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
export const Navbar = () => {
	return (
		<Box
			fontFamily="Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif"
			height="60px"
			position="fixed"
			zIndex="1001"
			w="100%"
			bg="#202020"
			opacity="1"
		>
			<Flex
				minWidth="max-content"
				alignItems="center"
				justifyContent="space-between"
				gap="2"
				ml={20}
				mr={20}
			>
				<Menu>
					<ButtonGroup
						display="flex"
						justifyContent="flex-start"
						gap={4}
						color="#f9f9f9"
					>
						<MenuButton>
							<Image
								src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
								w="100px"
								h="50px"
							/>
						</MenuButton>
						<MenuButton>Inicio</MenuButton>
						<MenuButton>Series</MenuButton>
						<MenuButton>Peliculas</MenuButton>
						<MenuButton>Mi lista</MenuButton>
						<MenuButton>Explorar por idiomas</MenuButton>
					</ButtonGroup>
				</Menu>
				<Menu>
					<ButtonGroup display="flex" justifyContent="flex-end" gap={4}>
						<MenuButton
							as={IconButton}
							icon={<BsSearch />}
							bg="fff"
							color="#f9f9f9"
						></MenuButton>
					</ButtonGroup>
				</Menu>
			</Flex>
		</Box>
	);
};
