// Importa os objetos de descrição dos arquivos separados
import { damageDescriptions } from './damageDescriptions.js';
import { auxiliaryTablesDescriptions } from './auxiliaryTablesDescriptions.js';
import { failureDescriptions } from './failureDescriptions.js';

// Obtém referências aos elementos HTML
const menuDamage = document.getElementById('menuDamage');
const menuInsanity = document.getElementById('menuInsanity');
const menuFailures = document.getElementById('menuFailures');

const damageCalculatorSection = document.getElementById('damageCalculatorSection');
const insanitySection = document.getElementById('insanitySection');
const failureSection = document.getElementById('failureSection');

const damageTypeSelect = document.getElementById('damageType');
const damageValueInput = document.getElementById('damageValue');
const displayMessageBtn = document.getElementById('displayMessageBtn');
const messageDisplay = document.getElementById('messageDisplay');

const lesionTableDisplay = document.getElementById('lesionTableDisplay');
const lesionTypeSelect = document.getElementById('lesionTypeSelect');
const lesionValueInput = document.getElementById('lesionValue');
const confirmLesionBtn = document.getElementById('confirmLesionBtn');
const lesionResultDisplay = document.getElementById('lesionResultDisplay');

const insanityValueInput = document.getElementById('insanityValue');
const displayInsanityBtn = document.getElementById('displayInsanityBtn');
const insanityResultDisplay = document.getElementById('insanityResultDisplay');

const failureValueInput = document.getElementById('failureValue');
const displayFailureBtn = document.getElementById('displayFailureBtn');
const failureResultDisplay = document.getElementById('failureResultDisplay');

// Função para encontrar a descrição correta com base no valor
function getDescription(type, value, descriptions) {
    let targetMap = descriptions;
    // Verifica se `type` é uma chave válida para um mapa aninhado dentro de `descriptions`
    if (type && descriptions.hasOwnProperty(type) && typeof descriptions[type] === 'object' && descriptions[type] !== null) {
        targetMap = descriptions[type];
    } else if (type && !descriptions.hasOwnProperty(type) && Object.keys(descriptions).length > 0 && typeof Object.values(descriptions)[0] === 'object' && Object.values(descriptions)[0] !== null && !Array.isArray(Object.values(descriptions)[0])) {
        // Se 'type' foi fornecido, mas não é uma propriedade direta, e 'descriptions' é um objeto de objetos (aninhado),
        // então é um erro de 'tipo não encontrado' para essa estrutura.
        return `Tipo "${type}" não encontrado.`;
    }
    // Se 'type' é null ou vazio, ou 'descriptions' não é aninhado (como failureDescriptions),
    // então `targetMap` já é `descriptions` e prossegue para a busca direta.


    if (targetMap.hasOwnProperty(value)) {
        return targetMap[value];
    }

    for (const range in targetMap) {
        if (range.includes('-')) {
            const [min, max] = range.split('-').map(Number);
            if (value >= min && value <= max) {
                return targetMap[range];
            }
        }
    }
    return 'Descrição não encontrada para o valor fornecido.';
}

// Função para mostrar a seção com animação
function showSection(sectionToShowId) {
    const sections = [damageCalculatorSection, insanitySection, failureSection];
    const menuButtons = [menuDamage, menuInsanity, menuFailures];
    const transitionDuration = 300; // Duração da transição em ms (deve corresponder ao CSS)

    sections.forEach(section => {
        if (section.id !== sectionToShowId) {
            // Esconde a seção, permite a transição visual
            section.classList.remove('section-visible');
            section.classList.add('section-hidden');
            // Após a transição, remove totalmente do fluxo
            setTimeout(() => {
                section.classList.add('section-display-none');
            }, transitionDuration);
        }
    });

    menuButtons.forEach(button => {
        button.classList.remove('bg-blue-500', 'hover:bg-blue-600', 'text-white');
        button.classList.add('bg-gray-300', 'hover:bg-gray-400', 'text-gray-800');
    });

    const targetSection = document.getElementById(sectionToShowId);
    let targetButton;

    if (sectionToShowId === 'damageCalculatorSection') {
        targetButton = menuDamage;
    } else if (sectionToShowId === 'insanitySection') {
        targetButton = menuInsanity;
    } else if (sectionToShowId === 'failureSection') {
        targetButton = menuFailures;
    }

    targetButton.classList.remove('bg-gray-300', 'hover:bg-gray-400', 'text-gray-800');
    targetButton.classList.add('bg-blue-500', 'hover:bg-blue-600', 'text-white');

    // Remove display: none antes de aplicar as classes de transição para que a animação ocorra
    targetSection.classList.remove('section-display-none');
    // Força o reflow para garantir que o navegador veja a mudança de display antes de aplicar a transição
    void targetSection.offsetWidth;
    
    // Mostra a seção, permitindo a transição visual
    targetSection.classList.remove('section-hidden');
    targetSection.classList.add('section-visible');

    // Ocultar divs de resultado de outras seções (sempre que a seção muda)
    lesionTableDisplay.classList.remove('opacity-100', 'scale-100');
    lesionTableDisplay.classList.add('opacity-0', 'scale-95', 'hidden');
    lesionResultDisplay.classList.add('hidden');
    insanityResultDisplay.classList.add('hidden');
    failureResultDisplay.classList.add('hidden');
}

// Event listeners para o menu
menuDamage.addEventListener('click', () => showSection('damageCalculatorSection'));
menuInsanity.addEventListener('click', () => showSection('insanitySection'));
menuFailures.addEventListener('click', () => showSection('failureSection'));

