import React from 'react';
import Styles from './index.module.scss'
import {
    FormControl,
    FormLabel,
    Textarea,
    Input,
    InputGroup,
    InputLeftAddon,
    Stack,
    Switch,
    styled
} from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'
import { useState } from 'react';

const Index = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.first_section}>
                    <p>Create pin</p>
                    <button>Publish</button>
                </div>
                <div className={Styles.second_section}>
                    <div>
                        <Stack spacing={3}>
                            <Input placeholder='large size' size='lg' type='file'/>
                        </Stack>
                    </div>
                    <div className={Styles.form_control}>
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input type='text' placeholder='Add a title'/><br /><br />
                            <FormLabel>Description</FormLabel>
                            <Textarea placeholder='Add a detailed description' /><br /><br />
                            <FormLabel>Link</FormLabel>
                            <Input type='text' placeholder='Add a link'/>
                        </FormControl>
                        <div>
                            <div className={Styles.menu_trigger} onClick={() => { setOpen(!open) }}>
                                <div>More options  <TriangleDownIcon /></div>
                            </div>
                            <div className={`${open ? Styles.active : Styles.inactive}`}>
                                <div className={Styles.dropdown_menu}>
                                    <ul>
                                        <DropdownItem text={'Allow people to comment'} />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
function DropdownItem(props) {
    return (
        <li className={Styles.dropdownItem}>
            <Stack align='center' direction='row'>
                <Switch size='lg' />
            </Stack>
            <p>{props.text}</p>
        </li>
    );
}

export default Index;
