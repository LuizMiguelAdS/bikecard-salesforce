// import module elements
import { LightningElement, api} from 'lwc';
  
// declare class to expose the component


export default class MyComponent extends LightningElement{
  @api message;
}