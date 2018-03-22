import { Pipe, PipeTransform } from '@angular/core';

@Pipe({     /* pipe declarator */
    name:'sort'  /* name of our custom pipe */ 
})

export class SortPipe implements PipeTransform{
    transform(value:any[],args:string):any{
        if(args === 'ascending'){
            return value.sort();
        }else if(args == 'descending'){
            return value.sort().reverse();
        }
        
    }
}