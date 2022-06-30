import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { FiTrash2 } from "react-icons/fi";

function DeleteAllTask({ deleteTaskAll }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        // colorScheme='red'
        px='8'
        h='45'
        color='red.500'
        mt='8'
        onClick={onOpen}
      >
        Delete All
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w='90%'>
          <ModalHeader>Do you really want to delete all tasks?</ModalHeader>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              No
            </Button>
            <Button colorScheme='red' onClick={() => deleteTaskAll()}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function DeleteTask({ task, deleteTask }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton icon={<FiTrash2 />} isRound='true' onClick={onOpen} />

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w='90%'>
          <ModalHeader>Do you really want to delete the task?</ModalHeader>
          <ModalBody>
            <Text>{task.body}</Text>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              No
            </Button>
            <Button
              colorScheme='red'
              onClick={() => deleteTask(task.id, onClose)}
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export { DeleteTask, DeleteAllTask };
