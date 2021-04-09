import { bool } from "prop-types";
import { StyledMenu } from "./styles";
const MenuItem = ({ open, menuLink }) => {
  return (
    <StyledMenu open={open}>
      {menuLink.map(({ href, content }) => (
        <a href={href}>{content}</a>
      ))}
    </StyledMenu>
  );
};
MenuItem.propTypes = {
  open: bool.isRequired,
};
export default MenuItem;
