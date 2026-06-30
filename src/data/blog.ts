import type { ProjectBlogPost } from '../types/index';

export const blogPosts: ProjectBlogPost[] = [
  {
    id: 'smart-traffic-light',
    title: 'Smart Traffic Light',
    subtitle: 'Proyek IoT dengan logika fuzzy, RFID, dan prioritas lalu lintas secara real time.',
    description: 'Sistem lampu lalu lintas pintar membaca antrian kendaraan dan permintaan prioritas RFID. Algoritme fuzzy menyesuaikan durasi lampu hijau agar persimpangan berjalan lebih lancar dan siswa bisa melihat arsitektur proyek secara lengkap.',
    image: 'https://placehold.co/1200x800/e0f2fe/0284c7?text=Smart+Traffic+Light+Dashboard',
    codeSnippet: `// Prioritas lampu lalu lintas pintar
const int redPin = 2;
const int yellowPin = 3;
const int greenPin = 4;
const int sensorPin = A0;

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(yellowPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  Serial.begin(115200);
}

void loop() {
  int trafficScore = analogRead(sensorPin);
  bool priorityRequest = readRFID();
  int greenTime = computeFuzzySignal(trafficScore, priorityRequest);

  setTrafficLight(greenTime);
  delay(1000);
}

int computeFuzzySignal(int traffic, bool priority) {
  int base = constrain(map(traffic, 0, 1023, 10, 60), 10, 60);
  return priority ? min(base + 20, 90) : base;
}`,
    tags: ['ESP32', 'Fuzzy Logic', 'RFID', 'IoT'],
    technologies: ['Arduino C++', 'MQTT', 'Sensor', 'Web Dashboard'],
  },
];
