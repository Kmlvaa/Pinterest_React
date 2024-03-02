import React from 'react';
import Styles from './index.module.scss'
import user from '../../../Images/user.png'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input
} from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    Textarea,
    Select
} from '@chakra-ui/react'

const Index = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div className={Styles.main}>
            <div className={Styles.header}>
                <h1>Edit Profile</h1>
                <p>Keep your personal details private. Information you add here is visible to anyone who can view your profile.</p>
            </div>
            <div className={Styles.photo}>
                <p>Photo</p>
                <div>
                    <img src={user} width={70} height={70} />
                    <Button onClick={onOpen}>Change</Button>
                </div>
                <Modal onClose={onClose} isOpen={isOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Change your picture</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Input type='file' placeholder='Choose' />
                        </ModalBody>
                        <ModalFooter>
                            <Button className={Styles.modalFooterbtn}>Save</Button>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
            <div>
                <FormControl className={Styles.formControl}>
                    <div className={Styles.form_name}>
                        <div>
                            <FormLabel>First name</FormLabel>
                            <Input type='text' />
                        </div>
                        <div>
                            <FormLabel>Last name</FormLabel>
                            <Input type='text' />
                        </div>
                    </div>
                    <FormLabel>About</FormLabel>
                    <Textarea placeholder='Tell your story' />
                    <FormLabel>Pronouns</FormLabel>
                    <Select placeholder='Add your pronouns'>
                        <option value='option1'>Male</option>
                        <option value='option2'>Female</option>
                    </Select>
                    <p>Choose up to 2 sets of pronouns to appear on your profile so
                        others know how to refer to you. You can edit or remove these any time.</p>
                    <FormLabel>Username</FormLabel>
                    <Input type='text' />
                </FormControl>
                <Button className={Styles.saveBtn}>Save</Button>
            </div>
        </div>
    );
}

export default Index;
