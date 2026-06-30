import type { PortfolioProject } from '../types/index';

export const projects: PortfolioProject[] = [
  {
    id: 'smart-traffic-light',
    title: 'Smart Traffic Light',
    description: 'Sistem lampu lalu lintas pintar berbasis logika fuzzy dan prioritas RFID.',
    category: 'Embedded / IoT',
    image: 'https://placehold.co/1200x800/e0f2fe/0284c7?text=Smart+Traffic+Light',
    link: '#',
    technologies: ['ESP32', 'Fuzzy Logic', 'RFID'],
  },
  {
    id: 'smart-greenhouse',
    title: 'Smart Greenhouse',
    description: 'Monitoring suhu dan kelembaban otomatis untuk tanaman hidroponik.',
    category: 'IoT',
    image: 'https://placehold.co/1200x800/dcfce7/16a34a?text=Smart+Greenhouse',
    link: '#',
    technologies: ['NodeMCU', 'DHT22', 'Relay'],
  },
  {
    id: 'mqtt-monitoring',
    title: 'MQTT Monitoring System',
    description: 'Sistem pemantauan data sensor real-time menggunakan protokol komunikasi MQTT.',
    category: 'Monitoring',
    image: 'https://placehold.co/1200x800/f3e8ff/9333ea?text=MQTT+Monitoring',
    link: '#',
    technologies: ['Raspberry Pi', 'MQTT', 'Node-RED'],
  },
  {
    id: 'smart-locker',
    title: 'Smart Locker',
    description: 'Solusi loker pintar dengan autentikasi RFID dan notifikasi WhatsApp ketika paket tiba.',
    category: 'Embedded',
    image: 'https://placehold.co/1200x800/fee2e2/f43f5e?text=Smart+Locker',
    link: '#',
    technologies: ['Arduino', 'RFID', 'WhatsApp API'],
  },
];

export default projects;
