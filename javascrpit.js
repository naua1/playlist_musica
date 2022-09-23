

var  titulo = document.getElementById("titu");
var para = document.getElementById("paragrafo");

var musica = document.getElementById("corpo")
var musica1 = 
`<div id="menu"><nav><a class="link"href="#">Login</a><a class="link"href="index.html"> Home</a>
<p>
     Playlist
   </p>
   <a class="link"href="#" onclick="trocar_pagina(musica1);"> Vermelha do Centro</a>
   <a class="link"href="#" onclick="trocar_pagina(musica2);"> Boate Azul </a>
   <a class="link"href="#" onclick="trocar_pagina(musica3);"> Amiga Da Minha Mulher</a>
   <a class="link"href="#" onclick="trocar_pagina(musica4);"> Sítio do Tio Harry</a>
   <a class="link"href="#" onclick="trocar_pagina(musica5);"> Carolina, Carol Bela</a>
   <a class="link"href="#" onclick="trocar_pagina(musica6);"> Naquela Mesa</a>
   
</nav>

</div>
    <main><iframe width="853" height="480" src="https://www.youtube.com/embed/6-hUiDcPQ7U?list=RD6-hUiDcPQ7U" title="Vermelha do Centro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></main>
    <div class="box">
    <p>
    O sol brilhou na Vermelha do Centro</br>
Altas ondas estão pra chegar (Swell vai entrar)</br>
Pepeu já prepara um grande lual (um grande lual!)</br>
A noite do forró vai ser muito astral (uou uou uou uou uou uou)</br>
A magia de Ubatuba</br>
Dentro de um tubo chamado Itamambuca</br>
Vejo você sorrindo pra mim</br>
Gatinha dengosa, muito gostosa dizendo que sim</br>
Amigo Pepeu, acenda a fogueira</br>
Chegou a viola forrozeira (forrozeira, aah)</br>
Eu sou da Bahia de São Salvador</br>
Ubatuba terra que só cheira amor (uoo uooo)</br>
Ubatuba terra que só cheira amor (uoo uooo)</br>
Ubatuba terra que só cheira amor</br></br>

O sol brilhou na Vermelha do Centro</br>
Altas ondas estão pra chegar (Swell vai entrar)</br>
Pepeu já prepara um grande lual (um grande lual!)</br>
A noite do forró vai ser muito astral (uou uou uou uou uou uou)</br>
A magia de Ubatuba</br>
Dentro de um tubo chamado Itamambuca</br>
Vejo você sorrindo pra mim</br>
Gatinha dengosa, muito gostosa dizendo que sim</br>
Amigo Pepeu, acenda a fogueira</br>
Chegou a viola forrozeira (forrozeira, aah)</br>
Eu sou da Bahia de São Salvador</br>
Ubatuba terra que só cheira amor (uoo uooo)</br>
Ubatuba terra que só cheira amor (uoo uooo)</br>
Ubatuba terra que só cheira amor</br>
    </p>
</div>

`
var musica3 = 
`
<div id="menu"><nav><a class="link"href="#">Login</a><a class="link"href="index.html"> Home</a>
 <p>
      Playlist
    </p>
    <a class="link"href="#" onclick="trocar_pagina(musica1);"> Vermelha do Centro</a>
    <a class="link"href="#" onclick="trocar_pagina(musica2);"> Boate Azul </a>
    <a class="link"href="#" onclick="trocar_pagina(musica3);"> Amiga Da Minha Mulher</a>
    <a class="link"href="#" onclick="trocar_pagina(musica4);"> Sítio do Tio Harry</a>
    <a class="link"href="#" onclick="trocar_pagina(musica5);"> Carolina, Carol Bela</a>
    <a class="link"href="#" onclick="trocar_pagina(musica6);"> Naquela Mesa</a>
    
</nav>

</div>
    <main> <iframe width="640" height="480" src="https://www.youtube.com/embed/ENwJxGEIiDE" title="Amiga Da Minha Mulher - Seu Jorge (Músicas Para Churrasco Vol.1)" frameborder="0" allow="accelerometer; autoplay; 
    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></main>

    <div class="box">
    <p>Ela é amiga da minha mulher </br>
    Pois é, pois é</br>
    Mas vive dando em cima de mim</br>
    Enfim, enfim</br>
    Ainda por cima, é uma tremenda gata</br>
    Pra piorar a minha situação</br></br>
    
    Se fosse mulher feia, tava tudo certo</br>
    Mulher bonita mexe com meu coração</br>
    Se fosse mulher feia, tava tudo certo</br>
    Mulher bonita mexe com meu coração</br></br>
    
    Não pego, eu pego</br>
    Não pego, eu pego</br>
    Não pego, não</br>
    (Não pego, eu pego)</br>
    (Não pego, eu pego)</br>
    (Não pego, não)</br></br>
    
    Minha mulher me perguntou até: Qual é, qual é?</br>
    Eu respondi que não tô nem aí, menti, menti</br>
    De vez em quando, eu fico admirando</br>
    É muita areia pro meu caminhão</br></br>
    
    Se fosse mulher feia, tava tudo certo</br>
    Mulher bonita mexe com meu coração</br>
    Se fosse mulher feia, tava tudo certo</br>
    Mulher bonita mexe com meu coração</br></br>
    
    Não pego, eu pego</br>
    Não pego, eu pego</br>
    Não pego, não</br>
    (Não pego, eu pego)</br>
    (Não pego, eu pego)</br>
    (Não pego, não)</br></br>
    
    O meu cunhado já me avisou</br>
    Que, se eu der mole, ele vai me entregar</br>
    A minha sogra me orientou</br>
    Isso não tá certo, é melhor parar</br></br>
    
    Falei, ela não quis ouvir</br>
    Pedi, ela não respeitou</br>
    Eu juro, a carne é fraca</br>
    Mas nunca rolou</br>
    (Falei, ela não quis ouvir) Não quis ouvir</br>
    (Pedi, ela não respeitou)</br>
    (Eu juro, a carne é fraca)</br>
    (Mas nunca rolou)</br></br>
    
    Ela é amiga da minha mulher</br>
    Pois é, pois é</br>
    Mas vive dando em cima de mim</br>
    Enfim, enfim</br>
    Ainda por cima, é uma tremenda gata</br>
    Pra piorar a minha situação</br></br>
    
    Se fosse mulher feia, tava tudo certo</br>
    Mulher bonita mexe com meu coração</br>
    Se fosse mulher feia, tava tudo certo</br>
    Mulher bonita mexe com meu coração</br></br>
    
    Não pego, eu pego</br>
    Não pego, eu pego</br>
    Não pego, não, não, não</br>
    (Não pego, eu pego)</br>
    (Não pego, eu pego)</br>
    (Não pego, não)</br></br>
    
    Minha mulher me perguntou até: Qual é, qual é?</br>
    Eu respondi que não tô nem aí, menti, menti</br>
    De vez em quando, eu fico admirando</br>
    É muita areia pro meu caminhão</br> </br>
    
    Se fosse mulher feia, tava tudo certo</br>
    Mulher bonita mexe com meu coração</br>
    Se fosse mulher feia, tava tudo certo</br>
    Mulher bonita mexe com meu coração</br>
    
    Não pego, eu pego</br>
    Não pego, eu pego</br>
    Não pego, não, não, não</br>
    (Não pego, eu pego)</br>
    (Não pego, eu pego)</br>
    (Não pego, não)</br></br>
    
    O meu cunhado já me avisou</br>
    Que, se eu der mole, ele vai me entregar</br>
    A minha sogra me orientou</br>
    Isso não tá certo, é melhor parar</br>
    
    Falei, ela não quis ouvir</br>
    Pedi, ela não respeitou</br>
    Eu juro, a carne é fraca</br>
    Mas nunca rolou</br>
    (Falei, ela não quis ouvir) Não quis ouvir</br>
    (Pedi, ela não respeitou)</br>
    (Eu juro, a carne é fraca)</br>
    (Mas nunca rolou) Não, não, não</br></br>
    
    Não pego, eu pego</br>
    Não pego, eu pego</br>
    Não pego, não, não, não</br>
    (Não pego, eu pego)</br>
    (Não pego, eu pego)</br>
    (Não pego, não) Não, não</br>
    Não pego, eu pego</br>
    Não pego, eu pego</br>
    Não pego, não, não, não</br>
    (Não pego, eu pego)</br>
    (Não pego, eu pego)</br>
    (Não pego, não) Não, não, não, não</br>
    Não pego, eu pego</br>
    Não pego, eu pego</br>
    Não pego, não, não, não</br>
    (Não pego, eu pego)</br>
    (Não pego, eu pego)</br>
    (Não pego, não) Não, não, não, não</br>
    Não pego, eu pego</br>
    Não pego, eu pego</br>
    Não pego, não, não, não</br>
    (Não pego, eu pego)</br>
    (Não pego, eu pego)</br>
    (Não pego, não)</br>
    
    </p>
    </div>


`



