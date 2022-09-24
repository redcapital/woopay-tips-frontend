import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { makeDonation } from "../../actions/donation";
import { AppState } from "../../types";
import { Props } from "./DonatePage";

type StateProps = Pick<Props, "frame_url">;
type DispatchProps = Pick<Props, "makeDonation">;
type OwnProps = Omit<Props, keyof (DispatchProps & StateProps)>;

const mapStateToProps: MapStateToProps<StateProps, OwnProps, AppState> = (
  state
) => ({
  frame_url: state.donation?.frame_url,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  makeDonation,
};

export default connect(mapStateToProps, mapDispatchToProps);
