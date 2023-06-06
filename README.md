# Aplicativo MyHealth mobile

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

## Descrição
Este repositório contém a implementação de um aplicativo móvel para controle de vacinas, desenvolvido em React Native. 
O objetivo do aplicativo é oferecer uma carteira de vacinação digital, permitindo que os usuários registrem e controlem as vacinas recebidas, bem como as datas das próximas doses.

## Funcionalidades Principais
O aplicativo possui as seguintes funcionalidades:

* Cadastro de Usuários: Os usuários podem se cadastrar e controlar as vacinas de apenas uma pessoa.
* Recuperação de Senha: Permite a redefinição de senha por meio do e-mail cadastrado.
* Autenticação de Usuário: Valida as credenciais (e-mail/senha) informadas pelo usuário.
* Controle de Vacinas Aplicadas: Permite o cadastro, edição, exclusão e visualização das vacinas aplicadas.
* Pesquisa de Vacinas: Permite buscar e exibir as vacinas informadas pelo usuário.

## Navegação e Telas:
A navegação dentro do aplicativo foi implementada utilizando o Stack Navigator e a barra lateral de navegação Drawer Navigator. 
O Stack Navigator permite a transição entre as telas do aplicativo, enquanto o Drawer Navigator oferece uma navegação fácil por meio de um menu lateral.
* Inicial
* Criar Conta
* Recuperar Senha
* Home
* Nova Vacina
* Editar Vacina
* Próximas Vacinas

## Como Executar o Aplicativo:
Para executar o aplicativo em seu ambiente local, siga as etapas abaixo:
1. Certifique-se de ter o ambiente de desenvolvimento React Native configurado corretamente em sua máquina.
2. Clone este repositório para o seu ambiente local.

```bash
   git clone https://github.com/GelinskiGu/https://github.com/GelinskiGu/projeto-prog-disp-moveis_react-native.git
```

3. Navegue até o diretório raiz do projeto.
4. Intale as dependências do projeto:

```bash
   npm install
```

5. Inicie o servidor de desenvolvimento.

```bash
   npm start
```

6. Abra o aplicativo em um emulador ou dispositivo móvel, utilizando o cliente Expo ou outra ferramenta apropriada.
