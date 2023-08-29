import React from 'react'
import Carousel from 'better-react-carousel'
import {Box} from "@muiDep/index.ts";
import './style.css'


const Slider = () => {
    return(
        <>
            <Box sx={{width: '95%'}}>
                <Carousel cols={4} rows={1} gap={20}>
                    <Carousel.Item className={'item'}>
                        <img width="100%" src="https://picsum.photos/800/600?random=1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/800/600?random=2" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/800/600?random=3" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/800/600?random=2" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/800/600?random=1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/800/600?random=2" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/800/600?random=3" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/800/600?random=2" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/800/600?random=1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/800/600?random=2" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/800/600?random=3" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/800/600?random=2" />
                    </Carousel.Item>
                </Carousel>
            </Box>
        </>
    )
}

export default Slider