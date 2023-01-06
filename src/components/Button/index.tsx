import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Button = styled(MuiButton)(({ theme }) => ({
  fontSize: 20,
  marginBottom: theme.spacing(2),
  padding: theme.spacing(1),
  borderRadius: 3,
}));

export default Button;
