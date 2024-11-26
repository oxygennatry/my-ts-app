import React, { useState } from "react";
import { CalculatorContainer, InputGroup, Label, Input, Button, Result, BgcContainer} from "./Calc.style";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";


const MortgageCalculator: React.FC = () => {
    const [loanAmount, setLoanAmount] = useState<string>(""); 
    const [interestRate, setInterestRate] = useState<string>(""); 
    const [loanTerm, setLoanTerm] = useState<string>(""); 
    const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  
    const calculateMonthlyPayment = () => {
      if (!loanAmount || !interestRate || !loanTerm) {
        alert("Пожалуйста, заполните все поля.");
        return;
      }
  
      const loan = parseFloat(loanAmount);
      const rate = parseFloat(interestRate);
      const term = parseFloat(loanTerm);
  
      if (loan <= 0 || rate <= 0 || term <= 0) {
        alert("Пожалуйста, введите корректные значения.");
        return;
      }
  
      const monthlyRate = rate / 100 / 12; 
      const totalPayments = term * 12; 
      const payment =
        (loan * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -totalPayments));
  
      setMonthlyPayment(Number(payment.toFixed(2)));
    };
  
    return (
        <>
        <Header/>
        <BgcContainer>
      <CalculatorContainer>
        <h2>Ипотечный Калькулятор</h2>
        <InputGroup>
          <Label>Сумма кредита (₽):</Label>
          <Input
            type="number"
            placeholder="Введите сумму кредита"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Label>Процентная ставка (% в год):</Label>
          <Input
            type="number"
            placeholder="Введите процентную ставку"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Label>Срок кредита (лет):</Label>
          <Input
            type="number"
            placeholder="Введите срок кредита"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </InputGroup>
        <Button onClick={calculateMonthlyPayment}>Рассчитать</Button>
        {monthlyPayment !== null && (
          <Result>
            Ежемесячный платеж: {monthlyPayment.toLocaleString("ru-RU")} ₽
          </Result>
        )}
      </CalculatorContainer>
      </BgcContainer>
      <Footer/>
      </>
    );
  };
  
  
  export default MortgageCalculator;