import { LightningElement } from 'lwc';

export default class CommentsOnlyEscapeBoundValues extends LightningElement {
    surprise = "--><script>window.alert('surprise!');</script><!--";
}