import Row from "../ui/Row.jsx";
import Heading from "../ui/Heading.jsx";
import ClinicServiceTable from "../features/clinicServices/ClinicServiceTable.jsx";
import AddClinicService from "../features/clinicServices/AddClinicService.jsx";
import ServiceTableOperations from "../features/clinicServices/ServiceTableOperations.jsx";

const ClinicServices = () => {
    return (
        <>
            <Row type="horizontal" change="yes">
                <Heading as="h1">All services</Heading>
                <ServiceTableOperations/>

            </Row>

            <Row>
                <ClinicServiceTable/>
                <AddClinicService/>
            </Row>


        </>
    );
};

export default ClinicServices;