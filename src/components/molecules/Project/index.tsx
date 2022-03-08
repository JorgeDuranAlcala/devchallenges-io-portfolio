import { Title, Image, Card, Subtitle, Text, Flex, Button } from '../../atoms';

type Props = {}

export function Project({}: Props) {
  return (
  <Card className="p-4 flex flex-col md:flex-row gap-5" /* justify="center" align="center" gap={15} */>
    <Flex flexG={0.4} className="h-[200px]">
        <Image full className="object-cover rounded-md" src="https://picsum.photos/400/400" />
    </Flex>
    <Flex direct="column" flexG={0.8}>
      <Title>Hey whats up</Title>
      <Subtitle>im the subtitle</Subtitle>
      <Text type="p" className="text-justify p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum harum enim illum dolores 
        earum aliquid recusandae, eum nesciunt fuga veritatis ducimus tenetur mollitia ipsam 
        veniam maxime soluta odit suscipit!  
      </Text>
      <Flex  align="center" className="w-full p-2" gap={20}>
        <Button
          primary 
          className='py-2 px-6'
          >
          Demo
        </Button>
        <Button secondary>
          secondary
        </Button>
      </Flex>
    </Flex>
  </Card>
  )
}

export default Project