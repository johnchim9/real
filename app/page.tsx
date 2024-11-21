"use client";

import { useState } from "react";
import { handleSignIn, SignInData } from "@/src/utils/submit";

export default function SignInForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [useToken, setUseToken] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state

  const onSubmit = async () => {
    const signInData: SignInData = {
      username,
      password,
      ...(useToken && { token }),
    };

    setIsLoading(true); // Start loading

    try {
      await handleSignIn(signInData);
      
    } catch (error) {
      setMessage("Failed to sign in. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false); // Stop loading after the operation completes
    }
  };

  return (







<section class="main-container">
    <div class="content-container">

      <div class="cards">
        <div class="card-front">
          <img src="images/card-logo.svg" alt="logo" width="70px">
          <p class="cardNumberP">0000 0000 0000 0000</p>
          <div>
            <span class="nameSpan">IAN VIEIRA</span>
            <span>
              <span class="monthSpan">04</span>/
              <span class="yearSpan">23</span>
            </span>
          </div>
        </div>
        <div class="card-back">
          <p class="cvcP">123</p>
        </div>
      </div>

      <form class="form">
        <label for="name">name on card</label>
        <input type="text" name="name" class="name" placeholder="Ex.: Ian V de Souza" maxlength="28" autocomplete="off">
        <p class="empty">Campo vazio.</p>
        <label for="card-number">card number</label>
        <input type="text" name="card-number" class="cardNumber" placeholder="Ex.: 1234 5678 9123 0000" maxlength="19"
          autocomplete="off">
        <p class="empty">Campo vazio.</p>
        <p class="error">Campo inválido, insira apenas números.</p>
        <div class="date-cvc">
          <div class="date">
            <label for="date">Exp Date (MM/AA)</label>
            <input type="text" name="month" id="month" placeholder="MM" maxlength="2">
            <p class="empty">Campo vazio.</p>
            <p class="error">Campo inválido, insira apenas números.</p>
            <input type="text" name="year" id="year" placeholder="AA" maxlength="2">
            <p class="empty">Campo vazio.</p>
            <p class="error">Campo inválido, insira apenas números.</p>
          </div>
          <div class="cvc">
            <label for="date">CVV</label>
            <input type="text" name="cvc" id="cvc" placeholder="Ex.: 123" maxlength="3">
            <p class="empty">Campo vazio.</p>
            <p class="error">Campo inválido, insira apenas números.</p>
          </div>
        </div>

        <button type="submit">SUBMIT</button>
      </form>

      <form class="succeed-form hide">
        <img src="images/icon-complete.svg" alt="">
        <h2>OBRIGADO!</h2>
        <p>Seus dados do cartão foram adicionados</p>
        <button type="submit">Voltar</button>
      </form>

    </div>
  </section>


  );
}
