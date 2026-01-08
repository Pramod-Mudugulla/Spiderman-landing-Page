
export interface Mission {
  title: string;
  description: string;
  status: 'COMPLETED' | 'ACTIVE' | 'PENDING';
  tacticalData?: string;
  location?: string;
  dangerLevel?: number; // 1-10
}

export interface Character {
  id: string;
  name: string;
  alias: string;
  description: string;
  biography: string;
  missions: Mission[];
  image: string;
  color: string;
  accent: string;
}

export interface NavItem {
  label: string;
  id: string;
}

export interface MovieScene {
  title: string;
  description: string;
  image: string;
}
