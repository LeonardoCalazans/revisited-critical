// Objeto contendo as descrições das tabelas de lesões e insanidade
export const auxiliaryTablesDescriptions = {
    'menores': {
        '1-3': '<strong>Perna ferida!</strong> O deslocamento de caminhada da criatura é <strong>reduzido</strong> em 3 metros.',
        '4-8': '<strong>Braço ferido!</strong> Determine aleatoriamente um dos braços da criatura. Esse braço não pode ser usado para segurar um escudo e a criatura tem <strong>desvantagem</strong> em qualquer rolagem envolvendo o uso desse braço.',
        '9-11': '<strong>Múltiplas lesões!</strong> Os pontos de vida máximos da criatura são <strong>reduzidos</strong> em uma quantidade equivalente à <strong>metade do dano causado</strong> pelo ataque.',
        '12-16': '<strong>Maldosamente espancado!</strong> A criatura tem <strong>desvantagem</strong> nos testes de resistência de Constituição.',
        '17-19': '<strong>Golpe vibrante!</strong> A criatura fica <strong>atordoada</strong> até o final do próximo turno e fica <strong>ensurdecida</strong> até completar a recuperação em um período de inatividade.',
        20: '<strong>Golpe na cabeça!</strong> A criatura fica <strong>inconsciente</strong> por 2d12 horas.'
    },
    'maiores': {
        '1-3': '<strong>Perna aleijada!</strong> O deslocamento de caminhada da criatura é <strong>reduzido</strong> em 3 metros e tem <strong>desvantagem</strong> em testes de resistência de Destreza.',
        '4-8': '<strong>Braço aleijado!</strong> Determine aleatoriamente um dos braços da criatura. Esse braço não pode ser usado para segurar um item e qualquer teste habilidade que exigir o braço <strong>falha automaticamente</strong> ou tem <strong>desvantagem</strong> (escolha do Mestre).',
        '9-11': '<strong>Severamente ferido!</strong> Os pontos de vida máximos da criatura são <strong>reduzidos</strong> em uma quantidade equivalente ao dano causado pelo ataque.',
        '12-16': '<strong>Beira da morte!</strong> A criatura tem <strong>desvantagem</strong> em testes de Constituição e nos testes de resistência contra a morte.',
        '17-19': '<strong>Meus olhos!</strong> A criatura está <strong>cega</strong>.',
        20: '<strong>Decapitado!</strong> A criatura está <strong>morta</strong>.'
    },
    'insanidade': {
        1: '<strong>Sinestesia.</strong> Você pode ouvir cores, cheirar sons ou provar texturas. Independentemente da manifestação específica, você tem <strong>desvantagem</strong> em todos os testes de Percepção e Investigação.',
        2: '<strong>Cleptomania.</strong> Uma vez por dia, quando você está em uma residência pessoal ou mercado, o Mestre pode pedir um teste de resistência de Sabedoria (CD 12) para resistir ao impulso de <strong>roubar</strong> um item de valor prático e monetário insignificante.',
        3: '<strong>Paranoia.</strong> Uma vez por dia, após uma interação com outra criatura (incluindo outros PdJs), o Mestre pode pedir um teste de resistência de Sabedoria (CD 12) bem sucedido ou você <strong>suspeitará</strong> que a criatura esteja secretamente planejando contra você.',
        4: '<strong>Obsessão.</strong> Escolha uma pessoa ou interesse pessoal com o qual você está obcecado. Uma vez por dia, quando você é apresentado a uma oportunidade de interagir ou aprender mais sobre o assunto da sua obsessão, o Mestre pode pedir um teste de resistência de Sabedoria (CD 14) bem sucedido ou você <strong>ignorará</strong> qualquer outra coisa além da sua obsessão com o objeto de seu fascínio.',
        5: '<strong>Vício.</strong> Escolha um comportamento ou substância que você usou. Uma vez por dia, quando você é apresentado a uma oportunidade de fazer o comportamento ou usar a substância, o Mestre pode pedir a você para ter sucesso em um teste de resistência de Sabedoria (CD 14) ou <strong>ignorará</strong> tudo o resto para entregar-se ao seu vício.',
        6: '<strong>Pensamento estranho.</strong> Uma vez por dia, quando você ouvir uma explicação racional para um evento ou ocorrência, seu Mestre pode pedir para ser bem sucedido em um teste de resistência de Sabedoria (CD 12) ou <strong>rejeitará</strong> a explicação racional por uma explicação conspiratória ou fantástica.',
        7: '<strong>Narcisismo.</strong> Quando você realizar uma ação ou uma série de ações que não o beneficiam diretamente, deve ser bem sucedido em um teste de resistência de Sabedoria (CD 11) ou <strong>não poderá tomar</strong> essa ação/série de ações. Se for exigido qualquer autosacrifício de sua parte, a CD do teste de resistência será aumentada para 16.',
        8: '<strong>Delirante.</strong> Quando você ganha essa insanidade, o Mestre irá dizer-lhe uma crença que você tem. Não importa que evidência contrária seja apresentada, desde que tenha essa insanidade, <strong>não poderá ser persuadido</strong> de que essa crença não é verdadeira.',
        9: '<strong>Alotriofagia.</strong> Uma vez por dia, o Mestre pode pedir que você para passe em um teste de resistência de Sabedoria (CD 14) ou comerá imediatamente um objeto <strong>não alimentar</strong> (como sujeira, guardanapos ou uma pequena joia) à escolha do Mestre.',
        10: '<strong>Amnésia retrógrada.</strong> Você <strong>esqueceu</strong> tudo sobre sua vida pessoal de antes do momento em que recebeu essa insanidade.',
        11: '<strong>Oprimido.</strong> Se você não tem imunidade ou resistência ao dano psíquico, ganha <strong>vulnerabilidade</strong> ao dano psíquico. Se você tem resistência ao dano psíquico, você a perde. Se você tem imunidade ao dano psíquico, você a perde, mas ganha <strong>resistência</strong> ao dano psíquico.',
        12: '<strong>Amnésia anterógrada.</strong> Sempre que você tentar lembrar um fato que aprendeu desde que recebeu essa insanidade, faça um teste de resistência de Sabedoria (CD 12). Se falhar, <strong>não poderá lembrar</strong> o fato.',
        13: '<strong>Dependência.</strong> Você deve passar em um teste de resistência de Sabedoria (CD 14) para realizar uma ação que um ou mais de seus aliados <strong>desaprovam</strong>.',
        14: '<strong>Aflito.</strong> Você tem <strong>desvantagem</strong> em teste de resistência contra ser amedrontado. Além disso, uma vez por dia, o Mestre pode pedir que tenha sucesso em um teste de resistência de Sabedoria (DC 14) ou será <strong>amedrontado</strong> por uma criatura à escolha do Mestre pelo próximo minuto.',
        15: '<strong>Mudo.</strong> Sempre que você desejar falar (incluindo conjurar uma magia que tenha componentes verbais), deve ter sucesso em um teste de resistência de Sabedoria (CD 13) para <strong>fazê-lo</strong>.',
        16: '<strong>Narcolepsia.</strong> Você tem <strong>desvantagem</strong> em teste de resistência contra dormir ou inconsciência. Uma vez por dia, o Mestre pode pedir para ter sucesso em um teste de resistência de Constituição (CD 12) ou cairá <strong>inconsciente</strong> por um minuto, até que sofra dano ou outra criatura gaste sua ação tentando despertá-lo.',
        17: '<strong>Insônia.</strong> Você <strong>não pode fazer descansos longos</strong> e seus descansos curtos demoram 8 horas para completarem.',
        18: '<strong>Homicida.</strong> Depois de cada descanso longo, você deve passar em um teste de resistência de Sabedoria (CD 14) ou será <strong>superado pelo desejo de acabar com a vida</strong> de uma criatura humanoide e <strong>não poderá se beneficiar</strong> de outro descanso longo até fazê-lo.',
        19: '<strong>Suicida.</strong> Depois de cada descanso longo, você deve passar em um teste de resistência de Sabedoria (CD 12) ou <strong>tentará tirar a sua própria vida</strong>.',
        20: '<strong>Catatonia.</strong> Você ficará <strong>inconsciente</strong> por 10d10 anos.'
    }
};
