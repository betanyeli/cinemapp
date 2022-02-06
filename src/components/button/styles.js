import styled from 'styled-components';

export const Button = styled.button`
display: none;
@media screen and (max-width: 768px) {
    background: #E5A00D;
    border-radius: 10px;
    display: flex;
    padding: 0.5rem;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 85%);
}
`;