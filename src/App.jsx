import './App.css'
import axios from 'axios';
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from '@mantine/core';

import Menu from './menu';

import { useState } from 'react';
import Swal from 'sweetalert2'

export default function App(props) {
  const [type, toggle] = useToggle(['login', 'register']);
  const [registro, setRegistro] = useState('');
  const [senha, setSenha] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      // password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });
    //Usa a api para fazer o login dos clientes
  const login = async (registro, senha) => {
    const resposta = await axios.post('http://127.0.0.1:8000/auth/jwt/create/', {
      registro: registro,
      password: senha
    })
    // mensagem de "sucesso" pós login
    if(resposta.status === 200) {
      Swal.fire({
        title: "Sucesso!",
        text: "Você realizou login com sucesso!",
        icon: "success"
      });
      setIsLogged(true);
    }
    console.log(resposta)
    return resposta
  }
  //caixa de login
  return (
    
    // !isLogged ? 
    // <Paper radius="md" p="xl" withBorder {...props}>
    //   <Text size="lg" fw={500}>
    //     Welcome to Mantine, {type} with
    //   </Text>

    //   <Divider label="Or continue with email" labelPosition="center" my="lg" />

    //   <form onSubmit={form.onSubmit(() => login(registro, senha))}>
    //     <Stack>
    //       {type === 'register' && (
    //         <TextInput
    //           label="Name"
    //           placeholder="Your name"
    //           value={registro}
    //           onChange={(e) => setRegistro(e.target.value)}
    //           radius="md"
    //         />
    //       )}

    //       <TextInput
    //         required
    //         label="Registro"
    //         placeholder=""
    //         value={registro}
    //         onChange={(e) => setRegistro(e.target.value)}
    //         radius="md"
    //       />

    //       <PasswordInput
    //         required
    //         label="Password"
    //         placeholder="Your password"
    //         value={senha}
    //         onChange={(e) => setSenha(e.target.value)}
    //         error={form.errors.password && 'Password should include at least 6 characters'}
    //         radius="md"
    //       />

    //       {type === 'register' && (
    //         <Checkbox
    //           label="I accept terms and conditions"
    //           checked={form.values.terms}
    //           onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
    //         />
    //       )}

    //     </Stack>
            
    //     <Group justify="space-between" mt="xl">
    //       <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
    //         {type === 'register'
    //           ? 'Already have an account? Login'
    //           : "Don't have an account? Register"}
    //       </Anchor>
    //       <Button type="submit" radius="xl">
    //        {upperFirst(type)}
    //        <Text color='#000'>Aqui</Text>
    //       </Button>
    //     </Group>
    //   </form>
    // </Paper>
    // :
    <Menu />
  );
}