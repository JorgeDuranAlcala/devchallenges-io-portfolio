import { Card, Flex, Title } from '../../atoms'
import { Experience, Hobby, Profile } from '../../molecules'
import { experience } from "../../../data/experience.json";
import { hobbies } from "../../../data/hobbies.json";

type Props = {}

export function AboutMeSection({}: Props) {

  return (
    <Flex direct="column" gap={20}>
      <Profile/>
      <Card flex col gap={10} className="p-4">
        <Flex className="w-full">
          <Title>Experience</Title>  
        </Flex>
        {experience.map((exp, i) => (
          <Experience {...exp} key={i} />
        ))}
      </Card>
      <Card flex col gap={10} className="p-4">
        <Flex className="w-full">
          <Title>Hobbies</Title>  
        </Flex>
        {hobbies.map((hobie, i) => (
          <Hobby {...hobie} key={i} />
        ))}
      </Card>
    </Flex>
  )
}

export default AboutMeSection