import { LightningElement } from 'lwc';

export default class CommentsBasicLiveBindings extends LightningElement {
    checked = true;
    unchecked = false;
    nullValue = null;
    undefinedValue = undefined;
    stringValue = 'test';
    objectValue = { foo: 'bar' };
}