var musica2 = 
`
<div id="menu"><nav><a class="link"href="#">Login</a><a class="link"href="index.html"> Home</a>
 <p>
      Playlist
    </p>
    <a class="link"href="#" onclick="trocar_pagina(musica1);"> Vermelha do Centro</a>
    <a class="link"href="#" onclick="trocar_pagina(musica2);"> Boate Azul </a>
    <a class="link"href="#" onclick="trocar_pagina(musica3);"> Amiga Da Minha Mulher</a>
    <a class="link"href="#" onclick="trocar_pagina(musica4);"> Sítio do Tio Harry</a>
    <a class="link"href="#" onclick="trocar_pagina(musica5);"> Carolina, Carol Bela</a>
    <a class="link"href="#" onclick="trocar_pagina(musica6);"> Naquela Mesa</a>
    
</nav>

</div>
    <main> <iframe width="640" height="480" src="https://www.youtube.com/embed/77LfH30UJ_g" title="Boate Azul   Milionário e José Rico" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
    encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></main>

    <div class="box">
    <p>Doente de amor, procurei remédio na vida noturna</br>
    Com a flor da noite em uma boate aqui na zona sul</br>
    A dor do amor é com outro amor que a gente cura</br>
    Vim curar a dor desse mal de amor na boate azul</br></br>
    
    E quando a noite vai se agonizando no clarão da aurora</br>
    Os integrantes da vida noturna se foram dormir</br>
    E a dama da noite que estava comigo também foi embora</br>
    Fecharam-se as portas, sozinho de novo tive que sair</br></br>
    
    Sair de que jeito se nem sei o rumo para onde vou</br>
    Muito vagamente me lembro que estou</br>
    Em uma boate aqui na zona sul</br>
    Eu bebi demais e não consigo me lembrar sequer</br>
    Qual era o nome daquela mulher</br>
    A flor da noite na boate azul</br></br>
    
    E quando a noite vai se agonizando no clarão da aurora</br>
    Os integrantes da vida noturna se foram dormir</br>
    E a dama da noite que estava comigo também foi embora</br>
    Fecharam-se as portas, sozinho de novo tive que sair</br></br>
    
    Sair de que jeito se nem sei o rumo para onde vou</br>
    Muito vagamente me lembro que estou</br>
    Em uma boate aqui na zona sul</br>
    Eu bebi demais e não consigo me lembrar sequer</br>
    Qual era o nome daquela mulher</br>
    A flor da noite na boate azul</br>
    
    </p>
    </div>


`


