import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { createDonation } from "../../actions/donation";
import { AppState } from "../../types";
import { Props } from "./CreateDonationPage";

type StateProps = Pick<Props, "createdServiceName">;
type DispatchProps = Pick<Props, "create">;
type OwnProps = Omit<Props, keyof (DispatchProps & StateProps)>;

const mapStateToProps: MapStateToProps<StateProps, OwnProps, AppState> = (
  state
) => ({
  createdServiceName: state.donation?.created_service_name,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  create: createDonation,
};

export default connect(mapStateToProps, mapDispatchToProps);
