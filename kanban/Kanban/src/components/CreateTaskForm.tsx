import { PlusIcon } from "@radix-ui/react-icons"
import { Box, Button, Dialog, Flex, RadioGroup, Text, TextArea, TextField } from "@radix-ui/themes"


export const CreateTaskForm: React.FC = () => {

    return (
        <>
        <Dialog.Root>           

            <Dialog.Trigger>
            <Button>
                <PlusIcon /> Adicionar Tarefa
            </Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="32rem">
                <Dialog.Title>
                    Nova Tarefa
                </Dialog.Title>

                <Dialog.Description mb="4">
                    Adicione uma nova tarefa ao quadro.
                </Dialog.Description>

                <form>
                    <Flex direction="column" gap="4">
                        <Box maxWidth="32rem">
                            <Box mb={"1"}>
                                <Text as="label" htmlFor="title">
                                    Titulo
                                </Text>
                            </Box>
                            <TextField.Root id="title" name="title" placeholder="Informe o titulo da tarefa" required autoFocus mb="4"></TextField.Root>

                            <Box mb={"1"}>
                                <Text as="label" htmlFor="description">
                                    Descrição
                                </Text>
                            </Box>
                            <TextArea id="description" name="description" placeholder="Descreva a tarefa" mb="4"></TextArea>
                        </Box>

                        <Flex gap={"8"} mb={"2"}>
                            <Box>
                                <Text as="div">
                                    Situação
                                </Text>
                                <RadioGroup.Root name="status" defaultValue="todo">
                                    <RadioGroup.Item value="todo">
                                        Para Fazer
                                    </RadioGroup.Item>

                                    <RadioGroup.Item value="doing">
                                        Em progresso
                                    </RadioGroup.Item>

                                    <RadioGroup.Item value="finished">
                                        Finalizada
                                    </RadioGroup.Item>
                                </RadioGroup.Root>                                
                            </Box>

                            <Box>
                                <Text as="div">Prioridade</Text>
                                <RadioGroup.Root name="priority" defaultValue="low">
                                    <RadioGroup.Item value="low">
                                        Baixa
                                    </RadioGroup.Item>

                                    <RadioGroup.Item value="medium">
                                        Media
                                    </RadioGroup.Item>

                                    <RadioGroup.Item value="high">
                                        Alta
                                    </RadioGroup.Item>
                                </RadioGroup.Root>
                            </Box>
                        </Flex>

                        <Flex gap="2" justify="end">
                            <Dialog.Close>
                                <Button variant="soft" color="gray">Cancelar</Button>
                            </Dialog.Close>
                            <Button type="submit">
                                Criar Tarefa
                            </Button>
                        </Flex>

                        <Flex direction="column" gap="4">
                            
                        </Flex>
                    </Flex>
                </form>                
            </Dialog.Content>
        </Dialog.Root>
        </>
    )
}