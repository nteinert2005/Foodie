import { Container, Flex, ListItem, UnorderedList } from '@chakra-ui/react'
import theme from '../theme'

import data from '../blogSettings.json'

const Navbar = () => {
  return (
    <Flex
      background={theme.colors.brand.navbarColor}
      p={'2em'}
      height="auto"
      alignItems={'center'}
      justifyContent={'center'}
      width="100%"
    >
      <Container
        maxWidth={'1280px'}
        justifyContent={'space-between'}
        display={'flex'}
      >
        <UnorderedList
          textTransform="uppercase"
          display={'flex'}
          fontWeight={'bold'}
          listStyleType={'none'}
        >
          {data.navigation.map((navItem, index) => {
            if (index < 4) {
              return (
                <ListItem
                  _hover={{
                    color: theme.colors.brand.accentColor,
                  }}
                  margin={'10px'}
                >
                  {navItem.name}
                </ListItem>
              )
            }
          })}
        </UnorderedList>
        <img
          src="https://lemonlimes.loftocean.com/elementor/wp-content/uploads/sites/3/2022/10/site-logo-medium-white-550x99.png"
          width="310px"
        />
        <UnorderedList
          textTransform="uppercase"
          display={'flex'}
          fontWeight={'bold'}
          listStyleType={'none'}
        >
          {data.navigation.map((navItem, index) => {
            if (index > 3) {
              return (
                <ListItem
                  _hover={{
                    color: theme.colors.brand.accentColor,
                  }}
                  margin={'10px'}
                >
                  {navItem.name}
                </ListItem>
              )
            }
          })}
        </UnorderedList>
      </Container>
    </Flex>
  )
}

export default Navbar
