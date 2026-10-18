// Calculadora de costo ISO 27001 (/calculadora-costo-iso-27001/). Los rangos base
// salen de la FAQ publicada en /iso-27001/ (iso27001Landing.ts): de 25 a 120 M COP según
// tamaño (confirmado por George, 18-oct-2026); 6 a 12 meses, promedio 8. Si cambian allá,
// actualizar aquí y los límites del script de la calculadora. Los ajustes por factor son una referencia comercial de Star para
// orientar al cliente; la cotización real sale del diagnóstico.

export interface CalcOption {
  id: string;
  label: string;
  hint?: string;
}

export interface CalcQuestion {
  id: 'size' | 'sites' | 'maturity' | 'scope' | 'regulated';
  title: string;
  options: CalcOption[];
}

export const CALC_QUESTIONS: CalcQuestion[] = [
  {
    id: 'size',
    title: '¿Cuántas personas trabajan en su empresa?',
    options: [
      { id: 'xs', label: 'Hasta 50' },
      { id: 'sm', label: '51 a 200' },
      { id: 'md', label: '201 a 500' },
      { id: 'lg', label: 'Más de 500' },
    ],
  },
  {
    id: 'sites',
    title: '¿En cuántas sedes opera?',
    options: [
      { id: 'one', label: 'Una sede' },
      { id: 'few', label: '2 o 3 sedes' },
      { id: 'many', label: '4 o más' },
    ],
  },
  {
    id: 'maturity',
    title: '¿Qué tanto tiene avanzado hoy?',
    options: [
      { id: 'low', label: 'Casi nada', hint: 'Sin políticas ni análisis de riesgos' },
      { id: 'mid', label: 'Algo', hint: 'Algunas políticas y controles técnicos' },
      { id: 'high', label: 'Bastante', hint: 'Políticas, riesgos y controles documentados' },
    ],
  },
  {
    id: 'scope',
    title: '¿Qué quiere certificar?',
    options: [
      { id: 'process', label: 'Un proceso o servicio', hint: 'Por ejemplo, el servicio que vende a sus clientes' },
      { id: 'all', label: 'Toda la empresa' },
    ],
  },
  {
    id: 'regulated',
    title: '¿Su sector está regulado?',
    options: [
      { id: 'no', label: 'No' },
      { id: 'yes', label: 'Sí', hint: 'Financiero, salud, sector público o similares' },
    ],
  },
];

// Rango base en millones de COP y meses, por tamaño.
export const CALC_BASE: Record<string, { min: number; max: number; months: [number, number] }> = {
  xs: { min: 25, max: 40, months: [6, 8] },
  sm: { min: 40, max: 65, months: [7, 9] },
  md: { min: 60, max: 90, months: [8, 10] },
  lg: { min: 85, max: 120, months: [9, 12] },
};

// Multiplicadores sobre el rango base (1 = sin cambio).
export const CALC_FACTORS: Record<string, Record<string, number>> = {
  sites: { one: 1, few: 1.1, many: 1.2 },
  maturity: { low: 1, mid: 0.9, high: 0.8 },
  scope: { process: 0.85, all: 1 },
  regulated: { no: 1, yes: 1.1 },
};

// Meses que se restan o suman al plazo base.
export const CALC_MONTHS: Record<string, Record<string, number>> = {
  sites: { one: 0, few: 1, many: 2 },
  maturity: { low: 1, mid: 0, high: -2 },
  scope: { process: -1, all: 0 },
};

export const CALC_DEFAULTS = { size: 'sm', sites: 'one', maturity: 'mid', scope: 'all', regulated: 'no' };

export const calcFaqs = [
  {
    question: '¿Cuánto cuesta certificarse en ISO 27001 en Colombia?',
    answer: 'Como referencia, entre 25 y 120 millones de pesos según el tamaño: las pequeñas, entre 25 y 40 millones; las medianas, entre 40 y 90 millones; y las grandes, entre 85 y 120 millones. El valor final depende del tamaño, las sedes, lo que ya tenga avanzado y el alcance que quiera certificar.',
  },
  {
    question: '¿Cuánto tiempo toma certificarse en ISO 27001?',
    answer: 'Entre 6 y 12 meses, con un promedio de 8 meses. Una empresa que ya tiene políticas, análisis de riesgos y controles documentados puede tardar menos.',
  },
  {
    question: '¿Qué tan exacta es esta calculadora?',
    answer: 'Es una referencia basada en proyectos reales de Star Solutions TI en Colombia. La cifra exacta sale de un diagnóstico de brechas, que hacemos sin costo, donde revisamos su alcance, sus riesgos y lo que ya tiene implementado.',
  },
  {
    question: '¿Puedo reducir el costo de la certificación?',
    answer: 'Sí. Las dos formas más efectivas son empezar por un alcance acotado (un proceso o servicio en lugar de toda la empresa) y aprovechar lo que ya tiene: políticas, inventarios y controles técnicos existentes reducen el trabajo de implementación.',
  },
];
