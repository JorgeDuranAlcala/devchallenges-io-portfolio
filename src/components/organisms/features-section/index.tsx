import { Card, Flex, Title } from "../../atoms"
import {Project} from "../../molecules";

type Props = {}

export function FeaturesSection({}: Props) {

  let renderProjects = [];

  for (let i = 0; i < 3; i++) {
      renderProjects.push(<Project/>)
  }

  return (
    <Flex direct="column" className="w-full p-4" gap={20}>
        <Card flex className="p-4 w-full">
            <Title>Projects (3)</Title>
        </Card>
        <Flex className="" direct="column" gap={20}>
            {renderProjects}
        </Flex>
    </Flex>
  )
}

export default FeaturesSection