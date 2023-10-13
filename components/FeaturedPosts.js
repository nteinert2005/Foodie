import Slider from 'react-slick'
import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import theme from '../theme'

export const data = [
  {
    tag: 'Breakfast',
    img: 'https://lemonlimes.loftocean.com/elementor/wp-content/uploads/sites/3/2022/10/nathan-dumlao-w9zCH4Lpflw-unsplash.jpg',
    title: 'Test Food #1',
    description: 'Some description goes here.',
  },
  {
    tag: 'Dinner',
    img: '',
    title: 'Test Food #2',
    description: 'SOme description goes here.',
  },
  {
    tag: 'Snacks',
    img: '',
    title: 'Test Food #3',
    description: 'Some description goes here.',
  },
]

const FeaturedPosts = () => {
  const [slider, setSlider] = useState(null)

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <div> Next </div>,
    prevArrow: <div> Prev </div>,
  }

  return (
    <Box pos={'relative'} height="600px" width="full" overflow={'hidden'}>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        bgColor={theme.colors.brand.accentColor}
        borderRadius={'full'}
        pos={'absolute'}
        left={'50px'}
        top={'250'}
        zIndex={'999'}
        onClick={() => slider?.slickPrev()}
      >
        <ChevronLeftIcon w={8} h={8} />
      </IconButton>
      <IconButton
        bgColor={theme.colors.brand.accentColor}
        borderRadius={'full'}
        pos={'absolute'}
        right={'50px'}
        top={'250'}
        zIndex={'999'}
        onClick={() => slider?.slickNext()}
      >
        <ChevronRightIcon h={8} w={8} />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {data.map((item, index) => (
          <Box
            key={index}
            height="6xl"
            pos={'relative'}
            backgroundPosition={'center'}
            backgroundRepeat={'no-repeat'}
            backgroundSize={'cover'}
            backgroundImage={`url(${item.img})`}
          >
            <Flex background="rgba(0,0,0,.3)">
              <Container height="600px" maxWidth="100%" pos={'relative'}>
                <Stack
                  spacing={6}
                  textAlign={'center'}
                  w="full"
                  pos={'absolute'}
                  bottom="0"
                  left="0"
                  padding="2em"
                >
                  <Badge
                    width="125px"
                    background={theme.colors.brand.accentColor}
                    color="white"
                    padding="5px"
                    margin={'0 auto'}
                  >
                    {item.tag}
                  </Badge>
                  <Heading fontSize={'5xl'}>{item.title}</Heading>
                  <Text fontSize={'lg'}>{item.description}</Text>
                </Stack>
              </Container>
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export default FeaturedPosts
