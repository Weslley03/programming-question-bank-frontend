import { BarraPesquisa } from "../BarraPesquisa/BarraPesquisa";
import { ProfileNavbar } from "../ProfileNavbar/ProfileNavbar";

export function Navbar({ onSearch }) {
  return(
    <div className="row">
      <div className="col-md">
        <BarraPesquisa onSearch={ onSearch } />
      </div>
      <div className="col-md-1">
        <ProfileNavbar />
      </div>
    </div>
  )
};
