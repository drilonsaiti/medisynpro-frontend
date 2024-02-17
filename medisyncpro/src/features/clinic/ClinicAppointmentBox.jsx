import styled from "styled-components";
import Button from "../../ui/Button.jsx";
import Heading from "../../ui/Heading.jsx";
import Modal from "../../ui/Modal.jsx";
import CreateAppointmentForm from "../Appointment/CreateAppointmentForm.jsx";
import React from "react";
import {useNavigate} from "react-router-dom";


const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    justify-content: center;
    align-items: center;
    background-color: var(--color-grey-0);;
    padding: 2rem;

`;

const StyledBoxDoctors = styled.div`
    background-color: var(--color-grey-0);
    border: ${props => (props.forUsers ? 'none' : '1px solid var(--color-grey-0)')};
    border-radius: 7px;
    width: 80%;
    overflow: hidden;
    margin: auto;
    padding: 2rem;

`

const ProfileCard = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    gap: 1rem;
    height: auto;
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-brand-700);
    /*border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);*/

    padding: 2rem 2rem;
    transition: transform 0.3s ease;

    &:hover {
        background: linear-gradient(to left top, rgba(16, 65, 47, .05) 0% /*bottom-right color*/, var(--hover-doctor-color) 50% /*middle color*/, rgba(16, 65, 47, .1) 100% /*top-left color*/),
        linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)) /*"faked" black background make sure to add last or it will appear before the transparent/colored layer*/;
    }

    /*&:hover{
        background:
                linear-gradient(to left top, rgba(16, 65, 47, .05) 0%!*bottom-right color*!, rgba(255, 255, 255, 1) 50% !*middle color*!, rgba(16, 65, 47, .1) 100% !*top-left color*!),
                linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))!*"faked" black background make sure to add last or it will appear before the transparent/colored layer*!;
    }*/
`;

const Avatar = styled.div`
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    margin-top: 2rem;
    overflow: hidden;
    border: 1px solid var(--color-brand-700);;
    box-sizing: border-box;
    padding: 2px;
`;

const AvatarImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`;

const Status = styled.div`
    position: absolute;
    top: 29%;
    right: 39%;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 1px solid var(--color-grey-0);
    transform: translate(-50%, -20%);
    background-color: var(--color-brand-700);
`;

const P = styled.p`
    color: var(--color-grey-400);
    font-size: 1.4rem;
`

const FlexGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ClinicAppointmentBox = ({doctors, forUsers}) => {
    const navigate = useNavigate();

    return (
        <StyledBoxDoctors forUsers={forUsers}>
            {!forUsers && <Heading type="h2">Doctors:</Heading>}

            <Container>
                {
                    doctors?.map(doctor => (
                        <ProfileCard key={doctor.doctorId}>
                            <Button variation="secondary" size="small"
                                    onClick={() => navigate(`/doctors/${doctor.doctorId}`)}
                                    style={{alignSelf: "self-end", marginTop: "1rem"}}>view profile</Button>
                            <Avatar>
                                <AvatarImg src={doctor?.imageUrl ? doctor?.imageUrl : '/default-user.jpg'}/>
                            </Avatar>
                            <Status/>
                            <FlexGroup>
                                <Heading type="h3">{doctor.doctorName}</Heading>
                                <P style={{fontWeight: "bold"}}>{doctor.clinic.clinicName}</P>
                                <P>{doctor?.specialization?.specializationName}</P>

                            </FlexGroup>
                            <Modal>
                                <Modal.Open opens="appointment">
                                    <Button size="medium">Make Appointment</Button>
                                </Modal.Open>

                                <Modal.Window name="appointment">
                                    <CreateAppointmentForm clinicId={doctor.clinic.clinicId}/>
                                </Modal.Window>
                            </Modal>
                        </ProfileCard>
                    ))
                }

            </Container>
        </StyledBoxDoctors>
    );
};

export default ClinicAppointmentBox;
