import styled from 'styled-components';

export const Pills = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: white;
  display: flex;
  flex-flow: row wrap;
`;

export const Pill = styled.li`
  background: var(--primary);
  padding: 1em;
  margin: 0.5em;
  border-radius: 2em;
  font-size: .8em;
`;
