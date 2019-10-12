import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secretInformation'
})
export class SecretInformationPipe implements PipeTransform {

  transform(value: string, symbol: string): any {
    
    let cryptoValue : string = "";

    for (let index = 0; index < value.length; index++) {

      if( (index + 1) % 2 == 0 ){
        cryptoValue += value[index];
      }else{
        cryptoValue += "#";
      }
    }

    return cryptoValue;
    

  }

}
