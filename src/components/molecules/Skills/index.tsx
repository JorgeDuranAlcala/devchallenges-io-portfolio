import { Flex, Text, Title, Card } from "../../atoms";
/* import { FaHtml5, FaCss3, FaReact, FaJs, FaVuejs, FaDocker, FaGit, FaNodeJs } from 'react-icons/fa' */
import type { IconType } from "react-icons";

type Props = {
  title: string;
  skills: IconType[];
};

export function Skills({ title, skills }: Props) {
  return (
    <Card flex col gap={20} className="p-4 w-full">
      <Title>{title}</Title>
      <Flex gap={10} wrap="wrap">
        {skills.map((Skill, i) => (
            <Skill fontSize={48} color="blue" key={i} />
        ))}
      </Flex>
    </Card>
  );
}
