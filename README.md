<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a >
    <img src="pagamentos.files/imagens/logo-pix.png" alt="Logo" width="215" height="76">
  </a>
  <p align="center">
     Gerador de pix em JavaScript de código aberto.
    <br />

  </p>
</p>

<!-- ABOUT THE PROJECT -->

## Sobre o projeto

Qualquer pessoa que possui uma chave Pix cadastrada pode criar um QrCode válido e receber valores por ele. Este repositório tem o objetivo de facilitar a criação, bem como o entendimento desse qrcode, que deve ser construído seguindo a especificação do BrCode.

## Parâmetros do QrCode estático

| Parâmetro 	| Obrigatório 	| Descrição                                                                                                                                                                                             	|
|-----------	|-------------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| `chave`   	| Sim         	| Exemplos:<br>- Telefone: +5591900000000<br>- CPF ou CNPJ: 01234567890<br>- E-mail: teste@pix.com.br<br>- Aleatória: 2aa96c40-d85f-4b98-b29f-d158a1c45f7f 	|
| `mensagem`    | Não           | Mensagem que a pessoa que efetuar o pagamento irá ver como descrição ca cobrança.                                                                                                                       	|
| `nome`    	| Sim         	| Nome da pessoa que irá receber o PIX.                                                                                                                                                                 	|
| `cidade`  	| Sim         	| Cidade da pessoa que irá receber o PIX.                                                                                                                                                                  	|
| `txid`     	| Não         	| Define um identificador pro Pix.                                                                                                                                                                          |
| `valor`   	| Não         	| Valor do QrCode. Exemplo: R$ 1.000,00, R$1000,00, R$ 1000.00, 1000,00, 1000.00, 00.99,                                                                                                                    |
| `banco`   	| Sim         	| Nome do Banco da pessoa que irá receber o PIX.                                                                                                                                                           	|
| `whatsapp`   	| Não         	| 5591900000000 ou true = #BotaoEnviarComprovante.                                                                                                                                                	|
| `cpf`   	    | Sim         	| CPF OU CNPJ do Beneficiado que irá receber o PIX.                                                                                                                                                         |
| `voltar`   	| Não         	| Link ou true = #BotaoVoltarPix.                                                                                                                                                                       	|
| `logo`     	| Não         	| Ex: https://meupix.github.io/pagamentos.files/imagens/logo.png (450x450).                                                                                                                       |

