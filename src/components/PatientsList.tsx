
import { usePatientStore } from "../store/store"




export const PatientsList = () => {
const patients = usePatientStore(state => state.patients)

console.log(patients)

  return (
    <div>PatientsList</div>
  )
}