// Adiciona um listener de evento ao botão principal de DANO
displayMessageBtn.addEventListener('click', () => {
    const selectedType = damageTypeSelect.value;
    const damageValue = parseInt(damageValueInput.value);

    if (isNaN(damageValue) || damageValue < 1 || damageValue > 20) {
        messageDisplay.innerHTML = "Por favor, insira um número entre 1 e 20 para o dano.";
        messageDisplay.classList.remove('hidden', 'bg-blue-50', 'border-blue-200', 'text-blue-800');
        messageDisplay.classList.add('bg-red-50', 'border-red-200', 'text-red-800');
        lesionTableDisplay.classList.remove('opacity-100', 'scale-100');
        lesionTableDisplay.classList.add('opacity-0', 'scale-95', 'hidden');
        lesionResultDisplay.classList.add('hidden');
        return;
    }

    const description = getDescription(selectedType, damageValue, damageDescriptions);
    messageDisplay.innerHTML = description;
    messageDisplay.classList.remove('hidden', 'bg-red-50', 'border-red-200', 'text-red-800');
    messageDisplay.classList.add('bg-blue-50', 'border-blue-200', 'text-blue-800');

    const needsLesionTable = description.includes('tabela de <strong>lesões menores</strong>') ||
                             description.includes('tabela de <strong>lesões maiores</strong>') ||
                             description.includes('tabela <strong>Insanidade</strong>');

    if (needsLesionTable) {
        lesionTableDisplay.classList.remove('hidden');
        setTimeout(() => {
            lesionTableDisplay.classList.remove('opacity-0', 'scale-95');
            lesionTableDisplay.classList.add('opacity-100', 'scale-100');
        }, 10);
        lesionResultDisplay.classList.add('hidden');
        lesionTypeSelect.value = "";
        lesionValueInput.value = "1";
    } else {
        lesionTableDisplay.classList.remove('opacity-100', 'scale-100');
        lesionTableDisplay.classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
            lesionTableDisplay.classList.add('hidden');
        }, 300);
        lesionResultDisplay.classList.add('hidden');
    }
});

// Listener para o botão de confirmar escolha da tabela de lesões
confirmLesionBtn.addEventListener('click', () => {
    const selectedLesionType = lesionTypeSelect.value;
    const lesionValue = parseInt(lesionValueInput.value);

    if (isNaN(lesionValue) || lesionValue < 1 || lesionValue > 20) {
        lesionResultDisplay.innerHTML = 'Por favor, insira um número entre 1 e 20 para a lesão.';
        lesionResultDisplay.classList.remove('hidden');
        lesionResultDisplay.classList.add('bg-red-50', 'border-red-200', 'text-red-800');
        lesionResultDisplay.classList.remove('bg-yellow-100', 'border-yellow-300', 'text-yellow-900');
        return;
    }

    if (selectedLesionType) {
        const description = getDescription(selectedLesionType, lesionValue, auxiliaryTablesDescriptions);
        lesionResultDisplay.innerHTML = description;
        lesionResultDisplay.classList.remove('hidden', 'bg-red-50', 'border-red-200', 'text-red-800');
        lesionResultDisplay.classList.add('bg-yellow-100', 'border-yellow-300', 'text-yellow-900');
    } else {
        lesionResultDisplay.innerHTML = 'Por favor, selecione uma opção de lesão.';
        lesionResultDisplay.classList.remove('hidden');
        lesionResultDisplay.classList.add('bg-red-50', 'border-red-200', 'text-red-800');
        lesionResultDisplay.classList.remove('bg-yellow-100', 'border-yellow-300', 'text-yellow-900');
    }
});

// Listener para o botão de exibir INSANIDADE
displayInsanityBtn.addEventListener('click', () => {
    const insanityValue = parseInt(insanityValueInput.value);

    if (isNaN(insanityValue) || insanityValue < 1 || insanityValue > 20) {
        insanityResultDisplay.innerHTML = 'Por favor, insira um número entre 1 e 20 para a insanidade.';
        insanityResultDisplay.classList.remove('hidden');
        insanityResultDisplay.classList.add('bg-red-50', 'border-red-200', 'text-red-800');
        insanityResultDisplay.classList.remove('bg-purple-50', 'border-purple-200', 'text-purple-800');
        return;
    }

    const description = getDescription('insanidade', insanityValue, auxiliaryTablesDescriptions);
    insanityResultDisplay.innerHTML = description;
    insanityResultDisplay.classList.remove('hidden', 'bg-red-50', 'border-red-200', 'text-red-800');
    insanityResultDisplay.classList.add('bg-purple-50', 'border-purple-200', 'text-purple-800');
});

// Listener para o botão de exibir FALHAS CRÍTICAS
displayFailureBtn.addEventListener('click', () => {
    const failureValue = parseInt(failureValueInput.value);

    if (isNaN(failureValue) || failureValue < 1 || failureValue > 100) {
        failureResultDisplay.innerHTML = 'Por favor, insira um número entre 1 e 100 para a falha crítica.';
        failureResultDisplay.classList.remove('hidden');
        failureResultDisplay.classList.add('bg-red-50', 'border-red-200', 'text-red-800');
        return;
    }

    // Para falhas críticas, 'failureDescriptions' é um mapa direto, não aninhado por tipo.
    // Passamos 'null' como o tipo, o que fará com que getDescription use o 'failureDescriptions' diretamente.
    const description = getDescription(null, failureValue, failureDescriptions);
    failureResultDisplay.innerHTML = description;
    failureResultDisplay.classList.remove('hidden', 'bg-red-50', 'border-red-200', 'text-red-800');
    failureResultDisplay.classList.add('bg-red-50', 'border-red-200', 'text-red-800'); // Cor padrão para falhas
});

// Inicializa a visibilidade da seção correta e o botão do menu
document.addEventListener('DOMContentLoaded', () => {
    showSection('damageCalculatorSection');
});
