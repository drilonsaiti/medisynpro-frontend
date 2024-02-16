import React from 'react';
import Row from "../ui/Row.jsx";
import UpdateSettingsForm from "../features/settings/UpdateSettingsForm.jsx";
import AccountDoctorSettings from "../features/settings/AccountDoctorSettings.jsx";
import AccountReceptionistSettings from "../features/settings/AccountReceptionistSettings.jsx";
import GenerateSchedule from "../features/clinicSchedule/GenerateSchedule.jsx";
import AccountSpecializationSettings from "../features/settings/AccountSpecializationSettings.jsx";
import CreateClinicForm from "../features/clinic/CreateClinicForm.jsx";
import {useClinicById, useClinicByIdAuth} from "../features/clinic/useClinic.js";
import Spinner from "../ui/Spinner.jsx";

const ClinicSettings = () => {

    return (
        <>

            <Row style={{marginBottom: '2rem'}}>
                <UpdateSettingsForm/>
                <GenerateSchedule/>
            </Row>


            <Row style={{marginBottom: '2rem'}}>
                <AccountDoctorSettings/>
            </Row>
            <Row style={{marginBottom: '2rem'}}>
                <AccountReceptionistSettings/>
            </Row>

            <Row style={{marginBottom: '2rem'}}>
                <AccountSpecializationSettings/>
            </Row>
{/*
            <Row>
                <AccountServicesSettings/>
            </Row>*/}
        </>
    );
};

export default ClinicSettings;