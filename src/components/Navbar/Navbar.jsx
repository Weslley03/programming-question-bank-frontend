import { BarraPesquisa } from "../BarraPesquisa/BarraPesquisa";
import { ProfileNavbar } from "../ProfileNavbar/ProfileNavbar";

export function Navbar() {
  return(
    <div className="row">
      <div className="col-md">
        <BarraPesquisa />
      </div>
      <div className="col-md-1">
        <ProfileNavbar />
      </div>
    </div>
  )
};
