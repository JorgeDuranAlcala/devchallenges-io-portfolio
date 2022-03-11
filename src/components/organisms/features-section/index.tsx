import { Card, Flex, Title, Button } from "../../atoms";
import { Pagination, Project, Skills } from "../../molecules";
import { projects } from "../../../data/data.json";
import { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJs,
  FaVuejs,
  FaDocker,
  FaGit,
  FaNodeJs,
} from "react-icons/fa";

type Props = {};

export function FeaturesSection({}: Props) {
  const [selectedList, setSelectedList] = useState<typeof projects>(projects);
  const listOfTags = Array.from(
    new Set([...projects.map((p) => p.tags)].flat())
  );

  const filterByTag = (tagName: string) => () => {
    setSelectedList(projects.filter((p) => p.tags.includes(tagName)));
  };

  return (
    <Flex direct="column" className="w-full p-4" gap={20}>
      <Flex className="w-full" gap={15}>
        <Skills
          title="Frontend"
          skills={[FaCss3, FaHtml5, FaJs, FaReact, FaVuejs]}
        />
        <Skills title="Backend" skills={[FaDocker, FaGit, FaNodeJs]} />
      </Flex>
      <Card flex col className="p-4 w-full" gap={20}>
        <Title>Projects ({projects.length})</Title>
        <Flex gap={10} className="w-full">
          {listOfTags.map((tag, i) => (
            <Button secondary className="p-1" onClick={filterByTag(tag)} key={i}>
              {tag}
            </Button>
          ))}
        </Flex>
      </Card>
      <Flex direct="column" gap={20} className="w-full">
        <Pagination items={selectedList} className="w-full">
          {(data) => {
            return data?.items.map((projectData, i) => (
              <Project {...projectData} key={i} className="w-full" />
            ));
          }}
        </Pagination>
      </Flex>
    </Flex>
  );
}

export default FeaturesSection;
