import {
  Wrap,
  WrapItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';

const featureData = [
  {
    title: 'Karena 1',
    imageSrc: 'https://placeholder.com/200/200',
    description:
      'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
  },
  {
    title: 'Karena 2',
    imageSrc: 'https://placeholder.com/200/200',
    description:
      'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
  },
  {
    title: 'Karena 3',
    imageSrc: 'https://placeholder.com/200/200',
    description:
      'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
  },
  {
    title: 'Karena 4',
    imageSrc: 'https://placeholder.com/200/200',
    description:
      'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
  },
  {
    title: 'Karena 5',
    imageSrc: 'https://placeholder.com/200/200',
    description:
      'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
  },
];

export default function Features() {
  return (
    <div className='flex flex-col my-5 p-8'>
      <h1 className='text-2xl font-semibold mb-4'>
        Mengapa harus ikut JagoCPNS?
      </h1>
      <Wrap spacing='30px'>
        {featureData.map((feature, index) => (
          <WrapItem key={index}>
            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
            >
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={feature.imageSrc}
                alt={feature.title}
              />

              <Stack>
                <CardBody>
                  <Heading size='md'>{feature.title}</Heading>
                  <Text py='2'>{feature.description}</Text>
                </CardBody>
              </Stack>
            </Card>
          </WrapItem>
        ))}
      </Wrap>
    </div>
  );
}
