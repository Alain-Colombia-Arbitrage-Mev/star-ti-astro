// Clientes que se muestran en la franja animada del inicio (ClientesMarquee).
// Logos tomados de los sitios oficiales de cada empresa el 16-oct-2026 (IDT, IDU,
// Semana, SDIS, Secretaría de Salud y Hospital de Garzón los entregó George; Canal
// Capital, versión a color de Wikimedia Commons) y normalizados a WebP de 160 px de
// alto en public/clientes/ (se muestran a ~80 px, nitidez 2x). En los logos blancos,
// pensados para fondo oscuro, solo los píxeles blancos se repintaron en gris oscuro.
// Para agregar un cliente: guardar su logo en public/clientes/<slug>.webp y sumarlo aquí.
export interface Cliente {
  name: string;
  logo: string;
  width: number;
  height: number;
}

export const clientes: Cliente[] = [
  { name: 'Agencia Nacional de Tierras', logo: '/clientes/ant.webp', width: 445, height: 160 },
  { name: 'Canal Capital', logo: '/clientes/canal-capital.webp', width: 213, height: 160 },
  { name: 'Caja de Sueldos de Retiro de la Policía Nacional (Casur)', logo: '/clientes/casur.webp', width: 640, height: 120 },
  { name: 'Comisión Nacional del Servicio Civil (CNSC)', logo: '/clientes/cnsc.webp', width: 447, height: 160 },
  { name: 'Constructora Bolívar', logo: '/clientes/constructora-bolivar.webp', width: 127, height: 160 },
  { name: 'Discórdoba', logo: '/clientes/discordoba.webp', width: 640, height: 110 },
  { name: 'The Elite Flower', logo: '/clientes/elite-flower.webp', width: 640, height: 109 },
  { name: 'Hospital Departamental San Vicente de Paúl de Garzón', logo: '/clientes/hospital-garzon.webp', width: 201, height: 160 },
  { name: 'Instituto Distrital de Turismo (IDT)', logo: '/clientes/idt.webp', width: 600, height: 160 },
  { name: 'Instituto de Desarrollo Urbano (IDU)', logo: '/clientes/idu.webp', width: 252, height: 160 },
  { name: 'Inder Medellín', logo: '/clientes/inder.webp', width: 640, height: 111 },
  { name: 'C.I. Milpa', logo: '/clientes/milpa.webp', width: 640, height: 109 },
  { name: 'Publicaciones Semana', logo: '/clientes/semana.webp', width: 640, height: 129 },
  { name: 'Secretaría Distrital de Integración Social (SDIS)', logo: '/clientes/sdis.webp', width: 606, height: 160 },
  { name: 'Secretaría Distrital de Salud', logo: '/clientes/secretaria-salud.webp', width: 445, height: 160 },
  { name: 'Sintecto - Soluciones en Integridad y Cumplimiento', logo: '/clientes/sintecto.webp', width: 640, height: 134 },
];