var musica6 = 
`
<div id="menu"><nav><a class="link"href="#">Login</a><a class="link"href="index.html"> Home</a>
 <p>
      Playlist
    </p>
    <a class="link"href="#" onclick="trocar_pagina(musica1);"> Vermelha do Centro</a>
    <a class="link"href="#" onclick="trocar_pagina(musica2);"> Boate Azul </a>
    <a class="link"href="#" onclick="trocar_pagina(musica3);"> Amiga Da Minha Mulher</a>
    <a class="link"href="#" onclick="trocar_pagina(musica4);"> Sítio do Tio Harry</a>
    <a class="link"href="#" onclick="trocar_pagina(musica5);"> Carolina, Carol Bela</a>
    <a class="link"href="#" onclick="trocar_pagina(musica6);"> Naquela Mesa</a>
    
</nav>

</div>
    <main><iframe width="658" height="480" src="https://www.youtube.com/embed/R2AAukCydjM" title="José Domingos -  Naquela Mesa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></main>
   
    <div class="box">
    <p>Naquela mesa ele sentava sempre</br>
    E me dizia sempre o que é viver melhor</br>
    Naquela mesa ele contava histórias</br>
    Que hoje na memória eu guardo e sei de cor</br></br>
    
    Naquela mesa ele juntava a gente</br>
    E contava contente o que fez de manhã</br>
    E nos seus olhos era tanto brilho</br>
    Que mais que seu filho</br>
    Eu fiquei seu fã</br></br>
    
    Eu não sabia que doía tanto</br>
    Uma mesa num canto, uma casa e um jardim</br>
    Se eu soubesse o quanto dói a vida</br>
    Essa dor tão doída não doía assim</br>
    Agora resta uma mesa na sala</br>
    E hoje ninguém mais fala no seu bandolim</br></br>
    
    Naquela mesa tá faltando ele</br>
    E a saudade dele tá doendo em mim</br>
    Naquela mesa tá faltando ele</br>
    E a saudade dele tá doendo em mim</br>
    </p>
    </div>
`
var musica4 = 

