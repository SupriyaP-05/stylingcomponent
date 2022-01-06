import React from 'react';
import './Box.css';
import { Content, Boxs, styles } from "./styles";
import Comp from './Component';
import injectSheet from 'react-jss';

const StyledComp = injectSheet(styles)(Comp);
const Box = () => (
    <>
        <div className="Box">
            <p className="Box_content"> Styling React Components </p>
        </div>
        <Boxs>
            <Content>Styling React Components</Content>
        </Boxs>
        <StyledComp color={'red'}></StyledComp>
    </>
);

export default Box;