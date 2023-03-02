import { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../atoms/Input";

const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 0.5em;
`;

function CheckboxList({ values, onChange }) {
  const [status, setStatus] = useState({});

  useEffect(() => onChange(Object.keys(status).filter((key) => status[key])), [status, onChange]);

  const handleChange = (e) =>
    setStatus({
      ...status,
      [e.target.value]: e.target.checked,
    });

  return (
    <CheckboxContainer>
      {values &&
        values.map((value, i) => (
          <Input
            placeholder={value}
            type="checkbox"
            value={value}
            onChange={handleChange}
            key={"value--" + i}
            checked={status[value] ? true : false}
          />
        ))}
    </CheckboxContainer>
  );
}

export default CheckboxList;
