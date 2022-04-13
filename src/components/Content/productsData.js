import FashionOne from '../../Images/fashionOne.svg';
import FashionTwo from '../../Images/fashionTwo.svg';
import FashionThree from '../../Images/fashionThree.svg';
import FashionFour from '../../Images/fashionFour.svg';
import FashionFive from '../../Images/fashionFive.jpg';
import FashionSix from '../../Images/fashionSix.jpg';
import FashionSeven from '../../Images/fashionSeven.jpg';
import FashionEight from '../../Images/fashionEight.jpg';

const productsData = [
  {
    id: 1,
    name: 'White Bomber Jacket',
    imagePath: FashionOne,
    price: 1900,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis arcu arcu, eu volutpat orci egestas et. Sed tincidunt egestas ex a vehicula. Proin laoreet massa vitae dolor varius, nec pretium lacus mattis. Aliquam eget dolor malesuada, semper erat ut, lobortis odio. Duis vitae elit feugiat erat aliquam imperdiet non sit amet felis. Praesent mollis arcu et ex viverra, quis finibus nulla egestas. Vestibulum aliquam convallis massa. Cras dolor lectus, tincidunt quis metus a, aliquet efficitur leo. Vestibulum vel purus eleifend sapien euismod molestie nec id lacus. Quisque vehicula arcu aliquet, tempor erat et, tempus elit. Integer viverra elit ac leo pharetra tristique. Duis in vestibulum justo, sed consectetur dolor. Maecenas ex dolor, dictum sed elementum et, maximus et mi.',
  },
  {
    id: 2,
    name: 'Orange Bomber Jacket',
    imagePath: FashionTwo,
    price: 1700,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis arcu arcu, eu volutpat orci egestas et. Sed tincidunt egestas ex a vehicula. Proin laoreet massa vitae dolor varius, nec pretium lacus mattis. Aliquam eget dolor malesuada, semper erat ut, lobortis odio. Duis vitae elit feugiat erat aliquam imperdiet non sit amet felis. Praesent mollis arcu et ex viverra, quis finibus nulla egestas. Vestibulum aliquam convallis massa. Cras dolor lectus, tincidunt quis metus a, aliquet efficitur leo. Vestibulum vel purus eleifend sapien euismod molestie nec id lacus. Quisque vehicula arcu aliquet, tempor erat et, tempus elit. Integer viverra elit ac leo pharetra tristique. Duis in vestibulum justo, sed consectetur dolor. Maecenas ex dolor, dictum sed elementum et, maximus et mi.',
  },
  {
    id: 3,
    name: 'Black Bomber Jacket',
    imagePath: FashionThree,
    price: 1500,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis arcu arcu, eu volutpat orci egestas et. Sed tincidunt egestas ex a vehicula. Proin laoreet massa vitae dolor varius, nec pretium lacus mattis. Aliquam eget dolor malesuada, semper erat ut, lobortis odio. Duis vitae elit feugiat erat aliquam imperdiet non sit amet felis. Praesent mollis arcu et ex viverra, quis finibus nulla egestas. Vestibulum aliquam convallis massa. Cras dolor lectus, tincidunt quis metus a, aliquet efficitur leo. Vestibulum vel purus eleifend sapien euismod molestie nec id lacus. Quisque vehicula arcu aliquet, tempor erat et, tempus elit. Integer viverra elit ac leo pharetra tristique. Duis in vestibulum justo, sed consectetur dolor. Maecenas ex dolor, dictum sed elementum et, maximus et mi.',
  },
  {
    id: 4,
    name: 'Black Jacket',
    imagePath: FashionFour,
    price: 1600,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis arcu arcu, eu volutpat orci egestas et. Sed tincidunt egestas ex a vehicula. Proin laoreet massa vitae dolor varius, nec pretium lacus mattis. Aliquam eget dolor malesuada, semper erat ut, lobortis odio. Duis vitae elit feugiat erat aliquam imperdiet non sit amet felis. Praesent mollis arcu et ex viverra, quis finibus nulla egestas. Vestibulum aliquam convallis massa. Cras dolor lectus, tincidunt quis metus a, aliquet efficitur leo. Vestibulum vel purus eleifend sapien euismod molestie nec id lacus. Quisque vehicula arcu aliquet, tempor erat et, tempus elit. Integer viverra elit ac leo pharetra tristique. Duis in vestibulum justo, sed consectetur dolor. Maecenas ex dolor, dictum sed elementum et, maximus et mi.',
  },
  {
    id: 5,
    name: 'Denim Shirt',
    imagePath:
      'https://m.media-amazon.com/images/I/71kATuV2Q0L._AC_UL480_FMwebp_QL65_.jpg',
    price: 2100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis arcu arcu, eu volutpat orci egestas et. Sed tincidunt egestas ex a vehicula. Proin laoreet massa vitae dolor varius, nec pretium lacus mattis. Aliquam eget dolor malesuada, semper erat ut, lobortis odio. Duis vitae elit feugiat erat aliquam imperdiet non sit amet felis. Praesent mollis arcu et ex viverra, quis finibus nulla egestas. Vestibulum aliquam convallis massa. Cras dolor lectus, tincidunt quis metus a, aliquet efficitur leo. Vestibulum vel purus eleifend sapien euismod molestie nec id lacus. Quisque vehicula arcu aliquet, tempor erat et, tempus elit. Integer viverra elit ac leo pharetra tristique. Duis in vestibulum justo, sed consectetur dolor. Maecenas ex dolor, dictum sed elementum et, maximus et mi.',
  },
  {
    id: 6,
    name: 'White Full Sleeve T-Shirt',
    imagePath: FashionSix,
    price: 2400,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis arcu arcu, eu volutpat orci egestas et. Sed tincidunt egestas ex a vehicula. Proin laoreet massa vitae dolor varius, nec pretium lacus mattis. Aliquam eget dolor malesuada, semper erat ut, lobortis odio. Duis vitae elit feugiat erat aliquam imperdiet non sit amet felis. Praesent mollis arcu et ex viverra, quis finibus nulla egestas. Vestibulum aliquam convallis massa. Cras dolor lectus, tincidunt quis metus a, aliquet efficitur leo. Vestibulum vel purus eleifend sapien euismod molestie nec id lacus. Quisque vehicula arcu aliquet, tempor erat et, tempus elit. Integer viverra elit ac leo pharetra tristique. Duis in vestibulum justo, sed consectetur dolor. Maecenas ex dolor, dictum sed elementum et, maximus et mi.',
  },
  {
    id: 7,
    name: 'Light Pink Oversized Shirt',
    imagePath: FashionSeven,
    price: 2600,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis arcu arcu, eu volutpat orci egestas et. Sed tincidunt egestas ex a vehicula. Proin laoreet massa vitae dolor varius, nec pretium lacus mattis. Aliquam eget dolor malesuada, semper erat ut, lobortis odio. Duis vitae elit feugiat erat aliquam imperdiet non sit amet felis. Praesent mollis arcu et ex viverra, quis finibus nulla egestas. Vestibulum aliquam convallis massa. Cras dolor lectus, tincidunt quis metus a, aliquet efficitur leo. Vestibulum vel purus eleifend sapien euismod molestie nec id lacus. Quisque vehicula arcu aliquet, tempor erat et, tempus elit. Integer viverra elit ac leo pharetra tristique. Duis in vestibulum justo, sed consectetur dolor. Maecenas ex dolor, dictum sed elementum et, maximus et mi.',
  },
  {
    id: 8,
    name: 'Beige V-Neck Shirt',
    imagePath: FashionEight,
    price: 2900,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis arcu arcu, eu volutpat orci egestas et. Sed tincidunt egestas ex a vehicula. Proin laoreet massa vitae dolor varius, nec pretium lacus mattis. Aliquam eget dolor malesuada, semper erat ut, lobortis odio. Duis vitae elit feugiat erat aliquam imperdiet non sit amet felis. Praesent mollis arcu et ex viverra, quis finibus nulla egestas. Vestibulum aliquam convallis massa. Cras dolor lectus, tincidunt quis metus a, aliquet efficitur leo. Vestibulum vel purus eleifend sapien euismod molestie nec id lacus. Quisque vehicula arcu aliquet, tempor erat et, tempus elit. Integer viverra elit ac leo pharetra tristique. Duis in vestibulum justo, sed consectetur dolor. Maecenas ex dolor, dictum sed elementum et, maximus et mi.',
  },
];

export default productsData;
