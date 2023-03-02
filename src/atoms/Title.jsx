import styled from "styled-components";

const H1Styled = styled.h1`
  font-size: 1.6em;
  font-weight: var(--weight-tertiary);
  margin: 0.3em 0;
  text-transform: capitalize;
  color: var(--color-white);
  border: 0.12em solid var(--color-white);
  border-radius: 1em;
  padding: 0 1.5em;
`;

const H2Styled = styled.h2`
  font-size: 1.6em;
  font-weight: var(--weight-tertiary);
  margin: 0.3em 0;
  text-transform: uppercase;
`;

const H3Styled = styled.h3`
  font-size: 1.4em;
  font-weight: var(--weight-tertiary);
  margin: 0.3em 0;
  text-transform: capitalize;
`;

const H4Styled = styled.h4`
  font-size: 1.2em;
  font-weight: var(--weight-secondary);
  margin: 0.3em 0;
  text-transform: capitalize;
`;

function Title({ type = "medium", children }) {
  const title_types = {
    bigger: () => <H1Styled>{children}</H1Styled>,
    big: () => <H2Styled>{children}</H2Styled>,
    medium: () => <H3Styled>{children}</H3Styled>,
    small: () => <H4Styled>{children}</H4Styled>,
  };
  return title_types[type]();
}

export default Title;
