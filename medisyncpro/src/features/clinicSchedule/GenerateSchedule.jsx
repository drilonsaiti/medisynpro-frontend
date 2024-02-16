import Button from "../../ui/Button.jsx";
import {useGenerateSchedule} from "./useGenerateSchedule.js";
import {useSettings} from "../settings/useSettings.js";
import Spinner from "../../ui/Spinner.jsx";

const GenerateSchedule = () => {

    const {
        isPending,
        settings: settingsData
    } = useSettings();

    const {generateSchedule, isCreating} = useGenerateSchedule();

    if (isPending || isCreating) return <Spinner/>
    const {clinicId = null} = settingsData || {};

    return (
        <Button onClick={() => generateSchedule(clinicId)}>Generate schedule</Button>
    );
};

export default GenerateSchedule;