import React from "react";
import { render,screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "./App";
import '@testing-library/jest-dom'

describe('Bütün testler', () => {
  let title,input,emoji,copyemoji;

  beforeEach(()=>{
    render(<App />);
    title = screen.getByText("Emoji Search");
    emoji = screen.getAllByText('Click to copy emoji')
    input = screen.getByTitle("input");
    copyemoji = emoji[0];
})


  test('Başlık render edilmeli', () => {    
    expect(title).toBeInTheDocument();
  })
  test('emoji listesi render edilmeli', () => {    
    expect(emoji.length).toEqual(20);
  })
  test('Filtreleme düzgün render edilmeli', () => {    
    const search = "Nerd";
    userEvent.type(input,search);

    expect(screen.getByText("Nerd")).toBeInTheDocument();
  })
  test('Emojiye tıklandığında panoya kopyalanmalı',() => {
    userEvent.click(copyemoji.parentElement);
})
})




