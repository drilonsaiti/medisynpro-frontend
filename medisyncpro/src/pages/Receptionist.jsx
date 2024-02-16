import Row from "../ui/Row.jsx";
import Heading from "../ui/Heading.jsx";
import ReceptionistTable from "../features/receptionist/ReceptionistTable.jsx";
import AddReceptionist from "../features/receptionist/AddReceptionist.jsx";

const Receptionist = () => {
    return (
        <>
            <Row type="horizontal" change="yes">
                <Heading as="h1">All receptionist</Heading>
            </Row>

            <Row>
                <ReceptionistTable/>
                <AddReceptionist/>
            </Row>


        </>
    );
};

export default Receptionist;