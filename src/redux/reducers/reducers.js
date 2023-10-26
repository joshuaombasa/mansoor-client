import { combineReducers } from "redux";
import machinesReducer from "./machinesReducer";
import vendorMachinesReducer from "./vendorMachinesReducer";
import selectedMachineReducer from "./selectedMachineReducer";

 const reducers = combineReducers({
    equipment: machinesReducer,
    vendorEquipment: vendorMachinesReducer,
    selectedEquipment: selectedMachineReducer,
})

export default reducers