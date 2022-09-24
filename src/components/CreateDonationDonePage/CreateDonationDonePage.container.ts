import { connect, MapStateToProps } from "react-redux";
import { AppState } from "../../types";
import { Props } from "./CreateDonationDonePage";

type StateProps = Pick<Props, "created_service_name">;
type OwnProps = Omit<Props, keyof StateProps>;

const mapStateToProps: MapStateToProps<StateProps, OwnProps, AppState> = (
  state
) => ({
  created_service_name: state.donation?.created_service_name!,
});

export default connect(mapStateToProps);
