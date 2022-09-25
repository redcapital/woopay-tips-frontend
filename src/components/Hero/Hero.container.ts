import { connect, MapStateToProps } from "react-redux";
import { AppState } from "../../types";
import { Props } from "./Hero";

type StateProps = Pick<Props, "session">;
type OwnProps = Omit<Props, keyof StateProps>;

const mapStateToProps: MapStateToProps<StateProps, OwnProps, AppState> = (
  state
) => ({
  session: state.session.active,
});

export default connect(mapStateToProps);
