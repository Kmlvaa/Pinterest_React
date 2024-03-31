import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    Button,
    useToast
} from '@chakra-ui/react'
import { useFormik } from 'formik';
import { editPost } from '../../services/PostService';

export default function UpdatePost({id, getPosts, isOpen, onClose}){
    const toast = useToast();

    const formik = useFormik({
        onSubmit: ({resetForm}) => {
          try {
            //   editPost(id);
              toast({
                title: "Post deleted.",
                status: "success",
                duration: 2000,
                isClosable: true,
              });
              getPosts();
              resetForm();
              
              setTimeout(() => {
                onClose();
              }, 1000)
          } catch (error) {
            console.log(error);
          }
        }
      })

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontWeight='bold' mb='1rem'>
                            Are you sure?
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={formik.handleSubmit} variant='ghost'>yes</Button>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

