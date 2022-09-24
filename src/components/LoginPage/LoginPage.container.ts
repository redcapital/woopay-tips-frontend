import { connect, MapDispatchToProps } from "react-redux";
import { login } from "../../actions/session";
import { Props } from "./LoginPage";

type DispatchProps = Pick<Props, "doLogin">;
type OwnProps = Omit<Props, keyof DispatchProps>;

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  doLogin: login,
};

export default connect(null, mapDispatchToProps);
