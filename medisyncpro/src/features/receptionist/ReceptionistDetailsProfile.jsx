import Row from "../../ui/Row.jsx";
import ReceptionistHeaderBox from "./ReceptionistHeaderBox.jsx";
import Spinner from "../../ui/Spinner.jsx";
import {useReceptionistForProfile} from "./useReceptionist.js";

const ReceptionistDetailsProfile = () => {
    const {isLoading, receptionist} = useReceptionistForProfile();

    if (isLoading) return <Spinner/>
    return (
        <Row style={{marginBottom: '4rem'}}>
            <ReceptionistHeaderBox receptionist={receptionist}/>
        </Row>
    );
};

export default ReceptionistDetailsProfile;