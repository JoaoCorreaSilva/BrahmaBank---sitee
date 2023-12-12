// import React from 'react';
// import { BrowserRouter as Link } from 'react-router-dom';

// // Componente para a barra de navegação
// const NavBar = () => {
//   return (
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/sobre">Sobre</Link></li>
//         <li><Link to="/contato">Contato</Link></li>
//       </ul>
//     </nav>
//   );
// };

// // Componente para a página Home
// const Home = () => {
//   return (
//     <div>
//       <h2>Bem-vindo ao BrahmaBank</h2>
//       <p>Aqui você encontra o melhor de um banco digital!</p>
//     </div>
//   );
// };

// // sobre
// const Sobre = () => {
//   return (
//     <div>
//       <h2>Sobre Nós</h2>
//       <p>Somos uma equipe incrível fazendo coisas incríveis, enquanto toma um chopp.</p>
//       <img src="../../src/assets/logo.png" alt="Imagem 1" />
//       <img src="../../src/assets/logo3.png" alt="Imagem 2" />
//     </div>
//   );
// };

// //contatos
// const Contato = () => {
//   return (
//     <div>
//       <h2>Entre em Contato</h2>
//       <p>Fale conosco para obter mais informações.</p>
//       <img src="../../src/assets/card.jpg" alt="Imagem 3" />
//     </div>
//   );
// };


// const Menu = () => {
//   return (
//     <Router>
//       <div>
//         <NavBar />
//         <hr />
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/sobre" component={Sobre} />
//           <Route path="/contato" component={Contato} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default Menu;

import { useState } from 'react';
import { Center, Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from "./Menu.module.css";


function NavbarLink({ icon: Icon, label, active, onClick }) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
  { icon: IconCalendarStats, label: 'Releases' },
  { icon: IconUser, label: 'Account' },
  { icon: IconFingerprint, label: 'Security' },
  { icon: IconSettings, label: 'Settings' },
];

export default function Menu() {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <div className={classes.container}>
      <nav className={classes.navbar}>
        <Center>
          <MantineLogo type="mark" inverted size={30} />
        </Center>

        <div className={classes.navbarMain}>
          <Stack justify="center" gap={0}>
            {links}
          </Stack>
        </div>

        <Stack justify="center" gap={0}>
          <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
          <NavbarLink icon={IconLogout} label="Logout" />
        </Stack>
      </nav>
      <div className={classes.div}>
        <h1>BrahmaBank</h1>
      </div>
    </div>
  );
}