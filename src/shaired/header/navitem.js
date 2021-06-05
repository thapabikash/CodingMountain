import {NavLink} from 'react-router-dom'
import './codingmountheader.css';
export default function Itempage({page}) {
  return (
    <li>
      <NavLink exact activeClassName='is-active' to={page.path}>{page.type}</NavLink>
    </li>
  );
}
