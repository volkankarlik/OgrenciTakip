import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.volkanhoca.ogrenci',
  appName: 'Volkan Hoca',
  webDir: '.',
  server: {
    url: 'https://volkanhoca.vercel.app',
    cleartext: true
  }
};

export default config;

