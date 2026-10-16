// Clientes que se muestran en la franja animada del inicio (ClientesMarquee).
// Logos tomados de los sitios oficiales de cada empresa el 16-oct-2026 (IDT, IDU,
// Semana, SDIS, Secretaría de Salud y Hospital de Garzón los entregó George) y
// normalizados (alto 96 px, WebP) en public/clientes/. Los que eran blancos se
// repintaron en gris oscuro para verse sobre fondo claro.
// Para agregar un cliente: guardar su logo en public/clientes/<slug>.webp y sumarlo aquí.
export interface Cliente {
  name: string;
  logo: string;
  width: number;
  height: number;
}

export const clientes: Cliente[] = [
  { name: 'Agencia Nacional de Tierras', logo: '/clientes/ant.webp', width: 267, height: 96 },
  { name: 'Canal Capital', logo: '/clientes/canal-capital.webp', width: 127, height: 96 },
  { name: 'Caja de Sueldos de Retiro de la Policía Nacional (Casur)', logo: '/clientes/casur.webp', width: 420, height: 79 },
  { name: 'Comisión Nacional del Servicio Civil (CNSC)', logo: '/clientes/cnsc.webp', width: 268, height: 96 },
  { name: 'Colnotex', logo: '/clientes/colnotex.webp', width: 420, height: 64 },
  { name: 'Constructora Bolívar', logo: '/clientes/constructora-bolivar.webp', width: 76, height: 96 },
  { name: 'Discórdoba', logo: '/clientes/discordoba.webp', width: 420, height: 73 },
  { name: 'The Elite Flower', logo: '/clientes/elite-flower.webp', width: 420, height: 71 },
  { name: 'Hospital Departamental San Vicente de Paúl de Garzón', logo: '/clientes/hospital-garzon.webp', width: 120, height: 96 },
  { name: 'Instituto Distrital de Turismo (IDT)', logo: '/clientes/idt.webp', width: 360, height: 96 },
  { name: 'Instituto de Desarrollo Urbano (IDU)', logo: '/clientes/idu.webp', width: 151, height: 96 },
  { name: 'Inder Medellín', logo: '/clientes/inder.webp', width: 420, height: 79 },
  { name: 'C.I. Milpa', logo: '/clientes/milpa.webp', width: 420, height: 71 },
  { name: 'OIC Organizaciones de Imagenología Colombiana', logo: '/clientes/oic-radiologia.webp', width: 420, height: 86 },
  { name: 'Publicaciones Semana', logo: '/clientes/semana.webp', width: 420, height: 84 },
  { name: 'Secretaría Distrital de Integración Social (SDIS)', logo: '/clientes/sdis.webp', width: 364, height: 96 },
  { name: 'Secretaría Distrital de Salud', logo: '/clientes/secretaria-salud.webp', width: 267, height: 96 },
  { name: 'Sintecto - Soluciones en Integridad y Cumplimiento', logo: '/clientes/sintecto.webp', width: 420, height: 88 },
  { name: 'Teclogi', logo: '/clientes/teclogi.webp', width: 346, height: 96 },
];
