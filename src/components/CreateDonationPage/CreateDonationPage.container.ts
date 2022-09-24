import { connect, MapDispatchToProps } from "react-redux";
import { createDonation } from "../../actions/donation";
import { Props } from "./CreateDonationPage";

type DispatchProps = Pick<Props, "create">;
type OwnProps = Omit<Props, keyof DispatchProps>;

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  create: createDonation,
};

export default connect(null, mapDispatchToProps);
