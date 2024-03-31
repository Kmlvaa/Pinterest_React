import React from 'react';
import Styles from './deletePost.module.scss';
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
import { deletePost } from '../../services/PostService';

export default function DeletePost({id, getPosts, isOpen, onClose}){
    const toast = useToast();
    console.log(id)

    const formik = useFormik({
        onSubmit: ({resetForm}) => {
          try {
              deletePost(id);
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
                    <ModalHeader>Delete post</ModalHeader>
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

