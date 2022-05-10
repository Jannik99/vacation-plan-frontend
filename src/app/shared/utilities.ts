export class Utilities {
  constructor() {}

  // Generate an unique ID
  public generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  // Get the Link to a given File
  public getFileLink(image: File): string {
    return URL.createObjectURL(image);
  }
}
