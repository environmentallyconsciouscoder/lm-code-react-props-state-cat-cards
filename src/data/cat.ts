export default interface Cat {
    name: string;
    species: string;
    favFoods: Array<string>; // or string[]
    birthYear: number;
    catIndex: number,
    id?: string;
  }