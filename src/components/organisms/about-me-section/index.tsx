import { Card, Flex, Title } from '../../atoms'
import { Experience, Hobby, Profile } from '../../molecules'

type Props = {}

export function AboutMeSection({}: Props) {

  let renderExp = [], renderHobbies = [];

  for (let i = 0; i < 3; i++) {
    renderExp.push(<Experience/>)
  }

  for (let i = 0; i < 3; i++) {
    renderHobbies.push(<Hobby/>)
  }

  return (
    <Flex direct="column" gap={20}>
      <Profile/>
      <Card flex col gap={10} className="p-4">
        <Flex className="w-full">
          <Title>Experience</Title>  
        </Flex>
        {renderExp}
      </Card>
      <Card flex col gap={10} className="p-4">
        <Flex className="w-full">
          <Title>Hobbies</Title>  
        </Flex>
        {renderHobbies}
      </Card>
    </Flex>
  )
}

export default AboutMeSection