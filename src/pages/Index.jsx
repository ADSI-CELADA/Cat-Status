import { NavbarNav } from "../components/NavbarNav"
import { Status } from "../components/Status"
import 'animate.css';


export const Index = () => {
  return (
    <>
      <NavbarNav />

      <div className="p-20 animate__animated animate__backInDown">
        <Status />
      </div>

    </>
  )
}
