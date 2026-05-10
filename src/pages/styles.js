import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: linear-gradient(135deg, #050816, #0b1023, #111827);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 24px;
  /* overflow: scroll; */
`;

export const AppWrapper = styled.div`
  width: 100%;
  max-width: 1200px;

  height: 100vh;

  background: rgba(255, 255, 255, 0.04);

  backdrop-filter: blur(20px);

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 30px;

  /* overflow: hidden; */

  display: flex;
  flex-direction: column;

  box-shadow: 0 0 50px rgba(0, 255, 170, 0.08);
`;

export const Logo = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);

  font-weight: 700;

  background: linear-gradient(90deg, #00ffb3, #00e5ff);

  /* -webkit-background-clip: text; */
  -webkit-text-fill-color: transparent;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MenuButton = styled.button`
  width: 100%;

  /* padding: 1rem; */

  border-radius: 16px;
  border: none;

  background: rgba(255, 255, 255, 0.04);

  color: #d9d9d9;

  font-size: 1rem;

  cursor: pointer;

  transition: 0.3s;

  text-align: left;

  &:hover {
    background: rgba(0, 255, 179, 0.12);

    transform: translateX(5px);
  }
`;

export const Content = styled.main`
  padding: 3rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);

  color: white;

  font-weight: 600;
`;

export const CreateTask = styled.div`
  width: 100%;

  background: rgba(255, 255, 255, 0.04);

  border-radius: 24px;

  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* flex-wrap: wrap; */
`;

export const TaskInput = styled.textarea`
  flex: 1;

  min-width: 220px;

  padding: 1rem;

  border: none;
  outline: none;

  border-radius: 16px;

  background: rgba(255, 255, 255, 0.05);

  color: white;

  font-size: 1rem;

  &::placeholder {
    color: #8d8d8d;
  }
`;

export const AddButton = styled.button`
  padding: 1rem 2rem;

  border: none;
  border-radius: 16px;

  background: linear-gradient(90deg, #00ffb3, #00e5ff);

  color: #050816;

  font-weight: bold;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

export const TasksGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  gap: 1.5rem;
`;

export const TaskCard = styled.div`
  background: rgba(255, 255, 255, 0.04);

  border-radius: 24px;

  padding: 1.5rem;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  border: 1px solid rgba(255, 255, 255, 0.05);

  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);

    border-color: rgba(0, 255, 179, 0.2);
  }
`;
export const TaskTitle = styled.h3`
  color: white;

  font-size: 1.2rem;

  font-weight: 600;
`;

export const Legend = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(9vw, 8rem, 50%);
  border-radius: 10px;
  background-color: ${(props) => (props.status ? "green" : "red")};
`;

export const TaskDescription = styled.p`
  color: #a1a1aa;

  line-height: 1.6;

  font-size: 0.95rem;

  .taskText {
    width: 100%;
  }
`;

export const TaskFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: auto;
`;

export const Status = styled.span`
  padding: 0.5rem 1rem;

  border-radius: 999px;

  background: rgba(0, 255, 179, 0.12);

  color: #00ffb3;

  font-size: 0.85rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.7rem;
`;

export const ActionButton = styled.button`
  width: 40px;
  height: 40px;

  border-radius: 12px;
  border: none;

  background: rgba(255, 255, 255, 0.06);

  color: white;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background: rgba(0, 255, 179, 0.15);
  }
`;
