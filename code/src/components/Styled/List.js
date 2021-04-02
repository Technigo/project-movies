import styled from 'styled-components';

const List = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  ${(props) => props.pageSection
    && `
    background: var(--dark1);
    margin: 1em;
  `}
`;

export default List;
