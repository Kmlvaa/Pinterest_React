import React, { useState } from 'react';
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
  useToast,
  FormControl,
  FormLabel
} from '@chakra-ui/react'
import { useFormik } from 'formik';
import { editPost, getPostDetails } from '../../services/PostService';
import User from '../../Images/user.png'
import { Input } from 'semantic-ui-react';

export default function UpdatePost({ id, isOpen, onClose }) {
  const toast = useToast();
  const [details, setDetails] = useState([]);

  const postDetails = async () => {
    try {
      let resp = getPostDetails(id);
      setDetails(resp.data);
    }
    catch (err) {
      console.log(err.response.data);
    }
  }

  const formik = useFormik({
    initialValues: {
      url: null,
      title: '',
      description: ''
    },
    onSubmit: ({ values, resetForm }) => {
      try {
        editPost(id, values);
        toast({
          title: "Post deleted.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        postDetails();
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
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <img src={details?.url} width={100} height={100} />
              <FormLabel>You can not change image</FormLabel>
            </FormControl>

            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input placeholder='Add title' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input placeholder='Add description' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

