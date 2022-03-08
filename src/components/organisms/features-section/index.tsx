import { Card, Flex, Title, Text, Button } from "../../atoms"
import {Pagination, Project} from "../../molecules";
import { projects } from "../../../data/data.json";
import { useState } from "react";

type Props = {}

export function FeaturesSection({}: Props) {

  const [selectedList, setSelectedList] = useState<typeof projects>(projects)
  const listOfTags = Array.from( new Set([...projects.map(p => p.tags)].flat()))

  const filterByTag = (tagName: string) => () => {
    setSelectedList(projects.filter(p => p.tags.includes(tagName)))
  }

  return (
    <Flex direct="column" className="w-full p-4" gap={20}>
        <Card flex col className="p-4 w-full" gap={20}>
            <Title>Projects ({projects.length})</Title>
            <Flex gap={10}>
              {listOfTags.map((l, i) => (
                <Button secondary onClick={filterByTag(l)} key={i}>{l}</Button>
              ))}
            </Flex>
        </Card>
        <Flex className="" direct="column" gap={20}>
        <Pagination
            items={selectedList}
          >
            {(data) => {
              return data?.items.map((projectData, i) => (
                <Project {...projectData} key={i} />
              ))
            }}
          </Pagination>
        </Flex>
    </Flex>
  )
}

export default FeaturesSection