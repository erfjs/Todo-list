import { useState } from "react";
import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";

function AddTask({ addTask }) {
  const toast = useToast();
  const [content, setContent] = useState("");
  const [statusInput, setStatusInput] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    const taskText = content.trim();

    if (!taskText) {
      toast({
        title: "Enter your task",
        position: "top",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      setStatusInput(false);

      return setContent("");
    }

    const task = {
      id: nanoid(),
      body: taskText,
      check: false,
    };

    addTask(task);
    setContent("");
  }

  if (content && !statusInput) {
    setStatusInput(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='4' mb='4'>
        <Input
          h='46'
          borderColor={!statusInput ? "red.300" : "transparent"}
          variant='filled'
          placeholder='Enter your task'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          colorScheme='twitter'
          px='8'
          pl='10'
          pr='10'
          h='46'
          type='submit'
        >
          Add
        </Button>
      </HStack>
    </form>
  );
}

export default AddTask;
