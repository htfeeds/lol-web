/* SystemJS module definition */
declare var module: NodeModule;
declare var toastr: any;
declare var Chart: any;
interface NodeModule {
  id: string;
}
interface JQuery {
  iCheck(options?: any): any;
}
interface JQueryStatic {
  plot(arg0?: any, arg1?: any, arg2?: any): any;
}
interface HTMLElement {
  getContext(arg0: any): any;
}