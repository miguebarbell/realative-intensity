import styled from 'styled-components';
import {Header} from '../components/header';
import {Documentation} from '../components/documentation'
import { useState } from 'react';
import {epleyFormula, brzyckiFormula} from '../helper/calculator'
import * as events from "events";
import {PINK, YELLOW, TURQUOISE, FUCHSIA, DARK, LIGHT} from '../global'

const Container = styled.div`
  min-width: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div.boxes {
    display: flex;
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0.25rem;
  }
`;
const Input = styled.input`
  width: 4rem;
  height: 2rem;
  text-align: center;
  border-radius: 5px;
  border: 1px solid ${({theme}) => true ? YELLOW : FUCHSIA};
  color: ${({theme}) => true ? LIGHT : DARK};
  background-color: ${({theme}) => true ? DARK : LIGHT};
`;
const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  width: 4rem;
  height: 2rem;
  text-align: center;
  border-radius: 5px;
  border: 1px solid ${({theme}) => true ? YELLOW : FUCHSIA};
  color: ${({theme}) => true ? LIGHT : DARK};
  background-color: ${({theme}) => true ? DARK : LIGHT};
`;

const Convert = (dark:any) => {
    const [strain, setStrain] = useState(0);
    const [reps, setReps] = useState(0);
    const [formula, setFormula] = useState('epley');
    function calculateIntensity(strain: number, reps: number, formula: string) {
        if (reps === 0) return 0;
        else if (reps === 1) return strain;
        switch (formula) {
            case 'epley': return epleyFormula(strain, reps);
            case 'brzycki': return brzyckiFormula(strain, reps);
        }
    }
    return (
        <Container>
            <Header/>
            <div className="boxes">
                <label> <span>Strain</span>
                    <Input placeholder="Strain/Weight" type="text" required value={strain} onChange={(e) => setStrain(+e.target.value)} theme={dark}/>
                </label>
                <label> Reps
                    <Input placeholder="Reps" type="text" required value={reps} onChange={(e) => setReps(+e.target.value)} theme={dark}/>
                </label>
            </div>
            <label> Formula
                <select onChange={(e) => setFormula(e.target.value)}>
                    <option value="epley">epley</option>
                    <option value="brzycki">brzycki</option>
                </select>
            </label>
            <label>Result
                <Result>{calculateIntensity(strain, reps, formula)}</Result>
            </label>
            <Documentation/>
        </Container>
    )
}

export default Convert