## Exemplos de PIX do Gerador

 [https://meupix.github.io?chave=604e3bed-af56-4235-92c4-9a272b24acdb&valor=0,00&nome=Davi%20M%20S%20Silva&cidade=BELEM&mensagem=Gostei%20do%20gerador%20de%20pix&txid=PagamentoDoacao&banco=NU%20PAGAMENTOS%20-%20S.A&cpf=00009480200&logo=https://lh3.googleusercontent.com/a/ACg8ocJW-_MyuslD1WsPQQrk4-CHSV_l8buzzYAexlXifDXAqs0II5URxQ=s450-c-rg-br100&voltar=https://github.com/meupix/meupix.github.io](https://meupix.github.io?chave=604e3bed-af56-4235-92c4-9a272b24acdb&valor=0,00&nome=Davi%20M%20S%20Silva&cidade=BELEM&mensagem=Gostei%20do%20gerador%20de%20pix&txid=PagamentoDoacao&banco=NU%20PAGAMENTOS%20-%20S.A&cpf=00009480200&logo=https://lh3.googleusercontent.com/a/ACg8ocJW-_MyuslD1WsPQQrk4-CHSV_l8buzzYAexlXifDXAqs0II5URxQ=s450-c-rg-br100&voltar=https://github.com/meupix/meupix.github.io)

 [https://meupix.github.io?schave=604e3bed-af56-4235-92c4-9a272b24acdb&valor=0,00&nome=Davi%20M%20S%20Silva&cidade=BELEM&mensagem=Gostei%20do%20gerador%20de%20pix&txid=PagamentoDoacao&banco=NU%20PAGAMENTOS%20-%20S.A&cpf=00009480200&logo=https://lh3.googleusercontent.com/a/ACg8ocJW-_MyuslD1WsPQQrk4-CHSV_l8buzzYAexlXifDXAqs0II5URxQ=s450-c-rg-br100&voltar=https://github.com/meupix/meupix.github.io](https://meupix.github.io?schave=604e3bed-af56-4235-92c4-9a272b24acdb&valor=0,00&nome=Davi%20M%20S%20Silva&cidade=BELEM&mensagem=Gostei%20do%20gerador%20de%20pix&txid=PagamentoDoacao&banco=NU%20PAGAMENTOS%20-%20S.A&cpf=00009480200&logo=https://lh3.googleusercontent.com/a/ACg8ocJW-_MyuslD1WsPQQrk4-CHSV_l8buzzYAexlXifDXAqs0II5URxQ=s450-c-rg-br100&voltar=https://github.com/meupix/meupix.github.io)
 
 [https://meupix.github.io?codepix=P2NoYXZlPTYwNGUzYmVkLWFmNTYtNDIzNS05MmM0LTlhMjcyYjI0YWNkYiZ2YWxvcj0wLDAwJm5vbWU9RGF2aSBNIFMgU2lsdmEmY2lkYWRlPUJFTEVNJm1lbnNhZ2VtPUdvc3RlaSBkbyBnZXJhZG9yIGRlIHBpeCZ0eGlkPVBhZ2FtZW50b0RvYWNhbyZiYW5jbz1OVSBQQUdBTUVOVE9TIC0gUy5BJmNwZj0wMDAwOTQ4MDIwMCZsb2dvPWh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pXLV9NeXVzbEQxV3NQUVFyazQtQ0hTVl9sOGJ1enpZQWV4bFhpZkRYQXFzMElJNVVSeFE9czQ1MC1jLXJnLWJyMTAwJnZvbHRhcj1odHRwczovL2dpdGh1Yi5jb20vbWV1cGl4L21ldXBpeC5naXRodWIuaW8%3D](https://meupix.github.io?codepix=P2NoYXZlPTYwNGUzYmVkLWFmNTYtNDIzNS05MmM0LTlhMjcyYjI0YWNkYiZ2YWxvcj0wLDAwJm5vbWU9RGF2aSBNIFMgU2lsdmEmY2lkYWRlPUJFTEVNJm1lbnNhZ2VtPUdvc3RlaSBkbyBnZXJhZG9yIGRlIHBpeCZ0eGlkPVBhZ2FtZW50b0RvYWNhbyZiYW5jbz1OVSBQQUdBTUVOVE9TIC0gUy5BJmNwZj0wMDAwOTQ4MDIwMCZsb2dvPWh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pXLV9NeXVzbEQxV3NQUVFyazQtQ0hTVl9sOGJ1enpZQWV4bFhpZkRYQXFzMElJNVVSeFE9czQ1MC1jLXJnLWJyMTAwJnZvbHRhcj1odHRwczovL2dpdGh1Yi5jb20vbWV1cGl4L21ldXBpeC5naXRodWIuaW8%3D)

 [https://meupix.github.io?criaplaca=P2NoYXZlPTYwNGUzYmVkLWFmNTYtNDIzNS05MmM0LTlhMjcyYjI0YWNkYiZ2YWxvcj0wLDAwJm5vbWU9RGF2aSBNIFMgU2lsdmEmY2lkYWRlPUJFTEVNJm1lbnNhZ2VtPUdvc3RlaSBkbyBnZXJhZG9yIGRlIHBpeCZ0eGlkPVBhZ2FtZW50b0RvYWNhbyZiYW5jbz1OVSBQQUdBTUVOVE9TIC0gUy5BJmNwZj0wMDAwOTQ4MDIwMCZsb2dvPWh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pXLV9NeXVzbEQxV3NQUVFyazQtQ0hTVl9sOGJ1enpZQWV4bFhpZkRYQXFzMElJNVVSeFE9czQ1MC1jLXJnLWJyMTAwJnZvbHRhcj1odHRwczovL2dpdGh1Yi5jb20vbWV1cGl4L21ldXBpeC5naXRodWIuaW8%3D](https://meupix.github.io?criaplaca=P2NoYXZlPTYwNGUzYmVkLWFmNTYtNDIzNS05MmM0LTlhMjcyYjI0YWNkYiZ2YWxvcj0wLDAwJm5vbWU9RGF2aSBNIFMgU2lsdmEmY2lkYWRlPUJFTEVNJm1lbnNhZ2VtPUdvc3RlaSBkbyBnZXJhZG9yIGRlIHBpeCZ0eGlkPVBhZ2FtZW50b0RvYWNhbyZiYW5jbz1OVSBQQUdBTUVOVE9TIC0gUy5BJmNwZj0wMDAwOTQ4MDIwMCZsb2dvPWh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pXLV9NeXVzbEQxV3NQUVFyazQtQ0hTVl9sOGJ1enpZQWV4bFhpZkRYQXFzMElJNVVSeFE9czQ1MC1jLXJnLWJyMTAwJnZvbHRhcj1odHRwczovL2dpdGh1Yi5jb20vbWV1cGl4L21ldXBpeC5naXRodWIuaW8%3D)

 [https://meupix.github.io?minhavenda=P2NoYXZlPTYwNGUzYmVkLWFmNTYtNDIzNS05MmM0LTlhMjcyYjI0YWNkYiZ2YWxvcj0wLDAwJm5vbWU9RGF2aSBNIFMgU2lsdmEmY2lkYWRlPUJFTEVNJm1lbnNhZ2VtPUdvc3RlaSBkbyBnZXJhZG9yIGRlIHBpeCZ0eGlkPVBhZ2FtZW50b0RvYWNhbyZiYW5jbz1OVSBQQUdBTUVOVE9TIC0gUy5BJmNwZj0wMDAwOTQ4MDIwMCZsb2dvPWh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pXLV9NeXVzbEQxV3NQUVFyazQtQ0hTVl9sOGJ1enpZQWV4bFhpZkRYQXFzMElJNVVSeFE9czQ1MC1jLXJnLWJyMTAwJnZvbHRhcj1odHRwczovL2dpdGh1Yi5jb20vbWV1cGl4L21ldXBpeC5naXRodWIuaW8%3D](https://meupix.github.io?minhavenda=P2NoYXZlPTYwNGUzYmVkLWFmNTYtNDIzNS05MmM0LTlhMjcyYjI0YWNkYiZ2YWxvcj0wLDAwJm5vbWU9RGF2aSBNIFMgU2lsdmEmY2lkYWRlPUJFTEVNJm1lbnNhZ2VtPUdvc3RlaSBkbyBnZXJhZG9yIGRlIHBpeCZ0eGlkPVBhZ2FtZW50b0RvYWNhbyZiYW5jbz1OVSBQQUdBTUVOVE9TIC0gUy5BJmNwZj0wMDAwOTQ4MDIwMCZsb2dvPWh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pXLV9NeXVzbEQxV3NQUVFyazQtQ0hTVl9sOGJ1enpZQWV4bFhpZkRYQXFzMElJNVVSeFE9czQ1MC1jLXJnLWJyMTAwJnZvbHRhcj1odHRwczovL2dpdGh1Yi5jb20vbWV1cGl4L21ldXBpeC5naXRodWIuaW8%3D)


Deixe um comentário sobre o Gerador de pix [**Comenta Agora**](https://chat-meupix.blogspot.com/p/gerarpix.html).

## Loja Virtual

[https://meupix.github.io/lojavirtual?id=1364727178420957300](https://meupix.github.io/lojavirtual?id=1364727178420957300)

Deixe um comentário sobre a loja virtual [**Comenta Agora**](https://chat-meupix.blogspot.com/p/cria-sua-loja-virtual-com-meupix.html).

## Autor

Este é um projeto de [**@DaviMaTaeus**](https://x.com/davimataeus).

[![Github](https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/meupix)
