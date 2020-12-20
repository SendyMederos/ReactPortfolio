import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {BottomNavigation} from '@material-ui/core/';




export default function Footer() {
  return (
    <BottomNavigation style={{height:"100px"}}className="bg-info text-center mt-5">
     <ul style={{listStyle:"none"}}>
         <li>
      <h6 className="mt-4"> Thanks for Visting </h6>
      </li>
      <li className="mb-2">
      <a href="https://github.com/SendyMederos/ReactPortfolio" className="mt-4"><i class="fa fa-github-square size:5x"></i>Visit the repository</a>
      </li>
      </ul>
    </BottomNavigation>
  );
}