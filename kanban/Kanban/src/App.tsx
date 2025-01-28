import { Box, Flex, Heading } from "@radix-ui/themes";
import { CreateTaskForm } from "./components/CreateTaskForm";

export default function App() {


  return (
    <>
    <Box maxWidth="80rem" mx="auto">
      <Flex align="center" gap="4">
        <Heading size="8" weight="light">React Kanban</Heading>
        <CreateTaskForm />
      </Flex>
    </Box>

    <Box maxWidth="80rem" mx="auto">
    <Heading as="h2">Quadro de Tarefas</Heading>
    </Box>
  </>
  )
}