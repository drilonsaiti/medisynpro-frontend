import Spinner from "../../ui/Spinner.jsx";
import Row from "../../ui/Row.jsx";
import {HiChevronDown, HiChevronRight} from "react-icons/hi2";
import Form from "../../ui/Form.jsx";
import FormRow from "../../ui/FormRow.jsx";
import Select from "react-select";
import {useReceptionistByClinicId, useReceptionistSearch} from "../receptionist/useReceptionist.js";
import makeAnimated from 'react-select/animated';
import ReceptionistTable from "../receptionist/ReceptionistTable.jsx";
import styled from "styled-components";
import React, {useState} from "react";
import {useAddReceptionistToClinic} from "../receptionist/useAddReceptonistToClinic.js";
import CreateClinicForm from "../clinic/CreateClinicForm.jsx";
import {useClinicByIdAuth} from "../clinic/useClinic.js";

const animatedComponents = makeAnimated();
const Title = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-600);
    font-family: "Sono",sans-serif;
`;


const Card = styled.div`
    cursor: pointer;
    background-color: var(--color-grey-0);
    border-radius: 9px;
    padding: 2.4rem 4rem;
`
const AccountSpecializationSettings = () => {
    const {clinic,isLoading,refreshClinic} = useClinicByIdAuth()

    const [isOpen, setIsOpen] = useState(false);

    if (isLoading) return <Spinner/>;

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };


    return (
        <Row>
            <Card onClick={toggleAccordion}>
                <Row type="horizontal">
                    <Title>Add/Remove specialization & service</Title>
                    {isOpen ? <HiChevronDown/> : <HiChevronRight/>}
                </Row>
            </Card>

            {isOpen && (
                <Row>
                    <CreateClinicForm clinicToEdit={clinic} forSettings={true} refreshClinic={refreshClinic}/>
                </Row>
            )}
        </Row>
    );
};


export default AccountSpecializationSettings;