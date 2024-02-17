import React from 'react';
import {useGetRole} from "../services/useGetRole.js";
import PatientDetailsProfile from "../features/patient/PatientDetailsProfile.jsx";
import Spinner from "../ui/Spinner.jsx";
import ClinicProfileDetails from "../features/clinic/ClinicProfileDetails.jsx";
import ReceptionistDetailsProfile from "../features/Receptionist/ReceptionistDetailsProfile.jsx";
import DoctorProfileDetails from "../features/Doctor/DoctorProfileDetails.jsx";

const Profile = () => {
    const {roles, isLoading: isLoadingRole} = useGetRole();

    if(isLoadingRole) return <Spinner/>
    let profile;

    if (roles.includes("OWNER")) {
        profile = <ClinicProfileDetails/>
    }
    if (roles.includes("RECEPTIONIST")) {
        profile = <ReceptionistDetailsProfile />
    }
    if (roles.includes("DOCTOR")) {
        profile = <DoctorProfileDetails/>
    }
    if (roles.includes("PATIENT")) {
        profile = <PatientDetailsProfile/>
    }
    return profile;
};

export default Profile;