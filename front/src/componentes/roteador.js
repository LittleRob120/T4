import React, { useState, useEffect } from 'react';
import BarraNavegacao from './barraNavegacao';
import FormularioCadastroCliente from './formularioCadastroCliente';
import ListaCliente from './listaCliente';
import { listarClientes, cadastrarCliente, excluirCliente, atualizarCliente } from '../api/clientes';

export default function Roteador() {
    const [clientes, setClientes] = useState([]);
    const [tema] = useState('#e3f2fd');
    const botoes = ['Clientes'];
    const seletorView = () => {}; 
    useEffect(() => {
        async function fetchClientes() {
            const dados = await listarClientes();
            setClientes(dados);
        }
        fetchClientes();
    }, []);

    const handleCadastrar = async (novoCliente) => {
        const sucesso = await cadastrarCliente(novoCliente);
        if (sucesso) {
            const dados = await listarClientes();
            setClientes(dados);
        }
    };

    const handleExcluir = async (cliente) => {
        const sucesso = await excluirCliente(cliente);
        if (sucesso) {
            const dados = await listarClientes();
            setClientes(dados);
        }
    };

    const handleAtualizar = async (clienteAtualizado) => {
        const sucesso = await atualizarCliente(clienteAtualizado);
        if (sucesso) {
            const dados = await listarClientes();
            setClientes(dados);
        }
    };

    return (
        <>
            <BarraNavegacao botoes={botoes} seletorView={seletorView} tema={tema} />
            <FormularioCadastroCliente onCadastrar={handleCadastrar} tema={tema} />
            <ListaCliente clientes={clientes} onExcluir={handleExcluir} onAtualizar={handleAtualizar} />
        </>
    );
}