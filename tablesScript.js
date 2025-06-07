// Importa os objetos de descrição dos arquivos separados
import { damageDescriptions } from './damageDescriptions.js';
import { auxiliaryTablesDescriptions } from './auxiliaryTablesDescriptions.js';
import { failureDescriptions } from './failureDescriptions.js';

// Mapeamento de tipos de dano/tabelas para classes de cores Tailwind
const colorMap = {
    // Cores para Acertos Críticos por Tipo de Dano
    'cortante': { bg: 'bg-gray-100', border: 'border-gray-400', text: 'text-gray-800', strong: 'text-gray-700' },
    'perfurante': { bg: 'bg-teal-100', border: 'border-teal-400', text: 'text-teal-800', strong: 'text-teal-700' },
    'contusão': { bg: 'bg-amber-100', border: 'border-amber-400', text: 'text-amber-800', strong: 'text-amber-700' },
    'radiante': { bg: 'bg-yellow-100', border: 'border-yellow-400', text: 'text-yellow-800', strong: 'text-yellow-700' },
    'ácido': { bg: 'bg-lime-100', border: 'border-lime-400', text: 'text-lime-800', strong: 'text-lime-700' },
    'fogo': { bg: 'bg-red-100', border: 'border-red-400', text: 'text-red-800', strong: 'text-red-700' },
    'elétrico': { bg: 'bg-blue-100', border: 'border-blue-400', text: 'text-blue-800', strong: 'text-blue-700' },
    'gelo': { bg: 'bg-cyan-100', border: 'border-cyan-400', text: 'text-cyan-800', strong: 'text-cyan-700' },
    'venenoso': { bg: 'bg-green-100', border: 'border-green-400', text: 'text-green-800', strong: 'text-green-700' },
    'necrótico': { bg: 'bg-indigo-100', border: 'border-indigo-400', text: 'text-indigo-800', strong: 'text-indigo-700' },
    'psíquico': { bg: 'bg-purple-100', border: 'border-purple-400', text: 'text-purple-800', strong: 'text-purple-700' },
    'energia': { bg: 'bg-pink-100', border: 'border-pink-400', text: 'text-pink-800', strong: 'text-pink-700' },
    'trovão': { bg: 'bg-zinc-100', border: 'border-zinc-400', text: 'text-zinc-800', strong: 'text-zinc-700' },

    // Cores para Tabelas Auxiliares e de Falhas Críticas
    'lesoesMenores': { bg: 'bg-orange-100', border: 'border-orange-400', text: 'text-orange-800', strong: 'text-orange-700' },
    'lesoesMaiores': { bg: 'bg-rose-100', border: 'border-rose-400', text: 'text-rose-800', strong: 'text-rose-700' },
    'insanidade': { bg: 'bg-fuchsia-100', border: 'border-fuchsia-400', text: 'text-fuchsia-800', strong: 'text-fuchsia-700' },
    'falhasCriticas': { bg: 'bg-stone-100', border: 'border-stone-400', text: 'text-stone-800', strong: 'text-stone-700' },
};


