import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';

const eee = process.env.PUBLIC_URL + '/img/bg.png';


const HeaderWrapper = styled.header`
  width:100%;
  height: 49px;
  background-color: #242424;
  opacity: 0.8;
`
const MainWrapper = styled.main`
  height: 600px;
  padding-top: 131px;
  background: url(${eee}) no-repeat;
  background-size: cover;
`

const MenuWrapper = styled.div`
  height: 89px;
  padding-top: 20px;
`
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderWrapper>
          <Grid>
            <Header />
          </Grid>
        </HeaderWrapper>
        <MenuWrapper>
        <Grid>
            <Menu />
          </Grid>
        </MenuWrapper>
        <MainWrapper>
          <Grid>
            <Main />
          </Grid>
        </MainWrapper>
      </div>
    );
  }
}


// class App extends Component {
//   render() {
//     return (
//       <div className="wrapper ">
//       <SayFullName name="Sergey" surname="Lazarenkov" link="http://real3060.ru/" />
//       <SayFullName name="Ilya" surname="Lazarenkov" link="http://real3060.ru/" />
//       <SayFullName name="Darya" surname="Lazarenkova" link="http://real3060.ru/" />

//   </div>
//     );
//   }
// }


// function SayFullName(props) {
//   return (
//       <div>
//       <h1> Мое имя {props.name}, фамилия {props.surname}</h1>
//       <a href={props.link}> Ссылка на мой профиль </a>
//       </div>
//       // реакт может вставлять только блок, и накак отдельные теги
//       //
//       // установка значений props.XXXX доступно только на чтение и не дается на запись. с динамическими данными чуть позже;
//   )
// }


export default App;
