import { combineReducers } from "redux";
import machinesReducer from "./machinesReducer";
import vendorMachinesReducer from "./vendorMachinesReducer";
import selectedMachineReducer from "./selectedMachineReducer";
import selectedVendorMachineReducer from "./selectedVendorMachineReducer";

 const reducers = combineReducers({
    equipment: machinesReducer,
    vendorEquipment: vendorMachinesReducer,
    selectedEquipment: selectedMachineReducer,
    selectedVendorEquipment: selectedVendorMachineReducer
})

export default reducers