// Função para renderizar as tabelas completas
function renderFullTables() {
    console.log('renderFullTables: Iniciando renderização das tabelas completas...');
    const fullTablesContentDiv = document.getElementById('fullTablesContent');

    if (!fullTablesContentDiv) {
        console.error('Erro: Elemento #fullTablesContent não encontrado no DOM.');
        return;
    }
    console.log('renderFullTables: Elemento #fullTablesContent encontrado.');

    let htmlContent = '';

    // Função auxiliar para renderizar uma seção de tabela
    function renderTableSection(title, intro, entries, typeKey) {
        const colors = colorMap[typeKey] || { bg: 'bg-white', border: 'border-gray-200', text: 'text-gray-900', strong: 'text-blue-700' };
        
        let sectionHtml = `<div class="table-section mt-6 ${colors.bg} ${colors.border} ${colors.text} border-2 rounded-xl p-4">
                               <h3 class="text-xl font-bold mb-3 text-center ${colors.text}">${title}</h3>`;
        if (intro) {
            sectionHtml += `<p class="mb-4 ${colors.text}">${intro}</p>`;
        }
        if (entries) {
            sectionHtml += `<ul class="list-none p-0">`;
            for (const key in entries) {
                if (Object.prototype.hasOwnProperty.call(entries, key)) {
                    sectionHtml += `<li class="py-2 border-b border-opacity-50 ${colors.border} last:border-b-0">
                                        <strong class="${colors.strong}">${key}:</strong> ${entries[key]}
                                    </li>`;
                }
            }
            sectionHtml += `</ul>`;
        }
        sectionHtml += `</div>`;
        return sectionHtml;
    }

    try {
        // --- Tabela de Acertos Críticos por Tipo de Dano ---
        console.log('renderFullTables: Renderizando tabelas de Acertos Críticos por Tipo de Dano...');
        htmlContent += `
            <div class="table-section mt-6 col-span-full">
                <h2 class="text-2xl font-extrabold text-gray-900 mb-4 text-center">Tabelas de Acertos Críticos por Tipo de Dano</h2>
                <p class="text-gray-700 mb-4">Abaixo estão as tabelas completas para cada tipo de dano, detalhando os efeitos de um acerto crítico de 1 a 20. Você também pode usar a <a href='index.html' class='text-blue-600 hover:underline'>Calculadora</a> para obter descrições específicas.</p>
            </div>
        `;

        if (damageDescriptions && typeof damageDescriptions === 'object') {
            for (const damageType in damageDescriptions) {
                if (Object.prototype.hasOwnProperty.call(damageDescriptions, damageType)) {
                    const typeTitle = damageType.charAt(0).toUpperCase() + damageType.slice(1);
                    htmlContent += renderTableSection(
                        `Dano: ${typeTitle}`,
                        null,
                        damageDescriptions[damageType],
                        damageType // Passa a chave do tipo de dano para o colorMap
                    );
                }
            }
        } else {
            console.warn('damageDescriptions não é um objeto ou está vazio.');
            htmlContent += `<div class="table-section mt-6 col-span-full"><p class="text-red-500 text-center">Dados de "Acertos Críticos por Tipo de Dano" não disponíveis.</p></div>`;
        }
        console.log('renderFullTables: Tabelas de Acertos Críticos renderizadas.');

        // --- Tabela de Lesões Menores ---
        console.log('renderFullTables: Renderizando Tabela de Lesões Menores...');
        htmlContent += renderTableSection(
            "Tabela de Lesões Menores",
            "Esta tabela detalha os efeitos de lesões menores, geralmente acionadas por acertos críticos específicos ou falhas críticas.",
            auxiliaryTablesDescriptions.menores,
            'lesoesMenores' // Chave para o colorMap
        );
        console.log('renderFullTables: Tabela de Lesões Menores renderizada.');

        // --- Tabela de Lesões Maiores ---
        console.log('renderFullTables: Renderizando Tabela de Lesões Maiores...');
        htmlContent += renderTableSection(
            "Tabela de Lesões Maiores",
            "Esta tabela detalha os efeitos de lesões maiores, resultantes de impactos mais severos.",
            auxiliaryTablesDescriptions.maiores,
            'lesoesMaiores' // Chave para o colorMap
        );
        console.log('renderFullTables: Tabela de Lesões Maiores renderizada.');

        // --- Tabela de Insanidade ---
        console.log('renderFullTables: Renderizando Tabela de Insanidade...');
        htmlContent += renderTableSection(
            "Tabela de Insanidade",
            "Esta tabela descreve vários estados de insanidade que podem afetar uma criatura.",
            auxiliaryTablesDescriptions.insanidade,
            'insanidade' // Chave para o colorMap
        );
        console.log('renderFullTables: Tabela de Insanidade renderizada.');

        // --- Tabela de Falhas Críticas ---
        console.log('renderFullTables: Renderizando Tabela de Falhas Críticas...');
        htmlContent += renderTableSection(
            "Tabela de Falhas Críticas Revisitadas",
            "Esta tabela detalha os efeitos de uma falha crítica para valores de 1 a 100.",
            failureDescriptions,
            'falhasCriticas' // Chave para o colorMap
        );
        console.log('renderFullTables: Tabela de Falhas Críticas renderizada.');

        fullTablesContentDiv.innerHTML = htmlContent;
        console.log('renderFullTables: Conteúdo HTML inserido no #fullTablesContent.');

    } catch (error) {
        console.error('Erro durante a renderização das tabelas:', error);
        fullTablesContentDiv.innerHTML = `<p class="text-red-500 text-center">Ocorreu um erro ao carregar as tabelas: ${error.message}. Por favor, verifique o console para mais detalhes.</p>`;
    }
}

// Inicializa a renderização das tabelas quando a página tables.html é carregada
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded: Evento DOMContentLoaded disparado.');
    renderFullTables();
});

// Basic check to see if data objects are imported
console.log('Data Imported - damageDescriptions:', typeof damageDescriptions, damageDescriptions);
console.log('Data Imported - auxiliaryTablesDescriptions:', typeof auxiliaryTablesDescriptions, auxiliaryTablesDescriptions);
console.log('Data Imported - failureDescriptions:', typeof failureDescriptions, failureDescriptions);
