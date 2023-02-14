import Carousel from "react-bootstrap/Carousel";

const CarouselExample = () => {
  const picSum = [
    "https://picsum.photos/800/400",
    "https://fastly.picsum.photos/id/987/800/400.jpg?hmac=-X7G_B1skMeoSlLJ8F2biPRRg9x4fMvRcRqoJF2emgE",
    "https://fastly.picsum.photos/id/599/800/400.jpg?hmac=pLE5AoRRjp2Vxbl140qeNTIK8_RTlOyqSehx_AHeBsc",
  ];

  return (
    <Carousel className="">
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={picSum[0]} alt="First slide" />
        <Carousel.Caption className="d-none d-md-block">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={picSum[1]} alt="Second slide" />
        <Carousel.Caption className="d-none d-md-block">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={picSum[2]} alt="Third slide" />
        <Carousel.Caption className="d-none d-md-block">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselExample;
