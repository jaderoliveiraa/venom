const { str } = require('ajv');
const venom = require('venom-bot');

venom
    .create()
    .then((client) => start(client));

/////////////////*EXEMPLOS*//////////////////////////////

//Exemplo de envio de botão como resposta
const buttons = [
    {
        "buttonText": {
            "displayText": "Text of Button 1"
        }
    },
    {
        "buttonText": {
            "displayText": "Text of Button 2"
        }
    }
];

/////////////////////////////* FUNÇÕES E CONSTANTES QUE SERÃO USADAS *//////////////////////////
const tel = ('5588988420622@c.us');
//função que retorna a hora
function saudacao() {
    // Função para gerar a saudação dinâmica, de acordo com o horario
    const data = new Date();
    let hora = data.getHours();
    let str = '';
    let funcionamento = '';
    if (hora >= 0 && hora < 12) {
        str = "Bom dia";
    } else if (hora >= 12 && hora < 18) {
        str = "Boa tarde";
    } else {
        str = "Boa noite";
    }
    return str;
}

///////////* botões de saudação *///////////
const btnInicial = [
    {
        "buttonText": {
            "displayText": "IPTV ou P2P"
        }
    },
    {
        "buttonText": {
            "displayText": "Sites, Sistemas ou Lojas Virtuais"
        }
    },
    {
        "buttonText": {
            "displayText": "Pix ou Outros assuntos"
        }
    }
];
///////////* botões de Tv *///////////
const btnTv = [
    {
        "buttonText": {
            "displayText": "Testar TV"
        }
    },
    {
        "buttonText": {
            "displayText": "Assinar  ou Renovar TV"
        }
    },
    {
        "buttonText": {
            "displayText": "Mais Informações ou Suporte"
        }
    }
];
///////////* botões de Teste de Tv *///////////
const btnTesteTv = [
    {
        "buttonText": {
            "displayText": "Já testei a Internet"
        }
    },
    {
        "buttonText": {
            "displayText": "Ainda não testei a internet"
        }
    }
];
///////////* botões de suporte ou informações *///////////
const btnInfo = [
    {
        "buttonText": {
            "displayText": "Informações"
        }
    },
    {
        "buttonText": {
            "displayText": "Suporte"
        }
    }
];
//// Botão infoTeste//////////////////
const btnInfoTeste = [
    {
        "buttonText": {
            "displayText": "Sim, quero testar"
        }
    },
    {
        "buttonText": {
            "displayText": "Não, agora não"
        }
    }
];
//// Botão Sim ou não//////////////////
const btnOpiniao = [
    {
        "buttonText": {
            "displayText": "Boa"
        }
    },
    {
        "buttonText": {
            "displayText": "Ruim"
        }
    }
];
//// Botão Suporte//////////////////
const btnSuporte = [
    {
        "buttonText": {
            "displayText": "Esqueci a Senha"
        }
    },
    {
        "buttonText": {
            "displayText": "Travando"
        }
    },
    {
        "buttonText": {
            "displayText": "Não abre nada"
        }
    }
];
//// Botão Suporte//////////////////
const btnFuncTv = [
    {
        "buttonText": {
            "displayText": "Deu Certo"
        }
    },
    {
        "buttonText": {
            "displayText": "Não deu certo"
        }
    }
];
///// Botão Pix ou Outros \\\\\\\\\\\\
const btnPixOutros = [
    {
        "buttonText": {
            "displayText": "Pix"
        }
    },
    {
        "buttonText": {
            "displayText": "Outros"
        }
    }
];

///// Botão Sites sistemas ou lojas virtuais \\\\\\\\\\\\
const btnSites = [
    {
        "buttonText": {
            "displayText": "Quero Sim"
        }
    },
    {
        "buttonText": {
            "displayText": "Talvez uma outra hora"
        }
    }
];




