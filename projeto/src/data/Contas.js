let contas = {
    'teste@teste.com': {
        dataNascimento: '06/11/2002',
        email: 'teste@teste.com',
        nomeCompleto: 'Gustavo Gelinski',
        senha: 'teste123',
        sexo: 'masculino',
        vacinas: {},
    },

    'jurandir.pereira@hotmail.com': {
        dataNascimento: '11/08/2022',
        email: 'jurandir.pereira@hotmail.com',
        nomeCompleto: 'Jurandir Pereira',
        senha: '123123123',
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
            "Hepatite B": {
                nome: "Hepatite B",
                dataVacinacao: '11/08/2022',
                dose: '1a. dose',
                proxVacinacao: '11/10/2022'
            },
            "Poliomelite": {
                nome: "Poliomelite",
                dataVacinacao: '11/08/2022',
                dose: '1a. dose',
                proxVacinacao: '11/10/2022'
            },
        },
    }
};

export default contas;