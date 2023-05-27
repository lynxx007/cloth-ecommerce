import styled from 'styled-components';



export const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Heading2 = styled.h2`
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  resize: vertical;

  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  resize: vertical;

  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.input`
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;





