import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
/* Указываем box sizing */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Убираем внутренние отступы */
ul[class],
ol[class] {
  padding: 0;
}

/* Убираем внешние отступы */
body,
h1,
h2,
h3,
h4,
h5,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Выставляем основные настройки по-умолчанию для body */
body {
  font-family: 'Nunito Sans', sans-serif;
  color: ${(props) => props.theme.text};
  font-weight: ${(props) => props.theme.variables.light};
  background-color: ${(props) => props.theme.bg};  
  transition: .3s;
  transition-property: background-color, box-shadow;

  &::-webkit-scrollbar{
  width: 10px;
  } 

  &::-webkit-scrollbar-track {
  background-color: ${({ theme }) => theme.bg};
  box-shadow:${({ theme }) => theme.shadow};
  }

  &::-webkit-scrollbar-thumb {
  border-radius: ${({ theme }) => theme.variables.radius};
  background-color: ${({ theme }) => theme.scroll};
}
}

/* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/
ul[class],
ol[class] {
  list-style: none;
}

a{
  text-decoration: none;
  color: inherit;
}


/* Упрощаем работу с изображениями */
img {
  max-width: 100%;
  display: block;
}

/* Наследуем шрифты для инпутов и кнопок */
input,
button,
textarea,
select {
  font: inherit;
}
`;
