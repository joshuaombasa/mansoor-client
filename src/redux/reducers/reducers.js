import { combineReducers } from "redux";
import machinesReducer from "./machinesReducer";
import vendorMachinesReducer from "./vendorMachinesReducer";
import selectedMachineReducer from "./selectedMachineReducer";
import selectedVendorMachineReducer from "./selectedVendorMachineReducer";
import loginReducer from "./loginReducer";

 const reducers = combineReducers({
    equipment: machinesReducer,
    vendorEquipment: vendorMachinesReducer,
    selectedEquipment: selectedMachineReducer,
    selectedVendorEquipment: selectedVendorMachineReducer,
    loggedInData : loginReducer
})

export default reducers