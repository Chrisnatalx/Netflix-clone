import { useState } from "react";
import {
	Box,
	Button,
	Card,
	CardBody,
	Center,
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
	Spacer,
	Text,
} from "@chakra-ui/react";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { color } from "framer-motion";
const img =
	"https://assets.nflxext.com/ffe/siteui/vlv3/51e53f54-0d9f-40ec-9e05-c030def06ac9/ab35570d-9f06-452a-acac-05edc789bd3f/AR-es-20230515-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const Register = () => {
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);
	return (
		<>
			<Box
				bgSize="cover"
				bgImage={img}
				w="100%"
				h="100%"
				fontFamily="Roboto, sans-serif"
			>
				<Center py={20}>
					<Card h="700px" bg="rgba(0,0,0,0.8)" w="450px">
						<CardBody m={10} gap={8}>
							<Text color="#FFF" textAlign="left" fontSize="4xl">
								Registrarme
							</Text>
							<Input
								bg="#333"
								variant="filled"
								placeholder="Nombre Completo"
								mt={8}
								color="#fff"
							/>
							<Input
								bg="#333"
								variant="filled"
								placeholder="Email"
								mt={8}
								color="#fff"
								type="email"
							/>
							<InputGroup my={8}>
								<Input
									type={show ? "text" : "password"}
									pr="4.5rem"
									bg="#333"
									variant="filled"
									placeholder="Contraseña"
									color="#fff"
								/>
								<InputRightElement width="4.5rem">
									<Button onClick={handleClick} variant="link">
										{show ? <AiFillEye /> : <AiOutlineEyeInvisible />}
									</Button>
								</InputRightElement>
							</InputGroup>

							<Button
								bg="#e50914"
								variant="solid"
								w="100%"
								color="#fff"
								_hover={{ bg: "#e50914", color: "#fff" }}
							>
								Crear cuenta
							</Button>
							<Box display="flex" justifyContent="flex-end" mt={4} gap={4}>
								<Button as={IconButton} icon={<FcGoogle />} w="50%"></Button>
								<Button as={IconButton} icon={<BsGithub />} w="50%"></Button>
							</Box>
							<Button mt={3} textAlign="right" color="#b3b3b3" variant="link">
								Volver al inicio
							</Button>
							<Text color="#b3b3b3" mt={8}>
								Esta página está desarrollada por Christian Natale Lorem ipsum
								dolor sit amet, consectetur adipisicing.
							</Text>
						</CardBody>
					</Card>
				</Center>
			</Box>
		</>
	);
};
