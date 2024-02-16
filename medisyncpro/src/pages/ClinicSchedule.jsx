import Row from "../ui/Row.jsx";
import Heading from "../ui/Heading.jsx";
import ClinicScheduleTable from "../features/clinicSchedule/ClinicScheduleTable.jsx";
import UpdateSettingsForm from "../features/settings/UpdateSettingsForm.jsx";
import GenerateSchedule from "../features/clinicSchedule/GenerateSchedule.jsx";
import ClinicScheduleTableOperations from "../features/clinicSchedule/ClinicScheduleTableOperations.jsx";

const ClinicSchedule = () => {
    return (
        <>
            <Row type="horizontal" change="yes">
                <Heading as="h1">All schedule</Heading>

            </Row>

            <Row>
                {/*<ClinicScheduleTable/>
                <AddClinicSchedule/>*/}
                <UpdateSettingsForm/>
                <GenerateSchedule/>
            </Row>

            <Row style={{marginTop: '3rem'}}>
                <ClinicScheduleTableOperations/>
                <ClinicScheduleTable/>
            </Row>

        </>
    );
};

export default ClinicSchedule;