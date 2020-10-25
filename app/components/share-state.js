import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import { action } from '@ember/object';
import { BroadcastChannel as BC} from 'broadcast-channel';

export default class ShareStateComponent extends Component {

  constructor(){
    super(...arguments)
    if (window.BroadcastChannel){
      this.bc = new BroadcastChannel('test_channel');
      this.bc.onmessage = e=>{
        this.value=e.data.value
      }
    }else{
      this.bc = new BC('test_channel');
      this.bc.onmessage = data=>{
        this.value=data.value
      }
    }

  }

  @tracked value

  @action changeValue(e){
    this.value = e.target.value
    this.bc.postMessage({value:this.value})
  }
}
