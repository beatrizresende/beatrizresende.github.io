export class Formaters {
 
 static removeCaracteres(str: string) {
  return str.replace(/[^a-zA-Z0-9]/g, '');
 }
 
}