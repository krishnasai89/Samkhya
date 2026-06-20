export type Guna = "Sattva" | "Rajas" | "Tamas";

export interface Tattva {
  id: string;
  name: string;
  sanskritName: string;
  category: "Consciousness" | "Intellect" | "Ego" | "Senses" | "Elements";
  dominantGuna: Guna;
  description: string;
  asciiArtKey: string; // Used to trigger specific ASCII shader states
}
