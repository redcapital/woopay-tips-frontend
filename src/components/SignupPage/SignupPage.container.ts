import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { signup, activate } from "../../actions/session";
import { AppState } from "../../types";
import { Props } from "./SignupPage";

type StateProps = Pick<Props, "signupLogin">;
type DispatchProps = Pick<Props, "signup" | "activate">;
type OwnProps = Omit<Props, keyof (DispatchProps & StateProps)>;

const mapStateToProps: MapStateToProps<StateProps, OwnProps, AppState> = (
  state
) => ({
  signupLogin: state.session.signup?.login,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  signup,
  activate,
};

export default connect(mapStateToProps, mapDispatchToProps);
