import styled from 'styled-components';
import { TextField } from '@mui/material';


export const CustomTextField = styled(TextField)`
& label.Mui-focused {
    color: white;
  }
  & .MuiInput-underline:after {
    border-bottom-color: white;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: #e5e5e5;
    }
    &.Mui-focused fieldset {
      border-color: #e5e5e5;
    }
  }`
