import { Flex, useColorMode, FlexProps } from '@chakra-ui/core';

const Container = (props: FlexProps) => {
    const { colorMode } = useColorMode();

    const bgColor = { light: 'gray.50', dark: 'gray.900' };

    const color = { light: 'black', dark: 'white' };
    return <Flex direction="column" bg={bgColor[colorMode]} color={color[colorMode]} {...props} />;
};

export default Container;