async function start(client) {
    
    client.onMessage((message) => {

        if (message.isGroupMsg === false) {
           ////////// saudação ///////////////////
            if (message.body === 'Olá' || message.body === 'Ola') {
                client.sendButtons('5588988420622@c.us', `Olá, ${saudacao()}, Sou Jáder Oliveira`, btnInicial, '*Esse Atendimento é realizado inicialmente de forma virtual, então escolha uma das opções abaixo:*')

                    .then((result) => {
                        console.log('Acionado o menu INICIAL!'); //retorna a mensagem de successo
                    })
                    .catch((erro) => {
                        console.error('Erro ao enviar mensagem: ', erro); //return um objeto de erro
                    });
            }////////////* IPTV ou P2P*///////////////////////
            if (message.body === 'IPTV ou P2P') {

                client.sendButtons('5588988420622@c.us', `Entendi que voce quer falar sobre TV`, btnTv, '*Sobre o que você deseja falar?*\n*Escolha uma das opções abaixo:* \n\n\nObs: você pode digitar a palavra *MENU* para voltar ao menu Principal a qualquer momento!')

                    .then((result) => {
                        console.log('Acionado o menu de IPTV!'); //retorna a mensagem de successo
                    })
                    .catch((erro) => {
                        console.error('Erro ao enviar mensagem: ', erro); //return um objeto de erro
                    });
            }
            
            //////*Teste de TV*//////
            if (message.body === 'Testar TV' || message.body === 'Sim, quero testar') {
                client.sendText(message.from, 'Antes de gerar o teste precisamos verificar a qualidade do sinal de internet, baixe no seu celular, o aplicativo *BRASIL BANDA LARGA*, instala, abra, dê todas as permissões que ele vai pedir, depois clique em *INICIAR*.\nDaí, vc me envia o print e eu faço a análise de como está a qualidade da sua internet!');

                client.sendButtons('5588988420622@c.us', `Teste de TV`, btnTesteTv, 'Escolha uma das opções abaixo:')

                    .then((result) => {
                        console.log('Mensagem respondida!'); //retorna a mensagem de successo
                    })
                    .catch((erro) => {
                        console.error('Erro ao enviar mensagem: ', erro); //return um objeto de erro
                    });
            }/* Já testei a internet */
            if (message.body === 'Já testei a Internet') {
                client.sendText(message.from, 'Maravilha! Agora por favor, me envia um print da tela com o resultado, pra gente fazer um diagnóstico da qualidade do seu sinal de internet!')
            }/* não testei ainda */
            if (message.body === 'Ainda não testei a internet') {
                client.sendText(message.from, 'Antes de gerar o teste precisamos verificar a qualidade do sinal de internet, baixe no seu celular, o aplicativo *BRASIL BANDA LARGA*, instala, abra, dê todas as permissões que ele vai pedir, depois clique em *INICIAR*.\nDaí, vc me envia o print e eu faço a análise de como está a qualidade da sua internet!');

                client.sendButtons('5588988420622@c.us', `Teste de TV`, testetv, 'Escolha uma das opções abaixo:')
                
                    .then((result) => {
                        console.log('Mensagem respondida!'); //retorna a mensagem de successo
                    })
                    .catch((erro) => {
                        console.error('Erro ao enviar mensagem: ', erro); //return um objeto de erro
                    });
            }
            ////////// FIM DO TESTE DE TV ///////////
            ///////// ASSINAR OU RENOVAR TV //////////
            if(message.body === 'Assinar  ou Renovar TV'){
                client.sendText(message.from, 'Legal!\nPra reativar o usuário, basta efetuar um *PIX* com o valor correspondente ao serviço, para: \n\n*pixparajader@gmail.com* \nou \n*88988420622* \n\ne me enviar o comprovante, que já libero seu usuário! 😁');

            }
            ///////// FIM DO MENU ASSINAR /////////
            //////// menu informações TV /////////
            if(message.body ==='Mais Informações ou Suporte'){
                client.sendButtons('5588988420622@c.us', 'Informações ou Suporte', btnInfo, '*Sobre sobre o que você quer falar?* \n\n\nObs: você pode digitar a palavra *MENU* para voltar ao menu Principal a qualquer momento!');
            }
            if(message.body === 'Informações'){
                client.sendButtons('5588988420622@c.us', ' ', btnInfoTeste, 'Um único aplicativo instalado na sua smart tv, tvbox, celular ou computador, e você tem acesso o *mês inteiro* a todo esse contudo, por *apenas R$30,00!*\n\nVamos fazer um teste agora???')
                .then((result) => {
                    console.log('Mensagem respondida!'); //retorna a mensagem de successo
                })
                .catch((erro) => {
                    console.error('Erro ao enviar mensagem: ', erro); //return um objeto de erro
                });
            }
            if(message.body ==='Não, agora não'){
                client.sendText(message.from, 'Puxa, que pena, creio que você iria gostar muito do conteúdo, mas tudo bem... se puder responder nossa pesquisa de opinião, ficarei muito grato!')
                client.sendText(message.from, 'E não esqueça, quando precisar... é só me dar um oi aqui... valeu!')
                client.sendButtons('5588988420622@c.us', 'Pesquisa de Opinião', btnOpiniao, '*O que você achou da interação com nosso robô de atendimento?\nSua Opinião é muito importante, escolha um dos botões abaixo para definir nosso atendimento:* ')

            }
            if(message.body === 'Boa'){
                client.sendText(message.from , 'Legal! 😁 \nSempre que você precisar, estarei aqui, basta chamar! \nAté Logo! ' )
            }
            if(message.body === 'Ruim'){
                client.sendText(message.from , '😢😢😢 Puxa, que pena! \nMe conte o que houve, assim posso aprimorar meu conhecimento e lhe atender melhor na próxima vez! \nAté Logo! ' )
            }//// FIM DO MENU INFORMAÇÕES ///////       
            ////// MENU DE SUPORTE \\\\\\\\\\                                                                                                                                                                                                                                                
            if(message.body === 'Suporte'){
                client.sendButtons('5588988420622@c.us', 'Menu do Suporte', btnSuporte, '*O que está acontecendo? Clique em um dos botões abaixo e me Informe?*')
                .then((result) => {
                    console.log('Acionado o menu de SUPORTE!'); //retorna a mensagem de successo
                })
                .catch((erro) => {
                    console.error('Erro ao enviar mensagem: ', erro); //return um objeto de erro
                });
            }
            if(message.body === 'Esqueci a Senha'){
                client.sendText(message.from, 'Sem problemas, aguarde só um pouquinho que já já falo com vc e te passo os seus dados de acesso! 😁 \n(lembrando que esses dados de acesso são pessoais e não devem ser compartilhados com ninguém!) 🤐')
            }
            if(message.body === 'Travando' || message.body === 'Não abre nada'){
                client.sendButtons('5588988420622@c.us', 'Puxa, que chato! 😢😢😢 \n\nVamos Tentar o seguinte procedimento: \n\nDesligue o roteador, tvbox e televisão da tomada (Desligue tudo), espere 1 minuto, em seguida ligue o roteador, espere a internet estabilizar, depois ligue a tv ou o tvbox. \nTenta esse procedimento e depois volta aqui e clica em *DEU CERTO* ou *NÂO DEU CERTO*.', btnFuncTv, ' ')
            }
            if(message.body === 'Deu Certo'){
                client.sendText(message.from, 'Shooooow de bola! \nVocê já sabe mas vou falar novamente, se precisar de mim, sabe onde me encontrar, é só me dar um oi aqui no WhatsApp!')
                client.sendText(message.from, 'Valeu!!! 😁')
            }
            if(message.body === 'Não deu certo'){
                client.sendText(message.from, 'Sério? 😢😢😢 \nblz, tranquilo. \n\nVamos realizar um procedimento pra ver se como está a qualidade do sinal da sua internet: \n\nBaixe no seu celular, o aplicativo *BRASIL BANDA LARGA*, instala, abra, dê todas as permissões que ele vai pedir, depois clique em *INICIAR*.\nDaí, vc me envia o print e eu faço a análise de como está a qualidade da sua internet!')
            }
            //////////////////////// FIM DO MENU DE SUPORTE \\\\\\\\\\\\\\\\\\\\\\\\\\\

            /////////////////////// OUTROS ASSUNTOS OU PIX \\\\\\\\\\\\\\\\\\\\\\\\\\\\
            if(message.body === 'Pix ou Outros assuntos'){
                client.sendButtons('5588988420622@c.us', '*Escolha abaixo sobre o que vc quer falar: *', btnPixOutros, 'Pix ou Outros assuntos')
            }
            if(message.body ==='Pix' || message.body ==='pix' || message.body ==='PIX'){
                client.sendText(message.from, 'Segue abaixo meu pix: \n\n*pixparajader@gmail.com* \nou \n*88988420622* \n\n*NUBANK* \n*Nome: Carlos Jáder da Silva Oliveira*')
            }
            if(message.body === 'Outros'){
                client.sendText(message.from, 'Hum, como eu sou um robô, tenho minhas limitações! \nmas vou te transferir para um humano e ele poderá lhe auxiliar melhor... \nAguarde só um pouquinho por favor...  \n\nEnquanto isso você pode adiantar o assunto! \n\n\nObs:  lembrando que a qualquer momento você pode digitar *MENU* para voltar ao menu principal')
            }
            ////////////// FIM OUTROS ASSUNTOS OU PIX \\\\\\\\\\\\\\\\\\\\\\\\\\

            //////////// INICIO MENU SITES E SISTEMAS \\\\\\\\\\\\\\\\\\\\\\\\\\
            if(message.body === 'Sites, Sistemas ou Lojas Virtuais'){
                client.sendButtons('88988420622@c.us', '*Seja para Site, Loja Virtual, Sistemas ou Aplicativos, posso desenvolver algo personalizado e com a cara da sua empresa!* \n*Gostaria de mais informações?*', btnSites, 'Sites, Sistemas ou Lojas Virtuais')
                .then((result) => {
                    console.log('Acionado o menu de SITES e SISTEMAS!'); //retorna a mensagem de successo
                })
                .catch((erro) => {
                    console.error('Erro ao enviar mensagem: ', erro); //return um objeto de erro
                });
            }
            if(message.body ==='Quero Sim'){
                client.sendText(message.from, 'Certo, aguarde um momento enquanto um humano lhe atende... \n\nEnquanto isso você pode ir adiantando sua idéia, o que você tem em mente ou o que você precisa! 😉 ')
            }
            if(message.body === 'Outros'){
                client.sendText(message.from, `Puxa, uma pena mesmo... mas vou deixar seu número, salvo pra um futuro contato... Obrigado! tenha um(a) ${saudacao()}`)
            }
            
        } else {

        }

    });
}