`<div id="menu"><nav><a class="link"href="#">Login</a><a class="link"href="index.html"> Home</a>
 <p>
      Playlist
    </p>
    <a class="link"href="#" onclick="trocar_pagina(musica1);"> Vermelha do Centro</a>
    <a class="link"href="#" onclick="trocar_pagina(musica2);"> Boate Azul </a>
    <a class="link"href="#" onclick="trocar_pagina(musica3);"> Amiga Da Minha Mulher</a>
    <a class="link"href="#" onclick="trocar_pagina(musica4);"> Sítio do Tio Harry</a>
    <a class="link"href="#" onclick="trocar_pagina(musica5);"> Carolina, Carol Bela</a>
    <a class="link"href="#" onclick="trocar_pagina(musica6);"> Naquela Mesa</a>
    
</nav>

</div>
    <main><iframe width="853" height="480" src="https://www.youtube.com/embed/MczwQBm6c8E" title="Mc Sid , Nog - Sítio do Tio Harry (Animação Oficial) - Prod Nine e Chiocki" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></main>

    <div class="box">
    <p>
    No interior, existe uma lenda de um duende que mora numa fazenda </br>
    E rouba frutas pra sua merenda</br>
    Flores pro seu cachimbo, só aparece no Sol apino</br>
    Rasga roupas de menino e tem uma face mais que horrenda</br></br>
    
    O último que o viu</br>
    Disse que ele roubou um isqueiro e fugiu, mas se distraiu</br>
    Quando o gato miou e o cachorro latiu</br>
    Dizem que ele é um presságio de vitória</br>
    Mas acho que, no fundo, tudo isso não passa de uma história</br></br>
    
    Meu tio Harry tinha um sítio, ia-ia-ô</br>
    E eu comia uns cogumelos mágicos que ele plantou</br></br>
    
    Oito da manhã em ponto</br>
    Eu suando e tonto</br>
    Com uma sede braba</br>
    E um zumbido chato</br>
    Cadê meu dog? Ou será que era um gato?</br>
    Eu preciso achar um banheiro, deve ser pro outro lado</br></br>
    
    Psiu, psiu, Fumaça, cola pra cá</br>
    Cadê sua coleira nova, boy? Vamo passear</br>
    Eu devo tá muito louco, mano, mas dá pra notar</br>
    Posso jurar que esse cachorro tem algo pra me falar</br>
    
    Hey, bro, wash your face, you look fucking nuts</br>
    You have class, grab your bag and your freaking books</br>
    You look bad, like a bitch in a afterparty</br>
    There's my know that you throw up your fucking guts</br></br>
    
    What the fuck? Meu dog fala inglês e eu não</br>
    E essa altura vai me dar sermão porque eu tô doidão</br>
    Cê ainda guarda rancor dessa castração? (Ah, não)</br>
    Foi tudo pelo seu bem, tenha mais compaixão</br></br>
    
    Meu tio Harry tinha um sítio, ia-ia-ô</br>
    Com histórias de um duende mágico que lhe roubou</br>
    A polícia procurava o sítio, só que nunca achou</br>
    E eu comia os cogumelos mágicos que ele plantou</br></br>
    
    Meu tio Harry tinha um sítio, ia-ia-ô</br>
    Com histórias de um duende mágico que lhe roubou</br>
    A polícia procurava o sítio, só que nunca achou</br>
    E eu comia os cogumelos mágicos que ele plantou</br></br>
    
    Aí, é, Nog, ahn, cê tá suave, mano, na moral?</br>
    Cola aqui no tio Harry, lek, papo reto</br>
    Comi uns bagulho estranho e, pô, tô legal não</br>
    Aê, irmão, cê não comeu os cogumelo do tio Harry não, né?</br>
    Mas demorou, meia hora eu tô aí</br></br>
    
    Que demora, NOG, porra!</br></br>
    
    Ei, ei, se acalma, Sid (como?)</br>
    Deixa de maluquice (aham)
    Meus amigo me disseram que eles tomam mensalmente</br>
    Que é só pra abrir a mente, então foca no presente</br>
    Curte a brisa que em algumas horas, cê volta e tá bem (impossível)</br></br>
    
    Na real, procê ver como isso passa, parça (nunca)</br>
    Passa essa desgraça que eu vou fechar com você (não, não, não, não, não)</br>
    Cê vai ver</br>
    Eu nunca tive essas brisa</br>
    Mas no máximo nós conversa, né? Até ver o amanhecer (demorô)</br></br>
    
    (Três horas depois)</br></br>
    
    Oh, cê tá ligado quando você tá cantando no palco, cara?</br>
    Eu fico inseguro, pensando: Imagina alguém vai e me vaia</br>
    Meu mano, o que eu faço? Eu paro com o rap e vendo arte na praia?</br></br>
    
    Ei, eu tô do outro lado, NOG, cê tá conversando com uma samambaia</br></br>
    
    Eita, porra, como assim? Eu jurava que era você</br>
    Porque tudo que eu tô falando ela para pra responder, se liga</br>
    Ei, Caio Nogueira, o que cê fez com a sua vida?</br>
    Cê rima assim das mina, e quando for a sua filha?</br>
    Quer uma dica? Nem fudendo, eu sei que isso tudo é brisa</br>
    Eu tô plantada na sua mente, cê que num sabia</br></br>
    
    Meu tio Harry tinha um sítio, ia-ia-ô</br>
    Com histórias de um duende mágico que lhe roubou</br>
    A polícia procurava o sítio, só que nunca achou</br>
    E eu comia os cogumelos mágicos que ele plantou</br></br>
    
    Meu tio Harry tinha um sítio, ia-ia-ô</br>
    Com histórias de um duende mágico que lhe roubou</br>
    A polícia procurava o sítio, só que nunca achou</br>
    E eu comia os cogumelos mágicos que ele plantou</br></br>
    
    Ahn, yo, ahn</br>
    Lembro das história que meu tio contava</br>
    De um duende baixo e feio que sempre lhe roubava</br>
    Ele sempre aparecia quando o tio exagerava no cachimbo</br>
    Mas as foto que ele tirou não prestava</br>
    Vamo dar um pulo no quintal, é, tomar um ar, ficar legal</br>
    Acho que esse shitake me fez mal</br>
    Tô pra ter um piripaque, um ataque do coração</br>
    Eu posso jurar que eu vi um duende roubando essa plantação</br></br>
    
    Hello, my name is Peter, The Pixie</br>
    Do you have gold, flowers or whiskey?</br>
    No need tô be suspicious or fishy</br>
    I just wanna get fucked up high, don't be a sissy</br></br>
    
    What the hell? Essa aqui bateu cruel</br>
    E eu tô vendo coisa que não existe, pior que papel</br>
    Fudeu, eu acho que pra mim também já deu</br>
    Tô precisando dormir, minha cabeça gira igual cascavel</br>
    
    Meu tio Harry tinha um sítio, ia-ia-ô</br>
    Com histórias de um duende mágico que lhe roubou</br>
    A polícia procurava o sítio, só que nunca achou</br>
    E eu comia os cogumelos mágicos que ele plantou (ihá!)</br></br>
    
    Meu tio Harry tinha um sítio, ia-ia-ô</br>
    Com histórias de um duende mágico que lhe roubou</br>
    A polícia procurava o sítio, só que nunca achou</br>
    E eu comia os cogumelos mágicos que ele plantou</br></br>
    
    Caralho, e aê, Nog?</br>
    Aê, pai, cê é louco, mano, que isso?</br>
    Ô, caralho, acho que eu, acho que eu tô suave, hein, mano?</br>
    Na moral, meu cachorro tá até latindo em português, tá de boa</br>
    Cê é louco, mano, nem me fale</br>
    Ô, bagulho passou a brisa do nada, tá ligado?</br>
    Mas não entendi nada, tava sem camiseta, perdi meu tênis</br>
    Não achei mais meu tênis</br>
    Mas eu achei pelo menos o caminho de volta aí pro sítio, tá ligado?</br>
    Maneiro, maneiro, maneiro</br>
    Mas aê</br>
    Será que o tio Harry tem mais?</br>
    </p>

    </div>
    `

