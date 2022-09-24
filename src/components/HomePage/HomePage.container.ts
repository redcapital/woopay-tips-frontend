import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { doDebug } from "../../actions/app";
import { AppState } from "../../types";
import { Props } from "./HomePage";

type StateProps = Pick<Props, "session">;
type DispatchProps = Pick<Props, "debug">;
type OwnProps = Omit<Props, keyof (DispatchProps & StateProps)>;

const mapStateToProps: MapStateToProps<StateProps, OwnProps, AppState> = (
  state
) => ({
  session: state.session.active,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  debug: doDebug,
};

export default connect(mapStateToProps, mapDispatchToProps);
