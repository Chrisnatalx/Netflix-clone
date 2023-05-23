import {
	Box,
	ButtonGroup,
	Flex,
	Image,
	Menu,
	MenuButton,
} from "@chakra-ui/react";

export const RegisterNavbar = () => {
	return (
		<Box
			fontFamily="Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif"
			height="70px"
			position="fixed"
			zIndex="1001"
			w="100%"
			bg="rgba(0,0,0,0.75)"
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
								w="167px"
								h="70px"
							/>
						</MenuButton>
					</ButtonGroup>
				</Menu>
			</Flex>
		</Box>
	);
};
