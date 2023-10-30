import { combineReducers } from "redux";
import machinesReducer from "./machinesReducer";
import vendorMachinesReducer from "./vendorMachinesReducer";
import selectedMachineReducer from "./selectedMachineReducer";
import selectedVendorMachineReducer from "./selectedVendorMachineReducer";
import loginReducer from "./loginReducer";
import vendorReviewsReducer from "./vendorReviewsReducer";
import vendorIncomeReducer from "./vendorIncomeReducer";
import vendorTransactionsReducer from "./vendorTransactionsReducer";

 const reducers = combineReducers({
    equipment: machinesReducer,
    vendorEquipment: vendorMachinesReducer,
    selectedEquipment: selectedMachineReducer,
    selectedVendorEquipment: selectedVendorMachineReducer,
    loggedInData : loginReducer,
    incomeList: vendorIncomeReducer,
    transactionsData: vendorTransactionsReducer,
    reviews: vendorReviewsReducer
})

export default reducers