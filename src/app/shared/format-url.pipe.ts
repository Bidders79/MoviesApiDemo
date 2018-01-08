import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'FormatUrl'})
export class FormatUrlPipe implements PipeTransform {
    transform(value: string):number {
        let urlString: string[];
        urlString = value.split('/');
        
        if(urlString.length === 0){
            return 0;
        }
        //trailing slash
        return +urlString[urlString.length-2];
    }
}
