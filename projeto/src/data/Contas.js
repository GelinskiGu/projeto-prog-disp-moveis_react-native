let contas = {
    'teste@teste.com': {
        dataNascimento: '06/11/2002',
        email: 'teste@teste.com',
        nomeCompleto: 'Gustavo Gelinski',
        senha: 'teste123',
        sexo: 'masculino',
        vacinas: {},
    },

    '123': {
        dataNascimento: '06/11/2002',
        email: '123',
        nomeCompleto: 'Gustavo Gelinski',
        senha: '123',
        sexo: 'masculino',
        vacinas: {
            "BCG": {
                nome: "BCG",
                dataVacinacao: '11/06/2022',
                dose: 'Dose única',
                proxVacinacao: '',
            },
            "Febre amarela": {
                nome: "Febre amarela",
                dataVacinacao: '11/10/2022',
                dose: '1a. dose',
                proxVacinacao: '11/10/2023'
            },
            "Covid": {
                nome: "Covid",
                dataVacinacao: '11/10/2022',
                dose: '1a. dose',
                proxVacinacao: '12/10/2023'
            },

        },
    }
};

export default contas;