var musica5 = 
`
<div id="menu"><nav><a class="link"href="#">Login</a><a class="link"href="index.html"> Home</a>
 <p>
      Playlist
    </p>
    <a class="link"href="#" onclick="trocar_pagina(musica1);"> Vermelha do Centro</a>
    <a class="link"href="#" onclick="trocar_pagina(musica2);"> Boate Azul </a>
    <a class="link"href="#" onclick="trocar_pagina(musica3);"> Amiga Da Minha Mulher</a>
    <a class="link"href="#" onclick="trocar_pagina(musica4);"> Sítio do Tio Harry</a>
    <a class="link"href="#" onclick="trocar_pagina(musica5);"> Carolina, Carol Bela</a>
    <a class="link"href="#" onclick="trocar_pagina(musica6);"> Naquela Mesa</a>
    
</nav>

</div>
    <main><iframe width="853" height="480" src="https://www.youtube.com/embed/VC1d1Tm9lKQ" title="Carolina, Carol Bela" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></main>
    
    <div class="box">
    <p>
    Foi numa tarde de domingo</br>
    Que alguém perguntando por ela chegou</br>
    Deixando o meu coração tristonho</br>
    Enciumado, morrendo de amor</br></br>
    
    Eu falei, eu menti, eu chorei, eu sorri dizendo</br>
    Eu falei, eu menti, eu chorei, eu sorri dizendo</br></br>
    
    Que ela mora no meu peito</br>
    E eu moro vizinho a ela</br>
    E eu fico desse jeito</br>
    Pensando nos beijos, nos carinhos dela</br></br>
    
    Carolina, Carol, Carol, Carolina bela</br>
    Carolina, Carol, Carol, Carolina bela</br>
    Ca, Ca, Ca, Carol</br>
    Ca, Ca, Carolina</br>
    Ca, Ca, Ca, Carol</br>
    Ca, Ca, Carolina</br></br>
    
    Carolina, Carol, Carol, Carolina bela</br>
    Carolina, Carol, Carol, Carolina bela</br>
    </p>
    </div>
    `
function trocar_pagina(parametro){

    musica.innerHTML = parametro

}

/*




function letra(){

    titulo.innerHTML = texto;
    para.innerHTML = texto;



}


function letra2(){

    titulo.innerHTML = texto2;
    para.innerHTML = texto2;



}

function letra3(){

   corpo.innerHTML =texto;



}
*/