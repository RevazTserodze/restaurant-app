import Cards from "./cards";
import Reviews from "./slider";
import Header from "./header";
import Info from "./info";
import Questions from "./questions";

const reviews = [
  {
    id: 1,
    name: "John",
    img: "https://img.mensxp.com/media/photogallery/2023/Oct/372913639_18385078846006294_949522542959275163_n_6528def78fd54.jpeg",
    description:
      "Absolutely loved the food at Rezi's Restaurant! The flavors were incredible, and the service was top-notch. Can't wait to go back again.",
  },
  {
    id: 2,
    name: "Emily",
    img: "https://static.vecteezy.com/system/resources/thumbnails/036/492/978/small/ai-generated-close-up-of-woman-in-hooded-coat-intense-gaze-and-detailed-facial-features-ai-generative-photo.jpg",
    description:
      "Had a fantastic experience at Rezi's Restaurant. The ambiance was lovely, and the dishes were so flavorful. Highly recommend trying their signature dish!",
  },
  {
    id: 3,
    name: "Michael",
    img: "https://img.mensxp.com/media/content/2013/Jul/1373956329_83718.jpg",
    description:
      "Visited Rezi's Restaurant for a special occasion and was blown away by the quality of the food and the attention to detail. It truly exceeded my expectations.",
  },
  {
    id: 4,
    name: "Sarah",
    img: "https://www.nhsfife.org/media/6a5kgegn/21-22-self-referral-digital-nhs-web-header-2000x1000pxfarah-march-22.png?width=400",
    description:
      "Rezi's Restaurant never disappoints! Every dish I've tried has been delicious, and the staff is always friendly and attentive. Definitely one of my favorite spots.",
  },
  {
    id: 5,
    name: "David",
    img: "https://www.ehn.org/media-library/man-wearing-face-mask.jpg?id=35738410&width=400&height=800&coordinates=0%2C369%2C0%2C495&quality=80",
    description:
      "I can't stop raving about Rezi's Restaurant! The food is consistently amazing, and I love the cozy atmosphere. It's my go-to place for a great meal.",
  },
];

const Home = () => {
  return (
    <div>
      <Header />
      <Cards />
      <Info />
      <Reviews reviews={reviews} />
      <Questions />
    </div>
  );
};

export default Home;
