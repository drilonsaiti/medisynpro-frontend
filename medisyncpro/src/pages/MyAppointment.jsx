import React from 'react';
import AppointmentPatientTable from "../features/appointment/AppontmentPatientTable.jsx";
import Row from "../ui/Row.jsx";
import {useMyAppointment} from "../features/appointment/useAppointments.js";
import Spinner from "../ui/Spinner.jsx";

const MyAppointment = () => {
    const {isLoading, appointments, totalElements} = useMyAppointment();

    if (isLoading) return <Spinner/>

    return (
        <Row>
            <AppointmentPatientTable appointment={appointments}/>
        </Row>
    );
};

export default MyAppointment;